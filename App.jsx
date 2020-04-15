import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalConfirmed: "Loading...",
      totalDeaths: "Loading...",
      totalRecovered: "Loading...",
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
          Data from https://corona.lmao.ninja/all
        </Text>
        <Text style={{ fontSize: 10 }}>blog.0x77.page</Text>
        <Text style={{ fontSize: 10 }}>github.com/0x77dev</Text>
      </View>
    );
  }
  async loadData(vm) {
    const dataFetch = await fetch("https://corona.lmao.ninja/all");
    const { cases, deaths, recovered } = await dataFetch.json();
    vm.setState({
      totalConfirmed: cases,
      totalDeaths: deaths,
      totalRecovered: recovered,
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
    justifyContent: "center",
  },
});
