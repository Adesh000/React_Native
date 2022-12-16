import { useState } from "react";
import {
    Button,
    StyleSheet,
    View,
    Alert,
    Text,
    TouchableOpacity,
    Image,
    TouchableHighlight,
} from "react-native";

export default function App() {
    const [bgColor, setBgColor] = useState("");

    const genRandomColor = () => {
        return (
            "rgb(" +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            ")"
        );
    };
    const myButtonPressed = () => {
        setBgColor(genRandomColor());
    };
    const myImageClicked = () => {
        Alert.alert("I clikced the image");
    };
    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <TouchableOpacity onPress={myButtonPressed}>
                <Text style={[styles.text, { backgroundColor: bgColor }]}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableHighlight onPress={myImageClicked}>
                <Image source={require("./assets/lcom.png")} />
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
        backgroundColor: "#BB2CE7",
        color: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#fff",
    },
});
