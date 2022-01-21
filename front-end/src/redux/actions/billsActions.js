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
    console.log("dans return delete")

        dispatch({
            type: IS_LOADING,
            value: true
        })
    console.log("dans le return")
        deleteBillFromApi(id).then(res => {
    console.log("dans le then")
    console.log(res.data)


            dispatch({
                type: END_DELETING_BILL,
                res: res.data
            })
        }).catch(err=>{
        console.log("dans le error qsfdgqgf"+err)

            dispatch({
                type: ERROR_DELETING_BILL,
                error:err
            })
        })
    }
}

export function fetchAllBills() {
    console.log("dans fetch all bills ")

    return (dispatch) => {
    console.log("dans return all bills ")

        dispatch({
            type: IS_LOADING,
            value: true
        })
    console.log("dans return dans dispatch ")

        getAllBills().then(res => {
            console.log("get all bills then " )
            console.log(res.data)
            dispatch({
                type: END_GETTING_ALL_BILLS,
                bills: res.data
            })
        }).catch(error => {
            console.log("get all bills catch " + error)

            dispatch({
                type: ERROR_GETTING_ALL_BILLS,
                error: error
            })
        })
    }
}

export function postBill(bill) {
    console.log("post action bill " + bill)
    return (dispatch) => {
        console.log("post action return" )
        dispatch({
            type: IS_LOADING,
            value: true
        })
        createBill(bill).then(res => {
            console.log("post bill then" + res.data)
            dispatch({
                type: END_ADDING_BILL,
                bill: res.data.bill
            })
        }).catch(error => {
            console.log("post bill catch" + error)
            dispatch({
                type: ERROR_ADDING_BILL,
                error: error
            })
        })
    }

}

export function updateBill(bill) {
    console.log("update action bill " + bill)
    updateBillApi(bill).then(res => {
        console.log("update bill then" + res)
    }).catch(error => {
        console.log("update bill catch" + error)
    })
}

export const getBillById = (id) => {
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


