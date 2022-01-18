import axios from "axios";
import { getAllHolidays } from "../../services/holidayData";

export const ADD_REQUEST_HOLIDAY_ACTION = "ADD_REQUEST_HOLIDAY_ACTION";
export const UPDATE_REQUEST_HOLIDAY_ACTION = "UPDATE_REQUEST_HOLIDAY_ACTION";
export const IS_LOADING = 'IS_LOADING';
export const START_FETCHING_DATA = 'START_FETCHING_DATA';
export const END_FETCHING_DATA = 'END_FETCHING_DATA';
export const ERROR_FETCHING_DATA = 'ERROR_FETCHING_DATA';

export const getHolidaysFromApi = () => {
    return (dispatch) => {
        // dispatch({
        //     type : IS_LOADING,
        //     value : true
        // })
        getAllHolidays().then(res => {
            dispatch({
                type : END_FETCHING_DATA,
                holidays : res.data
            })
        }).catch(error => {
            dispatch({
                type : ERROR_FETCHING_DATA,
                error : error
            })
        })
    }
};
