import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{{axios.defa}}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
