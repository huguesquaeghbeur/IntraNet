import '../index.css';
import axios from "axios";
import {Component} from "react";
import {data} from "autoprefixer";

export default class AddMission extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            collabs: [],
            startTime: "",
            endTime: "",
            userId: ""
        }

    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/api/collabs')
            .then(res => {
                this.setState({collabs: res.data})
            })
    }

    OnChange = (event) => {
        const value = event.target.name
        this.setState({
            [value]: event.target.value
        })
    }

    HandleSubmit = (event) => {
        event.preventDefault()

        const missionData = {
            Name: this.state.name,
            Description: this.state.description,
            UserId: this.state.userId,
            StartTime: this.state.startTime,
            EndTime: this.state.endTime
        }

        axios.post("http://localhost:5000/api/savemission", missionData)
            .then(res => {
                console.log(res)
            })
    }

    render(){
        return(
            <div className="w-full flex justify-center">
                <div className="w-2/4">
                    <h1 className="title">Créer une mission</h1>
                    <form className="submitForm flex flex-col" onSubmit={this.HandleSubmit}>
                        <input type="text" name="name" className="missionName border-l-4 border-red-500 focus:outline-none" onChange={this.OnChange} placeholder="Nom de la mission"/>
                        <select className="manager">
                            {this.state.collabs.map((data, key) =>
                                <option key={key} value={data.id}>{data.firstName} {data.lastName}</option>
                            )}
                        </select>
                        <input type="text" name="description" className="missionDescription border-l-4 border-red-500 focus:outline-none" onChange={this.OnChange} placeholder="Description"/>
                        <input type="date" name="startTime" className="startTime" onChange={this.OnChange}/>
                        <input type="date" name="endTime" className="endTime" onChange={this.OnChange}/>
                        <button className="rounded-full hover:rounded-lg">Ajouter un collaborateur</button>
                        <button>Valider</button>
                    </form>
                </div>
            </div>
        )
    }

}

