import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import {
  Input,
  Button,
  Icon,
  Spinner,
  Layout,
  Text
} from '@ui-kitten/components'

import { Container, Title } from '../../components'
import { useAuth } from '../../hooks'

const LoginIcon = (style: any) => <Icon {...style} name="log-in-outline" />

function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()

  const onSubmit = () => {
    auth.actions.signIn(email, password)
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
        placeholder="******"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {auth.state.requests.signIn.error && <Text>Mot de passe oublié ?</Text>}
      {auth.state.requests.signIn.loading ? (
        <Layout style={styles.spinner}>
          <Spinner status="control" />
        </Layout>
      ) : (
        <Button
          disabled={!(validateEmail(email) && password.length >= 6)}
          onPress={onSubmit}
          style={styles.button}
          icon={LoginIcon}
        >
          Connexion
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
  spinner: {
    marginTop: 24,
    alignSelf: 'center'
  },
  button: {
    marginTop: 24
  }
})

export default Login
