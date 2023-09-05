import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";

const { width, height } = Dimensions.get("window");

const FunctionalNetwork = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Movies </Text>
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"#e83e8c"} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {" "}
              {item.title}, {item.releaseYear}{" "}
            </Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28,
    width: 1 * width,
    height: 1 * height,
    backgroundColor: "#fff",
  },
  heading: {
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
    marginHorizontal: 4,
    marginVertical: 8,
    fontSize: 24,
    height: height * 0.1,
    width: width * 0.94,
    borderColor: "#17acdf",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
  },
});

export default FunctionalNetwork;
