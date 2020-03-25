import { useDispatch } from 'react-redux'

import { FetchGamesActionTypes } from '../store/actions'
import useSelector from './useSelector'

export default () => {
  const dispatch = useDispatch()

  const state = useSelector(({ games }) => games)

  const actions = {
    fetch: () => dispatch({ type: FetchGamesActionTypes.trigger })
  }

  return { state, actions }
}
