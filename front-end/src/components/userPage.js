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
        // window.location.reload(false);
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
                <h1 className="italic text-3xl mb-5 text-center">Connexion</h1>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form className="" onSubmit={this.handleSubmit} >
                            <label htmlFor="email"
                                className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input type="email"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                required />
                            <label htmlFor="password"
                                className="block text-sm font-medium text-gray-700">
                                Mot de passe
                            </label>
                            <input type="password"
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                                className="bg-gray-50 border border-orange-500 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-300 dark:border-orange-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-500"
                                required />
                                <br/>
                            <div className="flex flex-row justify-around">
                                <button type="submit" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-orange-500" >
                                    Valider
                                </button>
                            </div>
                        </form>
                    </div>
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