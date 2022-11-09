import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  margin: 0 10% 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-top: 35%;
  margin-bottom: 25%;
`;
const StyledText2 = styled.Text`
  color: #3870ff;
  font-size: 30px;
  margin-bottom: 10%;
`;
const Line = styled.View`
  margin-bottom: 10%;
  border: 1px;
  border-color: #3870ff;
  width: 100%;
`;

const Study = ({ navigation }) => {
  return (
    <Container>
      <StyledText style={styles.font_color}>학습하기</StyledText>

      <Line />

      <TouchableOpacity style={styles.button_container}>
        <StyledText2>1.소프트웨어공학</StyledText2>
      </TouchableOpacity>

      <Line />

      <TouchableOpacity style={styles.button_container}>
        <StyledText2>2.소프트웨어개발</StyledText2>
      </TouchableOpacity>

      <Line />

      <TouchableOpacity style={styles.button_container}>
        <StyledText2>3.데이터베이스구축</StyledText2>
      </TouchableOpacity>

      <Line />

      <TouchableOpacity style={styles.button_container}>
        <StyledText2>4.프로그래밍언어활용</StyledText2>
      </TouchableOpacity>

      <Line />

      <TouchableOpacity style={styles.button_container}>
        <StyledText2>5.정보시스템구축</StyledText2>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  button_container: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",

    height: "10%",
  },
  font_color: {
    color: "#3870ff",
  },
});

export default Study;
