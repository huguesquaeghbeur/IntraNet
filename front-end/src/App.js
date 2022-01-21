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
import PostRequestHoliday from "./components/PostRequestHoliday";
import HolidayList from "./components/HolidayList";
import CollaboratorList from "./components/CollaboratorList";
import CollaboratorManagement from "./components/CollaboratorManagement";
import CollaboratorPage from "./components/CollaboratorPage";
import BillById from "./containers/BillById"

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
                        path="bills/:id"
                        element={<BillById />}/>
                    <Route
                        path="holidays"
                        element={<HolidayList />}
                    />
                    <Route
                        path="holidays/post"
                        element={<PostRequestHoliday />}
                    />
                    <Route
                        path="collaborator"
                        element={<CollaboratorPage />}
                    />
                    <Route
                        path="collaborator/post"
                        element={<AddCollaborator/>}
                    />
                    <Route
                        path="collaborator/get"
                        element={<CollaboratorList/>}
                    />
                    <Route
                        path="collaborator/management/:id"
                        element={<CollaboratorManagement/>}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
