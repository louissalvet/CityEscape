import { takeLatest, take, put, call, all } from 'redux-saga/effects'

import { WatchAuthActionTypes, WatchCurrentUserActionTypes } from '../actions'
import { authChannel } from '../helpers'

function* watchAuth() {
  try {
    const channel = yield call(authChannel)

    while (true) {
      const { isAuthenticated, uid } = yield take(channel)

      yield all([
        isAuthenticated &&
          put({ type: WatchAuthActionTypes.trigger, payload: { uid } }),
        put({
          type: WatchAuthActionTypes.success,
          payload: { isAuthenticated, uid }
        })
      ])
    }
  } catch {
    yield put({ type: WatchAuthActionTypes.failure })
  }
}

export function* authSaga() {
  yield takeLatest(WatchAuthActionTypes.trigger, watchAuth)
}
