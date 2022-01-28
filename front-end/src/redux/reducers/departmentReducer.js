export const IS_LOADING = "IS_LOADING"
export const END_GETTING_ALL_DEPARTMENTS = "END_GETTING_ALL_DEPARTMENTS"
export const ERROR_GETTING_ALL_DEPARTMENTS = "ERROR_GETTING_ALL_DEPARTMENTS"
export const END_GETTING_DEPARTMENTS_BY_ID = "END_GETTING_DEPARTMENTS_BY_ID"
export const ERROR_GETTING_DEPARTMENTS_BY_ID = "ERROR_GETTING_DEPARTMENTS_BY_ID"
export const END_DELETING_DEPARTMENT = "END_DELETING_DEPARTMENT"
export const ERROR_DELETING_DEPARTMENT = "ERROR_DELETING_DEPARTMENT"

const initialState = {
    isLoading: false,
    departments: [],
    department: [],
    error: undefined
}

export default function departmentReducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        case END_GETTING_ALL_DEPARTMENTS:
            console.log("end getting data reducer " + action.departments)

            return {
                ...state,
                departments: action.departments,
                error: undefined
            }
        case ERROR_GETTING_ALL_DEPARTMENTS:
            console.log("get all departments error in reducer")

            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case END_GETTING_DEPARTMENTS_BY_ID:
            return {
                ...state,
                isLoading: false,
                department: action.department
            }
        case ERROR_GETTING_DEPARTMENTS_BY_ID:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case END_DELETING_DEPARTMENT:
            if (action.res.id > 0) {
                return {
                    ...state,
                    isLoading: false,
                    departments: state.departments.filter(d => d.id !== action.res.id)
                }
            } else {
                return {
                    ...state
                }
            }
        case ERROR_DELETING_DEPARTMENT:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return { ...initialState }

    }
}