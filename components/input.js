import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.inputFieldStyle, ...props.styles }}
    />
  );
};

const styles = StyleSheet.create({
  inputFieldStyle: {
    height: 45,
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 1,
    minWidth: "40%",
    paddingHorizontal: 10,
  },
});

export default Input;
