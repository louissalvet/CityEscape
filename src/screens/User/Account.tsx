import React from 'react'
import { Layout, Button } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

import { Container, Title, Avatar } from '../../components'
import { useCurrentUser, useAuth } from '../../hooks'

const Account = () => {
  const { state: currentUserState } = useCurrentUser()
  const { actions: authActions } = useAuth()
  const { profile } = currentUserState.data

  if (!profile) {
    return <></>
  }

  return (
    <Container>
      <Layout style={styles.header}>
        <Avatar style={styles.avatar} source={{ uri: profile.photoURL }} />
        <Title>{profile.pseudo}</Title>
      </Layout>
      <Button onPress={authActions().signOut}>Déconnexion</Button>
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row'
  },
  avatar: {
    marginRight: 16
  }
})

export default Account
