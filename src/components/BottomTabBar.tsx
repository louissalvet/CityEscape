import React from 'react'
import { SafeAreaView } from 'react-native'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

const BottomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <SafeAreaView>
      <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}
      >
        <BottomNavigationTab title="Home" />
        <BottomNavigationTab title="Details" />
      </BottomNavigation>
    </SafeAreaView>
  )
}

export default BottomTabBar
