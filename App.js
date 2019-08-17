import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const configureGameHandler = () => {
    setGuessRound(0);
    setUserNumber(null);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRound(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRound}
        userNumber={userNumber}
        onRestart={configureGameHandler}
      />
    );
  }

  return (
    <Screen>
      <Header title="Guess a Number" />
      {content}
    </Screen>
  );
};

export default App;

const Screen = styled(View)`
  flex: 1;
`;
