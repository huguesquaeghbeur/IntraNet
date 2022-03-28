import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import MissionOverview from "../../containers/MissionOverview";

const MissionDetails = () => {
    let idAxios = useParams().id
    const [id, setId] = useState(0)
    const [name, setName] = useState(0)
    const [description, setDescription] = useState(0)
    const [department, setDepartment] = useState(0)
    const [startTime, setStartTime] = useState(0)
    const [endTime, setEndTime] = useState(0)
    const [isActive, setIsActive] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:42515/api/mission/detail/" + idAxios)
            .then(res => {
                setId(res.data.id)
                setName(res.data.name)
                setDescription(res.data.description)
                setDepartment(res.data.department)
                setStartTime(res.data.startTime)
                setEndTime(res.data.endTime)
                setIsActive(res.data.isActive)
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    })

    const deleteMission = () => {
        axios.delete("http://localhost:42515/api/mission/detail/" + id)
            .then(res => {
                console.log(res)
                if (res.status === 200)
                {
                    return <MissionOverview/>
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    const boolConverter = (bool) => {
        if (bool) {
            return "Oui"
        }
        else if (!bool)
            return "Non"
    }

    return(
        <div className="container">
            <h1>Détails de la mission {id}</h1>
            <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
                <div className="px-6 py-4">
                    {/*{TODO - COLLABORATEURS}*/}
                    <label>
                        Mission ID :
                    </label>
                    <p>{id}</p>
                    <br/>
                    <label>
                        ID Département :
                    </label>
                    <p>{department}</p>
                    <br/>
                    <label>
                        Nom :
                    </label>
                    <p>{name}</p>
                    <br/>
                    <label>
                        Description :
                    </label>
                    <p>{description}</p>
                    <br/>
                    <label>
                        Date de début :
                    </label>
                    <p>{startTime}</p>
                    <br/>
                    <label>
                        Date de fin :
                    </label>
                    <p>{endTime}</p>
                    <br/>
                    <label>
                        Active :
                    </label>
                    <p>{boolConverter(isActive)}</p>
                    <br/>
                    <Link to={"/mission/update/" + idAxios}>Modifier mission</Link>
                    <br/>
                    <button onClick={deleteMission}>Supprimer la mission</button>
                </div>
            </div>
        </div>
    )
}

export default MissionDetails