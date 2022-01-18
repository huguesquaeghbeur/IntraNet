export const IS_LOADING = "IS_LOADING"
export const END_GETTING_ALL_BILLS = "END_GETTING_ALL_BILLS"
export const ERROR_GETTING_ALL_BILLS = "ERROR_GETTING_ALL_BILLS"

const initialState = {
    isLoading: false,
    bills: undefined,
    error: undefined
}

export default function billsReducer(state = initialState, action) {
    switch(action.type){
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        case END_GETTING_ALL_BILLS:
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
        default:
            return { ...initialState }

    }
}