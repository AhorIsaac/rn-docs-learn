import React from "react";
import { Text, View } from "react-native";

const Anim = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View style={{ marginTop: 48, padding: 16 }}>
      <Anim name="Maru" />
      <Anim name="Jellylorum" />
      <Anim name="Spot" />
    </View>
  );
};

export default Cafe;
