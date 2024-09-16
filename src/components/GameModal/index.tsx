import { GameProps } from "@customTypes/GameProps"
import { Text, View } from "react-native"

type GameModalProps = {
    game: GameProps
}

export default function GameModal(props: GameModalProps) {
    return (
        <View>
            <Text>{ props.game.name }</Text>
            {/* VIDEO */}
        </View>
    )
}