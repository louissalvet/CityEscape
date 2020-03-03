import React from 'react'
import { SafeAreaView } from 'react-native'
import { Divider, Layout, Text } from '@ui-kitten/components'

import { Header } from '../components'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text>Home</Text>
      </Layout>
    </SafeAreaView>
  )
}

export default HomeScreen
