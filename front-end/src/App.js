import './styles/index.css';
import AddMission from "./components/AddMission";
import AddCollaborator from './components/AddCollaboratorForm';

function App() {
    return(
        <div className="App">
            <header className="header">
                < AddMission />
                < AddCollaborator />
            </header>
        </div>
    );
}

export default App;
