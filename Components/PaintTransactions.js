import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function PaintTransctions({ symbol, amount, name }) {
  return (
    <View
      style={{
        backgroundColor: "#EDE9D0",
        maxHeight: hp("8%"),
        borderRadius: 10,
        marginBottom: hp("1%"),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: hp("1%"),
        }}
      >
        <View
          style={{
            flexGrow: 1,
            marginLeft: wp("3%"),
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginTop: hp("1%"),
              marginBottom: hp("0.5%"),
            }}
          >
            {symbol}
          </Text>
          <Text
            style={{ fontSize: 14, color: "#5A5742", marginLeft: wp("1.5%") }}
          >
            {name}
          </Text>
        </View>
        <Text
          style={{
            marginTop: 10,
            // color: "#9A0000",
            // color: "#006100",
            color: amount > 0 ? "#9A0000" : "#006100",
            fontWeight: "600",
            fontSize: 18,
            justifyContent: "flex-end",
            marginRight: 20,
          }}
        >
          {amount > 0 ? "-" : "+"} $ {Math.abs(amount).toFixed(2)}
        </Text>
      </View>
    </View>
  );
}
