import axios from "axios";
const baseUrl = 'http://localhost:42515/intranet/v1';

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
