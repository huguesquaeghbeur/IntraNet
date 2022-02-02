import axios from "axios";
const baseUrl = "http://localhost:5000/intranet/v1";

export const getAllHolidays = () => {
    return axios.get(baseUrl + '/holidays')
}
export const getHolidayRequestById = (id) => {
    return axios.get(baseUrl + '/holidays/' + id)
}
export const postHolidayData = (data) => {
    return axios.post(baseUrl + '/holidays', data)
}
export const validateHolidayApi = (id, validation) => {
    return axios.patch(baseUrl + '/holidays/' + id, validation)
}
export const updateHolidayApi = (id, holiday) => {
    return axios.put(baseUrl + '/holidays/' + id, holiday)
}
export const deleteHolidayApi = (id) => {
    return axios.delete(baseUrl + '/holidays/' + id)
}