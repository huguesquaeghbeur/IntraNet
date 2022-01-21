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
export const validateHolidayApi = (holiday) => {
    return axios.put(baseUrl, holiday)
}