import { Reducer, combineReducers } from 'redux'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

import { WatchAuthActionTypes, WatchAuthSuccessAction } from '../actions'
import { createRequestReducer } from '../helpers'

type DataState = FirebaseAuthTypes.User | null

const initialDataState: DataState = null

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
  watch: createRequestReducer(WatchAuthActionTypes)
})

export default combineReducers({
  data: dataReducer,
  requests: requestsReducer
})
