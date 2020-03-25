import { combineReducers, Reducer } from 'redux'

import {
  WatchInvolvingActionTypes,
  WatchInvolvingUpdateAction
} from '../actions'
import { createRequestReducer } from '../helpers'

type DataState = WatchInvolvingUpdateAction['payload'] | null

const intialDataState: DataState = null

const dataReducer: Reducer<DataState, WatchInvolvingUpdateAction> = (
  state = intialDataState,
  action
) => {
  switch (action.type) {
    case WatchInvolvingActionTypes.update:
      return action.payload
    default:
      return state
  }
}

const requestsReducer = combineReducers({
  watch: createRequestReducer(WatchInvolvingActionTypes)
})

export default combineReducers({
  data: dataReducer,
  requests: requestsReducer
})
