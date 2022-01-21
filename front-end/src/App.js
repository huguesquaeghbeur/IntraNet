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
import PostRequestHoliday from "./components/PostRequestHoliday";
import HolidayList from "./components/HolidayList";
import CollaboratorList from "./components/CollaboratorList";
import CollaboratorManagement from "./components/CollaboratorManagement";
import CollaboratorPage from "./components/CollaboratorPage";
import BillById from "./containers/BillById"
import HolidayById from "./containers/HolidayById";
import HolidayMenu from "./containers/holidayContainers/HolidayMenu";

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
                        path="holiday"
                        element={<HolidayMenu />}
                    />
                    <Route
                        path="holiday/list"
                        element={<HolidayList />}
                    />
                    <Route
                        path="holiday/:id"
                        element={<HolidayById />}
                    />
                    <Route
                        path="holiday/post"
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
