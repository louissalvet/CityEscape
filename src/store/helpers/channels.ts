import { eventChannel } from 'redux-saga'
import auth from '@react-native-firebase/auth'

export function authChannel() {
  const channel = eventChannel(emit => {
    const unsubscribe = auth().onAuthStateChanged(user => emit({ user }))

    return unsubscribe
  })

  return channel
}
