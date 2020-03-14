import {
  takeLatest,
  call,
  take,
  put,
  all,
  select,
  takeEvery
} from 'redux-saga/effects'
import db from '@react-native-firebase/firestore'
import storage, { FirebaseStorageTypes } from '@react-native-firebase/storage'

import {
  WatchCurrentUserActionTypes,
  CompleteProfileActionTypes,
  CompleteProfileTriggerAction
} from '../actions'
import { currentUserChannel, uidSelector } from '../helpers'

function* watchCurrentUser() {
  const uid = yield select(uidSelector)

  try {
    if (!uid) throw new Error('Missing uid')

    const channel = yield call(currentUserChannel, uid)

    while (true) {
      const { exists, profile } = yield take(channel)

      yield put({
        type: WatchCurrentUserActionTypes.success,
        payload: {
          exists,
          profile
        }
      })
    }
  } catch (err) {
    yield console.log(err)

    yield put({ type: WatchCurrentUserActionTypes.failure })
  }
}

function* completeProfile({ payload }: CompleteProfileTriggerAction) {
  const uid = yield select(uidSelector)
  const { pseudo, photoURI } = payload

  const ref = storage().ref(uid)

  try {
    let photoURL = ''

    if (photoURI) {
      yield ref.putFile(photoURI)

      photoURL = yield call([ref, ref.getDownloadURL])
    }

    const currentUserDoc = db()
      .collection('users')
      .doc(`${uid}`)

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
