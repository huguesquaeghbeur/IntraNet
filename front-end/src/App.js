import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import './index.css';

import BillsOverview from "./containers/billContainers/BillsOverview";
import AddCollaborator from "./components/collaboratorComponent/AddCollaboratorForm";
import PostRequestHoliday from "./components/holidayComponents/PostRequestHoliday";
import HolidayList from "./components/holidayComponents/HolidayList";
import CollaboratorList from "./components/collaboratorComponent/CollaboratorList";
import CollaboratorManagement from "./components/collaboratorComponent/CollaboratorManagement";
import CollaboratorPage from "./components/collaboratorComponent/CollaboratorPage";
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
import BillsManagement from "./containers/billContainers/BillsManagement";
import HolidayOwn from "./containers/holidayContainers/HolidayOwn";
import Dashboard from "./containers/Dashboard";
import MissionOverview from "./containers/MissionOverview";
import MissionDetails from "./components/MissionComponents/MissionDetails";
import { getRole } from './services/userService';
import AddMission from "./components/MissionComponents/AddMission";
import UpdateMission from "./components/MissionComponents/UpdateMission";
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
                    {/* <Route
                        path="holiday/:id"
                        element={localStorage.getItem("token") !== null ? <HolidayById /> : <UserLogin />}
                    /> */}
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
                        element={localStorage.getItem("token") === null ? <UserLogin /> : <Dashboard />}
                    />
                    <Route
                        path="*"
                        element={<Error />}
                    />

                    {/*ROUTES MISSIONS*/}
                    <Route
                        path="missions"
                        element={localStorage.getItem("token") !== null ? <MissionOverview/> : <Home/>}
                    />
                    <Route
                        path="mission/detail/:id"
                        element={localStorage.getItem("token") !== null ? <MissionDetails /> : <Home />}
                    />
                    <Route
                        path="mission/add"
                        element={localStorage.getItem("token") !== null ? <AddMission /> : <Home />}
                    />
                    <Route
                        path="mission/update/:id"
                        element={localStorage.getItem("token") !== null ? <UpdateMission /> : <Home />}
                    />
                    <Route
                        path="mission/delete/:id"
                        element={localStorage.getItem("token") !== null ? <MissionOverview/> : <Home/>}
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
