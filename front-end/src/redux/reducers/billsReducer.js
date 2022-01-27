export const IS_LOADING = "IS_LOADING"
export const END_GETTING_ALL_BILLS = "END_GETTING_ALL_BILLS"
export const ERROR_GETTING_ALL_BILLS = "ERROR_GETTING_ALL_BILLS"
export const END_GETTING_BILLS_BY_ID = "END_GETTING_BILLS_BY_ID"
export const ERROR_GETTING_BILLS_BY_ID = "ERROR_GETTING_BILLS_BY_ID"
export const END_ADDING_BILL = 'END_ADDING_BILL'
export const ERROR_ADDING_BILL = "END_ADDING_BILL"
export const END_DELETING_BILL = "END_DELETING_BILL"
export const ERROR_DELETING_BILL = "ERROR_DELETING_BILL"
export const END_DELETING_SPENT = "END_DELETING_SPENT"
export const ERROR_DELETING_SPENT = "ERROR_DELETING_SPENT"
export const END_SENDING_BILL = "END_SENDING_BILL"
export const ERROR_SENDING_BILL = "END_SENDING_BILL"

const initialState = {
    isLoading: false,
    bills: [],
    bill: [],
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
            return {
                ...state,
                bills: action.bills,
                isLoading: false,
                error: undefined
            }
        case ERROR_GETTING_ALL_BILLS:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case END_GETTING_BILLS_BY_ID:
            state = {
                ...state,
                isLoading: false,
                bill: action.bill
            }
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
        case END_ADDING_BILL:
            state.bills.unshift(action.bill)
            return {
                ...state,
                isLoading: false,
            }
        case ERROR_ADDING_BILL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case END_DELETING_BILL:
            if (action.res.id > 0) {
                return {
                    ...state,
                    isLoading: false,
                    bills: state.bills.filter(b => b.id != action.res.id)
                }
            } else {
                return {
                    ...state
                }
            }
        case ERROR_DELETING_BILL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case END_DELETING_SPENT:
            return {
                ...state,
                isLoading: false,
                bill: state.bill.spents.filter(b => b.id != action.res.billId)
            }
        case ERROR_DELETING_SPENT:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case END_SENDING_BILL:
            return {
                ...state,
                isLoading: false,
                bills: state.bills.map(b => b.id != action.bill.id ? b : action.bill)
            }
        case ERROR_SENDING_BILL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return { ...initialState }
    }
}