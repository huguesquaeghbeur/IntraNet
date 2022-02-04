import React, {PureComponent} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

export class UpdateMission extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.missionId,
            dptId: "",
            name: "",
            description: "",
            startTime: "",
            endTime: "",
            isActive: ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:42515/api/mission/detail/" + this.state.id)
            .then(res => {
                this.setState({dptId: res.data.departmentId, name: res.data.name, description: res.data.description,
                startTime: res.data.startTime, endTime: res.data.endTime, isActive: res.data.isActive})
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

    handleCheckBox = (e) => {
        this.setState({isActive : e.target.value})
        return true
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData
        formdata.append("dptId", this.state.dptId)
        formdata.append("name", this.state.name)
        formdata.append("description", this.state.description)
        formdata.append("startTime", this.state.startTime)
        formdata.append("endTime", this.state.endTime)
        formdata.append("isActive", this.state.isActive)

        axios.patch("http://localhost:42515/api/mission/update/" + this.state.id, formdata)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="container justify-content">
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
                                   value={this.state.dptId}/>
                            <br/>
                            <label htmlFor="name">
                                Nom :
                            </label>
                            <input type="text"
                                   name="name"
                                   placeholder="Nom..."
                                   onChange={this.handleChange}
                                   value={this.state.name}/>
                            <br/>
                            <label htmlFor="description">
                                Description :
                            </label>
                            <input type="text"
                                   name="description"
                                   placeholder="Description..."
                                   onChange={this.handleChange}
                                   value={this.state.description}/>
                            <br/>
                            <label>
                                Collaborateurs :
                            </label>
                            <select>
                                {/*{TODO - CHOIX COLLABORATEURS}*/}
                            </select>
                            <br/>
                            <label htmlFor="startTime">
                                Date de début :
                            </label>
                            <input type="date"
                                   name="startTime"
                                   placeholder="Date de début..."
                                   onChange={this.handleChange}
                                   value={this.state.startTime}/>
                            <br/>
                            <label htmlFor="endTime">
                                Date de fin :
                            </label>
                            <input type="date"
                                   name="endTime"
                                   placeholder="Date de fin..."
                                   onChange={this.handleChange}
                                   value={this.state.endTime}/>
                            <br/>
                            <label htmlFor="isActive">
                                Terminée :
                            </label>
                            <input type="checkbox" name="isActive" className="checkboxTerminated" />
                            {/*TODO - BUG PATCH CHECKBOX DATA*/}
                            <br/>
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



export default function GetId() {

    const { id } = useParams()

    return (
        <UpdateMission missionId={id}/>
    )
}

