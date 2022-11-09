import React from "react";
import styled from "styled-components";
import StackNavigation from "./navigations/Stack";
import { NavigationContainer } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  background-color: #ff77ff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
  // <Home></Home>;
  // <Container></Container>;
};

export default App;
