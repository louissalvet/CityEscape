import React from 'react'
import { Layout, Button } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

import { Container, Title, Avatar } from '../../components'
import { useCurrentUser, useAuth } from '../../hooks'

const Account = () => {
  const currentUser = useCurrentUser()
  const auth = useAuth()

  if (!currentUser.state.data.exists || !currentUser.state.data.profile) {
    return <></>
  }

  return (
    <Container style={styles.container}>
      <Layout style={styles.header}>
        <Avatar
          style={styles.avatar}
          source={{ uri: currentUser.state.data.profile?.photoURL }}
        />
        <Title>{currentUser.state.data.profile?.pseudo}</Title>
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
