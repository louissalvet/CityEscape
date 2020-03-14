import React from 'react'
import { StyleSheet } from 'react-native'
import { Spinner } from '@ui-kitten/components'

import { Container } from '../components'

const Splash = () => {
  return (
    <Container style={styles.container}>
      <Spinner size="giant" />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Splash
