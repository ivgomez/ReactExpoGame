import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import styled from "styled-components";
import Colors from "../constants/color";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  const { roundsNumber, userNumber, onRestart } = props;
  return (
    <ScrollView>
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
        <View style={styles.resultContainer}>
          <TextStyle>
            You phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>.
          </TextStyle>
        </View>
        <MainButton onPress={onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;

const TextStyle = styled(Text)`
  text-align: center;
  font-size: ${Dimensions.get("window").height < 400 ? "16px" : "20px"};
`;
