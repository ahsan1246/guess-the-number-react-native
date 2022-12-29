import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../components/card";
import Input from "../components/input";
import NumberContainer from "../components/number_container";
import ColorRes from "../constants/color_res";

const StartGameScreen = (props) => {
  const [gameFieldValue, setGameFieldValue] = useState("");
  const [isConfirmed, setConfirmation] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const configureNewGame = () => {};

  const numberInputHandler = (inputText) => {
    setGameFieldValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetBtnAction = () => {
    setGameFieldValue("");
    setConfirmation(false);
  };

  const confirmBtnAction = () => {
    const chosenNumber = parseInt(gameFieldValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Entered Number!",
        "Number should be in between 1 to 99.",
        [{ text: "Ok", style: "destructive", onPress: resetBtnAction }]
      );
      return;
    }
    setConfirmation(true);
    setSelectedNumber(chosenNumber);
    setGameFieldValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (isConfirmed) {
    confirmedOutput = (
      <Card style={styles.summryCardStyle}>
        <Text>Chosen Number</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Start Game"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  // startGame
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.gameTitle}>Start a new game ...</Text>
        <Card style={styles.gameCardStyle}>
          <Text>Select a number</Text>
          <Input
            onChangeText={numberInputHandler}
            value={gameFieldValue}
            styles={styles.inputStyle}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrecct={true}
            keyboardType="number-pad"
            maxLength={2}
          />
          <View style={styles.gameButtonContainerStyle}>
            <View style={styles.buttonStyles}>
              <Button
                title="Reset"
                color={ColorRes.Accent}
                onPress={resetBtnAction}
              />
            </View>
            <View style={styles.buttonStyles}>
              <Button
                title="Confirm"
                color={ColorRes.Primary}
                onPress={confirmBtnAction}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  gameTitle: {
    fontSize: 22,
    marginVertical: 10,
  },
  gameCardStyle: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  gameButtonContainerStyle: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingTop: 15,
  },
  buttonStyles: {
    width: "40%",
  },
  inputStyle: {
    margin: 10,
    width: "90%",
    textAlign: "center",
  },
  summryCardStyle: {
    marginTop: 15,
    alignItems: "center",
  },
});

export default StartGameScreen;
