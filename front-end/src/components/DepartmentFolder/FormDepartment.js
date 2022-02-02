import axios from "axios"
import React, { Component } from "react"


export class FormDepartment extends Component {
    constructor(props) {
        super(props)
        this.state= {
            title : null
        }
    }

    submit = (e, title) => {
        e.preventDefault()
        // eslint-disable-next-line
        if(this.state.title != undefined) {
            this.props.addDepartment(this.state.title)
            this.setState({
                title : ''
            })    
            console.log(title)
            axios.post('http://localhost:5000/department', title)
        .then(response => this.setState({titleInput: response.data}))
        }
    }

    // addBddDepartment = (title) => {
    //     axios.post('http://localhost:5000/department', title)
    //     .then(response => this.setState({title: response.data}))
    // }
    
    

    changeField = (e) => {
        this.setState({
            title : e.target.value
        })
    }
    
    render() {
        return (
            <form className='row m-1' onSubmit={this.submit}>
                <div className="col-9">
                    <input type='text' onChange={this.changeField} name="titleInput"  className='form-control' placeholder="Title of department" />
                </div>
                <div className="col-3">
                    <button type="submit" className="form-control btn btn-secondary">Create</button>
                </div>
            </form>
        )
    }
}