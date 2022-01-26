import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getDepartmentById } from "../../redux/actions/departmentAction";
import { postDepartmentData } from "../../services/departmentData";


class AddDepartmentByForm extends PureComponent {
    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('title', this.state.title);

        postDepartmentData(formdata).then(response => {
            this.setState({
                departments: response.data
            })
            console.log(response.data)
        })
    }
    render() {
        return (
            <div>
                <h1 className="justify-center">Ajouter un dpt</h1>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form className="mb-0 space-y-6" method="POST" onSubmit={this.handleSubmit} >
                            <div>
                                <div>
                                    <label htmlFor="title"
                                        className="block text-sm font-medium text-gray-700">
                                        Titre
                                    </label>
                                    <input type="text"
                                        name="title"
                                        onChange={this.handleChange}
                                        value={this.state.title}
                                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        required />
                                </div>



                                <div className="flex flex-row justify-around">
                                    <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500">
                                        Valider
                                    </button>
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
        title: state.department.title
    }
}
const mapActionToProps = (dispatch) => {
    return {
        getDepartmentById: (data) => dispatch(getDepartmentById(data))
    }
}

export default connect(mapStateToProps, mapActionToProps)(AddDepartmentByForm);


