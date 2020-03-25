import { call, take, put, takeLatest } from 'redux-saga/effects'

import { involvementChannel } from '../helpers'
import { WatchInvolvementActionTypes } from '../actions'

function* watch() {
  try {
    const channel = yield call(involvementChannel)

    while (true) {
      const involvement = yield take(channel)

      yield put({
        type: WatchInvolvementActionTypes.update,
        payload: involvement
      })
    }
  } catch {
    yield put({ type: WatchInvolvementActionTypes.failure })
  }
}

export function* involementSaga() {
  yield takeLatest(WatchInvolvementActionTypes.trigger, watch)
}
