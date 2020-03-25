import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Card, Text, Button } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'

import { useAuth, useInvolvement, useInvolving } from '../hooks'

type Props = Game

const GameCard: React.FC<Props> = ({
  id,
  title,
  description,
  photoURL,
  totalSlots,
  startPoint,
  startDate
}) => {
  const involvement = useInvolvement()
  const involving = useInvolving()
  const auth = useAuth()

  const navigation = useNavigation()

  const availableSlots = involvement.state?.data?.[id]
    ? totalSlots - involvement.state.data[id]
    : totalSlots

  return (
    <Card
      style={styles.wrapper}
      header={() => (
        <>
          <Image
            style={styles.image}
            source={{
              uri: photoURL
            }}
          />
          <View style={styles.top}>
            <Text category="h6">{title}</Text>
            <Button
              size="small"
              disabled={!auth.state.data.isAuthenticated}
              status={involving.state.data?.includes(id) ? 'danger' : 'primary'}
              onPress={() => involving.actions.toggle(id)}
            >
              {involving.state.data?.includes(id) ? 'Annuler' : 'Participer'}
            </Button>
          </View>
          <Text
            style={styles.headerText}
          >{`${availableSlots} places libres sur ${totalSlots} `}</Text>
          <Text style={styles.headerText}>{`Départ ${startPoint} le ${format(
            startDate,
            'dd/MM'
          )}`}</Text>
        </>
      )}
    >
      <Text>{description}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16
  },
  image: {
    height: 160
  },
  top: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    marginHorizontal: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

export default GameCard
