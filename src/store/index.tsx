import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
//modules
import { authReducer } from './auth'
import { baseReducer } from './base'
import { roomReducer } from './room'

const rootReducer = combineReducers({
  auth: authReducer,
  base: baseReducer,
  room: roomReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export type RootState = ReturnType<typeof rootReducer>

export default store
