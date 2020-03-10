import { takeLatest, take, put, call } from 'redux-saga/effects'

import { WatchAuthActionTypes } from '../actions'
import { authChannel } from '../helpers'

function* watchAuth() {
  try {
    const channel = yield call(authChannel)

    while (true) {
      const { isAuthenticated } = yield take(channel)

      yield put({
        type: WatchAuthActionTypes.success,
        payload: isAuthenticated
      })
    }
  } catch {
    yield put({ type: WatchAuthActionTypes.failure })
  }
}

export function* authSaga() {
  yield takeLatest(WatchAuthActionTypes.trigger, watchAuth)
}
