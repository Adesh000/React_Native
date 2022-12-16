import React from "react";
import { StyleSheet, View } from "react-native";
import NameText from './src/components/NameText'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NameText name="Adesh"/>
                <NameText name="Bharat"/>
                <NameText name="Ram"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1c1c1",
    alignItems: "center",
    justifyContent: "center",
  },
  
})