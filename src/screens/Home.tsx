import React, { useEffect } from 'react'
import { Text } from '@ui-kitten/components'

import { Container } from '../components'
import { useGames } from '../hooks'

const HomeScreen = () => {
  const games = useGames()

  useEffect(() => {
    if (
      !games.state.requests.watch.success &&
      !games.state.requests.watch.error
    ) {
      games.actions.watch()
    }
  }, [])

  return (
    <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </Container>
  )
}

export default HomeScreen
