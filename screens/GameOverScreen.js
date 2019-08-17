import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import styled from "styled-components";
import Colors from "../constants/color";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  const { roundsNumber, userNumber, onRestart } = props;
  return (
    <View style={styles.screen}>
      <TextStyle>The Game is over</TextStyle>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../assets/success.png")}
          //source={{
          //  uri:
          //    "https://www.telegraph.co.uk/content/dam/luxury/2017/04/10/everest_trans_NvBQzQNjv4BqBLexaPiOBa-lbTxCY9do8V30pm-onoJgEvqtpVwvj2k.jpg?imwidth=1400"
          //}}
        />
      </View>
      <TextStyle>
        You phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to get the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </TextStyle>
      <MainButton onPress={onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  highlight: {
    color: Colors.primary
  }
});

export default GameOverScreen;

const TextStyle = styled(Text)`
  font-family: 'open-sans-bold;
`;
