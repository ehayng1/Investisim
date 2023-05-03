import AsyncStorage from "@react-native-async-storage/async-storage";

const getId = async () => {
  uniqueId = await AsyncStorage.getItem("uniqueId");
  console.log("Unique ID:", uniqueId);
};

export default {
  UNIQUEID: "ASDASD",
};
