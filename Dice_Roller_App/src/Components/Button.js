import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({playGame}) => {
    return (
        <TouchableOpacity onPress={playGame}>
            <Text style={styles.gameButton}>Click Me!</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gameButton: {
        fontSize: 25,
        color: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: "#fff",
        borderWidth: 2,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#5DA3FA",
    }
})

export default Button;