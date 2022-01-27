import { type } from "@testing-library/user-event/dist/type";
import {
    getAllBills,
    createBill,
    getBillByIdApi,
    deleteBillFromApi,
    deleteSpentFromApi,
    updateBillApi,
    generateFormDataFromBill
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
    ERROR_DELETING_BILL,
    END_DELETING_SPENT,
    ERROR_DELETING_SPENT,
    END_SENDING_BILL,
    ERROR_SENDING_BILL
} from "../reducers/billsReducer"

export const deleteSpent = (spentId, billId) => {
    return (dispatch) => {
        console.log("dans le delete")
        console.log(spentId)
        console.log(billId)

        dispatch({
            type: IS_LOADING,
            value: true
        })
        deleteSpentFromApi(spentId).then(res => {
            console.log("dans le res")
            console.log(res)

            dispatch({
                type: END_DELETING_SPENT,
                res: { spentId: res.data.id, billId: billId }
            })
        }).catch(err => {
            console.log("dans le err")
            console.log(err)
            dispatch({
                type: ERROR_DELETING_SPENT,
                error: err
            })
        })
    }
}

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
        }).catch(err => {
            dispatch({
                type: ERROR_DELETING_BILL,
                error: err
            })
        })
    }
}

export function fetchAllBills() {
    console.log("dans fetch all bill")

    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        getAllBills().then(res => {
            console.log("dans le then")

            dispatch({
                type: END_GETTING_ALL_BILLS,
                bills: res.data
            })
        }).catch(error => {
            console.log("dans l'erreur")
            console.log(error)

            dispatch({
                type: ERROR_GETTING_ALL_BILLS,
                error: error
            })
        })
    }
}

export function postBill(bill) {
    console.log("post bill ")
    return (dispatch) => {
        console.log("return bill ")

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

export function sendBill(bill) {
    const formData = generateFormDataFromBill(bill)
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        updateBillApi(formData).then(res => {
            dispatch({
                type: END_SENDING_BILL,
                bill: res.data.bill
            })
            console.log("dans le res")
            console.log(res.data.bill)
        }).catch(error => {
            console.log("dans le err")
            console.log(error)
            dispatch({
                type:ERROR_SENDING_BILL,
                error: error
            })
        })
    }

}

export const getBillById = (id) => {
    console.log("dans l'action")
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        getBillByIdApi(id).then(res => {
            console.log("action")
            console.log(res)

            dispatch({
                type: END_GETTING_BILLS_BY_ID,
                bill: res.data
            })
        }).catch(err => {
            dispatch({
                type: ERROR_GETTING_BILLS_BY_ID,
                error: err
            })
        })
    }
}


