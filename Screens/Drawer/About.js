import { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { Dimensions } from "react-native";
import { LanguageContext } from "../../context/languageContext";
LanguageContext;
export default function About() {
  const screenWidth = Dimensions.get("window").width * 0.93;
  const screenHeigth = Dimensions.get("window").height * 0.5;
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <View style={{ marginHorizontal: 15, marginTop: 20 }}>
      <Image
        style={{
          // marginRight: "10%",
          width: screenWidth,
          height: screenHeigth,
          borderRadius: 5,
        }}
        // source={require("./data/logo.png")}
        source={require("../../data/logo.png")}
      />
      <Text style={{ marginTop: 20, fontSize: 16, color: "#5A5A5A" }}>
        {isKorean
          ? "DREAM은 고등 교육의 기회를 확대할 수 있도록 돕고자 하는 고등학생들로 구성된 클럽입니다. 본 클럽은 도서 기부와 지속 가능 교육과 같은 다양한 프로젝트를 시작으로 DREAM의 미션을 달성하기 위해 한 발 더 나아가고자 합니다. Funducate 모바일 어플리케이션은 주식 투자 학습 및 연습을 위한 가상의 주식 거래소로, 주식을 막연히 어렵게 느끼고 있는 사람들에게 실제 데이터를 활용해 주식 투자를 연습할 수 있는 기회를 제공하기 위해 개발되었습니다."
          : "DREAM is a club that aims to increase opportunities for higher education. DREAM has initiated various projects such as book drives and sustainability education in pursuit of moving closer towards accomplishing its mission."}{" "}
      </Text>
    </View>
  );
}
