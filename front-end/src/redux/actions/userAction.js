import { LOG_IN, ERROR_LOG_IN, LOG_OUT, IS_LOADING, ERROR_GETTING_USER, END_GETTING_USER } from '../reducers/userReducer'
import { loginUser, getUserFromToken } from "../../services/collaboratorData";

export function login(formData) {
    return dispatch => {
        console.log("dans le login")
        dispatch({
            type: IS_LOADING,
            value: true
        })
        loginUser(formData).then(res => {
            console.log("dans le res")
            console.log(res)

            dispatch({
                type: LOG_IN,
                data: res.data,
            })
        }).catch(err => {
            console.log("dans le catch")
            console.log(err)
            dispatch({
                type: ERROR_LOG_IN,
                error: err
            })
        })
    }
}

export function getUser() {
    console.log("getuser")
    return dispatch => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        getUserFromToken().then(res => {
            console.log("dans le res")
            console.log(res)
            dispatch({
                type: END_GETTING_USER,
                user: res.data.collaborator,
            })
        }).catch(err => {
            console.log("dans le catch")
            console.log(err)
            dispatch({
                type: ERROR_GETTING_USER,
                error: err
            })
        })
    }
}


export function logout() {
    console.log("déconnection")
    return dispatch => {
        dispatch({
            type: LOG_OUT
        })
    }
}