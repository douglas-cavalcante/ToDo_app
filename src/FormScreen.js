import React, { Component } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { addItem, updateItem } from "./Service";

export default class FormScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Cadastro"
  });

  constructor(props) {
    super(props);
    if (this.props.navigation.state.params.data) {
      const value = this.props.navigation.state.params.data.item;
      this.state = {
        description: value,
      }
    } else {
      this.state = {
        description: "",
      }
    }
  }

  handleAdd = () => {
    const description = this.state.description;
    if (description) {
      addItem(description).then((response) => {
        this.setState({ description: "" });
        alert("Cadastrado com sucesso");
        this.props.navigation.state.params.refresh();
      });
    } else {
      alert("Preencha o campo de descrição");
    }
  }

  handleUpdate = () => {
    if (this.state.description) {
      if (this.props.navigation.state.params.data.id) {
        updateItem(this.props.navigation.state.params.data.id, this.state.description)
          .then((response) => {
            if (this.props.navigation) {
              this.props.navigation.state.params.refresh()
              alert("Atualizado !!!");
            }
          });
      }
    }
  }

  render() {

    if (!this.props.navigation.state.params.data) {
      return (
        <View style={styles.container}>
          <View>
            <TextInput value={this.state.description} style={styles.input} onChangeText={(description) => this.setState({ description })} />
          </View>
          <View style={{ margin: 10 }}>
            <Button title="Cadastrar" onPress={this.handleAdd} />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View>
            <TextInput value={this.state.description} style={styles.input} onChangeText={(description) => this.setState({ description })} />
          </View>
          <View style={{ margin: 10 }}>
            <Button title="Atualizar" onPress={this.handleUpdate} />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "white"
  },
  input: {
    height: 40,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#1E90FF",
    fontFamily: 'open-sans-regular'
  },
  addButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 5,
    height: 40,
    width: 40,
    alignSelf: "flex-end",
    margin: 10,
  },
  icon: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center"
  },
  updateButton: {
    backgroundColor: "#1E90FF",
    alignSelf: "flex-end",
    margin: 10,
  }

});