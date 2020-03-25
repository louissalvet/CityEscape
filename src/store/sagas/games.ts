import { put, call, takeLatest, all } from 'redux-saga/effects'
import db, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

import { FetchGamesActionTypes, WatchInvolvementActionTypes } from '../actions'

function* fetch() {
  try {
    const gamesRef = db().collection('games')

    const querySnapshot: FirebaseFirestoreTypes.QuerySnapshot = yield call([
      gamesRef,
      gamesRef.get
    ])

    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

    yield put({ type: FetchGamesActionTypes.success, payload: data || null })
  } catch {
    yield put({ type: FetchGamesActionTypes.failure })
  }
}

export function* gamesSaga() {
  yield takeLatest(FetchGamesActionTypes.trigger, fetch)
}
