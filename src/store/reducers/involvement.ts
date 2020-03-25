import { combineReducers, Reducer } from 'redux'

import {
  WatchInvolvementActionTypes,
  WatchInvolvementUpdateAction
} from '../actions'
import { createRequestReducer } from '../helpers'

type DataState = WatchInvolvementUpdateAction['payload'] | null

const intialDataState: DataState = null

const dataReducer: Reducer<DataState, WatchInvolvementUpdateAction> = (
  state = intialDataState,
  action
) => {
  switch (action.type) {
    case WatchInvolvementActionTypes.update:
      return action.payload
    default:
      return state
  }
}

const requestsReducer = combineReducers({
  watch: createRequestReducer(WatchInvolvementActionTypes)
})

export default combineReducers({
  data: dataReducer,
  requests: requestsReducer
})
