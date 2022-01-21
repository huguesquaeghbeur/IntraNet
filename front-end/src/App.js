import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';

import BillsOverview from "./containers/BillsOverview";
import AddCollaborator from "./components/collaboratorComponents/AddCollaboratorForm";
import PostRequestHoliday from "./components/holidayComponents/PostRequestHoliday";
import HolidayList from "./components/holidayComponents/HolidayList";
import CollaboratorList from "./components/collaboratorComponents/CollaboratorList";
import CollaboratorManagement from "./components/collaboratorComponents/CollaboratorManagement";
import CollaboratorPage from "./components/collaboratorComponents/CollaboratorPage";
import BillById from "./containers/BillById"
import HolidayById from "./containers/holidayContainers/HolidayById";
import HolidayMenu from "./containers/holidayContainers/HolidayMenu";
import HeaderBanner from "./components/baseHeaderFooterEtc/Header";


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
