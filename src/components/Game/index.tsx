import GameImage from "@components/GameImage"
import { GameProps } from "@customTypes/GameProps"
import { StyleSheet, Text, View } from "react-native"

type _GameProps = {
    game: GameProps
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setGame: React.Dispatch<React.SetStateAction<GameProps | undefined>>
}

export default function Game(props: _GameProps) {
    return (
        <View
            style={ styles.container }
            onTouchEnd={ () => {
                props.setGame(props.game)
                props.setOpen(true)
            }}
        >
            <View style={ styles.gameImage }>
                <GameImage game={ props.game } />
            </View>
            <View>
                <View style={ styles.gameTitle }>
                    <Text style={ styles.gameTitleText }>{ props.game.name }</Text>
                    <Text> - </Text>
                    <Text>{ props.game.developer } 👾</Text>
                </View>
                <Text>Plataforma: { props.game.platform } 🎮</Text>
                <Text>Gêneros: { props.game.genre } 📖</Text>
                <Text>Lançamento: { props.game.release_date } 📅</Text>
                <Text>Classificação: { props.game.rating } </Text>
                <Text>Nota: { props.game.rating_score } ⭐</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "stretch",
        borderStyle: "solid",
        borderWidth: 0.5,
        paddingVertical: 10
    },
    gameImage: {
        paddingHorizontal: 20
    },
    gameTitle: {
        display: "flex",
        flexDirection: "row",
    },
    gameTitleText: {
        fontWeight: "bold",
        fontSize: 16
    }
})