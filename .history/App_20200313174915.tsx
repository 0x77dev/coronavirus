import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalConfirmed: "Loading...",
    };
  }

  render() {
    return (
      <View style={styles.container} >
        <Text>{this.state.totalConfirmed}</Text>
      </View>
    );
  }

  async componentDidMount() {
    const totalConfirmedFetch = await fetch("")
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
