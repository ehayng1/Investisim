import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  ActivityIndicator,
  Linking,
  Alert,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { db } from "../../firebaseConfig";
import {
  collection,
  onSnapShot,
  where,
  query,
  doc,
  addDoc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, deleteUser, signOut } from "firebase/auth";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LanguageContext } from "../../context/languageContext";
import DropdownComponent from "../../Components/Dropdown";

export default function Profile({ route, navigation }) {
  const [userData, setUserData] = React.useState({
    balance: 0,
    balanceHistory: [0, 0, 0],
    profit: 0,
    firstTrade: false,
    weeklyProfit: 0,
  });
  const auth = getAuth();
  const user = auth.currentUser;
  const { isKorean, setIsKorean } = useContext(LanguageContext);

  function removeTimerData() {
    const init = async () => {
      await AsyncStorage.removeItem("timekey");
      let tempTime = await AsyncStorage.getItem("timekey");
      console.log(tempTime);
      await AsyncStorage.setItem("stage", "0");
      let tempStage = await AsyncStorage.getItem("stage");
      console.log("Stage Init: ", tempStage);
    };
    init();
  }
  async function initialize() {
    const q = query(collection(db, "users"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
      removeAllData(doc.id);
    });
  }

  async function removeAllData(id) {
    // uniqueId = "rhCP6eLfbkdFx7LptV0MOM4tIhl1";
    const stockRef = doc(db, "holdingStack", id);
    const historyRef = doc(db, "purchaseHistory", id);
    const transcationRef = doc(db, "transaction", id);
    const userRef = doc(db, "users", id);

    // initialize with empty object
    await setDoc(stockRef, {});
    await setDoc(historyRef, {});
    await setDoc(transcationRef, {});
    await updateDoc(userRef, {
      balance: 5000,
      balanceHistory: [5000, 5000, 5000, 5000, 5000],
      revenueHistory: [5000, 5000, 5000, 5000, 5000],
      weeklyProfit: 0,
    });
  }

  const deleteUserAccount = async () => {
    console.log(user);
    Alert.alert(
      isKorean
        ? "잠깐! 계정 삭제를 원하는 것이 확실한가요? (취소/예)"
        : "Hold on!, Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "YES",
          onPress: () =>
            deleteUser(user)
              .then(() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Login" }],
                });
                console.log("Successfully deleted user");
              })
              .catch((error) => {
                console.log("Error deleting user:", error);
              }),
        },
      ]
    );
  };

  const getUserData = async () => {
    const docRef = doc(db, "transaction", uniqueId);
    const docSnap = await getDoc(docRef);
    const userRef = doc(db, "users", uniqueId);
    const userSnap = await getDoc(userRef);
    console.log("Data: ", userSnap.data());
    if (userSnap.exists()) {
      setUserData({ ...userSnap.data() });
    } else {
      console.log("No such document!");
    }
  };
  const getId = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      uniqueId = user.uid;
    }
    console.log("Unique ID:", uniqueId);
  };
  const signOut = async () => {
    const auth = getAuth();

    auth.signOut();
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const init = async () => {
      await getId();
      await getUserData();
    };
    init();
  }, []);

  return (
    <ScrollView>
      <View style={{ marginLeft: 20 }}></View>
      <View style={{ marginHorizontal: 20 }}>
        {/* <Button title="Initialize ALL user data" onPress={initialize}></Button> */}
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: hp("5%"),
            marginBottom: hp("1%"),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: hp("3%"),
              fontWeight: "600",

              color: "#151B8D",
            }}
          >
            {userData.name}
          </Text>
          <Text
            style={{
              alignSelf: "flex-end",
              marginLeft: wp("2%"),
              fontSize: hp("2%"),
              fontWeight: "500",
              color: "#151B8D",
            }}
          >
            $ {userData.balance.toFixed(2)}
          </Text>
        </View>

        <Text
          style={{
            textAlign: "center",
            color: "#D84315",
            color: "#808080",
            fontSize: hp("1.5%"),
            marginBottom: hp("2%"),
          }}
        >
          {userData.email}
        </Text>

        <View
          style={{
            marginTop: hp("2%"),
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="privacy-tip" size={24} color="black" />
          <Text
            style={{
              fontSize: wp("4%"),
              fontWeight: "600",
              marginLeft: wp("5%"),
              color: "black",
              flex: 1,
            }}
          >
            {isKorean ? "보안정책" : "Privacy Policy"}
          </Text>
          <MaterialIcons
            onPress={() =>
              Linking.openURL(
                "https://www.privacypolicies.com/live/33f29d6f-774b-493e-a9c3-76a0b0fd3620"
              )
            }
            name="keyboard-arrow-right"
            size={24}
            color="black"
          />
        </View>

        <View
          style={{
            marginTop: hp("2%"),
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="logout" size={24} color="black" />
          <Text
            style={{
              fontSize: wp("4%"),
              fontWeight: "600",
              marginLeft: wp("5%"),
              color: "black",
              flex: 1,
            }}
          >
            {isKorean ? "로그아웃" : "Sign Out"}
          </Text>
          <MaterialIcons
            onPress={signOut}
            name="keyboard-arrow-right"
            size={24}
            color="black"
          />
        </View>

        <View
          style={{
            marginTop: hp("2%"),
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="user-alt-slash" size={20} color="black" />
          <Text
            style={{
              fontSize: wp("4%"),
              fontWeight: "600",
              marginLeft: wp("5%"),
              color: "black",
              flex: 1,
            }}
          >
            {isKorean ? "계정삭제" : "Delete Account"}
          </Text>
          <MaterialIcons
            onPress={deleteUserAccount}
            name="keyboard-arrow-right"
            size={24}
            color="black"
          />
        </View>
        <View>
          <DropdownComponent></DropdownComponent>
        </View>
      </View>
    </ScrollView>
  );
}
