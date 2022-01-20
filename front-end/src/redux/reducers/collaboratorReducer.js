const initialState = {
    firstName: undefined,
    lastname: undefined,
    birthday: undefined,
    email: undefined,
    password: undefined
}

const collaborator = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COLLABORATOR":
            return {
                ...state,
                firstName: action.firstName,
                lastname: action.lastname,
                birthday: action.birthday,
                email: action.email,
                password: action.password
            }
        default: 
            return {...initialState}
    }
}

export default collaborator;