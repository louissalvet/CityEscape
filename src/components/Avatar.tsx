import React from 'react'
import { Avatar as UIKAvatar, AvatarProps } from '@ui-kitten/components'

const Avatar: React.FC<AvatarProps> = props => {
  return <UIKAvatar size="giant" shape="round" {...props} />
}

export default Avatar
