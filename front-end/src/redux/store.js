import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import collaboratorReducer from './reducers/collaboratorReducer'
import userReducer from './reducers/userReducer'
import billsReducer from './reducers/billsReducer'
import thunk from 'redux-thunk'
import { HolidayReducer } from './reducers/holidayReducer';
import departmentReducer from './reducers/departmentReducer'
import { InfoReducer } from './reducers/infoReducer'

const composeEnhancer = compose

export default createStore(
    combineReducers({
        user:userReducer,
        info: InfoReducer,
        collaborator: collaboratorReducer,
        holidayState: HolidayReducer,
        bills: billsReducer,
        departments: departmentReducer,
    }), composeEnhancer(applyMiddleware(thunk)))
       
        
   
   
    
