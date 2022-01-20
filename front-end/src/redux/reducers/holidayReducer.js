import { END_FETCHING_DATA, END_FETCHING_HOLIDAY_DATA_BY_ID, ERROR_FETCHING_DATA, ERROR_FETCHING_HOLIDAY_DATA_BY_ID } from "../actions/holidayAction";


const initialState = {
    holidays: undefined,
    holiday: undefined,
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
            case END_FETCHING_HOLIDAY_DATA_BY_ID:
                return {
                    ...state,
                    isLoading: false,
                    holiday: action.holiday
                }
                case ERROR_FETCHING_HOLIDAY_DATA_BY_ID:
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