import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import collaboratorReducer from './reducers/collaboratorReducer'
import thunk from 'redux-thunk'
import { InfoReducer } from './reducers/infoReducer'

const composeEnhancer = compose

export default createStore(
    combineReducers({
        // user:userReducer,
        info: InfoReducer,
        collaborator: collaboratorReducer,
    }), composeEnhancer(applyMiddleware(thunk)))
