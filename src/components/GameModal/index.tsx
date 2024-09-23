import { GameProps } from "@customTypes/GameProps"
import { Text, View, StyleSheet, Image, Button } from "react-native"
import YoutubePlayer from "react-native-youtube-iframe"

type GameModalProps = {
    game: GameProps
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function GameModal(props: GameModalProps) {
    const url = props.game.trailer_url.split("youtu.be/")[1]
    return (
        <View style={ styles.container }>
            <Text style={ styles.gameTitleText }>{ props.game.name }</Text>
            <YoutubePlayer
                height={400}
                width={400}
                play={true}
                videoId={url}
            />
            <Button title="Fechar" onPress={ () => props.setOpen(false) } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#66c0f4",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    gameTitleText: {
        fontWeight: "bold",
        fontSize: 23
    }
})