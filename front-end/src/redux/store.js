import {createStore,combineReducers,compose,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import { InfoReducer } from './reducers/infoReducer'

const composeEnhancer=compose

export default createStore(
    combineReducers({
        // user:userReducer,
        info: InfoReducer,
    }),composeEnhancer(applyMiddleware(thunk)))