import React, { PureComponent } from 'react';
import axios from "axios";

class AddMission extends PureComponent {
    state = {
        dptId: "",
        name: "",
        description: "",
        startTime: "",
        endTime: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("dptId", this.state.dptId)
        formData.append("name", this.state.name)
        formData.append("description", this.state.description)
        formData.append("startTime", this.state.startTime)
        formData.append("endTime", this.state.endTime)

        axios.post("http://localhost:42515/api/mission/add", formData)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="dptId">
                                Département ID :
                            </label>
                            <input type="text"
                                name="dptId"
                                placeholder="ID Département..."
                                onChange={this.handleChange}
                                value={this.state.dptId} />
                            <br />
                            <label htmlFor="name">
                                Nom :
                            </label>
                            <input type="text"
                                name="name"
                                placeholder="Nom..."
                                onChange={this.handleChange}
                                value={this.state.name} />
                            <br />
                            <label htmlFor="description">
                                Description :
                            </label>
                            <input type="text"
                                name="description"
                                placeholder="Description..."
                                onChange={this.handleChange}
                                value={this.state.description} />
                            <br />
                            <label>
                                Collaborateurs :
                            </label>
                            <select>
                                {/*{TODO - CHOIX COLLABORATEURS}*/}
                            </select>
                            <br />
                            <label htmlFor="startTime">
                                Date de début :
                            </label>
                            <input type="date"
                                name="startTime"
                                placeholder="Date de début..."
                                onChange={this.handleChange}
                                value={this.state.startTime} />
                            <br />
                            <label htmlFor="endTime">
                                Date de fin :
                            </label>
                            <input type="date"
                                name="endTime"
                                placeholder="Date de fin..."
                                onChange={this.handleChange}
                                value={this.state.endTime} />
                            <br />
                            <div className="flex flex-row justify-around">
                                <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500">
                                    Valider
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddMission;