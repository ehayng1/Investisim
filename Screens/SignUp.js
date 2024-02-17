import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
  Alert,
} from "react-native";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  currentUser,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LanguageContext } from "../context/languageContext";

const auth = getAuth();

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const { isKorean, setIsKorean } = useContext(LanguageContext);
  // if user presses the back button, asks for exit
  useEffect(() => {
    const backAction = () => {
      {
        isKorean
          ? Alert.alert("잠깐!", "앱을 종료하길 원하십니까?", [
              {
                text: "아니요",
                onPress: () => null,
                style: "cancel",
              },
              { text: "예", onPress: () => BackHandler.exitApp() },
            ])
          : Alert.alert("Hold on!", "Are you sure you want to leave?", [
              {
                text: "Cancel",
                onPress: () => null,
                style: "cancel",
              },
              { text: "YES", onPress: () => BackHandler.exitApp() },
            ]);
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const getUserId = async function uploadBeforePromise() {
    return new Promise(function (resolve, reject) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user.uid);
        } else {
        }
      });
    });
  };

  const register = () => {
    if (email == "") {
      {
        isKorean
          ? alert("이메일을 입력해 주세요.")
          : alert("Please enter an email.");
        return;
      }
    } else if (name == "") {
      isKorean
        ? alert("이름을 입력해 주세요.")
        : alert("Please enter your name.");
      return;
    } else if (password == "") {
      isKorean
        ? alert("비밀번호를 입력해 주세요.")
        : alert("Please enter your password.");
      return;
    } else if (confirmPassword == "") {
      isKorean
        ? alert("비밀번호 확인을 입력해 주세요.")
        : setConfirmPasswordError("Please confirm your password.");
      return;
    } else if (password != confirmPassword) {
      isKorean
        ? alert("두 비밀번호가 다릅니다.")
        : setConfirmPasswordError("Passwords does not match.");
      return;
    }

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log("The user account is created.");
        const id = await getUserId();
        const uniqueId = id;
        console.log("ID: ", uniqueId);
        await setDoc(doc(db, "users", uniqueId), {
          email: email,
          name: name,
          balance: 5000,
          balanceHistory: [5000, 5000, 5000, 5000, 5000],
          revenueHistory: [5000, 5000, 5000, 5000, 5000],
          weeklyProfit: 0,
        });
        await setDoc(doc(db, "transaction", uniqueId), {
          history: [],
        });
        await setDoc(doc(db, "purchaseHistory", uniqueId), {});
        await setDoc(doc(db, "holdingStack", uniqueId), {});
        const init = async () => {};
        // props.navigation.reset({
        //   index: 0,
        //   routes: [{ name: "Login" }],
        // });
        props.navigation.navigate("Login");
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/email-already-in-use") {
          {
            isKorean
              ? alert("이메일이 이미 존재합니다.")
              : alert("Email is already being used.");
          }
        } else if (errorCode == "auth/invalid-email") {
          isKorean
            ? alert("이메일 형식이 올바르지 않습니다.")
            : alert("Email format is not correct.");
        } else if (errorCode == "auth/weak-password") {
          isKorean
            ? alert("더 복잡한 비밀번호를 입력해주세요.")
            : alert("Password is too weak.");
        }
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {/* <KeyboardAwareScrollView> */}
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          marginLeft: 20,
          marginBottom: "5%",
          marginTop: "20%",
        }}
      >
        {isKorean ? "회원가입" : "Sign Up"}
      </Text>
      <TextInput
        style={{
          backgroundColor: "#EEEEEE",
          padding: 15,
          fontSize: 15,
          // marginTop: 50,
          borderRadius: 15,
          marginHorizontal: 20,
        }}
        autoCapitalize={"none"}
        placeholder={isKorean ? "이메일 주소" : "Email"}
        onChangeText={setEmail}
        onChange={() => {
          setEmailError("");
        }}
      ></TextInput>
      <TextInput
        style={{
          backgroundColor: "#EEEEEE",
          padding: 15,
          fontSize: 15,
          borderRadius: 15,
          marginTop: 20,
          marginHorizontal: 20,
        }}
        autoCapitalize={"none"}
        placeholder={isKorean ? "이름" : "Name"}
        onChangeText={setName}
        onChange={() => {
          setNameError("");
        }}
      ></TextInput>
      <TextInput
        style={{
          backgroundColor: "#EEEEEE",
          padding: 15,
          fontSize: 15,
          marginTop: 20,
          borderRadius: 15,
          marginHorizontal: 20,
        }}
        autoCapitalize={"none"}
        onChange={() => {
          setPasswordError("");
        }}
        secureTextEntry={true}
        placeholder={isKorean ? "비밀번호" : "Password"}
        onChangeText={setPassword}
      ></TextInput>
      <TextInput
        style={{
          backgroundColor: "#EEEEEE",
          padding: 15,
          fontSize: 15,
          marginTop: 20,
          borderRadius: 15,
          marginHorizontal: 20,
        }}
        autoCapitalize={"none"}
        onChange={() => {
          setConfirmPasswordError("");
        }}
        secureTextEntry={true}
        placeholder={isKorean ? "비밀번호 확인" : "Confirm Password"}
        onChangeText={setConfirmPassword}
      ></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: "#537FE7",
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          padding: 15,
          borderRadius: 15,
        }}
        onPress={() => {
          register();
        }}
      >
        {loading ? (
          <ActivityIndicator color={"white"} />
        ) : (
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {isKorean ? "완료" : "Sign Up"}
          </Text>
        )}
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          marginTop: "3%",
        }}
      >
        {isKorean ? "이미 계정이 있으신가요?" : "Already have an account?"}

        <Text
          style={{ fontWeight: "bold" }}
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        >
          {" "}
          {isKorean ? "로그인하세요" : "Login"}
        </Text>
      </Text>
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
