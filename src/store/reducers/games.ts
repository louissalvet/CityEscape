import { combineReducers, Reducer } from 'redux'

import { WatchGamesActionTypes, WatchGamesSuccessAction } from '../actions'
import { createRequestReducer } from '../helpers'

type Game = {
  id: string
  title: string
  description: string
  players: string[]
  slots: number
}

type DataState = Game[]

const initialDataState: DataState = []

const dataReducer: Reducer<DataState, WatchGamesSuccessAction> = (
  state = initialDataState,
  action
) => {
  switch (action.type) {
    case WatchGamesActionTypes.success:
      return action.payload
    default:
      return state
  }
}

const requestsReducer = combineReducers({
  watch: createRequestReducer(WatchGamesActionTypes)
})

export default combineReducers({
  data: dataReducer,
  requests: requestsReducer
})
