import {
    getAllDepartments,
    postDepartmentData,    
    getDepartmentRequestById,
    updateDepartmentApi,
    deleteDptFromApi
} from "../../services/departmentData";
import {
    IS_LOADING,
    END_GETTING_ALL_DEPARTMENTS,
    ERROR_GETTING_ALL_DEPARTMENTS,
    ERROR_GETTING_DEPARTMENTS_BY_ID,
    END_GETTING_DEPARTMENTS_BY_ID,
    END_DELETING_DEPARTMENT,
    ERROR_DELETING_DEPARTMENT
} from "../reducers/departmentReducer"

export function fetchAllDepartments() {
    console.log("dans fetch all departments ")

    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        getAllDepartments().then(res => {
            console.log("get all departments then " + res.data)
            dispatch({
                type: END_GETTING_ALL_DEPARTMENTS,
                departments: res.data
            })
        }).catch(error => {
            console.log("get all departments error " + error)

            dispatch({
                type: ERROR_GETTING_ALL_DEPARTMENTS,
                error: error
            })
        })
    }
}

export function postDepartment(department) {
    console.log("post action department " + department)
    postDepartmentData(department).then(res => {
        console.log("post department then" + res)
    }).catch(error => {
        console.log("post department catch" + error)
    })
}

export function updateDepartment(department) {
    console.log("update action department " + department)
    updateDepartmentApi(department).then(res => {
        console.log("update department then" + res)
    }).catch(error => {
        console.log("update department catch" + error)
    })
}

export function getDepartmentById(id) {
    console.log("department action  id : "+id)

    return(dispatch)=>{
        getDepartmentRequestById(id).then(res=>{
        console.log("get department by id then " + res.data)
        dispatch({
            type: END_GETTING_DEPARTMENTS_BY_ID,
            department: res.data
        })
    }).catch(error => {
        console.log("get department by id error " + error)

        dispatch({
            type: ERROR_GETTING_DEPARTMENTS_BY_ID,
            error: error
        })
    })
}
}

export const deleteDepartmentAction = (id) => {
    console.log("dans le deleteDepartmentAction")

    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        deleteDptFromApi(id).then(res => {
            dispatch({
                type: END_DELETING_DEPARTMENT,
                res: res.data
            })
        }).catch(err => {
            dispatch({
                type: ERROR_DELETING_DEPARTMENT,
                error: err
            })
        })
    }
}