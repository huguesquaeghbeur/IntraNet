import axios from "axios";
import React from "react";

const collabArray = [
    // {
    //     firstName: "Helmut",
    //     lastName: "Dietrich",
    //     birthday: "1980-11-23",
    //     email: "helmut.dietrich@gmail.com",
    //     password: "azerty"
    // }
    
]

const ListCollaborator = () => {
    //const [collaborators, setCollaborators] = useState("");
    axios.get('http://localhost:42515/collaborator')
    .then(res => {
        collabArray.push(res.data)
        console.log(collabArray)
    }).catch(err => {
        console.log(err)
    });

    return (
        <div>
            <button onClick={ListCollaborator}>Lister</button>
            
        {collabArray.map((c, index) => {
            return(
                <div key={index}>
                
                    <p>Prenom : {c.firstName} </p>
                    <p>Nom : {c.lastName} </p>
                    <p>Date de naissance : {c.birthday} </p>
                    <p>Email : {c.email} </p>
                    <p>Password : {c.password} </p>
                
            </div>
            )
        })}
       
       
        
        </div>
       
        
    )
}

export default ListCollaborator;