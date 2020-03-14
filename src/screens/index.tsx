import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BottomTabBar } from '../components'
import { useAuth, useCurrentUser } from '../hooks'

import Splash from './Splash'
import Home from './Home'
import Details from './Details'
import { UserNavigator } from './User'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator tabBar={BottomTabBar} initialRouteName={'Home'}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Auth" component={UserNavigator} />
    </Tab.Navigator>
  )
}

export const AppNavigator = () => {
  const auth = useAuth()
  const currentUser = useCurrentUser()

  useEffect(() => {
    auth.actions().watch()
    console.log(loading)
  }, [])

  const loading =
    auth.state.requests.watch.loading ||
    currentUser.state.requests.watch.loading

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      )}
    </>
  )
}
