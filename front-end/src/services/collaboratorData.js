import axios from "axios";
import {tokenToFormData} from "./userService"
const baseUrl = 'http://localhost:5000/intranet/v1';

export const postCollaboratorData = (data) => {
    return axios.post(baseUrl + '/collaborator', data)
}

export const getAllCollaborator = () => {
    return axios.get(baseUrl + '/collaborator')
}

export const getCollaboratorById = (id) => {
    return axios.get(baseUrl + '/collaborator/' + id)
}

export const updateCollaboratorData = (id, data) => {
    return axios.put(baseUrl + '/collaborator/' + id, data)
}

export const getCollaboratorByDepartmentIdApi = (id) => {
    return axios.get(baseUrl+"/collaborator/department/"+id) 
}

export const loginUser = (data) => {
    if(localStorage.getItem('token')===undefined)
        localStorage.removeItem('token')
    return axios.post(baseUrl + '/login', data)
}

export const getUserFromToken = () => {
    const t = tokenToFormData()
    return axios.post(baseUrl+'/collaborator/login', tokenToFormData())
}

export const deconnect = () => {
    return localStorage.removeItem("token")
}
