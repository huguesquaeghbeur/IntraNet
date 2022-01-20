import axios from "axios";
import {Component} from "react";
import AddMission from "../components/AddMission";
import {Link, NavLink} from "react-router-dom";

export default class MissionOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            missions: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/missions/all')
            .then(res => {
                this.setState({missions: res.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    UpdateTerminated = () => {
        const checkbox = document.getElementById("terminated").value
        axios.get("http://localhost:5000/api/missions/all")
            .then(res => {
                this.setState({missions: res.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return(
            <div className="container">
                <h1 className="title">Liste des missions</h1>
                <Link to="/missions/create" className="btn">Créer une mission</Link>
                <div className="missionsList">
                    {this.state.missions.map(mission => {
                        return <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
                            <div className="px-6 py-4">
                                <p>ID : {mission.id}</p>
                                <p>Nom : {mission.name}</p>
                                <p>Description : {mission.description}</p>
                                <p>Date de début : {mission.startTime}</p>
                                <p>Date de fin : {mission.endTime}</p>
                                <p><input type="checkbox" id="terminated" className="terminateCheckbox" onClick={this.UpdateTerminated}/> Terminée</p>
                                <div className="max-w-xs overflow-hidden bg-yellow-600 flex justify-center rounded-lg shadow-lg">
                                    <div className="px-6 py-4">
                                        <button className="cardDetails">Détails</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}