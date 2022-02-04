import {
    ERROR_GETTING_COLLABORATOR_BY_DEPARTMENTID,
    END_GETTING_COLLABORATOR_BY_DEPARTMENTID,
    IS_LOADING,
    ADD_COLLABORATOR
} from '../actions/collaboratorAction'


const initialState = {
    firstName: undefined,
    lastname: undefined,
    birthday: undefined,
    email: undefined,
    password: undefined,
    collaboratorsByDepartment: undefined,
    isLoading: false,
    error: undefined
}

const collaborator = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLLABORATOR:
            return {
                ...state,
                firstName: action.firstName,
                lastname: action.lastname,
                birthday: action.birthday,
                email: action.email,
                password: action.password
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        case END_GETTING_COLLABORATOR_BY_DEPARTMENTID:
            return {
                ...state,
                collaboratorsByDepartment: action.collaborators
            }
        case ERROR_GETTING_COLLABORATOR_BY_DEPARTMENTID:
            return {
                ...state,
                error:action.error
            }
        default:
            return { ...initialState }
    }
}

export default collaborator;