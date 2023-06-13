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

import { Dimensions } from "react-native";
import ToolTip from "../../Components/ToolTip";

const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;

export function Week1() {
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
          Day Trading
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
        {/* <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/EMc2b3_YV7s"
          title="Day Trading for Beginners 2023 (The ULTIMATE In-Depth Guide)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}

        {/* <Image
          style={{ marginLeft: 10, width: 350, height: 250, marginBottom: 30 }}
          source={require("../../data/week2.png")}
        ></Image> */}
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
                <Text style={[styles.subtitle]}>Audience</Text>
              </View>

              <View style={{ flex: 0 }}>
                <ToolTip content="Day trading is one of the most basic trading strategies, therefore accessible for beginners without extensive knowledge and experience."></ToolTip>
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
                  Beginners
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
                <Text style={[styles.subtitle]}>Company Size</Text>
              </View>
              <View>
                <ToolTip content="Middle sized or small firms have more volatility compared to large companies which helps the traders yield greater returns."></ToolTip>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.size}>Mid & Small</Text>
              </View>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            Day trading is a strategy where stocks and securities are traded on
            a daily basis, where investors exploit the daily volatility to earn
            money. Less risk present in the market as the trading term is pretty
            short. Has a relatively lower risk compared to other strategies.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week2({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>Position Trading</Text>

        <Text style={styles.summary}>
          Position trading is a strategy where traders analyze the market trend
          over several weeks to look for continuous volatility. After
          identifying the “waves”, traders seek to buy on low points and sell on
          high points. Time consuming for the expense of ensured profit. People
          who wish to earn money safely at the expense of time.
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
              <Text style={[styles.subtitle]}>Audience</Text>

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
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip content="Position trading is executed over a long period of time, making smaller company stocks susceptible to increased variability and potential bankruptcy due to numerous market variables. "></ToolTip>
              <Text
                style={{
                  flex: 1,
                  textAlign: "right",
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Big
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>Swing Trading</Text>

        <Text style={styles.summary}>
          Swing traders buy on lows and sell on highs, when there is high
          volatility. This strategy requires less time looking at the chart
          compared to other strategies, and has potentials for high profit.
          Unlike day trading, traders can trade even when the markets are
          closed.{" "}
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
              <Text style={[styles.subtitle, {}]}>Audience</Text>
              <ToolTip content="A week is not a short period of time, and there will be numerous market variabilities that will impact the stock. Therefore, experience is required to identify an entrance and exit point."></ToolTip>
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
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip content="Although the same idea of exposure to unpredictable market variabilities applies for small companies, the relatively shorter trading interval of swing trading compared to position trading requires swing traders to further exploit volatility in order to yield profit. Therefore, swing traders choose companies that range from medium to large in order to minimize risk while exploiting the volatility."></ToolTip>
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
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            Home Depot would be a good medium to large size company that has a
            low risk of going bankrupt but still exhibits some volatility as
            shown in the data. A swing trader would have purchased the stock on
            April 13th, assuming that it would be the low point. Then, the
            trader would have sold the stock recently.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week4({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>Scalping</Text>

        <Text style={styles.summary}>
          Scalping is one of the fastest methods of trading. Although scalping
          can be implemented in both volatile and less volatile markets, more
          volatile stocks are preferred for higher profit because scalpers
          profit off of price changes within a short period of time. However,
          because the changes are greatly unexpected, scalping inherently has a
          higher risk compared to other trading methods and requires more time
          commitment for the traders to constantly check the price. Although
          extensive knowledge is required, some experience is needed to identify
          entrance and exit points.{" "}
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
              <Text style={[styles.subtitle]}>Audience</Text>
              <ToolTip content="Scalping requires a large time commitment because traders have to constantly check the stock price."></ToolTip>
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
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip content="Small to medium company sizes are preferred to maximize volatility. Since scalping traders seek to exploit the volatility within short durations of time, small to medium companies that have volatile stocks and are largely impacted by market variabilities are preferred."></ToolTip>

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
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            The company shown called Skillz Inc is a small company that has a
            volatile stock as shown by the 5.50 percent increase in the stock
            price. A scalping trader would try to buy on low points and sell on
            high points throughout the graph.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week5({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>News Trading</Text>
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
              <Text style={[styles.subtitle]}>Audience</Text>
              <ToolTip content="It is straightforward in that positive news will lead to an increased stock price and vice versa. However, some experience is required in that traders should be able to immediately respond right after a news release"></ToolTip>
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
                  Beginner
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
                  Intermediate
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
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip content="This is because all sizes of companies are impacted by news."></ToolTip>
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
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            Following news releases, traders quickly anticipate the impact on
            stocks and act upon the expectations. There is a clearly defined
            entry and exit point, which is when the news is released which
            allows constant standards for traders. There are also many trading
            opportunities as there are various news on companies from diverse
            fields.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week6({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>End of day Trading</Text>
        <Text style={styles.summary}>
          Traders enter when the market is about to close, and trade based on
          previous day’s data. End of day trading requires less time commitment
          compared to other strategies. Traders have to be aware of how the end
          of day market operates, as they operate very differently from normal
          day trading. For example, transactions take place every 5 minutes
          only.{" "}
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
              <Text style={[styles.subtitle]}>Audience</Text>
              <ToolTip content="More extensive knowledge is required because end of day tradings are executed based on a different set of rules."></ToolTip>
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
                  Intermediate
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
                  Advanced
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
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip content="Exploit volatility because big firms do not have a viable price difference during the end of day market."></ToolTip>
              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                Small
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            The stock enters an end of day market after 4 pm as shown with a
            gray line. As indicated in the graph, the stock behaves very
            differently in an end of day market, which is a reason why
            experience and understanding of the end of day market is required.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week7({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>Breakout Trading</Text>
        <Text style={styles.summary}>
          Breakout trading is a type of day trading, and focuses on where
          support happens. When the price falls below the (what people conceive
          as minimum price), traders enter, assuming that the stocks will
          increase due to support. Support occurs when the price of the stock
          has dropped too much, and traders come in to exploit the price
          differences, but end up supporting the price.
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
              <Text style={[styles.subtitle]}>Audience</Text>
              <ToolTip
                content="Traders have to be aware of when the “minimum” is, which
                requires experience Intermediate."
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
                  Intermediate
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
                  Advanced
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
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip
                content="Traders have to be aware of when the “minimum” is, which
                requires experience Intermediate."
              ></ToolTip>
              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                Medium
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            3 pm would have been the ideal time of entrance because support
            occurs roughly at 3:00 pm. The price of the stock rose due to
            support after 3 pm when traders came in to exploit the price
            differences
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export function Week8({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>Pullback Trading</Text>
        <Text style={styles.summary}>
          Traders enter when they spot pullbacks, based on assumption that the
          stock will move to the opposite direction of the trend minorly. For
          example, the stock may experience minor/temporary upturn during a
          downward trend and vice versa. Pullback trading is different from
          breakout trading in that pullback trading relies on the past data of
          the stock to identify an entrance point where the stock decreases
          without a major reason.{" "}
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
              <Text style={[styles.subtitle]}>Audience</Text>
              <ToolTip content="Traders have to know when the stock price declines without a major reason."></ToolTip>
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
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip content="Large companies are not preferred because they do not show a large fluctuation without a major reason because they have a big market capacity. Small firms are also not preferred because their stocks are inherently very volatile. Therefore, analyzing the fluctuation of the stock price is meaningless."></ToolTip>
              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                Medium
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            A pullback trader would purchase the stock around April 13th after
            the drop, assuming that the stock price will go back up.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week9({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>Moving average trading</Text>
        <Text style={styles.summary}>
          Moving average trading is another type of day trading. Under the
          assumption that smaller moving averages follow price faster than
          larger moving averages, traders enter when a crossover occurs.
          Although these moving averages will not accurately depict the highs
          and lows, it is a good indicator of highs and lows of the stock
          prices. Therefore, traders will purchase when the price is below the
          average assuming that it will go back up because average value does
          not change drastically.
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
              <Text style={[styles.subtitle]}>Audience</Text>
              <ToolTip content="Moving average is very easy to read, and there is a clear entrance/exit point."></ToolTip>
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
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip
                content="Large companies are undesirable due to their nature that it requires a massive amount of capital to increase their stock prices. Small companies are also undesirable due to their inherent vulnerability to unpredictable market conditions.
"
              ></ToolTip>

              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                Medium
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            The blue line represents the moving average value of the stock.
            Reading the average value, a trader would enter around 12:00,
            observing that the price started to fall below the average value.
            Then, the trader would sell the stock around 6:00 when a crossover
            occurs and the stock price exceeds that of the average.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week10({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>Momentum Trading</Text>
        <Text style={styles.summary}>
          Buying a stock and holding it until there is a reverse sign of a stock
          price direction, because stocks tend to continue their movement in
          price direction when all the conditions are constant.{" "}
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
              <Text style={[styles.subtitle]}>Audience</Text>
              <ToolTip content="Experience is required to determine if a certain point is going to be a vertex or not."></ToolTip>
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
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip content="Stocks of small sized companies are volatile to unpredictable market risks whereas large companies do not have a fluctuating stock, which makes it hard for the traders to exploit the volatility."></ToolTip>
              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                Medium
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            A sudden increase on March 28th is noted. A momentum trader will
            enter on March 29th, assuming that the upward trajectory would
            continue.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export function Week11({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>IPOs (Initial Public Offering)</Text>
        <Text style={styles.summary}>
          When the stock first enters the market, traders exploit the largely
          fluctuating price that occurs because of a sudden inflow of capital to
          the stock. There are two ways that the traders can exploit this
          fluctuation. Firstly, the traders can purchase the IPO assuming that
          the price will increase. Secondly, traders can wait for the
          fluctuation to decrease and purchase when the price becomes fairly
          low.{" "}
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
              <Text style={[styles.subtitle]}>Audience</Text>
              <ToolTip content="IPOs generally tend to increase in value after the release, providing a good opportunity for traders to gain money without extensive knowledge."></ToolTip>

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
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip content="All of the IPOs tend to be largely fluctuating and yield profit regardless of its company size."></ToolTip>

              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                All
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            The graph shows the recently IPOed stock. It is shown that it starts
            at a price of 8, but increases drastically after it is released to
            the public. A trader who wishes to exploit these differences would
            have purchased the stock as soon as it was released to the market
            and sold it once it reached the peak.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week12({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>Short Selling</Text>
        <Text style={styles.summary}>
          Traders borrow a stock and sell the stock at a high point. Later, the
          trader purchases the stock at a lower price and pays back.{" "}
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
              <Text style={[styles.subtitle]}>Audience</Text>
              <ToolTip content="This trading method has a lot of legal constraints which requires the traders to be aware of these laws.This method is also very risky in that the maximum profit a trader can earn is 100%. However, the maximum loss would be infinite."></ToolTip>

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
                Advanced
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip
                content="Regardless of the company size, a price change in the stock is present in any type of stock, allowing traders to short sell stocks from any sized company.
"
              ></ToolTip>

              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                All
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            If a trader were to use the short selling method, the trader would
            borrow and sell the stock in December 2022 where the stock price is
            at a high and would later purchase the stock in January 2023 where
            the stock price is lower.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export function Week13({ navigation }) {
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
          Margin Trading
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
              <Text style={[styles.subtitle]}>Audience</Text>
              <ToolTip
                content="Trading strategies include borrowing, not only would brokers be
              unwilling to lend money to beginners, but the traders should be
              experienced enough to minimize the risks involved in the process."
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
                Intermediate
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
                Advanced
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip content="Margin trading is applicable for all company sizes because traders can profit off any type of stocks."></ToolTip>

              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                All
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            There is a separate account for margin trading. Traders increase
            their capital by borrowing. Although the increased amount of capital
            generates greater profit, it also provides greater chances of loss
            when the stock price declines. Margin trading is different from
            short selling in that short sellers borrow stocks whereas margin
            traders borrow funds.
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
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>Funds Trading</Text>
        <Text style={styles.summary}>
          Funds Trading is unique in that the traders do not analyze anything,
          but purchase funds that are simply available in the market. There are
          various funds such as ETFs and index funds. Funds are invested in
          multiple stocks and therefore have less risks as the capital is
          automatically diversified.{" "}
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
              <Text style={[styles.subtitle]}>Audience</Text>
              <ToolTip
                content="Traders are not required to have extensive knowledge as they are
              simply purchasing funds. There is also less risk involved in this
              method."
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
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip content="Funds include multiple stocks."></ToolTip>
              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                N/A
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            This chart illustrates the graph of a fund. Same idea of buy low and
            sell high is applied to fund trading.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export function Week15({ navigation }) {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.title}>Seasonal Trading</Text>
        <Text style={styles.summary}>
          There are companies that perform better during a specific season such
          as ski companies. Seasonal traders invest in these companies. They
          purchase stocks of these companies during off season when the stock
          price is relatively low and sell on season when the price is
          relatively higher.{" "}
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
              <Text style={[styles.subtitle]}>Audience</Text>
              <ToolTip content="Traders simply have to be aware of the seasonal companies."></ToolTip>

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
                Beginners
              </Text>
            </View>

            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={[styles.subtitle, {}]}>Company Size</Text>
              <ToolTip content="Companies that operate seasonally do not tend to be large. "></ToolTip>

              <Text style={[{ fontSize: 15, fontWeight: "500" }, styles.right]}>
                Medium
              </Text>
            </View>
            <View
              style={{
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={styles.subtitle}>Risk/Profit</Text>
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
            Watsco is an air conditioning company, and therefore is a summer
            business. Based upon this knowledge, a seasonal trader would expect
            watsco’s stock price to increase during summer. Therefore, the
            trader would purchase the stock during winter and sell during the
            summer.
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
