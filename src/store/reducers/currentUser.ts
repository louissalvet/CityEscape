import { combineReducers, Reducer } from 'redux'

import {
  WatchCurrentUserActionTypes,
  WatchCurrentUserSuccessAction
} from '../actions'
import { createRequestReducer } from '../helpers'

type DataState = WatchCurrentUserSuccessAction['payload']

const intialDataState: DataState = {
  exists: false,
  profile: null
}

const dataReducer: Reducer<DataState, WatchCurrentUserSuccessAction> = (
  state = intialDataState,
  action
) => {
  switch (action.type) {
    case WatchCurrentUserActionTypes.success:
      return action.payload
    default:
      return state
  }
}

const requestsReducer = combineReducers({
  watch: createRequestReducer(WatchCurrentUserActionTypes)
})

export default combineReducers({
  data: dataReducer,
  requests: requestsReducer
})
