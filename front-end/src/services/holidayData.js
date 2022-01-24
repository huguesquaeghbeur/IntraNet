import axios from "axios";
const baseUrl = "http://localhost:42515/intranet/v1";

export const getAllHolidays = () => {
    return axios.get(baseUrl + '/holidays')
}
export const getHolidayRequestById = (id) => {
    return axios.get(baseUrl + '/holidays/' + id)
}
export const postHolidayData = (data) => {
    return axios.post(baseUrl + '/holidays', data)
}
export const validateHolidayApi = (validation) => {
    return axios.patch(baseUrl + '/holidays/', validation)
}
export const changeHolidayApi = (holiday) => {
    return axios.put(baseUrl, holiday)
}
export const deleteHolidayApi = (id) => {
    return axios.delete(baseUrl + '/holidays/' + id)
}