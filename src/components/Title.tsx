import React from 'react'
import { Text } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'

interface Props {
  children: string
}

const Title: React.FC<Props> = ({ children }) => {
  return (
    <Text style={styles.container} category="h1">
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24
  }
})

export default Title
