import React from 'react'
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon
} from '@ui-kitten/components'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

const AllGamesIcon = (style: any) => <Icon {...style} name="search-outline" />
const MyGamesIcon = (style: any) => <Icon {...style} name="bookmark-outline" />
const UserIcon = (style: any) => <Icon {...style} name="person-outline" />

const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab icon={AllGamesIcon} />
      <BottomNavigationTab icon={MyGamesIcon} />
      <BottomNavigationTab icon={UserIcon} />
    </BottomNavigation>
  )
}

export default BottomTabBar
