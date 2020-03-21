import { all } from 'redux-saga/effects'

import { authSaga } from './auth'
import { currentUserSaga } from './currentUser'
import { gamesSaga } from './games'

export default function*() {
  yield all([authSaga(), currentUserSaga(), gamesSaga()])
}
