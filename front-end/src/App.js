import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
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
import UserLogin from "./components/userPage";
import Error from "./containers/Error"
import Home from "./containers/Home"

import InfoOverview from "./containers/InfoOverview";
import InfoList from "./components/InfoList";
import MissionOverview from "./containers/MissionOverview";
import { getRole } from './services/userService'
import BillsManagement from "./containers/billContainers/BillsManagement";
import HolidayOwn from "./containers/holidayContainers/HolidayOwn";
// import BigCalendar from 'react-big-calendar';
// import Year from './Year';

// const localizer = BigCalendar.momentLocalizer(moment)
// localizer.formats.yearHeaderFormats = 'YYYY'

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <HeaderBanner />
                </div>
                <Routes>
                    <Route
                        path="bills"
                        element={localStorage.getItem("token") !== null ? <BillsOverview /> : <UserLogin />}
                    />
                    <Route
                        path="management/bills"
                        element={localStorage.getItem("token") !== null ? <BillsManagement/> : <Error />}
                    />
                    <Route
                        path="bills/:id"
                        element={localStorage.getItem("token") !== null ? <BillById /> : <UserLogin />} />
                    <Route
                        path="holiday"
                        element={localStorage.getItem("token") !== null ? <HolidayMenu /> : <UserLogin />}
                    />
                    <Route
                        path="holiday/list"
                        element={localStorage.getItem("token") !== null ? <HolidayList /> : <UserLogin />}
                    />
                    <Route
                        path="holiday/own"
                        element={localStorage.getItem("token") !== null ? <HolidayOwn /> : <UserLogin />}
                    />
                    <Route
                        path="holiday/:id"
                        element={localStorage.getItem("token") !== null ? <HolidayById /> : <UserLogin />}
                    />
                    <Route
                        path="holiday/post"
                        element={localStorage.getItem("token") !== null ? <PostRequestHoliday /> : <UserLogin />}
                    />
                    <Route
                        path="infos"
                        element={localStorage.getItem("token") !== null ? <InfoOverview /> : <UserLogin />}
                    />
                    <Route
                        path="infolist"
                        element={localStorage.getItem("token") !== null ? <InfoList /> : <UserLogin />}
                    />
                    <Route
                        path="collaborator"
                        element={localStorage.getItem("token") !== null ? <CollaboratorPage /> : <UserLogin />}
                    />
                    <Route
                        path="collaborator/post"
                        element={localStorage.getItem("token") !== null ? <AddCollaborator /> : <UserLogin />}
                    />
                    <Route
                        path="collaborator/get"
                        element={localStorage.getItem("token") !== null ? <CollaboratorList /> : <UserLogin />}
                    />
                    <Route
                        path="collaborator/management/:id"
                        element={localStorage.getItem("token") !== null ? <CollaboratorManagement /> : <UserLogin />}
                    />
                    <Route
                        path="departments"
                        element={localStorage.getItem("token") !== null ? <DepartmentsOverview /> : <UserLogin />}
                    />
                    <Route
                        path="departments/list"
                        element={localStorage.getItem("token") !== null ? <DepartmentList /> : <UserLogin />}
                    />
                    <Route
                        path="departments/post"
                        element={localStorage.getItem("token") !== null ? <PostRequestDepartment /> : <UserLogin />}
                    />
                    <Route

                        path="missions/create"
                        element={<AddMission/>}
                    />
                    <Route
                        path="missions"
                        element={<MissionOverview/>}
                    />
                    <Route
                        path="departments/:id"
                        element={localStorage.getItem("token") !== null ? <DepartmentById /> : <UserLogin />}
                    />
                    <Route
                        path="departments/description"
                        element={localStorage.getItem("token") !== null ? <DepartmentDescriptionUniqueId /> : <UserLogin />}
                    />
                    {/* <Route></Route> */}
                    <Route
                        path=""
                        element={localStorage.getItem("token") === null ? <UserLogin /> : <Home />}
                    />
                    <Route
                        path="*"
                        element={<Error />}
                    />
                </Routes>
            </Router>
            {/* <BigCalendar
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
            /> */}
        </div>
    );
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App/>, rootElement)

export default App;
