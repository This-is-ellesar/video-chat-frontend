import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
//modules
import { authReducer } from './auth'
import { baseReducer } from './base'

const rootReducer = combineReducers({
    auth: authReducer,
    base: baseReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store