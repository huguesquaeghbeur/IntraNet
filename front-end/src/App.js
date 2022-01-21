import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';

import BillsOverview from "./containers/BillsOverview";
import AddCollaborator from "./components/AddCollaboratorForm";
import HolidayOverview from "./containers/HolidayOverview";
import DepartmentList from "./components/DptNewFolder/DepartmentList";
import PostRequestDepartment from "./components/DptNewFolder/PostRequestDepartment";
import DepartmentById from "./components/DptNewFolder/DepartmentById";
import { DepartmentsOverview } from "./containers/DepartmentContainer/DepartmentsOverview";
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
                    <Route
                        path="departments"
                        element={<DepartmentsOverview/>}
                    />
                    <Route
                        path="departments/list"
                        element={<DepartmentList/>}
                    />
                    <Route
                        path="departments/post"
                        element={<PostRequestDepartment/>}
                    />
                    <Route
                        path="departments/:id"
                        element={<DepartmentById/>}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
