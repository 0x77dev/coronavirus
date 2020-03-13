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
    let totalConfirmedFetch = await fetch("https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Z7biAeD8PAkqgmWhxG2A/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true");
    totalConfirmedFetch = await totalConfirmedFetch.json();
    this.setSta
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
