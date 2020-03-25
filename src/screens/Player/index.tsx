import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Splash from '../Splash'

import Login from './SignIn'
import Account from './Account'
import CompleteProfile from './CompleteProfile'

import { useAuth, usePlayerProfile } from '../../hooks'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  const auth = useAuth()
  const playerProfile = usePlayerProfile()

  const allowAccountScreen =
    auth.state.data.isAuthenticated && !!playerProfile.state.data

  return (
    <Tab.Navigator tabBar={() => null}>
      {allowAccountScreen ? (
        <Tab.Screen name="Account" component={Account} />
      ) : !auth.state.data.isAuthenticated ? (
        <Tab.Screen name="SignIn" component={Login} />
      ) : (
        <Tab.Screen name="CompleteProfile" component={CompleteProfile} />
      )}
    </Tab.Navigator>
  )
}

export const UserNavigator = () => {
  const playerProfile = usePlayerProfile()

  return (
    <>{playerProfile.state.requests.fetch.loading ? <Splash /> : <Tabs />}</>
  )
}
