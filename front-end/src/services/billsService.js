import axios from "axios"
const baseUrl = "http://localhost:42515/intranet/v1"

export const getAllBills = () => {
    console.log("dans le get all bilsl")
    return axios.get(baseUrl+"/bill")
}

export const createBill = (bill) => {
    console.log("create bill service collabid : ")
    console.log(bill.getAll("collabId"))
    return axios.post(baseUrl+"/bill", bill)
}

export const updateBillApi = (bill) => {
    console.log("update bill service collabid : ")
    console.log(bill.getAll("billId"))
    console.log(bill.getAll("expenseDate"))
    console.log(bill.getAll("advanceCash"))
    console.log(bill.getAll("feeType"))
    console.log(bill.getAll("isExactAmount"))
    console.log(bill.getAll("proof"))
    console.log(bill.getAll("missionId"))
    console.log(bill.getAll("validateLevel"))
    console.log(bill.getAll("amount"))
    console.log(bill.getAll("commentary"))
    return axios.patch(baseUrl+"/bill", bill)
}
export const getBillByIdApi = (id) => {
    return axios.get(baseUrl+"/bill/"+id)
}

export const deleteBillFromApi = (id) => {
    console.log("delete bill service "+id)
    return axios.delete(baseUrl+"/bill/"+id)
}

export const deleteSpentFromApi=(id)=>{
    return axios.delete(baseUrl+"/spent/"+id)
}