import { getAllHolidays } from "../../services/holidayData";
import { ADD_REQUEST_HOLIDAY_ACTION, END_FETCHING_DATA, ERROR_FETCHING_DATA, IS_LOADING, UPDATE_REQUEST_HOLIDAY_ACTION, START_FETCHING_DATA, getHolidaysFromApi } from "../actions/holidayAction";


const initialState = {
    isLoading: false,
    holidays: getAllHolidays(),
    error: undefined
};

// export function HolidayReducer(state = initialState, action) {
//     switch (action.type) {
//         case ADD_REQUEST_HOLIDAY_ACTION:
//             return [...state, { id: ++id, ...action.payload }]
//         case UPDATE_REQUEST_HOLIDAY_ACTION:
//             return state.map(holiday => {
//                 if (holiday.id === action.payload.id) {
//                     return { ...holiday, ...action.payload }
//                 } else {
//                     return holiday
//                 }
//             })
//             default:
//                 return state;
//     }
// }


export const HolidayReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
            break;
        case END_FETCHING_DATA:
            return {
                ...state,
                isLoading: false,
                holidays: action.holidays,
                error: undefined
            }
            break;
        case ERROR_FETCHING_DATA:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
            break;
            default:
                return { ...initialState }
                break;
    }
}