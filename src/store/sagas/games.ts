import { call, put, take, takeLatest } from 'redux-saga/effects'

import { WatchGamesActionTypes } from '../actions'
import { gamesChannel } from '../helpers'

function* watch() {
  try {
    const channel = yield call(gamesChannel)

    while (true) {
      const { games } = yield take(channel)
      yield put({ type: WatchGamesActionTypes.success, payload: games })
    }
  } catch (err) {
    console.log(err)

    yield put({ type: WatchGamesActionTypes.failure })
  }
}

export function* gamesSaga() {
  yield takeLatest(WatchGamesActionTypes.trigger, watch)
}
