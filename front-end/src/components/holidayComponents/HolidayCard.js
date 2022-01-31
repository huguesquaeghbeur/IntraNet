import React from "react";

const HolidayCard = (props) => {

    return (
        <div>
            {props.post !== undefined ? (
                <div key={props.post.id} className="border bg-slate-100 hover:bg-slate-200 rounded-md shadow-ambre-100/50 p-2 m-4">
                    <div className="flex justify-between">
                        <div>
                            {(props.post.validation === 1) ? (
                                <div className="bg-orange-100 rounded-md p-1">en attente de validation du CDS</div>
                            ) : (props.post.validation === 2) ? (
                                <div className="bg-orange-300 rounded-md p-1">en attente de validation RH</div>
                            ) : (props.post.validation === 3) ? (
                                <div className="bg-green-300 rounded-md p-1">congés validé</div>
                            ) : (props.post.validation === 0) ? (
                                <div className="bg-red-300 rounded-md p-1">refusé</div>
                            ) : null}
                        </div>
                        <div className="rounded-full bg-cyan-300 p-1 m-1">
                            # {props.post.id}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        Collaborateur : <b>{props.post.collaboratorId}</b>
                    </div>
                    <div className="flex justify-start">
                        Type : <b>
                            {props.post.leaveType === 0 ? (
                                <div>Congé payé</div>
                            ) : (props.post.leaveType === 1) ? (
                                <div>Congé maladie</div>
                            ) : (props.post.leaveType === 2) ? (
                                <div>Congé parental</div>
                            ) : (props.post.leaveType === 3) ? (
                                <div>Congé sans solde</div>
                            ) : null}
                        </b>
                    </div>
                    <div className="flex flex-row justify-around">
                        <div className="p-2">
                            Début : <b>{props.post.startDate}</b>
                        </div>
                        <div className="p-2">
                            Fin : <b>{props.post.endDate}</b>
                        </div>
                        <div>
                            Jours cumulés : <b>{(props.post.halfDayBreakCount / 2).toString()}</b>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default HolidayCard;