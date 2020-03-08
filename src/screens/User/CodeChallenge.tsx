import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Input, Button, Icon } from '@ui-kitten/components'

import { Container, Title } from '../../components'

const LogInIcon = (style: any) => <Icon {...style} name="log-in-outline" />

const CodeChallenge = () => {
  const [code, setCode] = useState('')

  const onSubmit = () => {
    console.log(code)
  }

  return (
    <Container style={styles.wrapper}>
      <Title>Vérification</Title>
      <Input
        label="Saisir le code reçu"
        keyboardType="number-pad"
        autoCorrect={false}
        value={code}
        onChangeText={setCode}
      />

      <Button onPress={onSubmit} icon={LogInIcon} style={styles.button}>
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

export default CodeChallenge
