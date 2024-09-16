import { View, StyleSheet, Text, TextInput } from "react-native"

type CustomHeaderProps = {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function CustomHeader({ search, setSearch } : CustomHeaderProps) {
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>App Games - DEV SIS 2</Text>
            <TextInput
                value={ search}
                onChangeText={ setSearch }
                placeholder="Pesquise um jogo"
                keyboardType="ascii-capable"
                style={ styles.search }
            />
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
        height: 100,
        marginTop: 40,
        gap: 10
    },
    text: {
        color: "white"
    },
    search: {
        backgroundColor: "white",
        alignSelf: "stretch",
        height: 50,
    }
})