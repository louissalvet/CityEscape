import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import {
  WatchAuthActionTypes,
  SignInActionTypes,
  SignOutActionTypes
} from '../store/actions'
import useSelector from './useSelector'

export default () => {
  const dispatch = useDispatch()

  const actions = useCallback(
    () => ({
      watch: () => dispatch({ type: WatchAuthActionTypes.trigger }),
      signIn: (email: string, password: string) =>
        dispatch({
          type: SignInActionTypes.trigger,
          payload: { email, password }
        }),
      signOut: () => dispatch({ type: SignOutActionTypes.trigger })
    }),
    []
  )

  const state = useSelector(({ auth }) => auth)

  return { actions, state }
}
