import { all } from 'redux-saga/effects'

import { authSaga } from './auth'
import { currentUserSaga } from './currentUser'

export default function*() {
  yield all([authSaga(), currentUserSaga()])
}
