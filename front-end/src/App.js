import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './styles/index.css';
import AddMission from "./components/AddMission";
import BillsOverview from "./containers/BillsOverview";
import AddCollaborator from "./components/AddCollaboratorForm";

import InfoOverview from "./containers/InfoOverview";
import InfoList from "./components/InfoList";
import Calendar from "./components/Calendar";




function App() {
    
    
    return (
        <div className="App">
            <Router>
                <header className="header">
                    < AddMission />
                </header>
                <Routes>
                    <Route
                        path="bills"
                        element={<BillsOverview />}
                    />
                    <Route
                        path="infos"
                        element={<InfoOverview />}
                    />
                    <Route
                        path="infolist"
                        element={<InfoList />}
                    />
                    <Route
                        path="collaborator"
                        element={<AddCollaborator />} />
                    <Route
                        path="calendar"
                        element={<Calendar />} />
                    
                    
                   

                </Routes>
            </Router>
            
            
        </div>

    );
}

export default App;
