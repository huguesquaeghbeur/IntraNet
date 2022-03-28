import axios from "axios";
import {Component, createRef} from "react";
import {Link} from "react-router-dom";
import '../index.css'

export default class MissionOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            missions: [],
        }
        this.terminated = createRef();
    }

    componentDidMount() {
        axios.get('http://localhost:42515/api/mission/all')
            .then(res => {
                console.log(res)
                this.setState({missions: res.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    boolConverter(bool){
        if(bool === true) {
            bool = "Oui"
            return bool
        }
        else if (bool === false) {
            bool = "Non"
            return bool
        }
    }

    render() {
        return(
            <div>
                <h1>La liste des missions</h1>
                <Link to={"/mission/add/"}>Créer une mission</Link>
                {this.state.missions.map((mission, key) => {
                    return(<div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
                        <div className="px-6 py-4">
                            <p>ID : {mission.id}</p>
                            <p>Nom : {mission.name}</p>
                            <p>Active : {this.boolConverter(mission.isActive)}</p>
                            <div className="rounded-full">
                                <Link to={"/mission/detail/" + mission.id}>Détails</Link>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        )
    }
}