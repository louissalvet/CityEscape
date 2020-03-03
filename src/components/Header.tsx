import React from 'react'
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { useNavigation, useRoute } from '@react-navigation/native'

const ProfileIcon = (style: {}) => <Icon {...style} name="log-in-outline" />
const BackIcon = (style: {}) => <Icon {...style} name="arrow-back" />

const Header = () => {
  const route = useRoute()
  const navigation = useNavigation()

  return (
    <TopNavigation
      title="City Escape"
      alignment="center"
      leftControl={
        route.name !== 'Home' ? (
          <TopNavigationAction
            icon={BackIcon}
            onPress={() => navigation.goBack()}
          />
        ) : (
          <></>
        )
      }
      rightControls={
        <TopNavigationAction icon={ProfileIcon} onPress={() => null} />
      }
    ></TopNavigation>
  )
}

export default Header
