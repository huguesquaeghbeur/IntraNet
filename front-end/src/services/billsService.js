import axios from "axios"
const baseUrl = "http://localhost:42515/intranet/v1"

export const getAllBills = () => {
    console.log("chemin "+baseUrl+"/bill")
    return axios.get(baseUrl+"/bill")
}

export const createBill = (bill) => {
    return axios.post(baseUrl+"/bill", {...bill})
}

export const updateBill = (bill) => {
    return axios.patch(baseUrl+"/bill", {...bill})
}