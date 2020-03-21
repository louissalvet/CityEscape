import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useAuth, useCurrentUser } from '../hooks'

import { BottomTabBar } from '../components'

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
  const [loading, setLoading] = useState(true)

  const auth = useAuth()
  const currentUser = useCurrentUser()

  useEffect(() => {
    auth.actions.watch()
  }, [])

  useEffect(() => {
    const { isAuthenticated, uid } = auth.state.data
    if (isAuthenticated && uid) currentUser.actions.watch(uid)
  }, [auth.state.data.isAuthenticated])

  useEffect(() => {
    if (auth.state.requests.watch.success && !auth.state.data.isAuthenticated) {
      setLoading(false)
    }
    if (
      auth.state.requests.watch.success &&
      auth.state.data.isAuthenticated &&
      currentUser.state.requests.watch.success
    ) {
      setLoading(false)
    }
  }, [auth.state, currentUser.state])

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
