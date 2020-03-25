import { useDispatch } from 'react-redux'

import {
  WatchAuthActionTypes,
  SignInActionTypes,
  SignOutActionTypes
} from '../store/actions'
import useSelector from './useSelector'

export default () => {
  const dispatch = useDispatch()

  const state = useSelector(({ auth }) => auth)

  const actions = {
    watch: () => dispatch({ type: WatchAuthActionTypes.trigger }),
    signIn: (email: string, password: string) =>
      dispatch({
        type: SignInActionTypes.trigger,
        payload: { email, password }
      }),
    signOut: () => dispatch({ type: SignOutActionTypes.trigger })
  }

  return { state, actions }
}
