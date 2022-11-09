import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Study from "../screens/Study";
import Problem from "../screens/Problem";
import TNProblem from "../screens/TNProblem";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="메인 화면" component={Home} />
      <Stack.Screen name="학습하기" component={Study} />
      <Stack.Screen name="기출문제풀기" component={Problem} />
      <Stack.Screen name="필기기출문제" component={TNProblem} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
