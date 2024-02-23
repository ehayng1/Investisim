import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Linking,
} from "react-native";
import { WebView } from "react-native-webview";
import React, { useContext } from "react";

import { Dimensions } from "react-native";
import ToolTip from "../../Components/ToolTip";
import { LanguageContext } from "../../context/languageContext";

const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;

export function Week1() {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          {isKorean ? "일중매매거래" : "Day Trading"}
        </Text>

        <WebView
          source={{
            html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/EMc2b3_YV7s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          }}
          style={{
            marginLeft: 10,
            width: screenWidth * 0.95,
            // height: screenHeigth * 0.3,
            height: 300,
            marginBottom: 30,
          }}
        />
        <View
          style={{
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              {/* <View style={{ width: "35%" }}> */}
              <View style={{}}>
                <Text style={[styles.subtitle]}>
                  {isKorean ? "대상" : "Audience"}
                </Text>
              </View>

              <View style={{ flex: 0 }}>
                <ToolTip
                  content={
                    isKorean
                      ? "일중매매거래는 가장 기본적인 주식 투자 전략 중 하나이므로 지식과 경험이 풍부하지 않은 초보자분들께도 접근성이 좋습니다."
                      : "Day trading is one of the most basic trading strategies, therefore accessible for beginners without extensive knowledge and experience."
                  }
                ></ToolTip>
              </View>
              <View style={{ flexGrow: 1 }}>
                <Text
                  style={{
                    color: "green",
                    fontSize: 15,
                    fontWeight: "500",
                    textAlign: "right",
                  }}
                >
                  {isKorean ? "초보자" : "Beginners"}
                </Text>
              </View>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              {/* <View style={{ width: "35%" }}> */}
              <View style={{}}>
                <Text style={[styles.subtitle]}>
                  {isKorean ? "기업규모" : "Company Size"}
                </Text>
              </View>
              <View>
                <ToolTip
                  content={
                    isKorean
                      ? "중견기업 또는 중소기업의 경우 대기업들에 비해 변동성이 커 거래자가 더 큰 수익을 얻을 수 있도록 합니다."
                      : "Middle sized or small firms have more volatility compared to large companies which helps the traders yield greater returns."
                  }
                ></ToolTip>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.size}>
                  {isKorean ? "중견기업 또는 중소기업" : "Mid & Small"}{" "}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}{" "}
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 17,
                  fontWeight: "500",
                  textAlign: "right",
                }}
              >
                3.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            {isKorean ? "요약" : "Summary"}
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "일중매매거래란 주식과 증권이 매일 거래되는 전략으로 하루 중 가격 등락에서 차익을 얻습니다. 거래 기간이 상당히 짧은 편임으로 시장에 존재하는 위험요소는 상대적으로 적은 편이기 때문에 위험부담이 낮은 전략에 속합니다."
              : "Day trading is a strategy where stocks and securities are traded on a daily basis, where investors exploit the daily volatility to earn money. Less risk present in the market as the trading term is pretty short. Has a relatively lower risk compared to other strategies."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week2({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>
          {" "}
          {isKorean ? "포지션 거래" : "Position Trading"}
        </Text>

        <Text style={styles.summary}>
          {isKorean
            ? "포지션 거래란 투자자들이 몇 주에 걸쳐 시장 동향을 분석하여 지속적이고 반복적인 변동성을 찾아 투자하는 전략입니다. ‘파도'를 확인한 후 투자자들은 저점에서 매수하고 고점에서 매도를 하는 것을 목표로 합니다. 확실한 이익을 위해 많은 시간이 소요되는 편이지만 안전하게 돈을 벌고자 하는 투자자들에게 적절합니다."
            : "Position trading is a strategy where traders analyze the market trend over several weeks to look for continuous volatility. After identifying the “waves”, traders seek to buy on low points and sell on high points. Time consuming for the expense of ensured profit. People who wish to earn money safely at the expense of time."}
        </Text>

        <Image
          style={styles.image}
          source={require("../../data/Weeks/week2.png")}
        ></Image>

        <View
          style={{
            marginBottom: 10,
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <Text
                style={{
                  color: "green",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                  flex: 1,
                  textAlign: "right",
                }}
              >
                {isKorean ? "초보자" : "Beginners"}
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>
                {isKorean ? "회사 규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "포지션 거래는 장기간에 걸쳐 진행됨에 따라 소규모 회사 주식들은 다양한 시장 변수로 인해 변동성이 커지고 잠재적인 파산의 가능성 또한 높습니다."
                    : "Position trading is executed over a long period of time, making smaller company stocks susceptible to increased variability and potential bankruptcy due to numerous market variables. "
                }
              ></ToolTip>
              <Text
                style={{
                  flex: 1,
                  textAlign: "right",
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                {isKorean ? "대기업" : "Big"}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                  flex: 1,
                  textAlign: "right",
                }}
              >
                2 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            {isKorean ? "요약" : "Summary"}
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            Since position trading is done for a long period of time, the market
            data above is a month long data. Based on the history of stock price
            before March 31 where the stock reached its peak, the current stock
            price could be considered low. Therefore, based on the trends, it
            can be assumed that the stock price will increase.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week3({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>Swing Trading</Text>

        <Text style={styles.summary}>
          {isKorean
            ? "스윙투자자들은 변동성이 높은 주식들을 위주로 저점에서 매수 후 고점에서 매도하는 전략을 가지고 있습니다. 다른 전략에 비해 차트를 보는 시간은 적고 상대적으로 수익성은 높은 편입니다. 주간 거래와 달리 거래자들은 장이 닫혀있을 때도 거래할 수 있습니다."
            : "Swing traders buy on lows and sell on highs, when there is high volatility. This strategy requires less time looking at the chart compared to other strategies, and has potentials for high profit. Unlike day trading, traders can trade even when the markets are closed."}{" "}
        </Text>

        <Image
          style={styles.image}
          source={require("../../data/Weeks/week3.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        ></View>
        <View style={{ marginHorizontal: 10 }}>
          {/* <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text> */}
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "1주일은 짧은 기간이 아니며, 주식에 영향을 미칠 시장 변동성이 많이 존재하기 때문에 적절한 매수/매도 시점을 판단하기 위해 경험이 필요합니다."
                    : "A week is not a short period of time, and there will be numerous market variabilities that will impact the stock. Therefore, experience is required to identify an entrance and exit point."
                }
              ></ToolTip>
              <Text
                style={[
                  styles.right,
                  {
                    color: "#bf9c01",
                    fontSize: 15,
                    fontWeight: "600",
                    justifyContent: "flex-end",
                  },
                ]}
              >
                Intermediate
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "회사규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "예측할 수 없는 시장 변동성에 노출된다는 개념은 작은 회사 주식에 동일하게 적용되지만, 포지션 거래에 비해 스윙 거래의 상대적으로 짧은 거래 기간에 의해 스윙 투자자들은 수익을 내기 위해 변동성을 더욱 활용해야 합니다. 따라서 스윙 투자자들은 변동성을 활용함과 동시에 위험을 최소화하기 위해 중견기업 또는 대기업을 선택합니다."
                    : "Although the same idea of exposure to unpredictable market variabilities applies for small companies, the relatively shorter trading interval of swing trading compared to position trading requires swing traders to further exploit volatility in order to yield profit. Therefore, swing traders choose companies that range from medium to large in order to minimize risk while exploiting the volatility."
                }
              ></ToolTip>
              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                Medium ~ Large
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}
              </Text>

              <Text
                style={[
                  {
                    fontSize: 17,
                    fontWeight: "500",
                  },
                  styles.right,
                ]}
              >
                3.5 / 5
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "홈 디포는 부도 위험은 낮은 회사지만 데이터에서 볼 수 있듯이 여전히 약간의 변동성을 보이는 좋은 예시의 중대형 기업일 것입니다. 스윙 투자자는 4월 13일에 저점을 가정하고 주식을 구매하고 최근에 주식을 팔았을 것입니다."
              : "Home Depot would be a good medium to large size company that has a low risk of going bankrupt but still exhibits some volatility as shown in the data. A swing trader would have purchased the stock on April 13th, assuming that it would be the low point. Then, the trader would have sold the stock recently."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week4({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>Scalping</Text>

        <Text style={styles.summary}>
          {isKorean
            ? "스컬핑은 가장 빠른 거래 방법 중 하나입니다. 스컬핑은 주로 변동성이 적은 시장과 변동성이 존재하는 시장 모두에서 사용될 수 있지만, 스컬핑은 단기간 내에 가격 변화로 이익을 얻기 때문에 더 높은 수익을 얻기 위해 더 많은 변동성을 가진 주식이 선호됩니다. 그러나 스컬핑은 변화가 매우 예상치 못한 경우가 많기 때문에 본질적으로 다른 거래 방법에 비해 위험도가 높고 거래자가 지속적으로 가격을 확인하는 데 더 많은 시간이 필요합니다. 광범위한 지식이 필요하지만 출입 지점을 식별하려면 약간의 경험이 필요합니다."
            : "Scalping is one of the fastest methods of trading. Although scalping can be implemented in both volatile and less volatile markets, more volatile stocks are preferred for higher profit because scalpers profit off of price changes within a short period of time. However, because the changes are greatly unexpected, scalping inherently has a higher risk compared to other trading methods and requires more time commitment for the traders to constantly check the price. Although extensive knowledge is required, some experience is needed to identify entrance and exit points."}{" "}
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week4.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "스컬핑은 거래자가 지속적으로 주가를 확인해야 하기 때문에 상대적으로 많은 시간을 할애해야 합니다."
                    : "Scalping requires a large time commitment because traders have to constantly check the stock price."
                }
              ></ToolTip>
              <Text
                style={[
                  {
                    color: "#bf9c01",
                    fontSize: 15,
                    fontWeight: "600",
                    justifyContent: "flex-end",
                  },
                  styles.right,
                ]}
              >
                {isKorean ? "초보자" : "Beginners"}
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "회사규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "변동성을 극대화하기 위해 중소기업 규모를 선호합니다. 스컬핑 거래자들은 단기간 내에 변동성으로 활용하려고 하기 때문에 변동성이 큰 주식을 보유하고 시장 변동성에 취약한 중소기업을 선호합니다."
                    : "Small to medium company sizes are preferred to maximize volatility. Since scalping traders seek to exploit the volatility within short durations of time, small to medium companies that have volatile stocks and are largely impacted by market variabilities are preferred."
                }
              ></ToolTip>

              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                Small ~ Medium
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}{" "}
              </Text>

              <Text
                style={[
                  {
                    fontSize: 17,
                    fontWeight: "500",
                  },
                  styles.right,
                ]}
              >
                4.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "Skillz Inc. 라는 회사는 주가가 5.50% 상승한 것에서 볼 수 있듯이 변동성이 큰 작은 회사입니다. 스컬핑 투자자들은 그래프 전체에 걸쳐 저점에서 매수 후 고점에서 매도합니다."
              : "The company shown called Skillz Inc is a small company that has a volatile stock as shown by the 5.50 percent increase in the stock price. A scalping trader would try to buy on low points and sell on high points throughout the graph."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week5({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>
          {isKorean ? "뉴스 거래" : "News Trading"}
        </Text>
        <WebView
          source={{
            html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Y0qsDQY3nY8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          }}
          style={{
            marginLeft: 10,
            width: screenWidth * 0.95,
            // height: screenHeigth * 0.3,
            height: 300,
            marginBottom: 30,
          }}
        />

        {/* <Image
          style={{ marginLeft: 10, width: 350, height: 250, marginBottom: 30 }}
          source={require("../../data/week2.png")}
        ></Image> */}
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "긍정적인 뉴스가 주가 상승으로 이어지고 부정적인 뉴스는 주가 하락으로 이어진다는 점에서 간단하나 뉴스 발표 직후 거래자들이 즉각 반응할 수 있어야 한다는 점에서 어느 정도의 경험이 필요합니다."
                    : "It is straightforward in that positive news will lead to an increased stock price and vice versa. However, some experience is required in that traders should be able to immediately respond right after a news release"
                }
              ></ToolTip>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={[
                    {
                      color: "green",
                      fontSize: 15,
                      fontWeight: "500",
                    },
                  ]}
                >
                  {isKorean ? "초보자" : "Beginner"}
                </Text>
                <Text> & </Text>
                <Text
                  style={[
                    {
                      color: "#bf9c01",
                      fontSize: 15,
                      fontWeight: "600",
                    },
                  ]}
                >
                  {isKorean ? "중급자" : "Intermediate"}
                </Text>
              </View>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "회사규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "모든 규모의 기업이 뉴스의 영향을 받습니다."
                    : "This is because all sizes of companies are impacted by news."
                }
              ></ToolTip>
              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                All
              </Text>
            </View>
            <View
              style={[
                {
                  marginBottom: 15,
                  display: "flex",
                  flexDirection: "row",
                },
              ]}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}{" "}
              </Text>

              <Text
                style={[
                  {
                    fontSize: 17,
                    fontWeight: "500",
                  },
                  styles.right,
                ]}
              >
                2 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            {isKorean ? "요약" : "Summary"}
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "뉴스 발표 이후에 투자자들은 빠르게 주식에 미칠 영향을 예상하고 그에 따라 매도/매수 조치를 취합니다. 뉴스가 발표되는 시점인 명확하게 정의된 진입 및 퇴출 지점이 존재하며, 이는 투자자들에게 일정한 기준을 제공합니다. 다양한 분야의 기업에 대한 다양한 뉴스가 존재하므로 많고 다양한 거래 기회 또한 존재합니다."
              : "Following news releases, traders quickly anticipate the impact on stocks and act upon the expectations. There is a clearly defined entry and exit point, which is when the news is released which allows constant standards for traders. There are also many trading opportunities as there are various news on companies from diverse fields."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week6({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>
          {isKorean ? "시간 외 거래" : "End of day Trading"}{" "}
        </Text>
        <Text style={styles.summary}>
          {isKorean
            ? "일반적인 주식 거래 시장의 거래 시간인 오전 9시부터 오후 3시 이후에 일어나는 주식거래를 일컫는 말입니다.  시간 외 거래는 총 3가지로 나누어질 수 있는데 장전 시간 외 거래, 장후 시간 외 거래, 시간 외 단일가로 나뉩니다. 장전 시간 외 거래는 오전 8시 30분부터 오전 8시 40분까지 10분간 진행되는데 거래가격이 전일 종가 (장 마감가격)으로 고정된 상태에서 주식거래를 진행하며 매도와 매수 물량이 맞아야 거래가 진행됩니다. 장후 시간 외 거래는 오후 3시 40분부터 오후 4시 20분까지 총 40분간 진행되며 진행 방법은 장전 시간 외 거래와 동일합니다. 시간 외 단일가 거래는 오후 4시부터 오후 6시까지 2시간간 진행됩니다. 당일 종가 기준 +-10%까지 매매가격이 달라지며 실시간 거래가 아닌 10분 단위로 거래가 체결됩니다."
            : "Traders enter when the market is about to close, and trade based on previous day’s data. End of day trading requires less time commitment compared to other strategies. Traders have to be aware of how the end of day market operates, as they operate very differently from normal day trading. For example, transactions take place every 5 minutes only."}{" "}
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week6.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "일반적인 일중매매거래와 같은 주식을 거래하는 정규시간에 매수/매도 규정들과 다르기 때문에 기본적인 지식을 넘어 추가 지식을 필요로 합니다. 특히 시간 외 단일가 거래와 같은 경우 실시간 거래가 아닌 10분 단위로 체결되는 거래이기 때문에 손실이 나는 경우 바로 매도/매수가 불가능하여 초보자분들께는 어려움이 있을 수 있습니다."
                    : "More extensive knowledge is required because end of day tradings are executed based on a different set of rules."
                }
              ></ToolTip>
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{
                    color: "#bf9c01",
                    fontSize: 15,
                    fontWeight: "500",
                    justifyContent: "flex-end",
                  }}
                >
                  {isKorean ? "중급자" : "Intermediate"}
                </Text>
                <Text> & </Text>
                <Text
                  style={{
                    color: "red",
                    fontSize: 15,
                    fontWeight: "500",
                    justifyContent: "flex-end",
                  }}
                >
                  {isKorean ? "상급자" : "Advanced"}
                </Text>
              </View>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "회사규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "장전 시간 외 거래와 장후 시간 외 거래는 모든 규모의 회사에 동일하게 사용 가능하나 시간 외 단일가 거래는 소기업과 같은 주가 변동이 심한 회사들의 경우에는 손실이 나는 경우 즉각 처분이 어렵기 때문에 중견기업 또는 대기업들을 대상으로 권장합니다."
                    : "Exploit volatility because big firms do not have a viable price difference during the end of day market."
                }
              ></ToolTip>
              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                {isKorean ? "소기업, 중소기업, 중견기업, 대기업" : "All"}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}{" "}
              </Text>
              <Text
                style={[
                  {
                    fontSize: 17,
                    fontWeight: "500",
                  },
                  styles.right,
                ]}
              >
                3.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {/* <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text> */}
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "회색 선으로 표시된 것처럼 주식은 4시 이후에 종가 시장에 진입합니다. 그래프에서 나타나듯이 종가 시장에서 주식의 행동은 매우 다르기 때문에 종가 시장에 대한 경험과 이해가 필요합니다."
              : "The stock enters an end of day market after 4 pm as shown with a gray line. As indicated in the graph, the stock behaves very differently in an end of day market, which is a reason why experience and understanding of the end of day market is required."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week7({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>
          {" "}
          {isKorean ? "돌파 트레이딩" : "Breakout Trading"}
        </Text>
        <Text style={styles.summary}>
          {isKorean
            ? "돌파 트레이딩이란 주간 거래의 한 가지 유형으로, 지지가 발생하는 곳에 중점을 둡니다. 주가가 추정되는 최소 가격 이하로 떨어진다면, 지지로 인해 주가가 반등할 것을 가정하고 투자자들이 주식을 매수합니다. 지지는 주식의 가격이 많이 하락한 경우 발생하며, 투자자들은 가격차를 이용하러 들어가지만 결국 가격을 지지하는 역할을 합니다."
            : "Breakout trading is a type of day trading, and focuses on where support happens. When the price falls below the (what people conceive as minimum price), traders enter, assuming that the stocks will increase due to support. Support occurs when the price of the stock has dropped too much, and traders come in to exploit the price differences, but end up supporting the price."}
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week7.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "투자자들은 각자의 경험을 바탕으로 추정되는 최소 가격이 언제인지 판단할 수 있어야 합니다."
                    : "Traders have to be aware of when the 'minimum' is, which requires experience Intermediate."
                }
              ></ToolTip>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{
                    color: "#bf9c01",
                    fontSize: 15,
                    fontWeight: "500",
                    justifyContent: "flex-end",
                  }}
                >
                  {isKorean ? "중급자" : "Intermediate"}
                </Text>
                <Text> & </Text>
                <Text
                  style={{
                    color: "red",
                    fontSize: 15,
                    fontWeight: "500",
                    justifyContent: "flex-end",
                  }}
                >
                  {isKorean ? "상급자" : "Advanced"}
                </Text>
              </View>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "회사규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "대기업의 주가는 큰 자본을 필요로 하기 때문에 하락에서 회복하기가 매우 어렵습니다. 그러므로 대기업의 주식은 돌파 트레이딩을 실행하기에 바람직하지 않습니다. 반면에 규모가 작은 소기업들은 지원을 창출하는 투자자들이 충분하지 않기 때문에 바람직하지 않습니다."
                    : "Traders have to be aware of when the 'minimum' is, which requires experience Intermediate."
                }
              ></ToolTip>
              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                {isKorean ? "중급자" : "Medium"}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}{" "}
              </Text>
              <Text
                style={[
                  {
                    fontSize: 17,
                    fontWeight: "500",
                  },
                  styles.right,
                ]}
              >
                4 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {/* <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text> */}
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "대략 오후 3시쯤에 지지가 발생한 것을 확인할 수 있습니다. 따라서 오후 3시경이 가장 이상적인 매매 시점이었을 것입니다. 오후 3시경, 가격차이를 이용하기 위해 거래자들이 들어오기 때문에 주가가 상승했을 것입니다."
              : "3 pm would have been the ideal time of entrance because support occurs roughly at 3:00 pm. The price of the stock rose due to support after 3 pm when traders came in to exploit the price differences"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export function Week8({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>
          {isKorean ? "평균회귀 전략" : "Pullback Trading"}{" "}
        </Text>
        <Text style={styles.summary}>
          {isKorean
            ? "거래자들은 주식이 추세의 반대 방향으로 소폭 이동할 것이라는 가정에 따라 평균회귀를 발견하면 매매합니다. 예를 들어, 주식은 하락하는 동안 경미한/일시적인 상승을 경험할 수 있고 그 반대의 경우도 존재합니다. 평균회귀 전략은 주식의 과거 데이터에 의존하여 큰 이유 없이 주식이 하락하는 지점을 식별한다는 점에서 돌파 트레이딩과 차별화됩니다. "
            : "Traders enter when they spot pullbacks, based on assumption that the stock will move to the opposite direction of the trend minorly. For example, the stock may experience minor/temporary upturn during a downward trend and vice versa. Pullback trading is different from breakout trading in that pullback trading relies on the past data of the stock to identify an entrance point where the stock decreases without a major reason."}{" "}
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week8.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "투자자들은 큰 이유 없이도 주가가 하락하는 시점을 판별할 수 있어야 합니다."
                    : "Traders have to know when the stock price declines without a major reason."
                }
              ></ToolTip>
              <Text
                style={[
                  {
                    color: "#bf9c01",
                    fontSize: 15,
                    fontWeight: "500",
                    justifyContent: "flex-end",
                  },
                  styles.right,
                ]}
              >
                {isKorean ? "중급자" : "Intermediate"}
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "회사규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "대기업의 경우, 시장 여력이 크기 때문에 큰 이유 없이 큰 변동폭을 보이지 않음으로 평균회귀 전략을 사용하기에 적합하지 않습니다. 소규모의 기업 또한 본질적으로 주식의 변동성이 매우 크기 때문에 주가의 변동을 분석하는 것이 무의미합니다."
                    : "Large companies are not preferred because they do not show a large fluctuation without a major reason because they have a big market capacity. Small firms are also not preferred because their stocks are inherently very volatile. Therefore, analyzing the fluctuation of the stock price is meaningless."
                }
              ></ToolTip>
              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                {isKorean ? "중견기업" : "Medium"}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}{" "}
              </Text>
              <Text
                style={[
                  {
                    fontSize: 17,
                    fontWeight: "500",
                  },
                  styles.right,
                ]}
              >
                4 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {/* <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text> */}
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "주가가 다시 오를 것이라는 가정하에 투자자는 주가 하락 후 4월 13일경 주식을 매수할 것입니다. "
              : "A pullback trader would purchase the stock around April 13th after the drop, assuming that the stock price will go back up."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week9({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>
          {isKorean ? "이동평균을 이용하는 투자전략" : "Moving average trading"}
        </Text>
        <Text style={styles.summary}>
          {isKorean
            ? "이동평균 거래란 주간 거래의 한 가지 종류입니다. 작은 이동 평균이 큰 이동평균보다 더 빨리 가격을 따른다는 가정 하에, 거래자들은 교차가 발생할 때 진입합니다. 투자자들은 평균값이 급격하게 변화하지 않기 때문에 주가가 하락하여도 다기 올라갈 것이라고 가정하고 주가가 평균값보다 낮을 때 매수하는 기법입니다."
            : "Moving average trading is another type of day trading. Under the assumption that smaller moving averages follow price faster than larger moving averages, traders enter when a crossover occurs. Although these moving averages will not accurately depict the highs and lows, it is a good indicator of highs and lows of the stock prices. Therefore, traders will purchase when the price is below the average assuming that it will go back up because average value does not change drastically."}
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week9.jpg")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "이동평균값은 읽기 매우 쉬운 편이며 출입(매수) 지점이 명확합니다."
                    : "Moving average is very easy to read, and there is a clear entrance/exit point."
                }
              ></ToolTip>
              <Text
                style={[
                  {
                    color: "green",
                    fontSize: 15,
                    fontWeight: "500",
                    justifyContent: "flex-end",
                  },
                  styles.right,
                ]}
              >
                {isKorean ? "초보자" : "Beginners"}
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "회사규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "대기업은 주가를 올리려면 막대한 자본이 필요하다는 특성상 바람직하지 않으며 소규모 기업 또한 시장 상황을 예측할 수 없다는 점에서 바람직하지 않습니다."
                    : "Large companies are undesirable due to their nature that it requires a massive amount of capital to increase their stock prices. Small companies are also undesirable due to their inherent vulnerability to unpredictable market conditions."
                }
              ></ToolTip>

              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                {isKorean ? "중견기업" : "Medium"}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}{" "}
              </Text>
              <Text
                style={[
                  {
                    fontSize: 17,
                    fontWeight: "500",
                  },
                  styles.right,
                ]}
              >
                3 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {/* <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text> */}
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "파란색 선은 주식의 이동평균값을 나타냅니다. 평균 값을 읽다 보면, 투자자는 가격이 평균 값 아래로 떨어지기 시작하는 것을 관찰하고 12시경에 주식을 매수할 것입니다. 또한, 투자자는 교차가 발생하고 주가가 평균값을 다시 초과하는 6시경 주식을 매도할 것입니다."
              : "The blue line represents the moving average value of the stock. Reading the average value, a trader would enter around 12:00, observing that the price started to fall below the average value. Then, the trader would sell the stock around 6:00 when a crossover occurs and the stock price exceeds that of the average."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week10({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>
          {isKorean ? "모멘텀 트레이딩" : "Momentum Trading"}{" "}
        </Text>
        <Text style={styles.summary}>
          {isKorean
            ? "주식을 매수하여 반대 방향으로 주가가 움직일 역신호가 관찰될 때까지 주식을 보유하고 있는 것을 모멘텀 트레이딩이라 부릅니다. 모멘텀 트레이딩은 모든 조건이 일정할 때 주식은 같은 방향으로 움직이는 경향이 있다는 것을 기반으로 투자하는 전략입니다. "
            : "Buying a stock and holding it until there is a reverse sign of a stock price direction, because stocks tend to continue their movement in price direction when all the conditions are constant."}{" "}
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week10.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "어떠한 지점이 꼭짓점이 될 것인지 아닌지를 판단하기 위해 경험이 필요합니다."
                    : "Experience is required to determine if a certain point is going to be a vertex or not."
                }
              ></ToolTip>
              <Text
                style={[
                  {
                    color: "#bf9c01",
                    fontSize: 15,
                    fontWeight: "600",
                    justifyContent: "flex-end",
                  },
                  styles.right,
                ]}
              >
                {isKorean ? "중급자" : "Intermediate"}
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "회사규모" : "Company Size"}
              </Text>

              <ToolTip
                content={
                  isKorean
                    ? "소기업의 주식은 예측할 수 없는 시장 위험에 변동성이 큰 반면 대기업은 주식은 변동성이 없기 때문에 투자자들이 변동성을 이용하기 어렵습니다."
                    : "Stocks of small sized companies are volatile to unpredictable market risks whereas large companies do not have a fluctuating stock, which makes it hard for the traders to exploit the volatility."
                }
              ></ToolTip>
              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                {isKorean ? "중견기업" : "Medium"}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}{" "}
              </Text>
              <Text
                style={[
                  {
                    fontSize: 17,
                    fontWeight: "500",
                  },
                  styles.right,
                ]}
              >
                4 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {/* <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text> */}
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "3월 28일의 갑작스러운 주식 상승에 주목하여 상승 궤도가 지속될 것이라고 가정하여 모멘텀 트레이딩 주식을 사용하는 투자자는 3월 29일에 주식을 매수하였을 것입니다."
              : "A sudden increase on March 28th is noted. A momentum trader will enter on March 29th, assuming that the upward trajectory would continue."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export function Week11({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>
          {isKorean ? "IPO (기업공개)" : "IPOs (Initial Public Offering)"}
        </Text>
        <Text style={styles.summary}>
          {isKorean
            ? "주식이 처음 시장에 진입할 때 투자자들은 주식에 갑자기 자본이 유입되어 주가가 큰 폭으로 변동한다는 점을 두 가지 방법으로 이용합니다. 첫째, 투자자들은 가격이 상승할 것이라는 가정 하에 IPO를 구매할 수 있고 둘째, 변동하는 주가가 감소하기를 기다렸다가 주가가 상당히 낮은 편일 때 매수할 수 있습니다."
            : "When the stock first enters the market, traders exploit the largely fluctuating price that occurs because of a sudden inflow of capital to the stock. There are two ways that the traders can exploit this fluctuation. Firstly, the traders can purchase the IPO assuming that the price will increase. Secondly, traders can wait for the fluctuation to decrease and purchase when the price becomes fairly low."}{" "}
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week11.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "IPO는 일반적으로 출시 후 주가가 증가하는 경향이 있어 투자자들이 풍부한 지식 없이도 시도하기 좋은 전략입니다. "
                    : "IPOs generally tend to increase in value after the release, providing a good opportunity for traders to gain money without extensive knowledge."
                }
              ></ToolTip>

              <Text
                style={[
                  {
                    color: "green",
                    fontSize: 15,
                    fontWeight: "500",
                    justifyContent: "flex-end",
                  },
                  styles.right,
                ]}
              >
                {isKorean ? "초보자" : "Beginners"}
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "회사규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "모든 IPO는 회사 규모에 관계없이 크게 변동하고 수익을 내는 경향이 있습니다."
                    : "All of the IPOs tend to be largely fluctuating and yield profit regardless of its company size."
                }
              ></ToolTip>

              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                {isKorean ? "모든 규모" : "All"}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}{" "}
              </Text>
              <Text
                style={[
                  {
                    fontSize: 17,
                    fontWeight: "500",
                  },
                  styles.right,
                ]}
              >
                2 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {/* <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text> */}
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "위의 그래프는 최근 상장한 주식을 보여줍니다. 이 주식은 8달러에서 시작하여 공개되자마자 급격하게 주가가 상승한 것이라고 판단됩니다. 이러한 차이를 이용하고자 하는 투자자들은 해당 주식이 시장에 처음으로 공개될 때 즉각 매입 후 주가가 정점에 도달하면 판매할 것입니다. "
              : "The graph shows the recently IPOed stock. It is shown that it starts at a price of 8, but increases drastically after it is released to the public. A trader who wishes to exploit these differences would have purchased the stock as soon as it was released to the market and sold it once it reached the peak."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week12({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>
          {isKorean ? "공매도" : "Short Selling"}
        </Text>
        <Text style={styles.summary}>
          {isKorean
            ? "투자자들은 주식을 빌려서 주식을 높은 가격에 판매합니다. 이후, 투자자들은 주식을 낮은 가격에 다시 구매 후 상환합니다. "
            : "Traders borrow a stock and sell the stock at a high point. Later, the trader purchases the stock at a lower price and pays back."}{" "}
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week12.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "이 투자 방법은 투자자가 여러 가지 법적 제한이 존재하며 투자자가 얻을 수 있는 최대 이익은 100%로 제한되지만 최대 손실이 무한대일 정도로 매우 리스크가 높습니다. "
                    : "This trading method has a lot of legal constraints which requires the traders to be aware of these laws.This method is also very risky in that the maximum profit a trader can earn is 100%. However, the maximum loss would be infinite."
                }
              ></ToolTip>

              <Text
                style={[
                  {
                    color: "red",
                    fontSize: 15,
                    fontWeight: "500",
                    justifyContent: "flex-end",
                  },
                  styles.right,
                ]}
              >
                {isKorean ? "상급자" : "Advanced"}
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "회사규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "기업 규모에 관계없이 주식의 가격 변동은 모든 종류의 기업에서 발생하며, 투자자들은 어떤 규모의 기업에서든 주식을 공매도할 수 있습니다. "
                    : "Regardless of the company size, a price change in the stock is present in any type of stock, allowing traders to short sell stocks from any sized company. "
                }
              ></ToolTip>

              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                {isKorean ? "모든 규모" : "All"}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}{" "}
              </Text>
              <Text
                style={[
                  {
                    fontSize: 17,
                    fontWeight: "500",
                  },
                  styles.right,
                ]}
              >
                4.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {/* <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text> */}
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "만약 거래자가 공매도 방법을 사용한다면, 해당 거래자는 주식을 빌려와 2022년 12월에 주가가 높은 시기에 주식을 팔고, 이후 2023년 1월에 주가가 낮은 시점에 주식을 다시 구매할 것입니다. "
              : "If a trader were to use the short selling method, the trader would borrow and sell the stock in December 2022 where the stock price is at a high and would later purchase the stock in January 2023 where the stock price is lower."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week13({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "600",
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          {isKorean ? "마진 거래" : "Margin Trading"}
        </Text>
        {/* <Image
          style={{ marginLeft: 10, width: 350, height: 250, marginBottom: 30 }}
          source={require("../../data/Weeks/week2.png")}
        ></Image> */}
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "마진 거래를 위한 별도의 계좌가 존재합니다. 투자자들은 돈을 빌려서 자본을 늘립니다. 자본의 증가는 더욱 큰 이익을 발생시킬 수 있지만, 주가가 하락할 때 더 큰 손실의 가능성 또한 존재합니다. 마진 거래와 공매도의 차이점은 공매도 투자자들은 주식을 빌리지만 마진 투자자들은 자금을 빌립니다."
                    : "Trading strategies include borrowing, not only would brokers be unwilling to lend money to beginners, but the traders should be experienced enough to minimize the risks involved in the process."
                }
              ></ToolTip>
              <Text
                style={[
                  {
                    color: "#bf9c01",
                    fontSize: 15,
                    fontWeight: "600",
                    justifyContent: "flex-end",
                  },
                  styles.right,
                ]}
              >
                {isKorean ? "중급자" : "Intermediate"}
              </Text>
              <Text> & </Text>
              <Text
                style={{
                  color: "red",
                  fontSize: 15,
                  fontWeight: "500",
                  justifyContent: "flex-end",
                }}
              >
                {isKorean ? "상급자" : "Advanced"}
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>
                {isKorean ? "회사 규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "거래자들은 어떤 종류의 주식이든 이익을 얻을 수 있기 때문에 마진 트레이딩은 모든 기업 규모에 적용 가능합니다."
                    : "Margin trading is applicable for all company sizes because traders can profit off any type of stocks."
                }
              ></ToolTip>

              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                {isKorean ? "모든 규모" : "All"}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익수준" : "Risk/Profit"}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                4.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            {isKorean ? "요약" : "Summary"}
          </Text>
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "마진 거래를 위한 별도의 계좌가 존재합니다. 투자자들은 돈을 빌려서 자본을 늘립니다. 자본의 증가는 더욱 큰 이익을 발생시킬 수 있지만, 주가가 하락할 때 더 큰 손실의 가능성 또한 존재합니다. 마진 거래와 공매도의 차이점은 공매도 투자자들은 주식을 빌리지만 마진 투자자들은 자금을 빌립니다."
              : "There is a separate account for margin trading. Traders increase their capital by borrowing. Although the increased amount of capital generates greater profit, it also provides greater chances of loss when the stock price declines. Margin trading is different from short selling in that short sellers borrow stocks whereas margin traders borrow funds."}
          </Text>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Resources
          </Text>
          <Text
            style={{ color: "blue", textDecorationLine: "underline" }}
            onPress={() =>
              Linking.openURL("https://www.investopedia.com/terms/m/margin.asp")
            }
          >
            Margin and Margin Trading Explained Plus Advantages and
            Disadvantages
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week14({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>
          {isKorean ? "펀드 트레이딩" : "Funds Trading"}
        </Text>
        <Text style={styles.summary}>
          {isKorean
            ? "펀드 트레이딩은 투자자들이 아무것도 분석하지 않고 시장에서 간편하게 사용 가능한 펀드를 구매하는 독특한 방법입니다. ETF 및 지수 펀드와 같은 다양한 펀드가 있습니다. 펀드는 여러 주식에 투자되므로 자본이 자동으로 다양화되어 있어 리스크가 적습니다."
            : "Funds Trading is unique in that the traders do not analyze anything, but purchase funds that are simply available in the market. There are various funds such as ETFs and index funds. Funds are invested in multiple stocks and therefore have less risks as the capital is automatically diversified."}{" "}
        </Text>
        <Image
          // style={styles.image}
          style={{
            marginLeft: "2.25%",
            width: screenWidth * 0.95,
            height: screenHeigth * 0.2,
            resizeMode: "contain",
          }}
          source={require("../../data/Weeks/week14.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "위험도가 낮을 뿐만 아니라 투자자들은 간단히 펀드를 구매하기 때문에 폭넓은 지식이 필요하지 않습니다."
                    : "Traders are not required to have extensive knowledge as they are simply purchasing funds. There is also less risk involved in this method."
                }
              ></ToolTip>

              <Text
                style={[
                  {
                    color: "green",
                    fontSize: 15,
                    fontWeight: "500",
                    justifyContent: "flex-end",
                  },
                  styles.right,
                ]}
              >
                {isKorean ? "초보자" : "Beginners"}
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "회사규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "펀드는 여러 주식을 포함하고 있습니다."
                    : "Funds include multiple stocks."
                }
              ></ToolTip>
              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                {isKorean ? "모든 규모" : "N/A"}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}{" "}
              </Text>
              <Text
                style={[
                  {
                    fontSize: 17,
                    fontWeight: "500",
                  },
                  styles.right,
                ]}
              >
                1 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {/* <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text> */}
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "이 차트는 펀드의 그래프를 나타냅니다. 주식 거래에서와 동일하게 저가에서 매수 후 고가에서 매도하는 개념이 펀드에서도 적용됩니다."
              : "This chart illustrates the graph of a fund. Same idea of buy low and sell high is applied to fund trading."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export function Week15({ navigation }) {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>
          {isKorean ? "계절적 거래" : "Seasonal Trading"}
        </Text>
        <Text style={styles.summary}>
          {isKorean
            ? "스키 회사와 같이 특정 계절에 상대적으로 좋은 성과를 내는 회사들에 투자하는 전략을 계절적 거래라 칭합니다. 계절적 거래 방식을 사용하는 투자자들은 주가가 비교적 낮은 비수기에 이 회사들의 주식을 구입하고 비교적 주가가 높아진 계절에 판매합니다."
            : "There are companies that perform better during a specific season such as ski companies. Seasonal traders invest in these companies. They purchase stocks of these companies during off season when the stock price is relatively low and sell on season when the price is relatively higher."}{" "}
        </Text>
        <Image
          style={styles.image}
          source={require("../../data/Weeks/week15.png")}
        ></Image>
        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginRight: 25, marginLeft: 10 }}>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "대상" : "Audience"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "투자자들은 단순히 계절에 영향을 받는 회사에 대하여 알고 있으면 됩니다."
                    : "Traders simply have to be aware of the seasonal companies."
                }
              ></ToolTip>

              <Text
                style={[
                  {
                    color: "green",
                    fontSize: 15,
                    fontWeight: "500",
                    justifyContent: "flex-end",
                  },
                  styles.right,
                ]}
              >
                {isKorean ? "초보자" : "Beginners"}
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle]}>
                {isKorean ? "회사규모" : "Company Size"}
              </Text>
              <ToolTip
                content={
                  isKorean
                    ? "계절적인 영향을 많이 받는 회사들은 대부분 규모가 크지 않은 경우가 많습니다."
                    : "Companies that operate seasonally do not tend to be large. "
                }
              ></ToolTip>

              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                {isKorean ? "중소기업" : "Medium"}
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>
                {isKorean ? "위험도/수익 수준" : "Risk/Profit"}{" "}
              </Text>
              <Text
                style={[
                  {
                    fontSize: 17,
                    fontWeight: "500",
                  },
                  styles.right,
                ]}
              >
                2.5 / 5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {/* <Text
            style={{
              marginVertical: 5,
              marginBottom: 15,
              fontWeight: "600",
              fontSize: 18,
              // color: "#808080",
            }}
          >
            Summary
          </Text> */}
          <Text
            style={{
              fontFamily: "Arial",
              fontWeight: "400",
              fontSize: 15,
              marginBottom: 30,
              color: "#505050",
            }}
          >
            {isKorean
              ? "Watsco는 여름에 유리한 에어컨 회사입니다. 이 지식을 바탕으로 계절적 투자자들은 여름 동안 Watsco의 주가가 상승할 것을 예측하여 겨울 동안 매수한 뒤 여름에 매도할 것입니다."
              : "Watsco is an air conditioning company, and therefore is a summer business. Based upon this knowledge, a seasonal trader would expect watsco’s stock price to increase during summer. Therefore, the trader would purchase the stock during winter and sell during the summer."}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#303030",
    marginRight: 5,
    // flex: 3,
  },
  size: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "right",
  },
  image: {
    marginLeft: "2.25%",
    width: screenWidth * 0.95,
    height: screenHeigth * 0.35,
    resizeMode: "contain",
  },
  summary: {
    fontFamily: "Arial",
    fontWeight: "400",
    fontSize: 15,
    color: "#505050",
    marginHorizontal: 10,
    marginBottom: "7%",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 20,
    marginBottom: "5%",
  },
  right: {
    flex: 1,
    textAlign: "right",
  },
});
