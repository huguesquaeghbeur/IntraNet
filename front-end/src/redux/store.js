import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'

const composeEnhancer=compose

export default createStore(
    combineReducers({
        // user:userReducer,
        bills: billsReducer
    }),composeEnhancer(applyMiddleware(thunk)))