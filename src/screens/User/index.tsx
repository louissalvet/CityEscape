import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Splash from '../Splash'

import Login from './SignIn'
import Account from './Account'
import CompleteProfile from './CompleteProfile'

import { useAuth, useCurrentUser } from '../../hooks'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  const auth = useAuth()
  const currentUser = useCurrentUser()

  const allowAccountScreen =
    auth.state.data.isAuthenticated && currentUser.state.data.exists

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
  const { state: currentUserState } = useCurrentUser()

  return <>{currentUserState.requests.watch.loading ? <Splash /> : <Tabs />}</>
}
