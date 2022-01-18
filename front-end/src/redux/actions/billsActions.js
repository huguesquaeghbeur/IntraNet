import {
    getAllBills,
    createBill,
    updateBill,
} from "../../services/billsService";
import {
    IS_LOADING,
    END_GETTING_ALL_BILLS,
    ERROR_GETTING_ALL_BILLS,
} from "../reducers/billsReducer"

export function fetchAllBills() {
    return (dispatch) => {
        // dispatch({
        //     type: IS_LOADING,
        //     value: true
        // })
    getAllBills().then(res =>{
        console.log("get all bills then "+res)
        dispatch({
            type: END_GETTING_ALL_BILLS,
            bills: res.data
        })
    }).catch(error => {
        console.log("get all bills error "+error)

        dispatch({
            type : ERROR_GETTING_ALL_BILLS,
            error: error
        })
    })
}}