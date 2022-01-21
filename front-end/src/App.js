import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';

import BillsOverview from "./containers/BillsOverview";
import AddCollaborator from "./components/AddCollaboratorForm";

import DepartmentList from "./components/DptNewFolder/DepartmentList";
import PostRequestDepartment from "./components/DptNewFolder/PostRequestDepartment";
import DepartmentById from "./components/DptNewFolder/DepartmentById";
import { DepartmentsOverview } from "./containers/DepartmentContainer/DepartmentsOverview";
import HeaderBanner from "./components/baseHeaderFooterEtc/Header";
// import './index.css';

import InfoOverview from "./containers/InfoOverview";
import InfoList from "./components/InfoList";
import BigCalendar from 'react-big-calendar';
import Year from './Year';

const localizer = BigCalendar.momentLocalizer(moment)
localizer.formats.yearHeaderFormats = 'YYYY'




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
                        path="infos"
                        element={<InfoOverview />}
                    />
                    <Route
                        path="infolist"
                        element={<InfoList />}
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
            <BigCalendar
            localizer={localizer}
            events={[]}
            toolbar={true}
            views={{
                day: true,
                week: true,
                month: true,
                year: Year
            }}
            messages={{year: 'Year'}}
            />
        </div>
    );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)

export default App;
