import { takeLatest, call, take, put, select } from 'redux-saga/effects'
import db from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

import {
  WatchCurrentUserActionTypes,
  CompleteProfileActionTypes,
  CompleteProfileTriggerAction
} from '../actions'
import { currentUserChannel, authSelector, createAvatarUri } from '../helpers'

function* watchCurrentUser({ payload }: any) {
  const { uid } = payload

  try {
    if (!uid) throw new Error('Missing uid')

    const channel = yield call(currentUserChannel, uid)

    while (true) {
      const { exists, profile, games } = yield take(channel)

      yield put({
        type: WatchCurrentUserActionTypes.success,
        payload: {
          exists,
          profile,
          games
        }
      })
    }
  } catch (err) {
    yield console.log(err)

    yield put({ type: WatchCurrentUserActionTypes.failure })
  }
}

function* completeProfile({ payload }: CompleteProfileTriggerAction) {
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
      .collection('users')
      .doc(`${authState.data.uid}`)

    yield call([currentUserDoc, currentUserDoc.set], {
      pseudo,
      photoURL
    })

    yield put({ type: CompleteProfileActionTypes.success })
  } catch {
    yield put({ type: CompleteProfileActionTypes.failure })
  }
}

export function* currentUserSaga() {
  yield takeLatest(WatchCurrentUserActionTypes.trigger, watchCurrentUser)
  yield takeLatest(CompleteProfileActionTypes.trigger, completeProfile)
}
