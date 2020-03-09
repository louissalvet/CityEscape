import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from './Login'
import CodeChallenge from './CodeChallenge'
import Account from './Account'

const Tab = createBottomTabNavigator()

const Tabs = () => (
  <Tab.Navigator tabBar={() => null} initialRouteName="Login">
    <Tab.Screen name="Login" component={Login} />
    <Tab.Screen name="CodeChallenge" component={CodeChallenge} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

export const UserNavigator = () => <Tabs />
