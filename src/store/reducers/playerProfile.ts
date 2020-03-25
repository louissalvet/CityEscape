import { combineReducers, Reducer } from 'redux'

import {
  FetchPlayerProfileActionTypes,
  CompletePlayerProfileActionTypes,
  FetchPlayerProfileSuccessAction
} from '../actions'
import { createRequestReducer } from '../helpers'

type DataState = PlayerProfile | null

const intialDataState: DataState = null

const dataReducer: Reducer<DataState, FetchPlayerProfileSuccessAction> = (
  state = intialDataState,
  action
) => {
  switch (action.type) {
    case FetchPlayerProfileActionTypes.success:
      return action.payload
    default:
      return state
  }
}

const requestsReducer = combineReducers({
  fetch: createRequestReducer(FetchPlayerProfileActionTypes),
  complete: createRequestReducer(CompletePlayerProfileActionTypes)
})

export default combineReducers({
  data: dataReducer,
  requests: requestsReducer
})
