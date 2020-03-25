import { takeLatest, take, put, call, all } from 'redux-saga/effects'
import auth from '@react-native-firebase/auth'

import {
  WatchAuthActionTypes,
  SignInActionTypes,
  SignInTriggerAction,
  SignOutActionTypes
} from '../actions'
import { authChannel } from '../helpers'

function* watchAuth() {
  try {
    const channel = yield call(authChannel)

    while (true) {
      const { isAuthenticated, uid } = yield take(channel)

      yield put({
        type: WatchAuthActionTypes.success,
        payload: { isAuthenticated, uid }
      })
    }
  } catch {
    yield put({ type: WatchAuthActionTypes.failure })
  }
}

function* signIn({ payload }: SignInTriggerAction) {
  const { email, password } = payload

  const signInWithEmailAndPassword = () =>
    auth().signInWithEmailAndPassword(email, password)

  const createUserWithEmailAndPassword = () =>
    auth().createUserWithEmailAndPassword(email, password)

  const { length: alreadySigned }: string[] = yield call(
    [auth(), auth().fetchSignInMethodsForEmail],
    email
  )

  try {
    if (alreadySigned) {
      yield call(signInWithEmailAndPassword)
    } else {
      yield call(createUserWithEmailAndPassword)
    }

    yield put({ type: SignInActionTypes.success })
  } catch {
    yield put({ type: SignInActionTypes.failure })
  }
}

function* signOut() {
  try {
    yield call([auth(), auth().signOut])

    yield put({ type: SignOutActionTypes.success })
  } catch {
    yield put({ type: SignOutActionTypes.failure })
  }
}

export function* authSaga() {
  yield takeLatest(WatchAuthActionTypes.trigger, watchAuth)
  yield takeLatest(SignInActionTypes.trigger, signIn)
  yield takeLatest(SignOutActionTypes.trigger, signOut)
}
