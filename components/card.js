import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.cardStyle, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    shadowColor: "black",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
  },
});

export default Card;
