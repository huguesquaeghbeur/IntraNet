import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getCollaborator } from "../../redux/actions/collaboratorAction";
import { postCollaboratorData } from "../../services/collaboratorData";


class AddCollaborator extends PureComponent {
    state = {
        firstName: '',
        lastName: '',
        birthday: '',
        department: '',
        email: '',
        password: '',
        status: '',
        isAdmin: false,
        isActive: false
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
        formdata.append('department', this.state.department);
        formdata.append('email', this.state.email);
        formdata.append('password', this.state.password);
        formdata.append('status', this.state.status);
        formdata.append('isAdmin', this.state.isAdmin);
        formdata.append('isActive', this.state.isActive);
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
                        <form className="" onSubmit={this.handleSubmit} >
                            <div>
                                <div>
                                    <label htmlFor="firstName"
                                        className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">
                                        Prénom
                                    </label>
                                    <input type="text"
                                        name="firstName"
                                        onChange={this.handleChange}
                                        value={this.state.firstName}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                                    <input type="text"
                                        name="lastName"
                                        onChange={this.handleChange}
                                        value={this.state.lastName}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Date de naissance</label>
                                    <input type="date"
                                        name="birthday"
                                        onChange={this.handleChange}
                                        value={this.state.birthday}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">Service</label>
                                    <div className="mt-1">
                                        <select name="department" 
                                        onChange={this.handleChange}
                                        value={this.state.department}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="" onChange={this.handleChange}>--Select--</option>
                                            <option value="0" onChange={this.handleChange}>Comptabilité</option>
                                            <option value="1" onChange={this.handleChange}>Ressource Humaine</option>
                                            <option value="2" onChange={this.handleChange}>Direction</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email"
                                        className="form-control"
                                        name="email"
                                        onChange={this.handleChange}
                                        value={this.state.email}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                                    <input type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Service</label>
                                    <div className="mt-1">
                                        <select name="status" 
                                        onChange={this.handleChange}
                                        value={this.state.status}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="" onChange={this.handleChange}>--Select--</option>
                                            <option value="0" onChange={this.handleChange}>Collaborateur</option>
                                            <option value="1" onChange={this.handleChange}>chef de projet</option>
                                            <option value="2" onChange={this.handleChange}>Chef de service</option>
                                            <option value="3" onChange={this.handleChange}>Directeur RH</option>
                                            <option value="4" onChange={this.handleChange}>Directeur Financier</option>
                                            <option value="5" onChange={this.handleChange}>Directeur Génèral</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-check">
                                        <div>
                                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="isAdmin" onChange={this.handleChange}
                                                value={true} />
                                            <label className="block text-sm font-medium text-gray-700">
                                                Administrateur
                                            </label>
                                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="isActive" onChange={this.handleChange}
                                                value={true} />
                                            <label className="block text-sm font-medium text-gray-700">
                                                En activité
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex flex-row justify-around">
                                        <button type="submit" className="text-gray-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                            Valider
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


