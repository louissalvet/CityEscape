import { eventChannel } from 'redux-saga'
import auth from '@react-native-firebase/auth'
import db from '@react-native-firebase/firestore'

export function authChannel() {
  const channel = eventChannel(emit => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      emit({ isAuthenticated: !!user, uid: user?.uid || null })
    })

    return unsubscribe
  })

  return channel
}

export function involvementChannel() {
  const channel = eventChannel(emit => {
    const unsubscribe = db()
      .collection('involvement')
      .onSnapshot(snapshot => {
        emit(
          snapshot.docs.length
            ? snapshot.docs
                .map(doc => ({
                  [doc.id]: Object.keys(doc.data()).length
                }))
                .reduce((acc, cur) => ({ ...acc, ...cur }))
            : []
        )
      })
    return unsubscribe
  })
  return channel
}

export function involvingChannel(uid: string) {
  const channel = eventChannel(emit => {
    const unsubscribe = db()
      .collection('involving')
      .doc(`${uid}`)
      .onSnapshot(snapshot =>
        emit(snapshot.exists ? Object.keys(snapshot.data() as any) : [])
      )
    return unsubscribe
  })
  return channel
}
