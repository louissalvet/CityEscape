import { takeLatest, call, take, put, select } from 'redux-saga/effects'

import { WatchCurrentUserActionTypes } from '../actions'
import { currentUserChannel, uidSelector } from '../helpers'

function* watchCurrentUser() {
  const uid = yield select(uidSelector)

  try {
    if (!uid) throw new Error()

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
  } catch {
    yield put({ type: WatchCurrentUserActionTypes.failure })
  }
}

export function* currentUserSaga() {
  yield takeLatest(WatchCurrentUserActionTypes.trigger, watchCurrentUser)
}
