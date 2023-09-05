import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export class RNJSX extends Component {
  constructor() {
    super();
    this.state = {
      name: "React Native",
    };
  }

  render() {
    const { name } = this.state;

    return (
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RNJSX;
