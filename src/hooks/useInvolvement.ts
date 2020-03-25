import { useDispatch } from 'react-redux'

import { WatchInvolvementActionTypes } from '../store/actions'
import useSelector from './useSelector'

export default () => {
  const dispatch = useDispatch()

  const state = useSelector(({ involvement }) => involvement)

  const actions = {
    watch: () => dispatch({ type: WatchInvolvementActionTypes.trigger })
  }

  return { state, actions }
}
