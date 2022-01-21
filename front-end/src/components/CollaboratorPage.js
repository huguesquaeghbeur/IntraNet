import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class ShowCollaboratorPage extends PureComponent {
    render() {
        return (
            <div className="w-full flex justify-center">
                <div className="w-2/4">
                    <h1 className="title">Gestion des collaborateurs</h1>
                    <Link to={'/collaborator/get'}><button className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500" >Liste des collaborateurs</button>
                    </Link>
                    <Link to={'/collaborator/post'}>
                        <button className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500">Ajouter un collaborateur</button>
                    </Link>
                    <Link to={'/collaborator/update'}>
                        <button className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500">Ajouter un collaborateur</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ShowCollaboratorPage;