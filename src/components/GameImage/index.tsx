import { GameProps } from "@customTypes/GameProps"
import { Image } from "react-native"

type GameImageProps = {
    game: GameProps
}

export default function GameImage(props: GameImageProps) {
    return (
        <Image
            alt={ props.game.name }
            source={{ uri: props.game.image_url }}
            height={ 150 }
            width={ 100 }
        />
    )
}