import { eventChannel } from 'redux-saga'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export function authChannel() {
  const channel = eventChannel(emit => {
    const unsubscribe = auth().onAuthStateChanged(user =>
      emit({ isAuthenticated: !!user, uid: user?.uid || null })
    )

    return unsubscribe
  })

  return channel
}

export function currentUserChannel(uid: string) {
  const channel = eventChannel(emit => {
    const unsubscribe = firestore()
      .collection('users')
      .doc(`${uid}`)
      .onSnapshot(snapshot =>
        emit({
          exists: snapshot.exists,
          profile: snapshot.data() || null
        })
      )

    return unsubscribe
  })

  return channel
}
