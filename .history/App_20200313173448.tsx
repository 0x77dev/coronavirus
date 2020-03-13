import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalConfirmed: "Loading",
    };
  }

  render() {
    return (
      <View style={styles.container} >
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
