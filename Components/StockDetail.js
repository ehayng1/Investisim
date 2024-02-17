import {
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Alert,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect } from "react";
import TradeTab from "../Screens/Trade";
import * as Application from "expo-application";
import StockChart from "./StockChart";
import fetchStockInfo from "./fetchStockInfo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  doc,
  addDoc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
  deleteField,
  RefreshControl,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getStockInfo } from "../utils/getStockInfo";
import { LanguageContext } from "../context/languageContext";

export default function StockDetail({ route, navigation }) {
  const [id, setId] = React.useState();
  const [range, setRange] = React.useState("5d");
  const [int, setInt] = React.useState("15min");
  const [total, setTotal] = React.useState(0);
  const [amount, onChangeAmount] = React.useState();
  const userData = [0, 0]; // balance, purchasedAmount
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSelling, setIsSelling] = React.useState(false);
  const [isBuying, setIsBuying] = React.useState(false);
  const [addedHistory, setAddedHistory] = React.useState();
  const [priceState, setPriceState] = React.useState();
  const [havePriceChanged, setHavePriceChanged] = React.useState(false);

  const [stockInfo, setStockInfo] = React.useState();
  const [overview, setOverview] = React.useState([
    [
      ["Previous Close", 123],
      ["Open", 123],
      ["Day High", 123],
      ["Day Low", 123],
      ["Volume", 123],
      ["Market Cap", 123],
    ],
  ]);
  const [stock, setStock] = React.useState({
    symbol: "",
    price: 0,
    percent: 0,
    prevClose: 0,
    dayLow: 0,
    dayHigh: 0,
    openPrice: 0,
    volume: 0,
    mktCap: 0,
    shortName: "",
  });

  const { isKorean, setIsKorean } = useContext(LanguageContext);

  const getId = async () => {
    // setIsLoading(true);
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      uniqueId = user.uid;
    }
  };

  const getUserData = async () => {
    const docRef = doc(db, "users", uniqueId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      userData[0] = docSnap.data().balance;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    const stackData = await getDoc(doc(db, "holdingStack", uniqueId));
    if (stackData.exists()) {
      console.log("StockData: ", stackData.data());
      let data = stackData.data()[company];
      if (data !== undefined) {
        // first purchase
        userData[1] = data;
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    const init = async () => {
      await getId();
      // await getStockInfo();
    };
    init();
  }, []);

  //mock data
  company = route.params.symbol;
  purchasedPrice = route.params.price;
  price = null;
  prevClose = 123;
  percent = 2.21;
  shortName = route.params.symbol;
  dayLow = 444;
  dayHigh = 555;
  openPrice = 777;
  fiftyTwoWeekHigh = 888;
  fiftyTwoWeekLow = 999;
  volume = 10;
  mktCap = 11;

  let company = route.params.symbol;

  useEffect(() => {
    const init = async () => {
      try {
        console.log("Now getting stock Info...");
        const tempStock = await getStockInfo(route.params.symbol);
        console.log("tempStock: ", tempStock);
        // setStock({ ...tempStock });
        setStock(tempStock[0]); // Assuming tempStock is an array with a single object
        setOverview(
          isKorean
            ? [
                ["전일 종가", tempStock[0].prevClose],
                ["시가", tempStock[0].openPrice],
                ["당일 고가", tempStock[0].dayHigh],
                ["당일 저가", tempStock[0].dayLow],
                ["거래량", tempStock[0].volume],
                ["시가 총액", tempStock[0].mktCap],
              ]
            : [
                ["Previous Close", tempStock[0].prevClose],
                ["Open", tempStock[0].openPrice],
                ["Day High", tempStock[0].dayHigh],
                ["Day Low", tempStock[0].dayLow],
                ["Volume", tempStock[0].volume],
                ["Market Cap", tempStock[0].mktCap],
              ]
        );
        // setStock((prevStock) => ({ ...prevStock, ...tempStock }));
        // setOverview([
        //   ["Previous Close", tempStock.prevClose],
        //   ["Open", tempStock.openPrice],
        //   ["Day High", tempStock.dayHigh],
        //   ["Day Low", tempStock.dayLow],
        //   ["Volume", tempStock.volume],
        //   ["Market Cap", tempStock.mktCap],
        // ]);
      } catch (error) {
        console.error("Error getting stock info: ", error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const init = async () => {
      setPriceState(stock.price);
    };
    init();
  }, [stock.price]);

  // disables buy/sell after 5 min.
  useEffect(() => {
    setTimeout(() => {
      setHavePriceChanged(true);
    }, 300000);
  }, []);

  // const overview = [
  //   ["Previous Close", prevClose],
  //   ["Open", openPrice],
  //   ["Day High", dayHigh],
  //   ["Day Low", dayLow],
  //   ["Volume", volume],
  //   ["Market Cap", mktCap],
  // ];

  function handleChartChange(type) {
    if (type === "1d") {
      setRange("1d");
      setInt("5m");
    } else if (type === "1wk") {
      setRange("5d");
      setInt("15m");
    } else if (type === "1mo") {
      setRange("1mo");
      setInt("60m");
    } else if (type === "6mo") {
      setRange("6mo");
      setInt("1d");
    } else if (type === "1y") {
      setRange("1y");
      setInt("1d");
    }
  }
  const updateBalance = async (type) => {
    type = type === "Buy" ? -1 : 1;
    try {
      const res = await updateDoc(doc(db, "users", uniqueId), {
        // "holdingStack."+compnay : increment(amount)
        balance: increment(amount * stock.price * type),
        firstTrade: true,
      });
      userData[0] = amount * stock.price * type;
      console.log("Balance Updated!", res);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const updateTransaction = async (type) => {
    let typeFlag = type === "Buy" ? 1 : -1;
    const ref = doc(db, "transaction", uniqueId);
    try {
      const response = await updateDoc(ref, {
        history: arrayUnion({
          symbol: company,
          name: stock.shortName,
          amount: stock.price * amount * typeFlag,
          time: new Date().getTime(),
        }),
      });
      console.log("Transaction updated!", response);
    } catch (e) {
      console.log("Error: ", e);
    }
  };
  let tempAddedHistory;

  const updateHistory = async (type) => {
    let typeFlag = type === "Buy" ? -1 : 1;
    // no longer have to do this since await of handlebuy.
    // let tempBalance = userData[0] + amount * price * typeFlag;
    let tempBalance = userData[0];
    console.log("tempBalance: ", tempBalance);
    const DocRef = doc(db, "purchaseHistory", uniqueId);

    try {
      let currTime = new Date().getTime();
      let time = type === "Buy" ? currTime : route.params.firstPurchase;
      tempAddedHistory = "Buy"
        ? {
            [time]: {
              symbol: company,
              price: stock.price,
              firstPurchase:
                type === "Buy" ? currTime : route.params.firstPurchase,
              lastUpdated: currTime,
              amount: Number(amount),
              balance: tempBalance,
              isOpen: type === "Buy" ? true : false,
            },
          }
        : {
            [time]: {
              symbol: company,
              price: price,
              firstPurchase:
                type === "Buy" ? currTime : route.params.firstPurchase,
              lastUpdated: currTime,
              amount: route.params.amount - amount,
              balance: tempBalance,
              isOpen: type === "Buy" ? true : false,
            },
          };

      // tempAddedHistory = { [time]: tempAddedHistory[time] };
      const res = await updateDoc(
        DocRef,
        type === "Buy"
          ? {
              [time]: {
                symbol: company,
                price: stock.price,
                firstPurchase:
                  type === "Buy" ? currTime : route.params.firstPurchase,
                lastUpdated: currTime,
                amount: Number(amount),
                balance: tempBalance,
                isOpen: type === "Buy" ? true : false,
              },
            }
          : {
              [time]: {
                symbol: company,
                price: stock.price,
                firstPurchase:
                  type === "Buy" ? currTime : route.params.firstPurchase,
                lastUpdated: currTime,
                amount: route.params.amount - amount,
                balance: tempBalance,
                isOpen: type === "Buy" ? true : false,
              },
            }
      );
      console.log("Purchase History updated!", res);
    } catch (e) {
      console.log("Error: ", e);
    }
    await updateDoc(
      doc(db, "users", uniqueId),
      type === "Buy"
        ? {
            balanceHistory: arrayUnion(tempBalance),
          }
        : {
            balanceHistory: arrayUnion(tempBalance),
            weeklyProfit: increment(stock.price - purchasedPrice),
          }
    );
  };
  const updateStock = async (type, purchased) => {
    const DocRef = doc(db, "holdingStack", uniqueId);
    type = type === "Buy" ? 1 : -1;
    console.log("initial: ", userData[1]);
    try {
      userData[1] = Number(amount) * type + userData[1];
      // delete from the holdingStack
      if (userData[1] === 0) {
        await updateDoc(DocRef, {
          [`${company}`]: deleteField(),
        });
      } else {
        const res = await updateDoc(DocRef, {
          [`${company}`]: userData[1],
        });
        console.log("Holding Stacks updated!", res);
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  };
  function containsOnlyNumbers(input) {
    return /^\d+$/.test(input);
  }

  async function handleBuy() {
    setIsBuying(true);
    let purchased;
    let total = amount * stock.price;
    // await getUserData();
    // let total = amount * price;
    // console.log("total: ", total);
    // console.log(userData[0]);

    console.log(amount);
    console.log(priceState);
    console.log(priceState * amount);
    if (amount <= 0 || amount == null) {
      {
        isKorean
          ? Alert.alert("에러", "수량을 입력해 주세요.")
          : Alert.alert("ERROR", "Please enter amount of shares to buy.");
      }
      setIsBuying(false);
    } else if (!containsOnlyNumbers(amount)) {
      {
        isKorean
          ? Alert.alert("에러", "정수를 입력해 주세요.")
          : Alert.alert("ERROR", "Please enter a whole number.");
      }
      setIsBuying(false);
    } else if (stock.price == null) {
      {
        isKorean
          ? Alert.alert("에러", "주식정보가 로딩중입니다.")
          : Alert.alert("ERROR", "Please wait for stock price to load.");
      }
    } else if (isNaN(total)) {
      {
        isKorean
          ? Alert.alert("에러", "주식 가격을 로딩중 에러가 발생했습니다.")
          : Alert.alert("ERROR", "Error loading price of the stock.");
      }
    } else if (havePriceChanged) {
      {
        isKorean
          ? Alert.alert(
              "에러",
              "주식 가격이 변경되었습니다. 페이지를 새로고침 해주세요."
            )
          : Alert.alert(
              "ERROR",
              "Stock price have changed. Please reload the page."
            );
      }
      setIsBuying(false);
    } else {
      await getUserData();

      if (userData[0] < total) {
        {
          isKorean
            ? Alert.alert("에러", "예수금이 부족합니다.")
            : Alert.alert("ERROR", "Not enough balance!");
        }

        setIsBuying(false);
      } else {
        console.log("total: ", total);
        console.log(userData[0]);
        await updateHistory("Buy");
        await updateStock("Buy", purchased);
        await updateBalance("Buy");
        await updateTransaction("Buy");
        setIsBuying(false);
        {
          isKorean
            ? Alert.alert(
                "거래 성공",
                `${company}의 주식 ${amount} 수량을 구매했습니다!`
              )
            : Alert.alert(
                "Transaction successful",

                `Purchased ${amount} shares of ${company}!`
              );
        }

        console.log("Addedhistory: ", tempAddedHistory);
        navigation.navigate("Trade", {
          screen: "Trade",
          params: {
            addedHistory: tempAddedHistory,
            buy: true,
            key: route.params.key,
            finalAmount: Number(amount),
          },
        });
        onChangeAmount(0);
      }
    }
  }

  async function handleSell() {
    setIsSelling(true);
    let purchased;
    let total = amount * stock.price;
    // await getUserData();
    // let total = amount * price;
    // console.log("total: ", total);
    // console.log(userData[0]);
    if (amount <= 0 || amount == null) {
      {
        isKorean
          ? Alert.alert("에러", "수량을 입력해 주세요.")
          : Alert.alert("ERROR", "Please enter amount of shares to sell.");
      }

      setIsSelling(false);
    } else if (!containsOnlyNumbers(amount)) {
      {
        isKorean
          ? Alert.alert("에러", "정수를 입력해 주세요.")
          : Alert.alert("ERROR", "Please enter a whole number.");
      }
      setIsSelling(false);
    } else if (stock.price == null) {
      {
        isKorean
          ? Alert.alert("에러", "주식정보가 로딩중입니다.")
          : Alert.alert("ERROR", "Please wait for stock price to load.");
      }
    } else if (isNaN(stock.price) || isNaN(total)) {
      {
        isKorean
          ? Alert.alert("에러", "주식 가격을 로딩중 에러가 발생했습니다.")
          : Alert.alert("ERROR", "Error loading price of the stock.");
      }
    }
    // if user trying to purchase more than the amount in "holdingStack"
    else if (route.params.amount < amount) {
      {
        isKorean
          ? Alert.alert("에러", "보유한 수량이 부족합니다!")
          : Alert.alert("ERROR", "Not enough purchased stocks!");
      }

      setIsSelling(false);
    } else if (havePriceChanged) {
      {
        isKorean
          ? Alert.alert(
              "에러",
              "주식 가격이 변경되었습니다. 페이지를 새로고침 해주세요."
            )
          : Alert.alert(
              "ERROR",
              "Stock price have changed. Please reload the page."
            );
      }

      setIsSelling(false);
    } else {
      await getUserData();
      if (userData[1] < route.params.amount) {
        console.log("amount: ", route.params.amount);
        console.log("stocks to sell: ", userData[1]);
        {
          isKorean
            ? Alert.alert("에러", "보유한 수량이 부족합니다!")
            : Alert.alert("ERROR", "You do not have enough stocks to sell!");
        }

        setIsSelling(false);
      } else {
        console.log("total: ", total);
        console.log(userData[0]);
        await updateHistory("Sell");
        await updateStock("Sell", purchased);
        await updateBalance("Sell");
        await updateTransaction("Sell");
        setIsSelling(false);
        {
          isKorean
            ? Alert.alert(
                "거래 성공",
                `${company}의 주식 ${amount} 수량을 판매했습니다!`
              )
            : Alert.alert(
                "Transaction successful",
                `Sold ${amount} shares of ${company}!`
              );
        }

        navigation.navigate("Trade", {
          reload: true,
          returnedData: {
            key: route.params.key,
            finalAmount: route.params.amount - Number(amount),
          },
        });
      }
    }
  }

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 10, marginTop: 20 }}>
        <View style={{}}>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>{company}</Text>
          <Text style={{ fontSize: 12, color: "#808080" }}>
            {stock.shortName}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 5,
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: 700 }}>${stock.price}</Text>
          <Text
            style={[
              { marginLeft: 10 },
              percent > 0 ? { color: "green" } : { color: "red" },
            ]}
          >
            {stock.percent}%
          </Text>
        </View>
        {/* comment when testing */}
        <StockChart Symbol={company} Range={range} Interval={int}></StockChart>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => handleChartChange("1d")}
            style={range === "1d" && styles.selected}
          >
            <Text
              style={range === "1d" ? styles.textselected : styles.unselected}
            >
              1D
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleChartChange("1wk")}
            style={range === "5d" && styles.selected}
          >
            <Text
              style={range === "5d" ? styles.textselected : styles.unselected}
            >
              1W
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleChartChange("1mo")}
            style={range === "1mo" && styles.selected}
          >
            <Text
              style={range === "1mo" ? styles.textselected : styles.unselected}
            >
              1M
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleChartChange("6mo")}
            style={range === "6mo" && styles.selected}
          >
            <Text
              style={range === "6mo" ? styles.textselected : styles.unselected}
            >
              6M
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleChartChange("1y")}
            style={range === "1y" && styles.selected}
          >
            <Text
              style={range === "1y" ? styles.textselected : styles.unselected}
            >
              1Y
            </Text>
          </Pressable>
        </View>

        <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            marginTop: 30,
            marginBottom: 10,
            marginLeft: 10,
          }}
        >
          {isKorean ? "요약" : "Overview"}
        </Text>

        {overview.map((element, index) => (
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#808080",
                flexGrow: 1,
                fontWeight: 600,
                marginLeft: 10,
              }}
            >
              {element[0]}
            </Text>
            <Text
              style={{
                color: "#808080",
                fontWeight: 600,
                marginRight: 10,
                justifyContent: "flex-end",
              }}
            >
              {element[1]}
            </Text>
          </View>
        ))}
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <Text
            style={{
              flexGrow: 1,
              fontSize: 16,
              marginBottom: 10,
              fontWeight: "500",
              marginLeft: 10,
            }}
          >
            {isKorean ? "수량" : "Shares"}
          </Text>
          <TextInput
            textAlign="right"
            style={{ marginRight: 10 }}
            value={amount}
            placeholder={
              isKorean ? "수량을 입력하세요" : "Type the amount of shares"
            }
            onChangeText={onChangeAmount}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 10,
              flexGrow: 1,
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            {isKorean ? "총액" : "Total"}
          </Text>
          <Text style={{ marginRight: 10, justifyContent: "flex-end" }}>
            {console.log(amount * stock.price)}
            {amount > 0 && "$ " + amount * stock.price}

            {/* {amount > 0 && "$ " + amount * stockInfo[1]} */}
          </Text>
          {/* <TextInput value={total}></TextInput> */}
        </View>

        {purchasedPrice === undefined ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "10%",
              marginBottom: "10%",
            }}
          >
            <Pressable
              onPress={handleBuy}
              disabled={isBuying}
              style={{
                flex: 0.5,
                backgroundColor: "#7BC17E",
                borderRadius: 10,
                marginRight: "2%",
                paddingTop: hp("0.5%"),
                paddingBottom: hp("0.5%"),
              }}
            >
              {isBuying ? (
                <ActivityIndicator
                  style={{ padding: hp("0.5%") }}
                  color={"white"}
                />
              ) : (
                <Text
                  style={{
                    color: "white",
                    fontWeight: "600",
                    textAlign: "center",
                    padding: hp("0.5%"),
                    paddingHorizontal: 10,
                  }}
                >
                  {isKorean ? "매수" : "Buy"}
                </Text>
              )}

              {/* <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                  textAlign: "center",
                  padding: 5,
                  paddingHorizontal: 10,
                }}
              >
                Buy
              </Text> */}
            </Pressable>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "10%",
              marginBottom: "10%",
            }}
          >
            <Pressable
              onPress={handleSell}
              disabled={isSelling}
              style={{
                flex: 0.5,
                backgroundColor: "#be2e33",
                borderRadius: 10,
                marginRight: "2%",
                paddingTop: hp("0.5%"),
                paddingBottom: hp("0.5%"),
              }}
            >
              {isSelling ? (
                <ActivityIndicator
                  style={{ padding: hp("0.5%") }}
                  color={"white"}
                />
              ) : (
                <Text
                  style={{
                    color: "white",
                    fontWeight: "600",
                    textAlign: "center",
                    padding: hp("0.5%"),
                    paddingHorizontal: 10,
                  }}
                >
                  {isKorean ? "매도" : "Sell"}
                </Text>
              )}

              {/* <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                  textAlign: "center",
                  padding: 5,
                  paddingHorizontal: 10,
                }}
              >
                Sell
              </Text> */}
            </Pressable>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  selected: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#808080",
    paddingLeft: 5,
    paddingRight: 5,
  },
  unselected: {
    color: "#808080",
  },
  textselected: {
    color: "black",
  },
});
