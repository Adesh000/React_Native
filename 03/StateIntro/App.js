import { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter text here..."
                    placeholderTextColor="black"
                    style={styles.input}
                    onChange={(text) => {
                        this.setState({ text });
                    }}
                />
                <Text style={{ marginTop: 60, fontSize: 25 }}>
                      {this.state.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        marginTop: 30,
        height: 50,
        width: 200,
        borderWidth: 5,
        padding: 10,
        borderColor: "#23abab",
    },
});
