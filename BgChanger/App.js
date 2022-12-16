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
    const myButtonPressed = () => {
        Alert.alert("Log out");
    };
    const myImageClicked = () => {
        Alert.alert("I clikced the image");
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={myButtonPressed}>
                <Text style={styles.text}>Login</Text>
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
    },
});
