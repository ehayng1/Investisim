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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StockDetail from "../Components/StockDetail";
import { getAuth } from "firebase/auth";
import { db } from "../firebaseConfig";
export function WhatIf() {
  return (
    <>
      <Text>What if?</Text>
    </>
  );
}

const Stack = createNativeStackNavigator();
export default function TradeTab() {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={isKorean ? "만약" : "What If"}
        component={WhatIf}
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
