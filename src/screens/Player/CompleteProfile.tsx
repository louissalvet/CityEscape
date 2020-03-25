import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Input, Button, Layout, Text, Spinner } from '@ui-kitten/components'
import ImagePicker from 'react-native-image-picker'

import { Container, Title, Avatar } from '../../components'
import { usePlayerProfile } from '../../hooks'

const CompleteProfile = () => {
  const [pseudo, setPseudo] = useState('')
  const [photoURI, setPhotoURI] = useState<string | null>(null)

  const playerProfile = usePlayerProfile()

  const handleChoosePhoto = () => {
    const options = {
      noData: true
    }

    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        console.log(response.type)
        setPhotoURI(response.uri)
      }
    })
  }

  const onSubmit = () => {
    playerProfile.actions.completeProfile(pseudo, photoURI)
  }

  return (
    <Container style={styles.wrapper}>
      <Title>Vous</Title>

      <Layout style={styles.avatarWrapper}>
        {photoURI ? (
          <Avatar style={styles.avatar} source={{ uri: photoURI }} />
        ) : (
          <Avatar
            style={styles.avatar}
            source={require('../../assets/defaultAvatar.png')}
          />
        )}

        <Text onPress={handleChoosePhoto}>Choisir une photo</Text>
      </Layout>
      <Input
        label="Pseudo"
        autoCorrect={false}
        value={pseudo}
        onChangeText={setPseudo}
      />

      {playerProfile.state.requests.complete.loading ? (
        <Layout style={styles.spinner}>
          <Spinner />
        </Layout>
      ) : (
        <Button
          style={styles.button}
          disabled={!(pseudo.length > 2)}
          onPress={onSubmit}
        >
          Fini !
        </Button>
      )}
    </Container>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  avatar: {
    marginRight: 16
  },
  spinner: {
    marginTop: 24,
    alignSelf: 'center'
  },
  button: {
    marginTop: 24
  }
})

export default CompleteProfile
