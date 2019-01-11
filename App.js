import React, { Component } from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/HomeScreen";
import AboutScreen from "./src/AboutScreen";

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  }
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;