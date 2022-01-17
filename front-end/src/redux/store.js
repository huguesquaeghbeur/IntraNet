import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import collaboratorReducer from './reducers/collaboratorReducer'
import thunk from 'redux-thunk'

const composeEnhancer = compose

export default createStore(
    combineReducers({
        collaborator: collaboratorReducer,
    }), composeEnhancer(applyMiddleware(thunk)))