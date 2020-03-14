import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Input, Button, Layout, Text } from '@ui-kitten/components'
import ImagePicker from 'react-native-image-picker'

import { Container, Title, Avatar } from '../../components'
import { useCurrentUser } from '../../hooks'

const CompleteProfile = () => {
  const [pseudo, setPseudo] = useState('')
  const [photoURI, setPhotoURI] = useState<string | null>(null)

  const currentUser = useCurrentUser()

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
    currentUser.actions.completeProfile(pseudo, photoURI)
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
      <Button onPress={onSubmit} style={styles.button}>
        Fini !
      </Button>
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
  button: {
    marginTop: 24
  }
})

export default CompleteProfile
