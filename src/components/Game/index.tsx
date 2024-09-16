import GameImage from "@components/GameImage"
import { GameProps } from "@customTypes/GameProps"
import { StyleSheet, Text, View } from "react-native"

type _GameProps = {
    game: GameProps
}

export default function Game(props: _GameProps) {
    return (
        <View style={ styles.container }>
            <View>
                <GameImage game={ props.game } />
            </View>
            <View>
                <View>
                    <Text>{ props.game.name }</Text>
                    <Text>{ props.game.developer } 👾</Text>
                </View>
                <Text>{ props.game.platform } 🎮</Text>
                <Text>{ props.game.genre } 📖</Text>
                <Text>{ props.game.release_date } 📅</Text>
                <Text>{ props.game.rating } </Text>
                <Text>{ props.game.rating_score } ⭐</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "stretch",
        borderStyle: "solid",
        borderWidth: 0.5,
        paddingVertical: 10
    },
})