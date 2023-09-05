import React from "react";
import { SectionList, StyleSheet, Text, View, Dimensions } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

const SectionListBasics = () => {
  const sections = [
    { title: "PHP", data: ["Laravel", "Symphony", "CodeIgniter", "Swoole"] },
    { title: "JavaScript", data: ["React", "Angular", "Vue", "Ember"] },
    { title: "Python", data: ["CherryPy", "Django", "Flask", "Tkinter"] },
  ];

  return (
    <SectionList
      sections={sections}
      renderItem={({ item }) => (
        <Text style={styles.item}>
          {" "}
          <MaterialCommunityIcons
            name="chevron-right-box"
            color="black"
            size={16}
          />{" "}
          {item}
        </Text>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}> {section.title}</Text>
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    marginVertical: 28,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 28,
    fontWeight: "bold",
    color: "tomato",
  },
  item: {
    padding: 10,
    marginHorizontal: 8,
    marginVertical: 8,
    fontSize: 24,
    height: 48,
    width: width * 0.94,
    color: "#17acdf",
  },
});

export default SectionListBasics;
