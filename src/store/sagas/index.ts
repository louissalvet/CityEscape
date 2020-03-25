import { all } from 'redux-saga/effects'

import { authSaga } from './auth'
import { playerProfileSaga } from './playerProfile'
import { gamesSaga } from './games'
import { involementSaga } from './involvement'
import { involvingSaga } from './involving'

export default function*() {
  yield all([
    authSaga(),
    playerProfileSaga(),
    gamesSaga(),
    involementSaga(),
    involvingSaga()
  ])
}
