import { combineReducers, Reducer } from 'redux'

import {
  WatchCurrentUserActionTypes,
  WatchCurrentUserSuccessAction,
  CompleteProfileActionTypes
} from '../actions'
import { createRequestReducer } from '../helpers'

type DataState = WatchCurrentUserSuccessAction['payload']

const intialDataState: DataState = {
  exists: false,
  profile: null,
  games: []
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
  watch: createRequestReducer(WatchCurrentUserActionTypes),
  completeProfile: createRequestReducer(CompleteProfileActionTypes)
})

export default combineReducers({
  data: dataReducer,
  requests: requestsReducer
})
