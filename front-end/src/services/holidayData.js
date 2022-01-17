import axios from "axios";
const baseUrl = "http://localhost:42515/intranet/v1";

export const getAllRequestHoliday = () => {
    return axios.get(baseUrl + '/holidays')
}
export const getHolidayById = (id) => {
    return axios.get(baseUrl + '/holidays/' + id)
}
export const postHolidayData = (data) => {
    return axios.post(baseUrl + '/holidays', data)
}