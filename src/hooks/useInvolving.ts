import { useDispatch } from 'react-redux'

import useSelector from './useSelector'
import {
  WatchInvolvingActionTypes,
  ToggleInvolvingActionType
} from '../store/actions'

export default () => {
  const dispatch = useDispatch()

  const state = useSelector(({ involving }) => involving)

  const actions = {
    watch: () => dispatch({ type: WatchInvolvingActionTypes.trigger }),
    toggle: (id: string) =>
      dispatch({ type: ToggleInvolvingActionType.trigger, payload: { id } })
  }

  return { state, actions }
}
