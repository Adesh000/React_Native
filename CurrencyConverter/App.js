import { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Keyboard

} from "react-native";

const currencyPerRupee = {
    DOLLAR: 0.014,
    EURO: 0.012,
    POUND: 0.011,
    RUBEL: 0.93,
    AUSDOLLAR: 0.2,
    CANDOLLAR: 0.019,
    YEN: 1.54,
    DINAR: 0.0043,
    BITCOIN: 0.0000041,
};

export default function App() {
    const [inputValue, setInputValue] = useState("");
    const buttonPressed = (currency) => {
        if (inputValue === "") {
            Alert.alert("Enter some value");
        }
        let result = inputValue * currencyPerRupee[currency];
        setInputValue(result);
    };
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={styles.screenview}>
                <View style={styles.resultcontainer}>
                    <Text style={styles.resultvalue}>{inputValue}</Text>
                </View>
                <View style={styles.inputcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter value"
                        selectionColor="#fff"
                        keyboardType="numeric"
                        value={inputValue}
                        onChangeText={(input) => setInputValue(input)}
                    />
                </View>
                <View style={styles.convrterbuttoncontainer}>
                    <TouchableOpacity
                        style={styles.converterbutton}
                        onPress={() => buttonPressed("DOLLAR")}
                    >
                        <Text style={styles.converterbuttontext}>$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.converterbutton}
                        onPress={() => buttonPressed("EURO")}
                    >
                        <Text style={styles.converterbuttontext}>Euro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.converterbutton}
                        onPress={() => buttonPressed("POUND")}
                    >
                        <Text style={styles.converterbuttontext}>Pound</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.converterbutton}
                        onPress={() => buttonPressed("RUBEL")}
                    >
                        <Text style={styles.converterbuttontext}>Rubel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.converterbutton}
                        onPress={() => buttonPressed("AUSDOLLAR")}
                    >
                        <Text style={styles.converterbuttontext}>AUS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.converterbutton}
                        onPress={() => buttonPressed("CANDOLLAR")}
                    >
                        <Text style={styles.converterbuttontext}>Can</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.converterbutton}
                        onPress={() => buttonPressed("YEN")}
                    >
                        <Text style={styles.converterbuttontext}>Yen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.converterbutton}
                        onPress={() => buttonPressed("DINAR")}
                    >
                        <Text style={styles.converterbuttontext}>Dinar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.converterbutton}
                        onPress={() => buttonPressed("BITCOIN")}
                    >
                        <Text style={styles.converterbuttontext}>Bit Coin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c1c1c1",
    },
    screenview: {
        flex: 1,
        marginTop: 50,
    },
    resultcontainer: {
        height: 70,
        width: 200,
        marginTop: 20,
        justifyContent: "center",
        borderColor: "#c1c1c1",
        backgroundColor: "#0a79d1",
        alignItems: "center",
        borderWidth: 2,
    },
    resultvalue: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
    },
    inputcontainer: {
        height: 70,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#c1c1c1",
        backgroundColor: "#0a79d1",
    },
    input: {
        color: "#ffffff",
        fontSize: 30,
    },
    convrterbuttoncontainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        borderColor: "#c1c1c1",
        borderWidth: 2,
    },
    converterbutton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a79df",
        height: 100,
        borderColor: "#c1c1c1",
        borderWidth: 2,
        width: "33.33%",
    },
    converterbuttontext: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
