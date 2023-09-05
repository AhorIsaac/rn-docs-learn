import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const PizzaTranslator = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Type here to translate "
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
        keyboardType="default"
        editable={true}
      />
      <Text style={styles.textStyle}>
        {new String(text)
          .split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderColor: "midnightblue",
    borderWidth: 1,
    width: width * 0.9,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 6,
    borderRadius: 8,
  },
  textStyle: {
    padding: 10,
    fontSize: 42,
  },
  main: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PizzaTranslator;
