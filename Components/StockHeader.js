import { Text, View } from "react-native";
import { LanguageContext } from "../context/languageContext";
import React, { useContext } from "react";
export default function StockHeader() {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 5,
        color: "#808080",
      }}
    >
      <Text style={{ color: "#808080", flex: 3 }}>
        {" "}
        {isKorean ? "종목" : "Asset"}
      </Text>
      {/* <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
        }}
      > */}
      <Text style={{ color: "#808080", flex: 3 }}>
        {" "}
        {isKorean ? "가격" : "Price"}
      </Text>
      <Text style={{ color: "#808080", flex: 2 }}>
        {" "}
        {isKorean ? "일" : "Daily"}
      </Text>
      {/* </View> */}
    </View>
  );
}
