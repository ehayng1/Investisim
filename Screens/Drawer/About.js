import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { Dimensions } from "react-native";

export default function About() {
  const screenWidth = Dimensions.get("window").width * 0.93;
  const screenHeigth = Dimensions.get("window").height * 0.5;
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
        DREAM is a club that aims to increase opportunities for higher
        education. DREAM has initiated various projects such as book drives and
        sustainability education in pursuit of moving closer towards
        accomplishing its mission.{" "}
      </Text>
    </View>
  );
}
