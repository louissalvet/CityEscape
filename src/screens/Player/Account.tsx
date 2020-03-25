import React from 'react'
import { Layout, Button } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

import { Container, Title, Avatar } from '../../components'
import { usePlayerProfile, useAuth } from '../../hooks'

const Account = () => {
  const playerProfile = usePlayerProfile()
  const auth = useAuth()

  if (!playerProfile.state.data) {
    return <></>
  }

  return (
    <Container style={styles.container}>
      <Layout style={styles.header}>
        <Avatar
          style={styles.avatar}
          source={{ uri: playerProfile.state.data?.photoURL }}
        />
        <Title>{playerProfile.state.data?.pseudo}</Title>
      </Layout>
      <Button status="danger" onPress={auth.actions.signOut}>
        Déconnexion
      </Button>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row'
  },
  avatar: {
    marginRight: 16
  }
})

export default Account
