import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './styles/index.css';
import AddMission from "./components/AddMission";
import BillsOverview from "./containers/BillsOverview";
import AddCollaborator from "./components/AddCollaboratorForm";

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
                <header className="header">
                    < AddMission />
                </header>
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
                        element={<AddCollaborator/>}/>
                    
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
