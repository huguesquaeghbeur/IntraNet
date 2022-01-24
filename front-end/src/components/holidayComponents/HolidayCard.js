import { faCheck, faClock, faTimesCircle, faNotEqual, faBaby, faFileMedical, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HolidayCard = (props) => {

    return (
        <div>
            {props.post !== undefined ? (
                <div key={props.post.id} className="m-2 p-2
                md:px-7
                xl:px-8
                rounded-[20px]
                bg-white
                shadow-md
                hover:shadow-lg
                mb-8">
                    <div className="flex justify-between">
                        <div>
                            {(props.post.validation === 1) ? (
                                <span className="text-sm px-3 bg-yellow-200 text-yellow-800 rounded-full"><FontAwesomeIcon icon={faClock} /> en attente de validation du CDS</span>
                            ) : (props.post.validation === 2) ? (
                                <div className="text-sm px-3 bg-orange-200 text-orange-800 rounded-full"><FontAwesomeIcon icon={faClock} /> en attente de validation RH</div>
                            ) : (props.post.validation === 3) ? (
                                <div className="text-sm px-3 bg-green-200 text-green-800 rounded-full"><FontAwesomeIcon icon={faCheck} /> Validé</div>
                            ) : (props.post.validation === 0) ? (
                                <div className="text-sm px-3 bg-red-200 text-red-800 rounded-full"><FontAwesomeIcon icon={faTimesCircle} /> Refusé</div>
                            ) : null}
                        </div>
                        <div className="rounded-xl bg-blue-200 text-blue-400 p-1 m-1">
                            # {props.post.id}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        Collaborateur : <b>{props.post.collaboratorId}</b>
                    </div>
                    <div className="text-blue-500 pl-8 pt-2">
                        <b>
                            {props.post.leaveType === 0 ? (
                                <span>Congé payé <FontAwesomeIcon icon={faDollarSign} /></span>
                            ) : (props.post.leaveType === 1) ? (
                                <span>Congé maladie <FontAwesomeIcon icon={faFileMedical} /></span>
                            ) : (props.post.leaveType === 2) ? (
                                <span>Congé parental <FontAwesomeIcon icon={faBaby} /></span>
                            ) : (props.post.leaveType === 3) ? (
                                <span>Congé sans solde <FontAwesomeIcon icon={faNotEqual} /></span>
                            ) : null}
                        </b>
                    </div>
                    <div className="flex flex-col justify-around">
                        <div className="pl-8 pt-2">
                            Début : <b>{props.post.startDate}</b>
                        </div>
                        <div className="pl-8">
                            <b>{props.post.startOnMorning === true ? <div className="text-yellow-500">Matin</div> : <div className="pl-32 text-orange-500">Après-midi</div>}</b>
                        </div>
                        <div className="pl-8">
                            Fin : <b>{props.post.endDate}</b>
                        </div>
                        <div className="pl-8 pb-2">
                            <b>{props.post.endOnMorning === true ? <div className="text-yellow-500">Matin</div> : <div className="pl-32 text-orange-500">Après-midi</div>}</b>
                        </div>
                        <div className="rounded-xl bg-indigo-200 flex justify-center mt-4">
                            Jours cumulés : <b>{(props.post.halfDayBreakCount / 2).toString()}</b>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default HolidayCard;