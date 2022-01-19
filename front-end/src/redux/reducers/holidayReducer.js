import { ADD_REQUEST_HOLIDAY_ACTION, END_FETCHING_DATA, ERROR_FETCHING_DATA, IS_LOADING, UPDATE_REQUEST_HOLIDAY_ACTION } from "../actions/holidayAction";


const initialState = {
    holidays: undefined,
    error: undefined
};

export const HolidayReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return { ...initialState }
            break;
    }
}