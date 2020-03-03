import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BottomTabBar } from '../components'
import Home from './Home'
import Details from './Details'

const Tab = createBottomTabNavigator()

const Tabs = () => (
  <Tab.Navigator tabBar={BottomTabBar}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Details" component={Details} />
  </Tab.Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>
)
