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
  margin-bottom: 10%;
  border: 1px;
  border-color: #3870ff;
  width: 100%;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <Text
        style={{
          fontSize: 40,
          color: "#3870FF",
          marginTop: "20%",
          marginBottom: "30%",
        }}
      >
        정보처기사
      </Text>

      <Line />

      <TouchableOpacity
        style={styles.button_container}
        onPress={() => navigation.navigate("학습하기")}
      >
        <Text style={{ fontSize: 25, color: "#3870FF", marginBottom: "10%" }}>
          학습하기
        </Text>
      </TouchableOpacity>

      <Line />

      <TouchableOpacity
        style={styles.button_container}
        onPress={() => navigation.navigate("기출문제풀기")}
      >
        <Text style={{ fontSize: 25, color: "#3870FF", marginBottom: "10%" }}>
          기출문제풀기
        </Text>
      </TouchableOpacity>

      <Line />

      <TouchableOpacity style={styles.button_container}>
        <Text style={{ fontSize: 25, color: "#3870FF", marginBottom: "10%" }}>
          실전모의고사
        </Text>
      </TouchableOpacity>

      <Line />

      <TouchableOpacity style={styles.button_container}>
        <Text style={{ fontSize: 25, color: "#3870FF", marginBottom: "10%" }}>
          오답노트
        </Text>
      </TouchableOpacity>

      <Line />

      <TouchableOpacity style={styles.button_container}>
        <Text style={{ fontSize: 25, color: "#3870FF", marginBottom: "10%" }}>
          통계보기
        </Text>
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

export default Home;
