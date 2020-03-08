import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout } from '@ui-kitten/components'

interface Props {
  style?: {}
}

const Container: React.FC<Props> = ({ children, style }) => {
  return <Layout style={{ ...styles.container, ...style }}>{children}</Layout>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  }
})

export default Container
