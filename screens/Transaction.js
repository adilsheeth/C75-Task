import * as React from "react";
import { Text, View } from "react-native";

class Transaction extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is the Transaction screen.</Text>
      </View>
    );
  }
}

export default Transaction;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
};
