import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
//import { connect } from "react-redux";
import { getAllCollaborator } from "../../services/collaboratorData";


export default class CollaboratorList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            collaborators: []
        }
    }

    componentDidMount() {
        getAllCollaborator().then(response => {
            this.setState({
                collaborators: response.data
            })
            console.log(response.data)
        })
    }
    render() {
        const { collaborators } = this.state
        return (
            <div className="max-w-xs overflow-hidden rounded-lg shadow-lg ">
                {collaborators.map(collaborator =>
                    <div  >
                        <div key={collaborator.id} className="px-6 py-4">
                            <div className="flex justify-end">
                                {collaborator.id}
                            </div>
                            <p className="leading-normal text-gray-700">Prénom : {collaborator.firstName} </p>
                            <p>Nom : {collaborator.lastName} </p>
                            <p>Date de naissance : {collaborator.birthday} </p>
                            <p>Email : {collaborator.email} </p>
                            <p>Password : {collaborator.password} </p>
                            {/* <p>En activité : {collaborator.isActive} </p> */}
                            <Link to={`/collaborator/management/${collaborator.id}`} key={collaborator.id}
                                firstname={collaborator.firstName}
                                lastname={collaborator.lastName}>
                                <button className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-600 bg-black-600 focus:ring-offset-2 focus:ring-black-500">Gestion des données</button>
                            </Link>
                        </div>
                    </div>

                )}
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         firstName: state.collaborator.firstName,
//         lastname: state.collaborator.lastname,
//         birthday: state.collaborator.birthday,
//         email: state.collaborator.email,
//         password: state.collaborator.password
//     }
// }

// export default connect (mapStateToProps, null)(CollaboratorList);

// export default function Getid(){
//     const {id} = useParams()
//     return (
//         <CollaboratorList collaboratorId={id}/>
//     )
// }