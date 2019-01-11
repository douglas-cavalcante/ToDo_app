import React from "react";
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableHighlight } from "react-native";
import Item from "./Item";
import axios from "axios";
import { Font } from 'expo';

export default class ListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      description: "",
      fontLoaded: false,
    }
  }

  refresh = () => {
    axios.get("https://b7web.com.br/todo/42387")
      .then((response) => {
        let state = this.state;
        state.list = response.data.todo;
        this.setState(state);
      });
  }

  load = (id) => {
    let state = this.state;
    state.list = state.list.filter(item => item.id !== id);
    this.setState(state);
  }

  handleOnPress = () => {
    this.props.navigation.navigate("Form", { refresh: this.refresh });
  }

  async componentDidMount() {
    await this.refresh();
    await Font.loadAsync({
      'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.areaButton}>
          <TouchableHighlight underlayColor="#f5f5dc" onPress={this.handleOnPress}>
            <View style={styles.buttonAddForm} >
              <Text style={styles.icon}>
                +
            </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={this.state.list}
            renderItem={({ item }) => <Item data={item} refresh={this.refresh} navigation={this.props.navigation} load={this.load} url="https://b7web.com.br/todo/42387" />}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  areaButton: {
    alignItems: "flex-end",
  },
  buttonAddForm: {
    backgroundColor: "#1E90FF",
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  icon: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center"
  },
  listContainer: {
    marginTop: 20,
  }
});
