import { Reducer, combineReducers } from 'redux'

import {
  WatchAuthActionTypes,
  WatchAuthSuccessAction,
  SignInActionTypes
} from '../actions'
import { createRequestReducer } from '../helpers'

type DataState = WatchAuthSuccessAction['payload']

const initialDataState: DataState = {
  isAuthenticated: false,
  uid: null
}

const dataReducer: Reducer<DataState, WatchAuthSuccessAction> = (
  state = initialDataState,
  action
) => {
  switch (action.type) {
    case WatchAuthActionTypes.success:
      return action.payload
    default:
      return state
  }
}

const requestsReducer = combineReducers({
  watch: createRequestReducer(WatchAuthActionTypes),
  signIn: createRequestReducer(SignInActionTypes)
})

export default combineReducers({
  data: dataReducer,
  requests: requestsReducer
})
