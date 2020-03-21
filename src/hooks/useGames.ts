import { useDispatch } from 'react-redux'

import { WatchGamesActionTypes } from '../store/actions'
import useSelector from './useSelector'

export default () => {
  const dispatch = useDispatch()

  const state = useSelector(({ games }) => games)

  const actions = {
    watch: () => dispatch({ type: WatchGamesActionTypes.trigger })
  }

  return { state, actions }
}
