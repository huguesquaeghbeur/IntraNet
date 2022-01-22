export const IS_LOADING = "IS_LOADING"
export const END_GETTING_ALL_BILLS = "END_GETTING_ALL_BILLS"
export const ERROR_GETTING_ALL_BILLS = "ERROR_GETTING_ALL_BILLS"
export const END_GETTING_BILLS_BY_ID = "END_GETTING_BILLS_BY_ID"
export const ERROR_GETTING_BILLS_BY_ID = "ERROR_GETTING_BILLS_BY_ID"
export const END_ADDING_BILL = 'END_ADDING_BILL'
export const ERROR_ADDING_BILL = "END_ADDING_BILL" 
export const END_DELETING_BILL = "END_DELETING_BILL"
export const ERROR_DELETING_BILL = "ERROR_DELETING_BILL"


const initialState = {
    isLoading: false,
    bills: [],
    bill: undefined,
    error: undefined
}

export default function billsReducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
        console.log("dans le isloading")

            return {
                ...state,
                isLoading: action.value
            }
        case END_GETTING_ALL_BILLS:
            // console.log("end getting data reducer " + action.bills[0].spents[0].commentary)

            return {
                ...state,
                bills: action.bills,
                isLoading: false,
                error: undefined
            }
        case ERROR_GETTING_ALL_BILLS:
            console.log("error getting in reducer")

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
        case END_ADDING_BILL:
            console.log("End adding bill : ")
            return {
                ...state,
                bills: [...state.bills, action.bill],
                isLoading:false,
            }
        case ERROR_ADDING_BILL:
            console.log("error adding bill : ")

            return {
                ...state,
                isLoading:false,
                error: action.error
            }
        case END_DELETING_BILL:
            if(action.res.id>0){
                return {
                    ...state,
                    isLoading:false,
                    bills: state.bills.filter(b => b.id!=action.res.id)
                }
            }else{
                return {
                    ...state
                }
            }

        case ERROR_DELETING_BILL: 
            return {
                ...state,
                isLoading:false,
                error: action.error
            }
        default:
            return { ...initialState }
    }
}