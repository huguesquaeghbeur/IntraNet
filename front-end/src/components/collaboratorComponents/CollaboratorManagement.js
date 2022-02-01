import React, { PureComponent } from "react";
import { getCollaboratorById, updateCollaboratorData } from "../../services/collaboratorData";
import { useParams } from "react-router-dom";

class ManagementCollaborator extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            success: ''
        }
    }

    componentDidMount() {
        getCollaboratorById(this.props.collaboratorId).then(response => {
            this.setState({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                birthday: response.data.birthday,
                email: response.data.email,
                password: response.data.password,
                isChief: response.data.isChief,
                isAdmin: response.data.isAdmin
            })
            console.log(this.state.firstName)
        }).catch(error => {
            console.log(error)
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // handleChange = (id) => {
    //     getCollaboratorById(this.state.id).then(response => {
    //         this.setState({
    //             collaborators: response.data
    //         })
    //         console.log(response.data)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    handleSubmitUpdate = (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('firstName', this.state.firstName);
        formdata.append('lastName', this.state.lastName);
        formdata.append('birthday', this.state.birthday);
        formdata.append('email', this.state.email);
        formdata.append('password', this.state.password);
        formdata.append('isChief', this.state.isChief);
        formdata.append('isAdmin', this.state.isAdmin);
        updateCollaboratorData(this.props.collaboratorId, formdata).then(response => {
            this.setState({
                message: response.data.message,
                success: response.data.success
            })
            console.log(this.state.message)
        })
    }

    render() {
        return (
            <div>
                <h1 className="justify-center">Gérer les données d'un collaborateur</h1>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form className="mb-0 space-y-6" method="PUT" onSubmit={this.handleSubmitUpdate} >
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
                            <input type="text"
                                name="firstName"
                                onChange={this.handleChange}
                                value={this.state.firstName}
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                            <input type="text"
                                name="lastName"
                                onChange={this.handleChange}
                                value={this.state.lastName}
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                            <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Date de naissance</label>
                            <input type="datetime-local"
                                name="birthday"
                                onChange={this.handleChange}
                                value={this.state.birthday}
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                            <input type="password"
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </form>
                        <div className="flex flex-row justify-around">
                            <button type="submit" onClick={this.handleSubmitUpdate}className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:ring-offset-2 focus:ring-indigo-500">
                                Modifier
                            </button>
                        </div>
                        {this.state.status === true && this.state.message ? (<div className="justify-center bg-green-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-green-500 dark:focus:border-green-500">{this.state.message}</div>) : (<div className="text-sm rounded-lg dark:bg-red-300 ">{this.state.message}</div>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default function Getid() {
    const { id } = useParams()
    return (
        <ManagementCollaborator collaboratorId={id} />
    )
}
