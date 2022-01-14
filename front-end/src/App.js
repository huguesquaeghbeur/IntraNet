import './styles/index.css';
import AddMission from "./components/AddMission";
import HolidayRequestForm from './containers/HolidayRequestForm';

function App() {
    return(
        <div className="App">
            <header className="header">
                < AddMission />
                <br />
                <HolidayRequestForm />
            </header>
        </div>
    );
}

export default App;
