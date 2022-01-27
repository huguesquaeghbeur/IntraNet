import axios from "axios"
const baseUrl = "http://localhost:42515/intranet/v1/bill"

export const getAllBills = () => {
    console.log("dans le get all bilsl")
    return axios.get(baseUrl)
}

export const createBill = (bill) => {
    console.log("create bill service collabid : ")
    console.log(bill.getAll("collabId"))
    return axios.post(baseUrl, bill)
}

export const updateBillApi = (bill) => {
    return axios.patch(baseUrl, bill)
}
export const getBillByIdApi = (id) => {
    return axios.get(baseUrl+"/"+id)
}

export const deleteBillFromApi = (id) => {
    console.log("delete bill service "+id)
    return axios.delete(baseUrl+"/"+id)
}