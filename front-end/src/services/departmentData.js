import axios from "axios";
const baseUrl = "http://localhost:5000/intranet/v1";

export const getAllDepartments = () => {
    return axios.get(baseUrl + '/departments')
}
export const getDepartmentRequestById = (id) => {
    return axios.get(baseUrl + '/departments/' + id)
}
export const postDepartmentData = (data) => {
    return axios.post(baseUrl + '/departments', data)
}
export const updateDepartmentApi = (data) => {
    return axios.patch(baseUrl+ '/departments', data)
}