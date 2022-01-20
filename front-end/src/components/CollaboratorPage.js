import React, {PureComponent} from "react";
import CollaboratorList from "./CollaboratorList";
import AddCollaboratorForm from "./AddCollaboratorForm";

class ShowCollaboratorPage extends PureComponent{
    render() {
        return (
            <div className="container">
                <h1>Gestion des collaborateurs</h1>
                <button className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500" onClick={() => CollaboratorList()}>Liste des collaborateurs</button>
                <CollaboratorList />
            </div>
        )
    }
}

export default ShowCollaboratorPage;