import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useEffect, createContext, useContext } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";
import StockTab from "./Screens/Stock";
import Home from "./Screens/Home";
import TradeTab from "./Screens/Trade";
import Leaderboard from "./Screens/Leaderboard";
import Resources from "./Screens/Resources";
import About from "./Screens/Drawer/About";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Profile from "./Screens/Drawer/Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { LanguageContext } from "./context/languageContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const screenWidth = Dimensions.get("window") * 0.3;
const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#D84315",
    background: "white",
  },
};

export function MyTabs({ navigation, route }) {
  // console.log("nav: ", navigation);
  // console.log("route: ", route);
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#E64A19",
      }}
    >
      <Tab.Screen
        name={isKorean ? "홈" : "Home"}
        component={Home}
        options={{
          // headerShown: false,
          headerTitleAlign: "center",
          tabBarLabel: isKorean ? "홈" : "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        // name={isKorean ? "주식시장" : "Stock"}
        name="Stock"
        component={StockTab}
        options={{
          headerTitle: isKorean ? "주식시장" : "Stock",
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabel: isKorean ? "주식시장" : "Stock",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-timeline-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        // name={isKorean ? "내 거리" : "Trade"}
        name="Trade"
        component={TradeTab}
        options={{
          headerTitlee: isKorean ? "내 거리" : "Trade",
          headerShown: false,
          tabBarLabel: isKorean ? "내 거리" : "Trade",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="swap-vertical"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          headerTitle: isKorean ? "랭킹" : "Leaderboard",
          tabBarLabel: isKorean ? "랭킹" : "Leaderboard",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={isKorean ? "투자 전략" : "Resources"}
        component={Resources}
        options={{
          headerShown: false,
          tabBarLabel: isKorean ? "투자 전략" : "Resources",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="paperclip"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const { isKorean, setIsKorean } = useContext(LanguageContext);

  useEffect(() => {
    const auth = getAuth();
    const loginCheck = async () => {
      const user = auth.currentUser;
      if (user) {
        setisLoggedIn(true);
        console.log("Logged in: ", isLoggedIn);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
      } else {
        // No user is signed in.
      }
    };
    loginCheck();
  }, []);
  return (
    <Drawer.Navigator
      initialRouteName={isLoggedIn ? "Home" : "Login"}
      screenOptions={({ navigation }) => ({
        // drawerIcon: ({ size, color }) => (
        //   <MaterialCommunityIcons name="menu" color="blue" size={size} />
        // ),
        headerLeft: () => (
          <MaterialCommunityIcons
            name="menu"
            color="#D84315"
            size={25}
            style={{ marginLeft: "5%" }}
            onPress={navigation.toggleDrawer}
          />
        ),
        // drawerActiveTintColor: "black",
      })}
    >
      <Drawer.Screen
        name={isKorean ? "홈" : "Home"}
        component={MyTabs}
        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color="#E64A19" size={size} />
          ),
          drawerLabel: isKorean ? "홈" : "Home",
          title: "Invesitism",
          headerTitleAlign: "center",
          headerStyle: {
            // removes the border bottom line of DREAM
            shadowColor: "transparent",
          },
          headerRight: ({ onPress }) => (
            <Image
              style={{
                marginRight: "10%",
                width: 40,
                height: 40,
                borderRadius: 15,
              }}
              source={require("./data/logo.png")}
            />
          ),
          // headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Drawer.Screen
        name={isKorean ? "프로필" : "User Profile"}
        component={Profile}
        options={{
          drawerIcon: ({ size }) => (
            <FontAwesome name="user-circle" size={size} color="#E64A19" />
          ),
          drawerLabel: isKorean ? "프로필" : "User Profile",
        }}
      />
      <Drawer.Screen
        name={isKorean ? "DREAM 클럽" : "About Us"}
        component={About}
        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="information-outline"
              color="#E64A19"
              size={size}
            />
          ),
          drawerLabel: isKorean ? "DREAM 클럽" : "About Us",
        }}
      />

      <Drawer.Screen
        // name={isKorean ? "로그인" : "Login"}
        name="Login"
        component={Login}
        options={{
          //disables swiping from left to prevent user naviagation before login or sign up.
          swipeEdgeWidth: 0,
          // uncomment line below when testing is over to block user from navigating to home before login.
          // shows hamburger menu
          headerShown: false,
          drawerLabel: "Login / Sign Up",
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons name="login" color="#E64A19" size={size} />
          ),
          //deletes from sidebar
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="SignUp"
        component={SignUp}
        options={{
          //disables swiping from left to prevent user naviagation before login or sign up.
          swipeEdgeWidth: 0,
          headerShown: false,
          drawerLabel: "Sign Up",
          //deletes from sidebar
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isKorean, setIsKorean] = useState(false);
  return (
    <NavigationContainer theme={MyTheme}>
      <LanguageContext.Provider value={{ isKorean, setIsKorean }}>
        <MyDrawer>
          <MyTabs />
        </MyDrawer>
      </LanguageContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
