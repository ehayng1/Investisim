import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LanguageContext } from "../context/languageContext";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
const data = [
  { label: "English", value: "English" },
  { label: "Korean", value: "Korean" },
];

const DropdownComponent = () => {
  const { isKorean, setIsKorean } = useContext(LanguageContext);
  const [value, setValue] = useState(isKorean ? "Korean" : "English");
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          {isKorean ? "언어" : "Language"}
        </Text>
      );
    }
    return null;
  };

  async function updateLanguage(value) {
    const washingtonRef = doc(db, "users", uniqueId);

    await updateDoc(washingtonRef, {
      language: value,
    });
  }

  useEffect(() => {
    const init = async () => {
      await getId();
      await getLang();
    };
    init();
  }, []);

  const getId = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      uniqueId = user.uid;
    }
  };

  async function getLang() {
    const docRef = doc(db, "users", uniqueId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Lang: ", docSnap.data().language);
      setIsKorean(docSnap.data().language == "Korean");
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "orange" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        // inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Choose your language" : "..."}
        // searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsKorean(item.value == "Korean");
          // setdoc on firebase here
          updateLanguage(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
