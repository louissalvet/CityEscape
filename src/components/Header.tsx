import React from 'react'
import { TopNavigation } from '@ui-kitten/components'

const Header = () => {
  return (
    <TopNavigation
      title="City Escape"
      titleStyle={{
        fontSize: 18,
        fontWeight: 'bold'
      }}
      alignment="center"
    ></TopNavigation>
  )
}

export default Header
