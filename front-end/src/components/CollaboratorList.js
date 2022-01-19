import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getAllCollaborator } from "../services/collaboratorData";


class CollaboratorList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            collaborators: []
        }
    }

    componentDidMount() {
        getAllCollaborator().then(response => {
            this.setState({
                collaborators: response.data
            })
            console.log(response.data)
        })
    }
    render() {
        const { collaborators } = this.state
        return (
            <div className="flex flex-col justify-around">
                {collaborators.map(collaborator =>
                    <div key={collaborator.id} className="border">
                        <div className="flex justify-end">
                            {collaborator.id}
                        </div>
                        <p>Prénom : {collaborator.firstName} </p>
                        <p>Nom : {collaborator.lastName} </p>
                        <p>Date de naissance : {collaborator.birthday} </p>
                        <p>Email : {collaborator.email} </p>
                        <p>Password : {collaborator.password} </p>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        firstName: state.collaborator.firstName,
        lastname: state.collaborator.lastname,
        birthday: state.collaborator.birthday,
        email: state.collaborator.email,
        password: state.collaborator.password
    }
}

export default connect (mapStateToProps, null)(CollaboratorList);