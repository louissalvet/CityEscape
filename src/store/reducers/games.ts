import { combineReducers, Reducer } from 'redux'

import { FetchGamesActionTypes, FetchGamesSuccessAction } from '../actions'
import { createRequestReducer } from '../helpers'

type DataState = Game[] | null

const intialDataState: DataState = null

const dataReducer: Reducer<DataState, FetchGamesSuccessAction> = (
  state = intialDataState,
  action
) => {
  switch (action.type) {
    case FetchGamesActionTypes.success:
      return action.payload
    default:
      return state
  }
}

const requestsReducer = combineReducers({
  fetch: createRequestReducer(FetchGamesActionTypes)
})

export default combineReducers({
  data: dataReducer,
  requests: requestsReducer
})
