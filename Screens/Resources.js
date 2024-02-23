import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
} from "react-native";
import fetchNewsInfo from "../Components/fetchNewsInfo";
import React, { useContext, useEffect } from "react";
import CountDown from "react-native-countdown-component";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Week1,
  Week2,
  Week3,
  Week4,
  Week5,
  Week6,
  Week7,
  Week8,
  Week9,
  Week10,
  Week11,
  Week12,
  Week13,
  Week14,
  Week15,
  Week16,
} from "./Resources/Material";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LanguageContext } from "../context/languageContext";

function Resource({ navigation }) {
  const [stage, setStage] = React.useState();
  const [id, setId] = React.useState("12");
  // const [until, setUntil] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(0);
  const { isKorean, setIsKorean } = useContext(LanguageContext);

  const [material, setMaterial] = React.useState([
    {
      title: "Week 1",
      isActivated: true,
      strategy: isKorean ? "1. 일중매매거래" : "1. Day Trading",
    },

    {
      title: "Week 2",
      isActivated: false,
      strategy: isKorean ? "2. 포지션 거래" : "2. Position Trading",
    },
    {
      title: "Week 3",
      isActivated: false,
      strategy: isKorean ? "3. 스윙 거래" : "3. Swing Trading",
    },
    {
      title: "Week 4",
      isActivated: false,
      strategy: isKorean ? "4. 스컬핑" : "4. Scalping",
    },
    {
      title: "Week 5",
      isActivated: false,
      strategy: isKorean ? "5.  거래" : "5. News Trading",
    },
    {
      title: "Week 6",
      isActivated: false,
      strategy: isKorean ? "6. 시간 외 거래" : "6. End of Day Trading",
    },
    {
      title: "Week 7",
      isActivated: false,
      strategy: isKorean ? "7. 돌파 트레이딩" : "7. Breakout Trading",
    },
    {
      title: "Week 8",
      isActivated: false,
      strategy: isKorean ? "8. 평균회귀 전략" : "8. Pullback Trading",
    },
    {
      title: "Week 9",
      isActivated: false,

      strategy: isKorean
        ? "9. 이동평균을 이용하는 투자전략"
        : "9. Moving average Trading",
    },
    {
      title: "Week 10",
      isActivated: false,
      strategy: isKorean ? "10. 모멘텀 트레이딩" : "10. Momentum Trading",
    },
    {
      title: "Week 11",
      isActivated: false,
      strategy: isKorean ? "11. IPO (기업공개)" : "11. IPOs",
    },
    {
      title: "Week 12",
      isActivated: false,
      strategy: isKorean ? "12. 공매도" : "12. Short Selling",
    },
    {
      title: "Week 13",
      isActivated: false,
      strategy: isKorean ? "13. 마진 거래" : "13. Margin Trading",
    },
    {
      title: "Week 14",
      isActivated: false,
      strategy: isKorean ? "14. 펀드 트레이딩" : "14. Funds Trading",
    },
    {
      title: "Week 15",
      isActivated: false,
      strategy: isKorean ? "15. 계절적 거래" : "15. Seasonal Trading",
    },
  ]);

  curStage = [];
  let tempStage;

  function removeData() {
    const init = async () => {
      await AsyncStorage.removeItem("timekey");
      let tempTime = await AsyncStorage.getItem("timekey");
      console.log("Time: ", tempTime);
      await AsyncStorage.setItem("stage", "0");
      let tempStage = await AsyncStorage.getItem("stage");
      console.log("Stage Init: ", tempStage);
      setTimeLeft(345600);
      // setTimeLeft(5);
      setId(new Date().getTime().toString());
      setStage(0);
      updateWeeks();
    };
    init();
  }

  function updateWeeks() {
    console.log("Stage from updateWeeks: ", stage);
    setMaterial(
      material.map((el, index) =>
        index <= stage
          ? { title: el.title, isActivated: true, strategy: el.strategy }
          : el
      )
    );
  }

  let initTime;
  useEffect(() => {
    updateWeeks();
  }, [stage]);
  useEffect(() => {
    const getData = async () => {
      try {
        tempStage = await AsyncStorage.getItem("stage");
        console.log("tempStage: ", tempStage);
        setStage(Number(tempStage));

        console.log("Stage: ", stage);
        const value = await AsyncStorage.getItem("timeKey");
        // if time value has been previously stored
        if (value !== null) {
          console.log("Time value: ", value);
          let timeLeft;
          initTime = parseInt(value);
          let endTime = initTime + 259200000; // 604800 * 1000 // 4 days
          // for test: smaller timer times.
          // let endTime = initTime + 500000; // 604800 * 1000 // 5 min
          // let endTime = initTime + 3000; // 604800 * 1000 // 3 sec
          let curTime = new Date().getTime();
          timeLeft = endTime - curTime;
          timeLeft = Math.floor(timeLeft / 1000);
          // if no time left, add some time
          if (timeLeft <= 0) {
            timeLeft = 3;
            setTimeLeft(timeLeft);
            setId(new Date().getTime().toString());
          }
          // if same stage
          else {
            setTimeLeft(timeLeft);
            // updates the timer with new id
            setId(new Date().getTime().toString());
          }
          console.log("Time Left: ", timeLeft);
        }
        // when no timeKey was found: record initial date
        else {
          let time = new Date().getTime().toString();
          const storeData = async () => {
            try {
              await AsyncStorage.setItem("timeKey", time);
              console.log("Initial Date Recorded!", time);
              // initial setting
              // let curTime = new Date().getTime();
              setTimeLeft(259200);
              setId(new Date().getTime().toString());
              setStage(0);
            } catch (e) {
              console.log("Store failed: ", e);
            }
          };
          storeData();
        }
      } catch (e) {
        console.log("Read failed: ", e);
      }
    };
    getData();
  }, []);
  async function handleFinish() {
    const storeStage = async () => {
      try {
        console.log("Stage: ", stage + 1);
        await AsyncStorage.setItem("stage", String(stage + 1));
        console.log("Stage Recorded!", stage + 1);
      } catch (e) {
        console.log("Store failed: ", e);
      }
    };
    storeStage();
    let time = new Date().getTime().toString();
    const updateDate = async () => {
      try {
        await AsyncStorage.setItem("timeKey", time);
        console.log("Date Recorded!", time);
      } catch (e) {
        console.log("Failed: ", e);
      }
    };
    await updateDate();
    updateWeeks();

    setStage(stage + 1);
    setId(new Date().getTime().toString());
  }

  return (
    <ScrollView>
      <View style={{}}>
        {/* <Pressable onPress={removeData}>
          <Text>Remove</Text>
        </Pressable> */}
        <Text
          style={{
            marginTop: 40,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          {isKorean ? "다음 자료까지 남은 시간은..." : "Until Next Material..."}
        </Text>
        <View style={{ marginTop: 40 }}>
          <CountDown
            id={id}
            until={timeLeft}
            onFinish={handleFinish}
            size={30}
            timeLabels={
              isKorean
                ? { d: "일", h: "시간", m: "분", s: "초" }
                : { d: "Day", h: "Hour", m: "Min", s: "Sec" }
            }
            timeLabelStyle={{ color: "black", fontWeight: "500", fontSize: 14 }}
          />
        </View>
        <View style={{ marginTop: 40, alignContent: "center" }}>
          {material.map((element, index) => (
            <Pressable
              key={index}
              onPress={() => {
                if (element.isActivated) {
                  console.log(index, stage);
                  if (index === stage) {
                  }
                  return (
                    element.isActivated && navigation.navigate(element.title)
                  );
                }
              }}
            >
              <Text
                style={[
                  { color: element.isActivated ? "#296E85" : "#c0c0c0" },
                  {
                    textDecorationLine: "underline",
                    marginBottom: 25,
                    fontSize: 16,
                    textAlign: "center",
                  },
                ]}
              >
                {element.strategy}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();
export default function Resources() {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={isKorean ? "투자 전략" : "Resource"}
        component={Resource}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen name="Week 1" component={Week1} />
      <Stack.Screen name="Week 2" component={Week2} />
      <Stack.Screen name="Week 3" component={Week3} />
      <Stack.Screen name="Week 4" component={Week4} />
      <Stack.Screen name="Week 5" component={Week5} />
      <Stack.Screen name="Week 6" component={Week6} />
      <Stack.Screen name="Week 7" component={Week7} />
      <Stack.Screen name="Week 8" component={Week8} />
      <Stack.Screen name="Week 9" component={Week9} />
      <Stack.Screen name="Week 10" component={Week10} />
      <Stack.Screen name="Week 11" component={Week11} />
      <Stack.Screen name="Week 12" component={Week12} />
      <Stack.Screen name="Week 13" component={Week13} />
      <Stack.Screen name="Week 14" component={Week14} />
      <Stack.Screen name="Week 15" component={Week15} />
    </Stack.Navigator>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 100,
    borderRadius: 15,
    height: 100,
    alignContent: "flex-end",
  },
});
