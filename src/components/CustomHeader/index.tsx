import { View, StyleSheet, Text } from "react-native"

export default function CustomHeader() {
    return (
        <View style={ styles.container }>
            <Text>App Games</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "red",
        height: 50,
        marginTop: 40
    },
})