import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'

import { Container, Title, GameCard } from '../components'

import { useGames, useInvolvement, useInvolving } from '../hooks'

const HomeScreen = () => {
  const games = useGames()
  const involvement = useInvolvement()
  const involving = useInvolving()

  useEffect(() => {
    if (
      !games.state.requests.fetch.success &&
      !games.state.requests.fetch.error
    ) {
      games.actions.fetch()
    }
    if (
      !involvement.state.requests.watch.success &&
      !involvement.state.requests.watch.error
    ) {
      involvement.actions.watch()
    }
  }, [])

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Toutes les parties</Title>
        {games.state.data &&
          games.state.data.map(
            game =>
              !involving.state.data?.includes(game.id) && (
                <GameCard key={game.id} {...game} />
              )
          )}
      </ScrollView>
    </Container>
  )
}

export default HomeScreen
