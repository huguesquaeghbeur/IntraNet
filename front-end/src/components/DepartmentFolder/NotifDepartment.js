import React, { Component } from "react"

export class NotifDepartment extends Component {
    
    render() {
        return (
            <div className="row ">
                <div className="col alert alert-primary">
                    Départment added : {this.props.title}
                </div>
            </div>
        )
    }
}