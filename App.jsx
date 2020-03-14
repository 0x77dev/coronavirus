import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalConfirmed: "Loading...",
      totalDeaths: "Loading...",
      totalRecovered: "Loading..."
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 14 }}>#nCoV-2019</Text>
        <Text style={{ fontSize: 32 }}>Total Confirmed</Text>
        <Text style={{ fontSize: 48 }}>{this.state.totalConfirmed}</Text>
        <Text />
        <Text style={{ fontSize: 32 }}>Total Deaths</Text>
        <Text style={{ fontSize: 48 }}>{this.state.totalDeaths}</Text>
        <Text />
        <Text />
        <Text style={{ fontSize: 32 }}>Total Recovered</Text>
        <Text style={{ fontSize: 48 }}>{this.state.totalRecovered}</Text>
        <Text />
        <Text />
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          Developed by Misha Marinenko @0x77dev
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          Data from arcgis.com
        </Text>
        <Text style={{ fontSize: 10 }}>marinenko.rf.gd</Text>
        <Text style={{ fontSize: 10 }}>github.com/0x77dev</Text>
      </View>
    );
  }
  async loadData(vm) {
    const totalConfirmedFetch = await fetch(
      "https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Z7biAeD8PAkqgmWhxG2A/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true"
    );
    const totalConfirmedFetchJSON = await totalConfirmedFetch.json();
    const totalDeathsFetch = await fetch(
      "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true"
    );
    const totalDeathsFetchJSON = await totalDeathsFetch.json();
    const totalRecoveredFetch = await fetch(
      "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true"
    );
    const totalRecoveredFetchJSON = await totalRecoveredFetch.json();
    vm.setState({
      totalConfirmed: totalConfirmedFetchJSON.features[0].attributes.value,
      totalDeaths: totalDeathsFetchJSON.features[0].attributes.value,
      totalRecovered: totalRecoveredFetchJSON.features[0].attributes.value
    });
  }

  async componentDidMount() {
    await this.loadData(this);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
