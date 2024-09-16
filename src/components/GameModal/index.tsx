import { GameProps } from "@customTypes/GameProps"
import { Text, View, StyleSheet, Button, Image } from "react-native"
import React, { createRef, LegacyRef, useRef } from "react"

type GameModalProps = {
    game: GameProps
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function GameModal(props: GameModalProps) {
    return (
        <View
            style={ styles.container }
            onTouchStart={ () => props.setOpen(false) }
        >
            <Text style={ styles.gameTitleText }>{ props.game.name }</Text>
            <Image
                alt={ props.game.name }
                source={{ uri: props.game.image_url }}
                height={ 350 }
                width={ 300 }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#66c0f4",
        alignItems: "center",
        justifyContent: "center",
        gap: 15
    },
    gameTitleText: {
        fontWeight: "bold",
        fontSize: 23
    }
})