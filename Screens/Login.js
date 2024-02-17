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
import {
  getAuth,
  signInWithEmailAndPassword,
  currentUser,
} from "firebase/auth";
import { LanguageContext } from "../context/languageContext";
const auth = getAuth();

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setError] = useState(false);

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

    // Delay the registration of the event listener
    const timeoutId = setTimeout(() => {
      BackHandler.addEventListener("hardwareBackPress", backAction);
    }, 1000); // Adjust the delay time as needed

    return () => {
      clearTimeout(timeoutId);
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  const login = () => {
    if (email == "") {
      {
        isKorean
          ? alert("이메일을 입력해 주세요")
          : alert("Please enter an email.");
        return;
      }
    } else if (password == "") {
      {
        isKorean
          ? alert("비밀번호를 입력해 주세요")
          : alert("Please input a password.");
        return;
      }
    }
    setLoading(true);
    console.log("Logging In");
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const setId = async (id) => {
          await AsyncStorage.setItem("uniqueId", id);
        };
        console.log("Logged In");
        console.log(props.navigation);

        props.navigation.reset({
          index: 0,
          routes: [{ name: isKorean ? "홈" : "Home" }],
        });
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == "auth/invalid-email") {
          {
            isKorean
              ? alert("이메일 형식이 올바르지 않습니다.")
              : alert("Email format is not correct.");
          }
        } else if (errorCode == "auth/user-not-found") {
          {
            isKorean
              ? alert("이메일이 존재하지 않습니다.")
              : alert("Email does not exist!");
          }
        } else if (errorCode == "auth/wrong-password") {
          {
            isKorean
              ? alert("비밀번호가 올바르지 않습니다.")
              : alert("Incorrect Password.");
          }
        }
        setLoading(false);
        console.log(errorCode);
      });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          marginLeft: 20,
          marginBottom: "5%",
        }}
      >
        {isKorean ? "로그인" : "Login"}
      </Text>
      <TextInput
        style={{
          backgroundColor: "#EEEEEE",
          padding: 15,
          fontSize: 15,
          borderRadius: 15,
          marginHorizontal: 20,
        }}
        placeholder={isKorean ? "이메일 주소" : "Email"}
        autoCapitalize={"none"}
        onChangeText={(e) => {
          setEmail(e);
        }}
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
        secureTextEntry={true}
        placeholder={isKorean ? "비밀번호" : "Password"}
        autoCapitalize={"none"}
        onChangeText={(e) => {
          setPassword(e);
        }}
        onChange={() => {
          setPasswordError("");
        }}
      ></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: "#537FE7",
          //   backgroundColor: "#E64A19",
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          padding: 15,
          borderRadius: 15,
        }}
        onPress={() => {
          login();
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
            {isKorean ? "로그인" : "Login"}
            {/* Login */}
          </Text>
        )}
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          marginTop: "3%",
        }}
      >
        {isKorean ? "계정이 없으신가요?" : "Don't have an account?"}
        <Text
          style={{ fontWeight: "bold" }}
          onPress={() => {
            props.navigation.navigate("SignUp");
          }}
        >
          {" "}
          {isKorean ? "회원가입을 해주세요." : "Sign Up"}
        </Text>
      </Text>
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
