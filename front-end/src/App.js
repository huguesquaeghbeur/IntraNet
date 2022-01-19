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
import HolidayOverview from "./containers/HolidayOverview";
import CollaboratorList from "./components/CollaboratorList";

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
                        path="holidays"
                        element={<HolidayOverview />}
                    />
                    {/* <Route
                        path="collaborator"
                        element={<AddCollaborator/>}
                    /> */}
                    <Route
                        path="collaborator"
                        element={<CollaboratorList/>}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
