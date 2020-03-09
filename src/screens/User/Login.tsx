import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Input, Button, Icon } from '@ui-kitten/components'

import { Container, Title } from '../../components'

const MessageIcon = (style: any) => <Icon {...style} name="email-outline" />

const Login = () => {
  const [phone, setPhone] = useState('')
  const navigation = useNavigation()

  const onSubmit = () => {
    if (phone.length === 10) {
      console.log(phone)
      navigation.navigate('CodeChallenge')
    }
  }

  return (
    <Container style={styles.wrapper}>
      <Title>Authentification</Title>
      <Input
        label="Numéro de téléphone"
        placeholder="06 ..."
        maxLength={10}
        keyboardType="number-pad"
        autoCorrect={false}
        value={phone}
        onChangeText={setPhone}
      />

      <Button onPress={onSubmit} icon={MessageIcon} style={styles.button}>
        Envoyer le code
      </Button>
    </Container>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  button: {
    marginTop: 24
  }
})

export default Login
