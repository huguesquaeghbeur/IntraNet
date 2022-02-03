import {
    getCollaboratorByDepartmentIdApi,
} from "../../services/collaboratorData"

export const ADD_COLLABORATOR = "ADD_COLLABORATOR";
export const END_GETTING_COLLABORATOR_BY_DEPARTMENTID = "END_GETTING_COLLABORATOR_BY_DEPARTMENTID"
export const ERROR_GETTING_COLLABORATOR_BY_DEPARTMENTID = "ERROR_GETTING_COLLABORATOR_BY_DEPARTMENTID"
export const IS_LOADING = "IS_LOADING"

export const getCollaborator = (data) => {
    return (dispatch) => {
        dispatch({
            type: ADD_COLLABORATOR,
            firstName: data.firstName,
            lastname: data.lastName,
            birthday: data.birthday,
            email: data.email,
            password: data.password
        })
    }
}

export const getCollaboratorByDepartmentId = (departmentId) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        getCollaboratorByDepartmentIdApi(departmentId).then(res => {
            console.log("get by dpt then")
            console.log(res.data)

            dispatch({
                type: END_GETTING_COLLABORATOR_BY_DEPARTMENTID,
                collaborators: res.data
            })
        }).catch(err => {
            console.log("get by dpt then")
            console.log(err)

            dispatch({
                type: ERROR_GETTING_COLLABORATOR_BY_DEPARTMENTID,
                error: err
            })
        })
    }
}