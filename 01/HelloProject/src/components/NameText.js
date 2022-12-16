import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

export default class App extends Component {
    render() {
        return <Text style={styles.textStyle}>{this.props.name}</Text>;
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: "red",
        backgroundColor: "blue",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 5,
    },
});
