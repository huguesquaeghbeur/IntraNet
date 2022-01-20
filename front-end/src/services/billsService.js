import axios from "axios"
const baseUrl = "http://localhost:42515/intranet/v1/bill"

export const getAllBills = () => {
    return axios.get(baseUrl)
}

export const createBill = (bill) => {
    console.log("billservice "+bill.collabId)
    return axios.post(baseUrl, bill)
}

export const updateBillApi = (bill) => {
    return axios.patch(baseUrl, bill)
}
export const getBillByIdApi = (id) => {
    return axios.get(baseUrl+"/"+id)
}