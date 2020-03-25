import { takeLatest, call, put, select, all } from 'redux-saga/effects'
import db, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

import {
  FetchPlayerProfileActionTypes,
  CompletePlayerProfileActionTypes,
  CompleteProfileTriggerAction,
  FetchPlayerProfileSuccessAction
} from '../actions'
import { authSelector, createAvatarUri } from '../helpers'

function* fetch() {
  const authState = yield select(authSelector)

  const { uid } = authState.data
  try {
    if (!uid) throw new Error('Missing uid')

    const playerProfileRef = db()
      .collection('players')
      .doc(`${uid}`)

    const querySnapshot: FirebaseFirestoreTypes.DocumentSnapshot = yield call([
      playerProfileRef,
      playerProfileRef.get
    ])

    const data = querySnapshot.data() as PlayerProfile | undefined

    yield put<FetchPlayerProfileSuccessAction>({
      type: FetchPlayerProfileActionTypes.success,
      payload: data || null
    })
  } catch (err) {
    yield put({ type: FetchPlayerProfileActionTypes.failure })
  }
}

function* complete({ payload }: CompleteProfileTriggerAction) {
  const authState = yield select(authSelector)
  const { pseudo, photoURI } = payload

  const defaultAvatarRef = storage().ref('avatar.png')
  const avatarRef = storage().ref(authState.data.uid)

  try {
    let photoURL = ''

    if (photoURI) {
      const avatarURI: string = yield call(createAvatarUri, photoURI)

      yield avatarRef.putFile(avatarURI)

      photoURL = yield call([avatarRef, avatarRef.getDownloadURL])
    } else {
      photoURL = yield call([defaultAvatarRef, defaultAvatarRef.getDownloadURL])
    }

    const currentUserDoc = db()
      .collection('players')
      .doc(`${authState.data.uid}`)

    yield call([currentUserDoc, currentUserDoc.set], {
      pseudo,
      photoURL
    }),
      yield all([
        put({ type: CompletePlayerProfileActionTypes.success }),
        put({ type: FetchPlayerProfileActionTypes.trigger })
      ])
  } catch {
    yield put({ type: CompletePlayerProfileActionTypes.failure })
  }
}

export function* playerProfileSaga() {
  yield takeLatest(FetchPlayerProfileActionTypes.trigger, fetch)
  yield takeLatest(CompletePlayerProfileActionTypes.trigger, complete)
}
