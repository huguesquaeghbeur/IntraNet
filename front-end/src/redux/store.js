import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import collaboratorReducer from './reducers/collaboratorReducer'
import thunk from 'redux-thunk'
import departmentReducer from './reducers/departmentReducer'

const composeEnhancer = compose

export default createStore(
    combineReducers({
        collaborator: collaboratorReducer,
        departments: departmentReducer,
    }), composeEnhancer(applyMiddleware(thunk)))