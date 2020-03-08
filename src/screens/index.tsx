import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BottomTabBar } from '../components'
import Home from './Home'
import Details from './Details'
import Login from './Login'

const Tab = createBottomTabNavigator()

const Tabs = () => (
  <Tab.Navigator tabBar={BottomTabBar} initialRouteName="Home">
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Details" component={Details} />
    <Tab.Screen name="Login" component={Login} />
  </Tab.Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 18,
    marginLeft: 6,
    marginRight: 6
  }
})
