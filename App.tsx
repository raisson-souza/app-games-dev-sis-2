import React, { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { Games } from "@data/Games"
import Game from "@components/Game"
import CustomHeader from "@components/CustomHeader"
import CustomFooter from "@components/CustomFooter"

export default function App() {
  // TODO: extra: modal ao clicar no jogo exibindo trailer
  const games = Games.sort((a, b) => a.name.localeCompare(b.name))
  const [ search, setSearch ] = useState<string>("")
  const filteredGames = games.filter(({ name }) =>
    search.trim() === ""
      ? true
      : name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <View style={ styles.container }>
      <CustomHeader
        search={ search}
        setSearch={ setSearch }
      />
      <ScrollView style={ styles.games }>
        {
          filteredGames.map((game, i) => {
            return <Game key={ i } game={ game } />
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