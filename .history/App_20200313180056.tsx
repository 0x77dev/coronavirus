import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
        <Text style={{ fontSize: 14 }}>#nCoV-2019</Text>
        <Text style={{ fontSize: 32 }}>Total Confirmed</Text>
        {/* @ts-ignore */}
        <Text style={{ fontSize: 48 }}>{this.state.totalConfirmed}</Text>
        <Text />
        <Button title="Refresh" onPress={this.componentDidMount}>Refresh</Button>
        <Text />
        <Text style={{ fontSize: 10 }}>Developed by @0x77dev</Text>
        <Text style={{ fontSize: 10 }}>marinenko.rf.gd</Text>
        <Text style={{ fontSize: 10 }}>github.com/0x77dev</Text>
        <Text style={{ fontSize: 10 }}>github.com/0x77dev</Text>
      </View>
    );
  }

  async componentDidMount() {
    const totalConfirmedFetch = await fetch("https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Z7biAeD8PAkqgmWhxG2A/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true");
    const totalConfirmedFetchJSON = await totalConfirmedFetch.json();
    //@ts-ignore
    this.setState({ totalConfirmed: totalConfirmedFetchJSON.features[0].attributes.value });
    console.log(this.setState, totalConfirmedFetchJSON)
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
