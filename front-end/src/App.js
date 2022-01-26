import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';

// import BillsOverview from "./containers/BillsOverview";
import AddCollaborator from "./components/AddCollaboratorForm";
import PostRequestHoliday from "./components/holidayComponents/PostRequestHoliday";
import HolidayList from "./components/holidayComponents/HolidayList";
import CollaboratorList from "./components/CollaboratorList";
import CollaboratorManagement from "./components/CollaboratorManagement";
import CollaboratorPage from "./components/CollaboratorPage";
// import BillById from "./containers/BillById"
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
// import BigCalendar from 'react-big-calendar';
// import Year from './Year';

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
                    {/* <Route
                        path="bills"
                        element={<BillsOverview />}
                    />
                    <Route
                        path="bills/:id"
                        element={<BillById />}/> */}
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
                        element={<CollaboratorPage />}
                    />
                    <Route
                        path="collaborator/post"
                        element={<AddCollaborator/>}
                    />
                    <Route
                        path="collaborator/get"
                        element={<CollaboratorList/>}
                    />
                    <Route
                        path="collaborator/management/:id"
                        element={<CollaboratorManagement/>}
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
                    <Route
                        path="departments/description"
                        element={<DepartmentDescriptionUniqueId/>}
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
