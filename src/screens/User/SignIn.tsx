import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Input, Button, Icon, Text } from '@ui-kitten/components'

import { Container, Title } from '../../components'
import { useAuth } from '../../hooks'

const LoginIcon = (style: any) => <Icon {...style} name="log-in-outline" />

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const auth = useAuth()

  useEffect(() => {
    if (auth.state.requests.signIn.success) {
    }
  }, [])

  const onSubmit = () => {
    auth.actions().signIn(email, password)
  }

  return (
    <Container style={styles.wrapper}>
      <Title>Connexion</Title>
      <Input
        label="Email"
        autoCorrect={false}
        autoCapitalize={'none'}
        placeholder="example@gmail.com"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        label="Mot de passe"
        autoCorrect={false}
        autoCapitalize={'none'}
        placeholder="*******"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={onSubmit} icon={LoginIcon} style={styles.button}>
        Connexion
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
