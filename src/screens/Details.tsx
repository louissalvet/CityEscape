import React from 'react'
import { SafeAreaView, View } from 'react-native'
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components'

const BackIcon = (style: any) => <Icon {...style} name="arrow-back" />

const DetailsScreen = ({ navigation }: any) => {
  const navigateBack = () => {
    navigation.goBack()
  }

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="MyApp"
        alignment="center"
        leftControl={BackAction()}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text category="h1">DETAILS</Text>
      </Layout>
    </SafeAreaView>
  )
}

export default DetailsScreen
