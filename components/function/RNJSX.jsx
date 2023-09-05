import React from "react";
import { Text, StyleSheet } from "react-native";

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
};

const Cat = () => {
  return (
    <Text style={styles.textStyle}>
      Hello, I am {getFullName("Rum", "Tum", "Tugger")}!
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 28,
    marginHorizontal: 12,
    fontWeight: "bold",
  },
});

export default Cat;
