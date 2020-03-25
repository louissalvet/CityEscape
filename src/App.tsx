import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider as StateProvider } from 'react-redux'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { mapping, dark as theme } from '@eva-design/eva'

import { Header } from './components'
import { AppNavigator } from './screens'

import store from './store'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: '#222b45' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#222b45' }}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
          <StateProvider store={store}>
            <Header />
            <AppNavigator />
          </StateProvider>
        </ApplicationProvider>
      </SafeAreaView>
    </>
  )
}

export default App
