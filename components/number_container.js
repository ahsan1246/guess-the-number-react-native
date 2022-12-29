import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorRes from "../constants/color_res";

const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainerStyle}>
      <Text style={styles.numberTextStyle}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainerStyle: {
    borderWidth: 2,
    borderColor: ColorRes.Accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  numberTextStyle: {
    color: ColorRes.Accent,
    fontSize: 40,
  },
});

export default NumberContainer;
