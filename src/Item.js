import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Button, Alert } from "react-native";
import { deleteItem, updateStatusItem } from './Service';

export default class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      done: (props.data.done == "1") ? styles.done : styles.undone,
    };
  }

  checkedItem = () => {
    let state = this.state;
    let done = "sim";
    if (state.done == styles.undone) {
      state.done = styles.done;
      let done = "sim";
    } else {
      state.done = styles.undone;
      let done = "nao";
    }
    updateStatusItem(this.props.data.id, done).then((response) => { console.log(response) });
    this.setState({ state });
  }


  alert = () => {
    Alert.alert(
      this.props.data.item,
      'Deseja realmente excluir ? ',
      [
        { text: 'Cancelar', onPress: () => { }, style: 'cancel' },
        { text: 'Quero excluir', onPress: () => this.excluir() },
      ],
      { cancelable: false }
    )
  }

  excluir = () => {
    deleteItem(this.props.data.id).then((_response) => { this.props.filterList(this.props.data.id); });
  }

  render() {
    return (
      <View style={styles.areaItem}>
        <TouchableHighlight style={{ marginRight: 10, marginLeft: 10, }} onPress={this.checkedItem}>
          <View style={[styles.marcaArea, this.state.done]}>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate("Form", { data: this.props.data, refresh: this.props.refresh })}>
          <Text style={{ textDecorationLine: "underline", fontFamily: 'open-sans-regular' }}>{this.props.data.item}</Text>
        </TouchableHighlight>
        <Button style={styles.deleteButton} title="X" onPress={this.alert} />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  areaItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  marcaArea: {
    height: 40,
    width: 40,
    borderRadius: 10
  },
  undone: {
    backgroundColor: "#CCCCCC"
  },
  done: {
    backgroundColor: "#00FF00"
  },
  deleteButton: {
    width: 40,
    height: 40,
  },
});