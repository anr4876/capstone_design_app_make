import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  margin: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80%;
  height: 90%;
`;
const Tproblem = styled.Text`
  font-size: 15px;
  margin-bottom: 20%;
`;
const BContainer = styled.View`
  width: 100%;
  height: 10%;
  background-color: #3870ff;
  border-radius: 30px;
  margin: 5%;
  align-items: center;
  justify-content: center;
`;
const Bproble = styled.Text`
  font-size= 30px;`;
const TNProblem = ({ navigation }) => {
  return (
    <Container>
      <Tproblem>
        1.물리적 데이터베이스를 설계하는 전 단계로서, 데이터 모델링이라 불리는
        데이터베이스 설계 단계는?
      </Tproblem>
      <Tproblem></Tproblem>
      <BContainer>
        <TouchableOpacity>
          <Bproble>1. 개념적 데이터베이스 설계</Bproble>
        </TouchableOpacity>
      </BContainer>
      <BContainer>
        <TouchableOpacity>
          <Bproble>2. 논리적 데이터베이스 설계</Bproble>
        </TouchableOpacity>
      </BContainer>
      <BContainer>
        <TouchableOpacity>
          <Bproble>3. 정보 모델링</Bproble>
        </TouchableOpacity>
      </BContainer>
      <BContainer>
        <TouchableOpacity>
          <Bproble>4. 데이터베이스 구현</Bproble>
        </TouchableOpacity>
      </BContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  pbutton: {
    backgroundColor: "#464666",
    width: "100%",
    height: "10%",
  },
});

export default TNProblem;
