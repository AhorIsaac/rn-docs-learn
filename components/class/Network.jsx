import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

class MyClassNetwork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async getMovies() {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      this.setState({ data: json.movies });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Movies</Text>
        {isLoading ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={styles.item}>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    flex: 1,
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
    backgroundColor: "silver",
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

export default MyClassNetwork;
