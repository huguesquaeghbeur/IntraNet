import React, { Component } from "react"
import { FormDepartment } from "./FormDepartment"
import { NotifDepartment } from "./NotifDepartment"
import { Department } from "./Department"


export class ListDepartments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            departments: []
        }
    }

    


    addDepartment = (text) => {
        //... => opérateur spread qui permet de recuperer la totalité des éléments du tableau
        let tmpDepartments = [...this.state.departments]
        let newDepartment = {
            // eslint-disable-next-line
            id: (this.state.departments[this.state.departments.length - 1] != undefined) ? (this.state.departments[this.state.departments.length - 1].id + 1) : 1,            
            title: text
        }
        tmpDepartments.push(newDepartment)

        // console.log("NewDepartment: "+newDepartment);
        // console.log(this.state.departments);
        this.setState({
            departments: tmpDepartments
        })
        //console.log(this.state.departments);
    }

    deleteDepartment = (id) => {
        let tmpDepartments = []
        for (let department of this.state.departments) {
            // eslint-disable-next-line      
            if (department.id != id) {
                tmpDepartments.push(department)
            }
            // console.log(department);
            // console.log(this.state.departments);
        }
        this.setState({
            departments: tmpDepartments
        })
        //console.log(this.state.departments);
    }


////////////////   changement de statut de l'ancien code avec les ToDo   /////////////////
    // changeStatus = (id, newStatus) => {
    //     let tmpTodos = []
    //     for (let todo of this.state.todos) {
    //         // eslint-disable-next-line
    //         if (todo.id == id) {
    //             todo.status = newStatus
    //         }
    //         tmpTodos.push(todo)
    //     }
    //     this.setState({
    //         todos: tmpTodos
    //     })

    // }



    editDepartment = (id, newTitle) => {
        let tmpDepartments = []
        for (let department of this.state.departments) {
            // eslint-disable-next-line
            if (department.id == id) {
                department.title = newTitle
            }
            tmpDepartments.push(department)
            //console.log(department);
            //console.log(this.state.departments);
        }
        this.setState({
            departments: tmpDepartments
        })
        //console.log(this.state.departments);
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">React Departments List</h1>
                <FormDepartment addDepartment={this.addDepartment} />
                <NotifDepartment title={this.state.departments.length} />
                {this.state.departments.map((department, key) => {
                    return (
                        <div key={key}>
                            <Department editDepartment={this.editDepartment} deleteDepartment={this.deleteDepartment} department={department} />
                        </div>
                    )
                })}
            </div>
        )
    }
}