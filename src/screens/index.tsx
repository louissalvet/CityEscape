import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text
} from '@ui-kitten/components'

import Home from './Home'
import Details from './Details'

const BottomTab = createBottomTabNavigator()

const BottomTabBar = ({ navigation, state }: any) => {
  const onSelect = (index: any) => {
    navigation.navigate(state.routeNames[index])
  }

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
        <BottomNavigationTab title="Home" />
        <BottomNavigationTab title="Details" />
      </BottomNavigation>
    </SafeAreaView>
  )
}

const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <BottomTab.Screen name="Home" component={Home} />
    <BottomTab.Screen name="Details" component={Details} />
  </BottomTab.Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
)
