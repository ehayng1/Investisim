import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../context/languageContext";
import {
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
  updateDoc,
  increment,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StockDetail from "../Components/StockDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getAuth } from "firebase/auth";

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    backgroundColor: "#f7e5df",
    borderRadius: 10,
  },
  font1: {
    fontSize: 18,
    fontWeight: "500",
  },
});

function Trade({ route, navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = React.useState({
    1681957133011: {
      symbol: "",
      amount: 0,
      price: 0,
      balance: 0,
      isOpen: true,
      firstPurchase: 1681957133011,
      lastUpdated: 1681957133011,
    },
  });
  const [stocks, setStocks] = React.useState({ APPL: 1 });
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  const [reload, setReload] = React.useState(false);
  const isFocused = useIsFocused();
  let uniqueId;

  const getId = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      uniqueId = user.uid;
    }
    console.log("Unique ID:", uniqueId);
  };

  const getHoldingStack = async () => {
    const docRef = doc(db, "holdingStack", uniqueId);
    const docSnap = await getDoc(docRef);
    docData = docSnap.data();
    console.log("holdStocks: ", docData);
    if (docSnap.exists()) {
      {
        // setData({ ...docData })
        setStocks({ ...docData });
      }
    } else {
      console.log("No such document!");
    }
  };

  const onRefresh = React.useCallback(() => {
    const init = async () => {
      setRefreshing(true);
      // const docRef = doc(db, "purchaseHistory", uniqueId);
      // const docSnap = getDoc(docRef);
      // docData = docSnap.data();
      getUserData();

      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    };
    init();
  }, []);

  const getUserData = async () => {
    const docRef = doc(db, "purchaseHistory", uniqueId);

    const docSnap = await getDoc(docRef);
    docData = docSnap.data();
    console.log("Data: ", docData);

    if (docSnap.exists()) {
      // await setDoc(doc(db, "logs", uniqueId), data);
      // setData({ ...docData });
      setData(JSON.parse(JSON.stringify(docData)));
    } else {
      console.log("No such document!");
    }
  };

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     getUserData();
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  // removes  objects with same key
  function removeDuplicates(data) {
    const uniqueKeys = new Set();

    // Filter out objects with duplicate keys
    const filteredData = Object.keys(data).reduce((result, key) => {
      if (!uniqueKeys.has(key)) {
        uniqueKeys.add(key);
        result[key] = data[key];
      }
      return result;
    }, {});

    return filteredData;
  }

  // initial load
  useEffect(() => {
    const init = async () => {
      await getId();
      await getUserData();
    };
    init();
  }, []);

  useEffect(() => {
    const init = async () => {
      await getUserData();
    };
    const unsubscribe = navigation.addListener("focus", () => {
      init();
    });
    return unsubscribe;
  }, [navigation]);

  // buggy!!!
  // useEffect(() => {
  //   const fetchDataOnFocus = async () => {
  //     // getUserData();
  //     getHoldingStack();
  //   };
  //   const unsubscribe = navigation.addListener("focus", fetchDataOnFocus);

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [navigation]);

  // trial using navigation data transfer
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     console.log("Route param: ", route.params);
  //     //when returns form handlebuy
  //     // if (route.params?.addedHistory) {
  //     //   let addedHistory = route.params?.addedHistory;
  //     //   console.log("history: ", addedHistory);
  //     //   // shallow copy
  //     //   // const updatedData = { ...data };
  //     //   // deep copy
  //     //   let updatedData = JSON.parse(JSON.stringify(data));
  //     //   console.log("Before Update: ", updatedData);
  //     //   if (route.params?.addedHistory) {
  //     //     console.log("Returned from handleBuy");
  //     //     updatedData = {
  //     //       ...updatedData,
  //     //       ...addedHistory,
  //     //     };
  //     //   }
  //     //   console.log("After Update: ", updatedData);
  //     //   setData(updatedData);
  //     // }
  //     // //when returns from handlebuy
  //     // else if (route.params?.returnedData) {
  //     //   const returnedData = route.params?.returnedData;
  //     //   // shallow copy
  //     //   // const updatedData = { ...data };
  //     //   // deep copy
  //     //   const updatedData = JSON.parse(JSON.stringify(data));
  //     //   console.log("Returned from handleSell");
  //     //   updatedKey = returnedData.key;

  //     //   if (updatedData[updatedKey]) {
  //     //     updatedData[updatedKey] = {
  //     //       ...updatedData[updatedKey],
  //     //       amount: returnedData.finalAmount,
  //     //     };
  //     //   }
  //     //   console.log("Updated Data: ", updatedData);
  //     //   setData(updatedData);
  //     // }
  //     navigation.setParams({});
  //     // console.log("No action taken from user!");
  //   });

  //   return unsubscribe;
  // }, [route.params]);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 21,
            fontWeight: "bold",
            marginTop: "5%",
          }}
        >
          {isKorean ? "보유한 주식" : "Purchased Stocks"}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#808080", flex: 0.3 }}>
            {isKorean ? "종목" : "Asset"}
          </Text>
          <Text style={{ color: "#808080", flex: 0.3 }}>
            {isKorean ? "가격" : "Price"}
          </Text>
          <Text style={{ color: "#808080", flex: 0.3 }}>
            {isKorean ? "개수" : "Amount"}
          </Text>
          <Text style={{ color: "#808080" }}>{isKorean ? "날짜" : "Date"}</Text>
        </View>

        <View
          style={{
            height: "0.1%",
            backgroundColor: "#808080",
            marginTop: 5,
            marginBottom: 15,
          }}
        ></View>
        <View>
          {/* filter the array here to removee the dups */}
          {/* {console.log(data)} */}

          {Object.keys(removeDuplicates(data)).map(
            (el, index) =>
              index < 100 &&
              data[el].amount > 0 && (
                <View key={el}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate("StockDetail", {
                        symbol: data[el].symbol,
                        price: data[el].price,
                        firstPurchase: data[el].firstPurchase,
                        amount: data[el].amount,
                      })
                    }
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    <Text
                      style={{ width: "25%", fontWeight: "bold", fontSize: 18 }}
                    >
                      {data[el].symbol}
                    </Text>
                    <Text
                      style={{ width: "30%", fontWeight: "bold", fontSize: 16 }}
                    >
                      {" "}
                      $ {data[el].price}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        // flex: 1,
                        width: "30%",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 16 }}>
                        {" " + data[el].amount}
                      </Text>
                      <Text style={{ color: "#808080", fontSize: 14 }}>
                        {"  "}

                        {isKorean ? "주" : "shares"}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        // flex: 0.3,
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 14 }}>
                        {/* {new Date(el).toLocaleString("en-US").slice(4, 10)} */}
                        {new Date(Number(el)).getMonth() + 1}
                        {"/"}
                        {new Date(Number(el)).getDate()}
                      </Text>
                      {/* <Text style={{ color: "#808080", fontSize: 12 }}></Text> */}
                    </View>
                  </Pressable>

                  <View
                    style={{
                      height: 0.4,
                      backgroundColor: "#808080",
                      marginTop: "4%",
                      marginBottom: "4%",
                    }}
                  ></View>
                </View>
              )
          )}
        </View>
        <Text
          style={{
            textAlign: "center",
            marginTop: "15%",
            color: "#808080",
            fontSize: 18,
            marginBottom: "10%",
          }}
        >
          {isKorean
            ? "매도하길 원하면 각 종목을 클릭하세요!"
            : "Click each asset to sell it!"}
        </Text>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();
export default function TradeTab() {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={isKorean ? "내 거래" : "Trade"}
        component={Trade}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name={isKorean ? "자세히 보기" : "Stock Detail"}
        component={StockDetail}
        options={{ title: "Stock Detail" }}
      />
    </Stack.Navigator>
  );
}
