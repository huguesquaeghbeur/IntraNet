import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getCollaborator } from "../redux/actions/collaboratorAction";
import { postCollaboratorData } from "../services/collaboratorData";


class AddCollaborator extends PureComponent {
    state = {
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        password: '',
        isChief: false,
        isAdmin: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('firstName', this.state.firstName);
        formdata.append('lastName', this.state.lastName);
        formdata.append('birthday', this.state.birthday);
        formdata.append('email', this.state.email);
        formdata.append('password', this.state.password);
        formdata.append('isChief', this.state.isChief);
        formdata.append('isAdmin', this.state.isAdmin);
        postCollaboratorData(formdata).then(response => {
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
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form className="mb-0 space-y-6" method="POST" onSubmit={this.handleSubmit} >
                            <div>
                                <div>
                                    <label htmlFor="firstName"
                                        className="block text-sm font-medium text-gray-700">
                                        Prénom
                                    </label>
                                    <input type="text"
                                        name="firstName"
                                        onChange={this.handleChange}
                                        value={this.state.firstName}
                                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                                    <input type="text"
                                        name="lastName"
                                        onChange={this.handleChange}
                                        value={this.state.lastName}
                                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Date de naissance</label>
                                    <input type="date"
                                        name="birthday"
                                        onChange={this.handleChange}
                                        value={this.state.birthday}
                                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email"
                                        className="form-control"
                                        name="email"
                                        onChange={this.handleChange}
                                        value={this.state.email}
                                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                                    <input type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        required />
                                </div>
                                <div>
                                    <div className="form-check">
                                        <div>

                                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="isChief" onChange={this.handleChange}
                                                value={true} />
                                            <label className="block text-sm font-medium text-gray-700">
                                                Chef de service
                                            </label>
                                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="isAdmin" onChange={this.handleChange}
                                                value={true} />
                                            <label className="block text-sm font-medium text-gray-700">
                                                Administrateur
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex flex-row justify-around">
                                        <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500">
                                            Valider
                                        </button>
                                        <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:ring-offset-2 focus:ring-indigo-500">
                                            Modifier
                                        </button>
                                        <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 focus:ring-offset-2 focus:ring-red-500">
                                            Supprimer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
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

