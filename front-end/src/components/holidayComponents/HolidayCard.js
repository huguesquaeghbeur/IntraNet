import { faBaby, faCheck, faClock, faDollarSign, faFileMedical, faNotEqual, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCollaborator } from '../../services/collaboratorData';

class HolidayCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collab: {}
        }
    }

    // componentDidMount = () => {
    //     this.props.getCollaboratorById(this.props.collab).then(res => {
    //         this.setState({
    //             collab: res.data
    //         })
    //     }).catch(error => {
    //         console.log(error)
    //     })
    //         getCollaboratorById(this.props.post.collaboratorId)
    //         console.log(this.props.collab)

    // }
    componentDidMount = () => {
        // this.props.getCollaboratorById(this.state.collaboratorNeed).then(res => {
        //     this.setState({
        //         collab: res.data
        //     }, [])

        console.log(this.props)
        // })
    }

    render() {
        return (
            <div>
                {this.props.post !== undefined ? (
                    <div key={this.props.post.id} className="m-2 p-2
                    md:px-7
                    xl:px-8
                    rounded-[20px]
                    bg-white
                    shadow-md
                    hover:shadow-lg
                    mb-8">
                        <div className="flex justify-between">
                            <div>
                                {(this.props.post.validation === 1) ? (
                                    <span className="text-sm px-3 bg-yellow-200 text-yellow-700 rounded-full"><FontAwesomeIcon icon={faClock} /> en attente de validation du CDS</span>
                                ) : (this.props.post.validation === 2) ? (
                                    <div className="text-sm px-3 bg-orange-200 text-orange-600 rounded-full"><FontAwesomeIcon icon={faClock} /> en attente de validation RH</div>
                                ) : (this.props.post.validation === 3) ? (
                                    <div className="text-sm px-3 bg-orange-400 text-orange-900 rounded-full"><FontAwesomeIcon icon={faCheck} /> en attente de validation DRH</div>
                                )
                                    : (this.props.post.validation === 4) ? (
                                        <div className="text-sm px-3 bg-green-200 text-green-800 rounded-full"><FontAwesomeIcon icon={faCheck} /> Validé</div>
                                    ) : (this.props.post.validation === 0) ? (
                                        <div className="text-sm px-3 bg-red-200 text-red-800 rounded-full"><FontAwesomeIcon icon={faTimesCircle} /> Refusé</div>
                                    ) : null}
                            </div>
                            <div className="rounded-xl bg-blue-200 text-blue-400 p-1 m-1">
                                # {this.props.post.id}
                            </div>
                        </div>
                        {/* {this.state.collab !== undefined ? */}
                        <div className="flex justify-center">
                            Collaborateur : <b>{this.props.post.collaboratorId} {this.props.post.collaborator}</b>
                        </div>
                        {/* :
                            <div className="flex justify-center">
                                Collaborateur : <b>{this.state.collab.firstName} {this.state.collab.lastName}</b>
                            </div>
                        } */}

                        <div className="text-blue-500 pl-8 pt-2">
                            <b>
                                {this.props.post.leaveType === 0 ? (
                                    <span>Congé payé <FontAwesomeIcon icon={faDollarSign} /></span>
                                ) : (this.props.post.leaveType === 1) ? (
                                    <span>Congé maladie <FontAwesomeIcon icon={faFileMedical} /></span>
                                ) : (this.props.post.leaveType === 2) ? (
                                    <span>Congé parental <FontAwesomeIcon icon={faBaby} /></span>
                                ) : (this.props.post.leaveType === 3) ? (
                                    <span>Congé sans solde <FontAwesomeIcon icon={faNotEqual} /></span>
                                ) : null}
                            </b>
                        </div>
                        <div className="flex flex-col justify-around">
                            <div className="pt-2 flex justify-center">
                                Début : <b className="pl-1">{this.props.post.startDate}</b>
                            </div>
                            <div className="flex justify-center">
                                <b>{this.props.post.startOnMorning === true ? <div className="text-yellow-500">Matin</div> : <div className="text-orange-500">Après-midi</div>}</b>
                            </div>
                            <div className="flex justify-center">
                                Fin : <b className="pl-1">{this.props.post.endDate}</b>
                            </div>
                            <div className="flex justify-center pb-2">
                                <b>{this.props.post.endOnMorning === true ? <div className="text-yellow-500">Matin</div> : <div className="text-orange-500">Après-midi</div>}</b>
                            </div>
                            <div className="rounded-xl bg-indigo-200 flex justify-center mt-4">
                                Jours cumulés : <b>{(this.props.post.halfDayBreakCount / 2).toString()}</b>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // holiday: state.holidayState.holidays,
    }
}
const mapActionToProps = (dispatch) => {
    return {
        // getAllCollaborator: () => dispatch(getAllCollaborator()),
    }
}

export default connect(mapStateToProps, mapActionToProps)(HolidayCard);