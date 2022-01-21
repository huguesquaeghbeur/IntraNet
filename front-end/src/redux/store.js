import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import collaboratorReducer from './reducers/collaboratorReducer'
// import userReducer from './reducers/userReducer'
import billsReducer from './reducers/billsReducer'
import thunk from 'redux-thunk'
import { HolidayReducer } from './reducers/holidayReducer';

const composeEnhancer = compose

export default createStore(
    combineReducers({
        collaborator: collaboratorReducer,
        holiday: HolidayReducer,
        bills: billsReducer
    }), composeEnhancer(applyMiddleware(thunk)))
       
        
   
