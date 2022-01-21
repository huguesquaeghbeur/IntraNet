import {
    getAllBills,
    createBill,
    updateBillApi,
    getBillByIdApi,
    deleteBillFromApi
} from "../../services/billsService";
import {
    IS_LOADING,
    END_GETTING_ALL_BILLS,
    ERROR_GETTING_ALL_BILLS,
    ERROR_GETTING_BILLS_BY_ID,
    END_GETTING_BILLS_BY_ID,
    END_ADDING_BILL,
    ERROR_ADDING_BILL,
    END_DELETING_BILL,
    ERROR_DELETING_BILL
} from "../reducers/billsReducer"

export const deleteBill = (id) => {
    console.log("dans l deleteBill")

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
        }).catch(err=>{
            dispatch({
                type: ERROR_DELETING_BILL,
                error:err
            })
        })
    }
}

export function fetchAllBills() {

    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        getAllBills().then(res => {
            dispatch({
                type: END_GETTING_ALL_BILLS,
                bills: res.data
            })
        }).catch(error => {
            dispatch({
                type: ERROR_GETTING_ALL_BILLS,
                error: error
            })
        })
    }
}

export function postBill(bill) {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        createBill(bill).then(res => {
            dispatch({
                type: END_ADDING_BILL,
                bill: res.data.bill
            })
        }).catch(error => {
            dispatch({
                type: ERROR_ADDING_BILL,
                error: error
            })
        })
    }

}

export function updateBill(bill) {
    updateBillApi(bill).then(res => {
    }).catch(error => {
    })
}

export const getBillById = (id) => {
    return(dispatch)=>{
        getBillByIdApi(id).then(res=>{
        dispatch({
            type: END_GETTING_BILLS_BY_ID,
            bill: res.data
        })
    }).catch(error => {
        dispatch({
            type: ERROR_GETTING_BILLS_BY_ID,
            error: error
        })
    })
}
}


