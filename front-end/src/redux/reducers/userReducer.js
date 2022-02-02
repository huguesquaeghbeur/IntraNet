import { getUser } from '../../services/collaboratorData'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const IS_LOADING = 'IS_LOADING'
export const ERROR_LOG_IN = 'ERROR_LOG_IN'
export const ERROR_GETTING_USER = "ERROR_GETTING_USER"
export const END_GETTING_USER = "END_GETTING_USER"
export const END_DELETING_BILL = "END_DELETING_BILL"
export const ERROR_DELETING_BILL = "ERROR_DELETING_BILL"

const initialState = {
    isLoading: false,
    user: undefined,
    error: undefined
}




export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        case LOG_IN:
            localStorage.setItem('token', JSON.stringify(action.data.token))
            window.location.reload(false)
            console.log("locale storage")
            console.log(localStorage.getItem("token"))
            console.log(action.data.collaborator)
            return {
                ...state,
                isLoading: false,
                // user: action.data.collaborator
            }
        case ERROR_LOG_IN:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case LOG_OUT:
            console.log("logout")
            console.log(state.user)
            localStorage.removeItem("token")
            return {
                ...state,
                user: undefined
            }
        case END_GETTING_USER:
            return {
                ...state,
                isLoading: false,
                user: action.user
            }
        case ERROR_GETTING_USER:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}