import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
// import './index.css';

import BillsOverview from "./containers/BillsOverview";
import AddCollaborator from "./components/AddCollaboratorForm";
import HolidayOverview from "./containers/HolidayOverview";
import HeaderBanner from "./components/baseHeaderFooterEtc/Header";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <HeaderBanner/>
                </div>
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
                        path="collaborator"
                        element={<AddCollaborator/>}
                    />                    
                </Routes>
            </Router>
        </div>
    );
}

export default App;
