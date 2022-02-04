import React, { PureComponent } from "react";
import { loginUser } from "../services/collaboratorData";
import { connect } from 'react-redux';
import { login } from "../redux/actions/userAction"
import { Link } from "react-router-dom";

class UserLogin extends PureComponent {
    constructor(props) {
        super(props);
    }
    state = {
        email: '',
        password: '',
        status: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('email', this.state.email);
        formdata.append('password', this.state.password);
        formdata.append('status', this.state.status);
        this.props.login(formdata)
        loginUser(formdata).then(response => {
            this.setState({
                collaborators: response.data
            })
            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("collaborator", JSON.stringify(response.data.collaborator))
            console.log(response.data)
            window.location.reload();
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h1 className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">Connexion</h1>
                <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                    <form className="mb-0 space-y-6" onSubmit={this.handleSubmit} >
                        <label htmlFor="email"
                            className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input type="email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            required />
                        <label htmlFor="password"
                            className="block text-sm font-medium text-gray-700">
                            Mot de passe
                        </label>
                        <input type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            required />
                        <div className="flex flex-row justify-around">
                            <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500" >
                                Valider
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const mapsActionToProps = (dispatch) => {
    return {
        login: (formData) => dispatch(login(formData))
    }

}

export default connect(null, mapsActionToProps)(UserLogin)