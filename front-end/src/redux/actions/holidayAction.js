import { deleteHolidayApi, getAllHolidays, getHolidayRequestById, postHolidayData } from "../../services/holidayData";

export const ADD_REQUEST_HOLIDAY_ACTION = "ADD_REQUEST_HOLIDAY_ACTION";
export const UPDATE_REQUEST_HOLIDAY_ACTION = "UPDATE_REQUEST_HOLIDAY_ACTION";
export const START_FETCHING_DATA = 'START_FETCHING_DATA';
export const END_FETCHING_DATA = 'END_FETCHING_DATA';
export const ERROR_FETCHING_DATA = 'ERROR_FETCHING_DATA';
export const END_FETCHING_HOLIDAY_DATA_BY_ID = 'END_FETCHING_HOLIDAY_DATA_BY_ID';
export const ERROR_FETCHING_HOLIDAY_DATA_BY_ID = 'ERROR_FETCHING_HOLIDAY_DATA_BY_ID';
export const IS_LOADING = 'IS_LOADING';
export const END_POST_HOLIDAY = 'END_POST_HOLIDAY';
export const ERROR_POST_HOLIDAY = 'ERROR_POST_HOLIDAY';
export const END_DELETE_HOLIDAY = 'END_DELETE_HOLIDAY';
export const ERROR_DELETE_HOLIDAY = 'ERROR_DELETE_HOLIDAY';

export const getHolidaysFromApi = () => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            payload: true
        })
        getAllHolidays().then(res => {
            dispatch({
                type: END_FETCHING_DATA,
                holidays: res.data
            })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: ERROR_FETCHING_DATA,
                error: error
            })
        })
        // getAllHolidays().then(res => {
        //     dispatch({
        //         type: END_FETCHING_DATA,
        //         holidays: res.data
        //     })
        // }).catch(error => {
        //     dispatch({
        //         type: ERROR_FETCHING_DATA,
        //         error: error
        //     })
        // });
    }
};

export const postRequestHolidayInApi = (holidayObj) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            payload: true
        })
        postHolidayData(holidayObj).then(res => {
            dispatch({
                type: END_POST_HOLIDAY,
                holiday: res.data.holiday
            })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: ERROR_POST_HOLIDAY,
                error: error
            })
        })
        // postHolidayData(holidayObj).then(res => {
        //     console.log(res)
        //     dispatch({
        //         type: ADD_REQUEST_HOLIDAY_ACTION,
        //         payload: res.data
        //     })
        // }).catch(error => {
        //     console.log(error)
        // });
    }
}

export const getHolidayById = (id) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            payload: true
        })
        getHolidayRequestById(id).then(res => {
            console.log(res.data)
            dispatch({
                type: END_FETCHING_HOLIDAY_DATA_BY_ID,
                holiday: res.data
            })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: ERROR_FETCHING_HOLIDAY_DATA_BY_ID,
                error: error
            })
        })
        // getHolidayRequestById(id).then(res => {
        //     console.log(res.data)
        //     dispatch({
        //         type: END_FETCHING_HOLIDAY_DATA_BY_ID,
        //         holiday: res.data
        //     })
        // }).catch(error => {
        //     console.log(error)
        //     dispatch({
        //         type: ERROR_FETCHING_HOLIDAY_DATA_BY_ID,
        //         error: error
        //     })
        // })
    }
}

export const deleteHoliday = (id) => {
    return(dispatch) => {
        dispatch({
            type: IS_LOADING,
            payload: true
        })
        deleteHolidayApi(id).then(res => {
            dispatch({
                type: END_DELETE_HOLIDAY,
                selectedHoliday: res.data
            })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: ERROR_DELETE_HOLIDAY,
                error: error
            })
        })
    }
}
