import GameImage from "@components/GameImage"
import { GameProps } from "@customTypes/GameProps"
import { StyleSheet, Text, View } from "react-native"

type _GameProps = {
    game: GameProps
}

export default function Game(props: _GameProps) {
    return (
        <View style={ styles.container }>
            <GameImage game={ props.game } />
            <Text>{ props.game.name }</Text>
            <Text>{ props.game.developer } 👾</Text>
            <Text>{ props.game.platform } 🎮</Text>
            <Text>{ props.game.genre } 📖</Text>
            <Text>{ props.game.release_date } 📅</Text>
            <Text>{ props.game.rating } </Text>
            <Text>{ props.game.rating_score } ⭐</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignSelf: "stretch",
        backgroundColor: "green",
        borderStyle: "solid",
        borderWidth: 1,
        width: "100%",
    },
})