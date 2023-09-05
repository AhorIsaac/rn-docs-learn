import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

class Cat extends Component {
  state = { isHungry: true };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          I am {this.props.name}, and I am
          {this.state.isHungry ? " hungry" : " full"}!
        </Text>
        <Button
          onPress={() => {
            this.setState({ isHungry: false });
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"
          }
        />
      </View>
    );
  }
}

class Cafe extends Component {
  render() {
    return (
      <>
        <Cat name="Munkustrap" />
        <Cat name="Spot" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 36,
    borderRadius: 12,
    borderColor: "#aaa",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 4,
  },
});

export default Cafe;
