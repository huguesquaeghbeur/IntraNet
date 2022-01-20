import {
    getAllBills,
    createBill,
    updateBillApi,
    getBillByIdApi,
} from "../../services/billsService";
import {
    IS_LOADING,
    END_GETTING_ALL_BILLS,
    ERROR_GETTING_ALL_BILLS,
    ERROR_GETTING_BILLS_BY_ID,
    END_GETTING_BILLS_BY_ID
} from "../reducers/billsReducer"

export function fetchAllBills() {
    console.log("dans fetch all bills ")

    return (dispatch) => {
        // dispatch({
        //     type: IS_LOADING,
        //     value: true
        // })
        getAllBills().then(res => {
            console.log("get all bills then " + res.data)
            dispatch({
                type: END_GETTING_ALL_BILLS,
                bills: res.data
            })
        }).catch(error => {
            console.log("get all bills error " + error)

            dispatch({
                type: ERROR_GETTING_ALL_BILLS,
                error: error
            })
        })
    }
}

export function postBill(bill) {
    console.log("post action bill " + bill)
    createBill(bill).then(res => {
        console.log("post bill then" + res)
    }).catch(error => {
        console.log("post bill catch" + error)
    })
}

export function updateBill(bill) {
    console.log("update action bill " + bill)
    updateBillApi(bill).then(res => {
        console.log("update bill then" + res)
    }).catch(error => {
        console.log("update bill catch" + error)
    })
}

export function getBillById(id) {
    console.log("bill action  id : "+id)

    return(dispatch)=>{
        getBillByIdApi(id).then(res=>{
        console.log("get bill by id then " + res.data)
        dispatch({
            type: END_GETTING_BILLS_BY_ID,
            bill: res.data
        })
    }).catch(error => {
        console.log("get bill by id error " + error)

        dispatch({
            type: ERROR_GETTING_BILLS_BY_ID,
            error: error
        })
    })
}
}