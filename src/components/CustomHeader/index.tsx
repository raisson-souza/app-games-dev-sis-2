import { View, StyleSheet, Text } from "react-native"

export default function CustomHeader() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>App Games - DEV SIS 2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "#1b2838",
        height: 50,
        marginTop: 40
    },
    text: {
        color: "white"
    }
})