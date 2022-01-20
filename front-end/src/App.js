import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
} from "react-router-dom";
import './styles/index.css';
import AddMission from "./components/AddMission";
import BillsOverview from "./containers/BillsOverview";
import HolidayOverview from "./containers/HolidayOverview";
import MissionOverview from "./containers/MissionOverview";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="bills"
                        element={<BillsOverview />}
                    />
                    <Route
                        path="holidays"
                        element={<HolidayOverview />}
                    />
                    <Route
                        path="missions/create"
                        element={<AddMission/>}
                    />
                    <Route
                        path="missions"
                        element={<MissionOverview/>}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
