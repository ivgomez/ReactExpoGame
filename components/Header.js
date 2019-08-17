import React from "react";
import { View, Text, Platform } from "react-native";
import styled from "styled-components";
import Colors from "../constants/color";

const Header = props => {
  const { title } = props;
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled(View)`
  width: 100%;
  height: 90px;
  padding-top: 36px;
  background-color: ${Platform.OS === "android" ? Colors.primary : "white"};
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled(Text)`
  color: black;
  font-size: 18px;
  font-family: open-sans-bold;
`;
