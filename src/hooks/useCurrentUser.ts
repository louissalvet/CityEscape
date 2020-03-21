import { useDispatch } from 'react-redux'

import {
  WatchCurrentUserActionTypes,
  CompleteProfileActionTypes
} from '../store/actions'
import useSelector from './useSelector'

export default () => {
  const dispatch = useDispatch()

  const state = useSelector(({ currentUser }) => currentUser)

  const actions = {
    watch: (uid: string) =>
      dispatch({ type: WatchCurrentUserActionTypes.trigger, payload: { uid } }),
    completeProfile: (pseudo: string, photoURI: string | null) =>
      dispatch({
        type: CompleteProfileActionTypes,
        payload: { pseudo, photoURI }
      })
  }

  return { state, actions }
}
