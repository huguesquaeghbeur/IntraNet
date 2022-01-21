import React, { Component } from "react"

export class Department extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : null
        }
        //Dans les props, on va avoir un objet todo avec content, status
    }

    // changeStatus = () => {
    //     const status = this.props.todo.status === 'done' ? 'undone' : 'done'
    //     this.props.changeStatus(this.props.todo.id, status)
    // }
    // renderDoneOrUnDoneButton = () => {
    //     if (this.props.todo.status === 'done') {
    //         return (
    //             <button onClick={this.changeStatus} className='btn btn-success m-1'>done</button>
    //         )
    //     }
    //     else {
    //         return (
    //             <button onClick={this.changeStatus} className='btn btn-danger m-1'>undone</button>
    //         )
    //     }
    // }
    validEditDepartment = (e) => {
        e.preventDefault()
        this.props.editDepartment(this.props.id,this.state.editDepartmentContent)
        this.setState({
            edit:false
        })
    }
    editDepartment = () => {
        return (
            <form onSubmit={this.validEditDepartment} className='col-6'>
                <input onChange= {(e) => {
                    this.setState({
                        editDepartmentContent : e.target.value
                    })
                }} type="text" className="form-control" defaultValue={this.props.title.content} />
            </form>
        )
    }
    renderDepartment = () => {
        if(!this.state.edit) {
           return this.renderContentDepartment()
        }
        else {
           return this.editDepartment()
        }
    }
    renderContentDepartment = () => {
        return (
            <div onClick={this.changeStatus} className={'btn col-6 text-success'}>
                {this.props.title}
            </div>
        )
    }
    render() {
        return (
            <div className="row">
                {this.renderDepartment()}
                {/* <div className='col-2'>
                    {this.renderDoneOrUnDoneButton()}
                </div> */}
                <div className='col-2'>
                    <button className='btn btn-primary' onClick={() => {
                        this.setState({
                            edit : true
                        })
                    }}>edit</button>
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary' onClick={() => {
                        this.props.deleteToDo(this.props.todo.id)
                    }}>delete</button>
                </div>
            </div>
        )
    }
}