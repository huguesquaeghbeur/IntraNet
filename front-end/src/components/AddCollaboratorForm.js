import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getCollaborator } from "../redux/actions/collaboratorAction";
import {postCollaboratorData} from "../services/collaboratorData";


class AddCollaborator extends PureComponent {
    state = {
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getCollaborator(this.state);
        postCollaboratorData().then(response => {
            this.setState({
                collaborators: response.data
            })
            console.log(response.data)
        })
        
    }
    render() {
        return (
            <div>
                <h1 className="justify-center">Ajouter un collaborateur</h1>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <form className="mb-0 space-y-6" method="POST" onSubmit={this.handleSubmit} >
                        <div>
                            <div>
                                <label htmlFor="firstName">Nom</label>
                                <input  type="text"
                                        name="firstname"
                                        required /> 
                            </div>
                            <div>
                                <label htmlFor="lastName">Prénom</label>
                                <input  type="text"
                                        name="lastname"
                                        onChange={this.handleTextChange} value={this.state.lastName}
                                        required />
                            </div>
                            <div>
                                <label htmlFor="birthday">Date de naissance</label>
                                <input  type="date"
                                        name="birthday"
                                        onChange={this.handleTextChange} value={this.state.birthday}
                                        required/>     
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input  type="text"
                                        className="form-control"
                                        name="email"
                                        onChange={this.handleTextChange} value={this.state.email}
                                        required/>
                            </div>
                            <div>
                                <label htmlFor="password">Mot de passe</label>
                                <input  type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={this.handleTextChange} value={this.state.}
                                        required/>
                            </div>
                            <div>
                                <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 focus:ring-offset-2 focus:ring-red-500">Valider</button>
                            </div>
                        </div>
                    </form>
                </div>
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
const mapActionToProps = (dispatch) => {
    return {
        getCollaborator: (data) => dispatch(getCollaborator(data))
    }
}

export default connect(mapStateToProps, mapActionToProps)(AddCollaborator);


