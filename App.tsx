import React, { useState } from "react"
import { Modal, ScrollView, StyleSheet, View } from "react-native"
import { Games } from "@data/Games"
import Game from "@components/Game"
import CustomHeader from "@components/CustomHeader"
import CustomFooter from "@components/CustomFooter"
import GameModal from "@components/GameModal"
import { GameProps } from "@customTypes/GameProps"

export default function App() {
  // TODO: extra: modal ao clicar no jogo exibindo trailer
  const games = Games.sort((a, b) => a.name.localeCompare(b.name))
  const [ search, setSearch ] = useState<string>("")
  const filteredGames = games.filter(({ name }) =>
    search.trim() === ""
      ? true
      : name.toLowerCase().includes(search.toLowerCase())
  )
  const [ open, setOpen ] = useState<boolean>(false)
  const [ selectedGame, setSelectedGame ] = useState<GameProps | undefined>(undefined)

  return (
    <View style={ styles.container }>
      <Modal
        visible={ open }
        animationType="fade"
        transparent
        onRequestClose={ () => setOpen(false) }
      >
        <GameModal
          game={ selectedGame! }
          setOpen={ setOpen }
        />
      </Modal>
      <CustomHeader
        search={ search}
        setSearch={ setSearch }
      />
      <ScrollView style={ styles.games }>
        {
          filteredGames.map((game, i) => {
            return <Game
              key={ i }
              game={ game }
              setOpen={ setOpen }
              setGame={ setSelectedGame }
            />
          })
        }
      </ScrollView>
      <CustomFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#66c0f4",
    alignItems: "center",
    justifyContent: "center",
  },
  games: {
    alignSelf: "stretch",
  }
})