import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { Container, GameCard, Title } from '../components'
import { useInvolving, useGames } from '../hooks'

const DetailsScreen = () => {
  const involving = useInvolving()
  const games = useGames()

  const involvedGames = games.state.data?.filter(game =>
    involving.state.data?.includes(game.id)
  )

  return (
    <Container style={!involvedGames?.length && styles.container}>
      <Title>{involvedGames?.length ? 'Vos parties' : 'Pas de parties'}</Title>

      {involvedGames?.length !== 0 && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {involvedGames?.map(game => (
            <GameCard key={game.id} {...game} />
          ))}
        </ScrollView>
      )}
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default DetailsScreen
