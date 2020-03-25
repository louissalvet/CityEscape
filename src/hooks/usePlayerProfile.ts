import { useDispatch } from 'react-redux'

import {
  FetchPlayerProfileActionTypes,
  CompletePlayerProfileActionTypes,
  CompleteProfileTriggerAction
} from '../store/actions'
import useSelector from './useSelector'

export default () => {
  const dispatch = useDispatch()

  const state = useSelector(({ playerProfile }) => playerProfile)

  const actions = {
    watch: () =>
      dispatch({
        type: FetchPlayerProfileActionTypes.trigger
      }),
    completeProfile: (pseudo: string, photoURI: string | null) =>
      dispatch<CompleteProfileTriggerAction>({
        type: CompletePlayerProfileActionTypes.trigger,
        payload: { pseudo, photoURI }
      })
  }

  return { state, actions }
}
