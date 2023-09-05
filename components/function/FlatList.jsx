/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const FlatListComponent = () => {
  const data = [
    { key: "Python" },
    { key: "Laravel" },
    { key: "React Native" },
    { key: "React" },
    { key: "JavaScript" },
    { key: "Go" },
    { key: "Kotlin" },
    { key: "Xojo" },
    { key: "Java" },
    { key: "C++" },
    { key: "C" },
    { key: "C#" },
    { key: "TypeScript" },
    { key: "PHP" },
    { key: "Vue" },
    { key: "Angular" },
    { key: "Ember" },
    { key: "Nuxt" },
    { key: "Next" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    width: width,
  },
  item: {
    padding: 10,
    marginHorizontal: 8,
    marginVertical: 8,
    fontSize: 24,
    height: 48,
    width: width * 0.94,
    borderColor: "#17acdf",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    backgroundColor: "#ccc",
  },
});

export default FlatListComponent;
