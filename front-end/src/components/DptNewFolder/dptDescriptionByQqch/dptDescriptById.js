import React, { PureComponent } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
// import { getCollaborator } from "../redux/actions/collaboratorAction";
// import { postCollaboratorData } from "../services/collaboratorData";
import { getDepartmentById } from "../../../redux/actions/departmentAction"
import { getDepartmentRequestById } from "../../../services/departmentData";

import "../../../styles/formDptStyle.css";



class DptDescriptById extends PureComponent {
    state = {
        id: '',
        titleById: ''
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('id', this.state.id);


        getDepartmentRequestById(this.state.id).then(response => {
            this.setState({
                departments: response.data,
                titleById: response.data.title,
                idById: response.data.id
                
            })
            console.log(response.data.title)
        })
        //// pour erase la saisie
        this.setState({
            id: ''
        })
    }
    render() {
        return (
            <div>
                <h1 className="justify-center">Rechercher un dpt par son ID</h1>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form className="mb-0 space-y-6" method="GET" onSubmit={this.handleSubmit} >
                            <div>
                                <div>
                                    <hr /><label htmlFor="id"
                                        className="centrageTitreDpt block text-sm font-medium text-gray-700">
                                        || Merci de saisir l'ID du département recherché ||
                                    </label><hr /><br />
                                    <input type="text"
                                        name="id"
                                        onChange={this.handleChange}
                                        value={this.state.id}
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
                
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-orange-100 py-8 px-6 shadow rounded-lg sm:px-10">
                        <div>
                            <p><b><u>Vous avez rechercher le départment #</u></b><b><font color="FF0000">{this.state.idById}</font></b><br />   <b><u>- Il se nomme :</u></b> <b><font color="FF0000">{this.state.titleById}</font></b></p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.departments.id
    }
}
const mapActionToProps = (dispatch) => {
    return {
        getDepartmentById: (data) => dispatch(getDepartmentById(data))
    }
}

export default connect(mapStateToProps, mapActionToProps)(DptDescriptById);


