import axios from "axios"
const baseUrl = "http://localhost:42515/intranet/v1"

export const getAllBills = () => {
    return axios.get(baseUrl+"/bill")
}

export const createBill = (bill) => {
    return axios.post(baseUrl+"/bill", bill)
}

export const addFeeLineToBillApi = (formData) => {
    return axios.patch(baseUrl+"/bill", formData)
}
export const updateBillApi = (formData) => {
    return axios.patch(baseUrl+"/bill/"+formData.getAll("id"),formData)
}
export const getBillByIdApi = (id) => {
    return axios.get(baseUrl+"/bill/"+id)
}

export const deleteBillFromApi = (id) => {
    return axios.delete(baseUrl+"/bill/"+id)
}

export const deleteSpentFromApi=(id)=>{
    return axios.delete(baseUrl+"/spent/"+id)
}

export const updateSpentFromApi=(formData)=>{
    return axios.patch(baseUrl+"/spent",formData)
} 


export const generateFormDataFromFeeLine = (feeLine) =>{
    console.log(feeLine)
    const formData = new FormData()
    if(feeLine.billId !== undefined){
        formData.append("billId",feeLine.billId)
    }
    if(feeLine.proofs!==undefined){
        for(let i =0; i<feeLine.proofs.length;i++)
            formData.append("proofs", feeLine.proofs[i])
    }
    formData.append("missionId", 1)
    formData.append("advanceCash", feeLine.advanceCash)
    formData.append("commentary", feeLine.commentary)
    formData.append("isExactAmount", feeLine.isExactAmount)
    formData.append("validate", feeLine.validate)
    formData.append("expenseDate", feeLine.expenseDate)
    formData.append("feeType", feeLine.feeType)
    formData.append("amount", feeLine.amount)
    formData.append("id", feeLine.id)
    return formData
}

export const generateFormDataFromBill = bill =>{
    const formData = new FormData()
    formData.append("id",bill.id)
    formData.append("isSubmitted",bill.isSubmitted)
    formData.append("submissionDate",bill.submissionDate)
    formData.append("collaboratorId",bill.collaboratorId)
    return formData
}