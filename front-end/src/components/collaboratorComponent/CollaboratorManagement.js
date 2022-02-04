import React, { PureComponent } from "react";
import { getCollaboratorById, updateCollaboratorData } from "../../services/collaboratorData";
import { useParams } from "react-router-dom";

class ManagementCollaborator extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
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
            console.log(response.data)
        })
    }

    render() {
        return (
            <div>
                <h1 className="italic text-3xl mb-5 text-center">Gérer les données d'un collaborateur</h1>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form className="" method="PUT" onSubmit={this.handleSubmitUpdate} >
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
                            <input type="text"
                                name="firstName"
                                onChange={this.handleChange}
                                value={this.state.firstName}
                                className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                            <input type="text"
                                name="lastName"
                                onChange={this.handleChange}
                                value={this.state.lastName}
                                className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                            <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Date de naissance</label>
                            <input type="datetime-local"
                                name="birthday"
                                onChange={this.handleChange}
                                value={this.state.birthday}
                                className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                            <input type="password"
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                                className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500" />
                        </form>
                        <br></br>
                        <div className="flex flex-row justify-around">
                            <button type="submit" onClick={this.handleSubmitUpdate}className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-orange-500">
                                Modifier
                            </button>
                        </div>
                        <br/>
                        {this.state.success ? (<div className="justify-center bg-green-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-green-500 dark:focus:border-green-500">{this.state.message}</div>) : (<div className="text-sm rounded-lg dark:bg-red-300 ">{this.state.message}</div>)}
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
