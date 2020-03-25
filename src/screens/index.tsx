import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useAuth, usePlayerProfile, useInvolving } from '../hooks'

import { BottomTabBar } from '../components'

import Splash from './Splash'
import Home from './Home'
import Details from './Details'
import { UserNavigator } from './Player'

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
  const playerProfile = usePlayerProfile()
  const involving = useInvolving()

  useEffect(() => {
    auth.actions.watch()
  }, [])

  useEffect(() => {
    const { isAuthenticated, uid } = auth.state.data
    if (isAuthenticated && uid) {
      playerProfile.actions.watch()
      involving.actions.watch()
    }
  }, [auth.state.data.isAuthenticated])

  useEffect(() => {
    if (auth.state.requests.watch.success && !auth.state.data.isAuthenticated) {
      setLoading(false)
    }
    if (
      auth.state.requests.watch.success &&
      auth.state.data.isAuthenticated &&
      playerProfile.state.requests.fetch.success
    ) {
      setLoading(false)
    }
  }, [auth.state, playerProfile.state])

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
