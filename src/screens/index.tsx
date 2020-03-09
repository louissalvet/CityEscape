import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BottomTabBar } from '../components'
import Home from './Home'
import Details from './Details'
import { UserNavigator } from './User'

const Tab = createBottomTabNavigator()

const Tabs = () => (
  <Tab.Navigator tabBar={BottomTabBar} initialRouteName="Home">
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Details" component={Details} />
    <Tab.Screen name="Auth" component={UserNavigator} />
  </Tab.Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>
)
