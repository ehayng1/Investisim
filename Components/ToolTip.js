import React, { useState } from "react";
import { Text } from "react-native";
import { Tooltip } from "react-native-elements";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ToolTip({ content }) {
  const screenWidth = Dimensions.get("window").width * 0.65;
  // const screenWidth = Dimensions.get("window") * 0.9;
  const [open, setOpen] = useState(false);
  return (
    <Tooltip
      isVisible={open}
      width={screenWidth}
      // width={300}
      height={200}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      popover={<Text style={{ color: "#fff" }}>{content}</Text>}
    >
      <AntDesign name="questioncircle" size={20} color="#b1b3b9" />
    </Tooltip>
  );
}
