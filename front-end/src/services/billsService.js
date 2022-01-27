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

export const addFeeLineToBillApi = (formData) => {
    console.log("update bill service collabid : ")
    console.log(formData.getAll("billId"))
    console.log(formData.getAll("expenseDate"))
    console.log(formData.getAll("advanceCash"))
    console.log(formData.getAll("feeType"))
    console.log(formData.getAll("isExactAmount"))
    console.log(formData.getAll("proofs"))
    console.log(formData.getAll("missionId"))
    console.log(formData.getAll("validate"))
    console.log(formData.getAll("amount"))
    console.log(formData.getAll("commentary"))
    return axios.patch(baseUrl+"/bill", formData)
}
export const updateBillApi = (formData) => {
    console.log(typeof formData)
    console.log("update bill service : ")
    console.log(formData.getAll("id"))
    console.log(formData.getAll("isSubmitted"))
    console.log(formData.getAll("submissionDate"))
    console.log(formData.getAll("collaboratorId"))
    return axios.patch(baseUrl+"/bill/"+formData.getAll("id"),formData)
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

export const updateSpentFromApi=(formData)=>{
    return axios.patch(baseUrl+"/spent",formData)
} 


export const generateFormDataFromFeeLine = (feeLine) =>{
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