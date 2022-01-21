import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';
import AddMission from "./components/billComponents/AddMission";
import BillsOverview from "./containers/billContainers/BillsOverview";
import HolidayOverview from "./containers/billContainers/HolidayOverview";
import BillById from "./containers/billContainers/BillById"

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
                        element={<HolidayOverview />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
