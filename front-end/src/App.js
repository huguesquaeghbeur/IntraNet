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
import HolidayById from "./containers/HolidayById";

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
                        element={<HolidayList />}
                    />
                    <Route
                        path="holidays/:id"
                        element={<HolidayById />}
                    />
                    <Route
                        path="holidays/post"
                        element={<PostRequestHoliday />}
                    />
                    <Route
                        path="collaborator"
                        element={<AddCollaborator/>}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
