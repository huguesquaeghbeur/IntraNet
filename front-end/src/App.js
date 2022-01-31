import React from "react";
import './App.css'


import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';

import BillsOverview from "./containers/billContainers/BillsOverview";
import AddCollaborator from "./components/AddCollaboratorForm";
import PostRequestHoliday from "./components/holidayComponents/PostRequestHoliday";
import HolidayList from "./components/holidayComponents/HolidayList";
import CollaboratorList from "./components/CollaboratorList";
import CollaboratorManagement from "./components/CollaboratorManagement";
import CollaboratorPage from "./components/CollaboratorPage";
import BillById from "./containers/billContainers/BillById";
import HolidayById from "./containers/holidayContainers/HolidayById";
import HolidayMenu from "./containers/holidayContainers/HolidayMenu";
import DepartmentList from "./components/DptNewFolder/DepartmentList";
import PostRequestDepartment from "./components/DptNewFolder/PostRequestDepartment";
import DepartmentById from "./components/DptNewFolder/DepartmentById";
import { DepartmentsOverview } from "./containers/DepartmentContainer/DepartmentsOverview";
import HeaderBanner from "./components/baseHeaderFooterEtc/Header";
import DepartmentDescriptionUniqueId from "./components/DptNewFolder/DepartmentDescriptionUniqueId";



import InfoOverview from "./containers/InfoOverview";
import InfoList from "./components/InfoList";
import Calendar from "./components/Calendar";



// const localizer = BigCalendar.momentLocalizer(moment)
// localizer.formats.yearHeaderFormats = 'YYYY'


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
                        path="infos"
                        element={<InfoOverview />}
                    />
                    <Route
                        path="infolist"
                        element={<InfoList />}
                    />
                    <Route
                        path="collaborator"
                        element={<AddCollaborator />} />
                    {<Route
                        path="calendar"
                        element={<Calendar />} />}


                </Routes>
            </Router>
            


        </div>

    );
}

export default App;
