export const IS_LOADING = "IS_LOADING"
export const END_GETTING_ALL_BILLS = "END_GETTING_ALL_BILLS"
export const ERROR_GETTING_ALL_BILLS = "ERROR_GETTING_ALL_BILLS"
export const END_GETTING_BILLS_BY_ID = "END_GETTING_BILLS_BY_ID"
export const ERROR_GETTING_BILLS_BY_ID = "ERROR_GETTING_BILLS_BY_ID"

const initialState = {
    isLoading: false,
    bills: undefined,
    bill: undefined,
    error: undefined
}

export default function billsReducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        case END_GETTING_ALL_BILLS:
            console.log("end getting data reducer " + action.bills[0].spents[0].commentary)

            return {
                ...state,
                bills: action.bills,
                error: undefined
            }
        case ERROR_GETTING_ALL_BILLS:
            console.log("get all bills error in reducer")

            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case END_GETTING_BILLS_BY_ID:
            return {
                ...state,
                isLoading: false,
                bill: action.bill
            }
        case ERROR_GETTING_BILLS_BY_ID:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return { ...initialState }

    }
}