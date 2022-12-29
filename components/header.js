import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorRes from "../constants/color_res";

const Header = (props) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTitleStyle}> {props.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    width: "100%",
    height: 90,
    paddingTop: 40,
    backgroundColor: ColorRes.Primary,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitleStyle: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

export default Header;
