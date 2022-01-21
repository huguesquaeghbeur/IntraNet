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
import PostRequestHoliday from "./components/holidayComponents/PostRequestHoliday";
import HolidayList from "./components/holidayComponents/HolidayList";
import HolidayById from "./containers/holidayContainers/HolidayById";
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
                        element={<AddCollaborator/>}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
