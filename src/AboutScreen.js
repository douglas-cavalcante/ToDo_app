import React from "react";
import { View, Text } from "react-native";

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ padding: 50 }}>
        <Text style={{ fontFamily: 'open-sans-regular' }}>By Henrique Douglas Cavalcante Costa</Text>
      </View>
    );
  }
}
