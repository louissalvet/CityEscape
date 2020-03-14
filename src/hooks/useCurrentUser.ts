import { useDispatch } from 'react-redux'

import { CompleteProfileActionTypes } from '../store/actions'
import useSelector from './useSelector'

export default () => {
  const dispatch = useDispatch()

  const actions = {
    completeProfile: (pseudo: string, photoURI: string | null) =>
      dispatch({
        type: CompleteProfileActionTypes.trigger,
        payload: { pseudo, photoURI }
      })
  }

  const state = useSelector(({ currentUser }) => currentUser)

  return { actions, state }
}
