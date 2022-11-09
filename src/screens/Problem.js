import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  margin: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.View`
  margin-bottom: 5%;
  border: 1px;
  border-color: #3870ff;
  width: 100%;
`;

const Problem = ({ navigation }) => {
  return (
    <Container>
      <Text
        style={{
          fontSize: 40,
          color: "#3870FF",
          marginBottom: "45%",
        }}
      >
        기출문제풀기
      </Text>

      <Line />

      <TouchableOpacity
        style={styles.button_container}
        onPress={() => navigation.navigate("필기기출문제")}
      >
        <Text
          style={{
            fontSize: 30,
            color: "#3870FF",
            marginBottom: "5%",
          }}
        >
          필기 기출문제
        </Text>
      </TouchableOpacity>

      <Line />

      <TouchableOpacity
        style={styles.button_container}
        onPress={() => navigation.navigate("기출문제풀기")}
      >
        <Text style={{ fontSize: 30, color: "#3870FF", marginBottom: "5%" }}>
          실기 기출문제
        </Text>
      </TouchableOpacity>
      <Line />
    </Container>
  );
};

const styles = StyleSheet.create({
  button_container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "18%",
  },
  font_color: {
    color: "#3870ff",
  },
  StyledText: {
    fontSize: "30px",
    marginTop: "35%",
    marginBottom: "25%",
  },
  StyledText2: {
    color: "#3870ff",
    fontSize: "30px",
    marginBottom: "10%",
  },
});

export default Problem;
