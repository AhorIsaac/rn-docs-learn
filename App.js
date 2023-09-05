import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HelloWorldApp, RNJSX, Cafe, MyClassNetwork } from "./components/class";
import { HelloWorldApp as HWApp, Cat } from "./components/function";

export default function App() {
  return (
    <View style={styles.container}>
      <Cat />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
