import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "./src/Components/Button";

export default function App() {
    const [diceOneImage, setOneDiceImage] = useState(
        require("./src/Images/01.webp")
    );
    const [diceTwoImage, setTwoDiceImage] = useState(
        require("./src/Images/01.webp")
    );
    const genRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    };

    const playGame = () => {
        const rNumber = genRandomNumber();
        const secondNumber = genRandomNumber();

        switch (secondNumber) {
            case 1:
                setTwoDiceImage(require("./src/Images/01.webp"));
                break;
            case 2:
                setTwoDiceImage(require("./src/Images/02.webp"));
                break;
            case 3:
                setTwoDiceImage(require("./src/Images/03.webp"));
                break;
            case 4:
                setTwoDiceImage(require("./src/Images/04.webp"));
                break;
            case 5:
                setTwoDiceImage(require("./src/Images/05.webp"));
                break;
            case 6:
                setTwoDiceImage(require("./src/Images/06.webp"));
                break;
        }

        switch (rNumber) {
            case 1:
                setOneDiceImage(require("./src/Images/01.webp"));
                break;
            case 2:
                setOneDiceImage(require("./src/Images/02.webp"));
                break;
            case 3:
                setOneDiceImage(require("./src/Images/03.webp"));
                break;
            case 4:
                setOneDiceImage(require("./src/Images/04.webp"));
                break;
            case 5:
                setOneDiceImage(require("./src/Images/05.webp"));
                break;
            case 6:
                setOneDiceImage(require("./src/Images/06.webp"));
                break;
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Image style={styles.image} source={diceOneImage} />
                <Image style={styles.image} source={diceTwoImage} />
            </View>
            <Button playGame={playGame}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E74292",
    },
    image: {
        width: 150,
        height: 150,
    },
});
