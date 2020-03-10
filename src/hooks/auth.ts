import { useDispatch, useSelector } from 'react-redux'

import { WatchAuthActionTypes } from '../store/actions'
import { AppState } from '../store'

export default () => {
  const dispatch = useDispatch()

  const actions = {
    watch: () => dispatch({ type: WatchAuthActionTypes.trigger })
  }

  const state = useSelector<AppState>(({ auth }) => auth)

  return { actions, state }
}
