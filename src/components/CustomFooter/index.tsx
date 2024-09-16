import { View, StyleSheet, Text } from "react-native"

export default function CustomFooter() {
    return (
        <View style={ styles.container }>
            <Text>Footer</Text>
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
    },
})