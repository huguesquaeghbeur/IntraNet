import axios from 'axios';

const baseUrl = 'http://localhost:42515/intranet/v1';

export const getAllInfos = () =>{
    return axios.get(baseUrl + '/infos')
}
export const getInfoRequestById = (id) => {
    return axios.get(baseUrl + '/infos' + id)
}
export const postInfoData = (data) =>{
    return axios.post(baseUrl + '/infos', data)
}