import React from 'react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { mapping, dark as theme } from '@eva-design/eva'
import { AppNavigator } from './screens'
import { SafeAreaView, StatusBar } from 'react-native'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: '#222b45' }} />

      <SafeAreaView style={{ flex: 1, backgroundColor: '#222b45' }}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
          <AppNavigator />
        </ApplicationProvider>
      </SafeAreaView>
    </>
  )
}

export default App
