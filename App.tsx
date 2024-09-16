import React from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { Games } from "@data/Games"
import Game from "@components/Game"
import CustomHeader from "@components/CustomHeader"
import CustomFooter from "@components/CustomFooter"

export default function App() {
  // TODO: jogo em ordem alfabetica
  // TODO: pesquisa no header
  // TODO: extra: modal ao clicar no jogo exibindo trailer
  return (
    <View style={ styles.container }>
      <CustomHeader />
      <ScrollView style={ styles.games }>
        {
          Games.map((game, i) => {
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