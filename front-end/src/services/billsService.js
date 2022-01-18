import axios from "axios"
const baseUrl = "http://localhost:42515/intranet/v1/bill"

export const getAllBills = () => {
    return axios.get(baseUrl)
}

export const createBill = (bill) => {
    return axios.post(baseURL, {...bill})
}

export const updateBill = (bill) => {
    return axios.patch(baseURL, {...bill})
}