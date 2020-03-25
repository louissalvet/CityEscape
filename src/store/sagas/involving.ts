import { call, put, take, takeLatest, select } from 'redux-saga/effects'
import db from '@react-native-firebase/firestore'

import { involvingChannel, authSelector, involvingSelector } from '../helpers'
import {
  WatchInvolvingActionTypes,
  ToggleInvolvingActionType,
  ToggleInvolvingTriggerAction
} from '../actions/involving'
import { firebase } from '@react-native-firebase/auth'

function* watch() {
  const authState = yield select(authSelector)
  const { uid } = authState.data

  try {
    if (!uid) throw new Error('Missing uid')

    const channel = yield call(involvingChannel, uid)

    while (true) {
      const involving = yield take(channel)

      yield put({ type: WatchInvolvingActionTypes.update, payload: involving })
    }
  } catch {
    yield put({ type: WatchInvolvingActionTypes.failure })
  }
}

function* toggle({ payload }: ToggleInvolvingTriggerAction) {
  const authState = yield select(authSelector)
  const involvingState = yield select(involvingSelector)

  const { uid } = authState.data
  const { id: gameId } = payload

  try {
    if (!uid) throw new Error('Missing uid')
    if (!gameId) throw new Error('Missing gamesId')

    const involvingRef = db()
      .collection('involving')
      .doc(`${uid}`)

    const existingInvolving = involvingState.data.includes(gameId)

    if (existingInvolving) {
      const deleteQuery = () =>
        involvingRef.update({
          [gameId]: firebase.firestore.FieldValue.delete()
        })

      yield call(deleteQuery)
    } else {
      const addQuery = () => involvingRef.set({ [gameId]: true })

      yield call(addQuery)
    }

    yield put({ type: ToggleInvolvingActionType.success })
  } catch {
    yield put({ type: ToggleInvolvingActionType.failure })
  }
}

export function* involvingSaga() {
  yield takeLatest(WatchInvolvingActionTypes.trigger, watch)
  yield takeLatest(ToggleInvolvingActionType.trigger, toggle)
}
