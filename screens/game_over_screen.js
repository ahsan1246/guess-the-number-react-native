import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text> Game is Over </Text>
      <Text> Number of Rounds: {props.noOfRounds} </Text>
      <Text> Entered was: {props.enteredNumber} </Text>
      <Button title='New Game' onPress={props.onResetBtnAct}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
