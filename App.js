import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Header from "./components/header";
import GameScreen from "./screens/game_screen";
import StartGameScreen from "./screens/start_game_screen";
import GameOverScreen from "./screens/game_over_screen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = selectedNumber => {
    // console.log('inside app.js file and startGameHandler => ' + selectedNumber);
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  const resetGame = () => {
    setUserNumber();
    setGuessRounds(0);
  }

  let gameContent = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    gameContent = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if(guessRounds > 0) {
    gameContent = (
      <GameOverScreen noOfRounds={guessRounds} enteredNumber={userNumber} onResetBtnAct={resetGame}/>
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {gameContent}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
