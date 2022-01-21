import '../../index.css';

function AddMission() {

    function SaveMission() {

    }

    function AddCollab() {

    }

    function onSubmit() {
        SaveMission()
    }

    return(
        <div className="w-full flex justify-center">
            <div className="w-2/4">
                <h1 className="title">Créer une mission</h1>
                <form className="submitForm flex flex-col" onSubmit={SaveMission}>
                    <input type="text" className="missionName border-l-4 border-red-500 focus:outline-none" placeholder="Nom de la mission"/>
                    <select className="manager"/>
                    <input type="text" className="missionDescription border-l-4 border-red-500 focus:outline-none" placeholder="Description"/>
                    <input type="date" className="startTime"/>
                    <input type="date" className="endTime"/>
                    <button onClick={AddCollab} className="rounded-full hover:rounded-lg">Ajouter un collaborateur</button>
                    <button onClick={onSubmit}>Valider</button>
                </form>
            </div>
        </div>
    );
}

export default AddMission;