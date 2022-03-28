import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getCollaborator } from "../../redux/actions/collaboratorAction";
import { postCollaboratorData } from "../../services/collaboratorData";
//import AddCollaboratorModalWindow from "./AddCollaboratorModalWindow";


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
        isActive: false,
        message: '',
        success: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // closeConfirmationModalWindow = () => {
    //     this.setState({
    //         showConfirmation: false
    //     })
    // }
    // showConfirmationModalWindow = () => {
    //     this.setState({
    //         showConfirmation: true
    //     })
    // }


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
                collaborators: response.data,
                message: response.data.message,
                success: response.data.success
            })
            console.log(response.data)
        })
    }
    render() {
        return (
            <section>
                <h1 className="italic text-3xl mb-5 text-center">Ajouter un collaborateur</h1>
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
                                        className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                                    <input type="text"
                                        name="lastName"
                                        onChange={this.handleChange}
                                        value={this.state.lastName}
                                        className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Date de naissance</label>
                                    <input type="date"
                                        name="birthday"
                                        onChange={this.handleChange}
                                        value={this.state.birthday}
                                        className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">Service</label>
                                    <div className="mt-1">
                                        <select name="department"
                                            onChange={this.handleChange}
                                            value={this.state.department}
                                            className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500">
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
                                        name="email"
                                        onChange={this.handleChange}
                                        value={this.state.email}
                                        className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                                    <input type="password"
                                        name="password"
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                        className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Fonction au sein de l'entreprise</label>
                                    <div className="mt-1">
                                        <select name="status"
                                            onChange={this.handleChange}
                                            value={this.state.status}
                                            className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500">
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
                                            <br></br>
                                            <input className="form-check-input appearance-none h-4 w-4 border border-orange-500 rounded-sm bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right mr-2 cursor-pointer" type="checkbox" name="isAdmin" onChange={this.handleChange}
                                                value={true} />
                                            <label className="block text-sm font-medium text-gray-700">
                                                Administrateur
                                            </label>
                                            <input className="form-check-input appearance-none h-4 w-4 border border-orange-500 rounded-sm bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right mr-2 cursor-pointer" type="checkbox" name="isActive" onChange={this.handleChange}
                                                value={true} />
                                            <label className="block text-sm font-medium text-gray-700">
                                                En activité
                                            </label>
                                            <br></br>
                                        </div>
                                    </div>

                                    <div className="flex flex-row justify-around">
                                        <button type="submit" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-orange-500">
                                            Valider
                                        </button>
                                    </div>
                                    <br></br>
                                    {this.state.success ? (<div className="justify-center bg-green-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-green-500 dark:focus:border-green-500">{this.state.message}</div>) : (<div className="text-sm rounded-lg dark:bg-red-300 ">{this.state.message}</div>)}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
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


