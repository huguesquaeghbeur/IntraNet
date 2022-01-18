export const ADD_COLLABORATOR = "ADD_COLLABORATOR";
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