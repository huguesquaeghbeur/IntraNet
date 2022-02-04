import { 
    LOG_IN, 
    ERROR_LOG_IN, 
    LOG_OUT, 
    IS_LOADING, 
    ERROR_GETTING_USER, 
    END_GETTING_USER, 
    END_DELETING_BILL,
    ERROR_DELETING_BILL } from '../reducers/userReducer'
import { loginUser, getUserFromToken } from "../../services/collaboratorData";
import { deleteBillFromApi } from "../../services/billsService"

export function login(formData) {
    return dispatch => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        loginUser(formData).then(res => {
            dispatch({
                type: LOG_IN,
                data: res.data,
            })
        }).catch(err => {
            dispatch({
                type: ERROR_LOG_IN,
                error: err
            })
        })
    }
}

export function getUser() {
    return dispatch => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        getUserFromToken().then(res => {
            dispatch({
                type: END_GETTING_USER,
                user: res.data.collaborator,
            })
        }).catch(err => {
            dispatch({
                type: ERROR_GETTING_USER,
                error: err
            })
        })
    }
}


export function logout() {
    return dispatch => {
        dispatch({
            type: LOG_OUT
        })
    }
}

export const deleteBill = (id) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        deleteBillFromApi(id).then(res => {
            dispatch({
                type: END_DELETING_BILL,
                res: res.data
            })
        }).catch(err => {
            dispatch({
                type: ERROR_DELETING_BILL,
                error: err
            })
        })
    }
}