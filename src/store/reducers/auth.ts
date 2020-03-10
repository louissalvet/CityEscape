import { Reducer, combineReducers } from 'redux'

import { WatchAuthActionTypes, WatchAuthSuccessAction } from '../actions'
import { createRequestReducer } from '../helpers'

type isAuthenticatedState = boolean

const initialisAuthenticatedState: isAuthenticatedState = false

const isAuthenticatedReducer: Reducer<
  isAuthenticatedState,
  WatchAuthSuccessAction
> = (state = initialisAuthenticatedState, action) => {
  switch (action.type) {
    case WatchAuthActionTypes.success:
      return action.payload
    default:
      return state
  }
}

const requestsReducer = combineReducers({
  watch: createRequestReducer(WatchAuthActionTypes)
})

export default combineReducers({
  isAuthenticated: isAuthenticatedReducer,
  requests: requestsReducer
})
