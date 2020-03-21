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

export function currentUserChannel(uid: string) {
  const channel = eventChannel(emit => {
    const unsubscribe = db()
      .collection('users')
      .doc(`${uid}`)
      .onSnapshot(snapshot =>
        emit({
          exists: snapshot.exists,
          profile: snapshot.data()
            ? {
                pseudo: snapshot.data()?.pseudo,
                photoURL: snapshot.data()?.photoURL
              }
            : null,
          games: [...snapshot.data()?.games]
        })
      )

    return unsubscribe
  })

  return channel
}

export function gamesChannel() {
  const channel = eventChannel(emit => {
    const unsubscribe = db()
      .collection('games')
      .onSnapshot(snapshot =>
        emit({ games: snapshot.docs.map(doc => doc.data()) })
      )
    return unsubscribe
  })

  return channel
}
