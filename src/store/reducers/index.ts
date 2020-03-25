import { combineReducers } from 'redux'

import authReducer from './auth'
import playerProfileReducer from './playerProfile'
import gamesReducer from './games'
import involvementReducer from './involvement'
import involvingReducer from './involving'

export default combineReducers({
  auth: authReducer,
  playerProfile: playerProfileReducer,
  games: gamesReducer,
  involvement: involvementReducer,
  involving: involvingReducer
})
