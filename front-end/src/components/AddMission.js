function AddMission() {

    function SaveMission() {

    }

    function AddCollab() {

    }

    function onSubmit() {
        SaveMission()
    }

    return(
        <div className="flex flex-col">
            <h1>Créer une mission</h1>
            <form className="submitForm" onSubmit={SaveMission}>
                <input type="text" className="missionName" placeholder="Nom de la mission"/>
                <select className="manager"/>
                <input type="text" className="missionDescription" placeholder="Description"/>
                <input type="date" className="startTime"/>
                <input type="date" className="endTime"/>
                <button onClick={AddCollab}>Ajouter un collaborateur</button>
                <button onClick={onSubmit}>Valider</button>
            </form>
        </div>
    );
}

export default AddMission;