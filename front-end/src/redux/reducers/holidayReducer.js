import { END_DELETE_HOLIDAY, END_FETCHING_DATA, END_FETCHING_HOLIDAY_DATA_BY_ID, END_POST_HOLIDAY, ERROR_DELETE_HOLIDAY, ERROR_FETCHING_DATA, ERROR_FETCHING_HOLIDAY_DATA_BY_ID, ERROR_POST_HOLIDAY, IS_LOADING, END_UPDATE_HOLIDAY } from "../actions/holidayAction";


const initialState = {
    isLoading: false,
    holidays: [],
    holiday: [],
    error: undefined,
};

export const HolidayReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            console.log("is loading...")
            return {
                ...state,
                isLoading: action.payload
            }
        case END_FETCHING_DATA:
            return {
                ...state,
                isLoading: false,
                holidays: action.holidays,
                error: undefined,
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
        case END_POST_HOLIDAY:
            return {
                ...state,
                holidays: [...state.holidays, action.holiday],
                isLoading: false
            }
        case ERROR_POST_HOLIDAY:
            return {
                ...state,
                isLoading: false,
                error: action.type
            }
        case END_DELETE_HOLIDAY:
            if (action.selectedHoliday > 0) {
                return {
                    ...state,
                    isLoading: false,
                    holidays: state.holidays.filter(h => h.id !== action.selectedHoliday.id)
                }
            } else {
                return {
                    ...state
                }
            }
            case ERROR_DELETE_HOLIDAY:
                return {
                    ...state,
                    isLoading: false,
                    error: action.error
                    }
            case END_UPDATE_HOLIDAY:
                    return {
                        ...state,
                        isLoading: false,
                    }
        default:
            return { ...initialState }
            break;
    }
}