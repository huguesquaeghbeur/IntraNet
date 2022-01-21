import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class ShowCollaboratorPage extends PureComponent {
    render() {
        return (
            <div>
                <h1 className="justify-center">Gestion des collaborateurs</h1>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                    <div className="flex flex-row justify-around">
                        <Link to={'/collaborator/get'}><button className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:ring-offset-2 focus:ring-indigo-500" >Liste des collaborateurs</button>
                        </Link>
                        <Link to={'/collaborator/post'}>
                            <button className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:ring-offset-2 focus:ring-indigo-500">Ajouter un collaborateur</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowCollaboratorPage;