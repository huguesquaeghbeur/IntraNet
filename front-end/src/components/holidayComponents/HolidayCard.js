import { faBaby, faCheck, faClock, faDollarSign, faFileMedical, faNotEqual, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCollaborator } from '../../redux/actions/collaboratorAction';
import { getCollaboratorById } from '../../services/collaboratorData';
import { getDepartmentRequestById } from '../../services/departmentData';
import { dateFormat } from '../../services/formatService';

class HolidayCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collab: {},
            department: {}
        }
    }

    componentDidMount = async () => {
        await getCollaboratorById(this.props.post.collaboratorId).then(res => {
            this.setState({
                collab: res.data
            })
        }, [])
        // .then(() => {
        //     // getDepartmentRequestById(this.state.collab.department).then(res => {
        //     getDepartmentRequestById(1).then(res => {
        //         this.setState({
        //             department: res.data
        //         })
        //     })
        // })
    }

    render() {
        
        return (
            <div>
                {this.props.post !== undefined ? (
                    <div key={this.props.post.id} className="m-2 p-2 md:px-7 xl:px-8 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                        <div className="flex">
                            <div>
                                {(this.props.post.validation === 1) ? (
                                    <span className="text-sm px-3 bg-yellow-200 text-yellow-700 rounded-full"><FontAwesomeIcon icon={faClock} /></span>
                                ) : (this.props.post.validation === 2) ? (
                                    <div className="text-sm px-3 bg-orange-200 text-orange-600 rounded-full"><FontAwesomeIcon icon={faClock} /></div>
                                ) : (this.props.post.validation === 3) ? (
                                    <div className="text-sm px-3 bg-orange-400 text-orange-900 rounded-full"><FontAwesomeIcon icon={faClock} /></div>
                                )
                                    : (this.props.post.validation === 4) ? (
                                        <div className="text-sm px-3 bg-green-200 text-green-800 rounded-full"><FontAwesomeIcon icon={faCheck} /></div>
                                    ) : (this.props.post.validation === 0) ? (
                                        <div className="text-sm px-3 bg-red-200 text-red-800 rounded-full"><FontAwesomeIcon icon={faTimesCircle} /></div>
                                    ) : null}
                            </div>
                            <div className="text-slate-700 text-end text-sm pl-6">
                                {this.props.post.id}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <b>{this.state.collab.firstName} {this.state.collab.lastName}</b>
                        </div>
                        <div className="text-blue-500 pt-2 text-center">
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
                                Début : <b className="pl-1">{dateFormat(this.props.post.startDate)}</b>
                            </div>
                            <div className="flex justify-center">
                                <b>{this.props.post.startOnMorning === true ? <div className="text-yellow-500">Matin</div> : <div className="text-orange-500">Après-midi</div>}</b>
                            </div>
                            <div className="flex justify-center">
                                Fin : <b className="pl-1">{dateFormat(this.props.post.endDate)}</b>
                            </div>
                            <div className="flex justify-center pb-2">
                                <b>{this.props.post.endOnMorning === true ? <div className="text-yellow-500">Matin</div> : <div className="text-orange-500">Après-midi</div>}</b>
                            </div>
                            <div className="rounded-xl bg-slate-300 flex justify-center mt-4">
                                Jours cumulés : <b>{(this.props.post.halfDayBreakCount / 2).toString()}</b>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getCollaborator: (cId) => dispatch(getCollaborator(cId)),
        getDepartmentRequestById: (dId) => dispatch(getDepartmentRequestById(dId))
    }
}

export default connect(mapActionToProps)(HolidayCard);