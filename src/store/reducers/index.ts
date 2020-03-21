import { combineReducers } from 'redux'

import authReducer from './auth'
import currentUserReducer from './currentUser'
import gamesReducer from './games'

export default combineReducers({
  auth: authReducer,
  currentUser: currentUserReducer,
  games: gamesReducer
})
