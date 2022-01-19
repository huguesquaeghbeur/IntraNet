import { getAllHolidays, postHolidayData } from "../../services/holidayData";

export const ADD_REQUEST_HOLIDAY_ACTION = "ADD_REQUEST_HOLIDAY_ACTION";
export const UPDATE_REQUEST_HOLIDAY_ACTION = "UPDATE_REQUEST_HOLIDAY_ACTION";
export const START_FETCHING_DATA = 'START_FETCHING_DATA';
export const END_FETCHING_DATA = 'END_FETCHING_DATA';
export const ERROR_FETCHING_DATA = 'ERROR_FETCHING_DATA';

export const getHolidaysFromApi = () => {
    return (dispatch) => {
        getAllHolidays().then(res => {
            dispatch({
                type: END_FETCHING_DATA,
                holidays: res.data
            })
        }).catch(error => {
            dispatch({
                type: ERROR_FETCHING_DATA,
                error: error
            })
        });
    }
};

export const postRequestHolidayInApi = (holidayObj) => {
    return (dispatch) => {
        postHolidayData(holidayObj).then(res => {
            console.log(res)
            dispatch({
                type: ADD_REQUEST_HOLIDAY_ACTION,
                payload: res.data
            })
        }).catch(error => {
            console.log(error)
        });
    }
}
