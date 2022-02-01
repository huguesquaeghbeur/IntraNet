import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postHolidayData } from '../../services/holidayData';
import AlertComponent from '../toolComponents/AlertComponent';
import { faCheckCircle, faPaperPlane, faSave, faWindowClose, faBackspace, faTrash } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from '../toolComponents/ButtonComponent';
import { getUser } from '../../redux/actions/userAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PostRequestHoliday extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            collabId: '',
            startDate: '',
            startOnMorning: true,
            endDate: '',
            endOnMorning: true,
            leaveType: '',
            halfDayBreakCount: '',
            alertC: 0,
        }
    }

    componentDidMount() {
        this.props.getUser()
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCancel = () => {
        this.setState({
            collabId: this.props.user.user.id,
            startDate: '',
            startOnMorning: true,
            endDate: '',
            endOnMorning: true,
            leaveType: '',
            halfDayBreakCount: '',
            alertC: 1,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('collabId', this.props.user.user.id);
        formData.append('startDate', this.state.startDate);
        formData.append('startOnMorning', this.state.startOnMorning);
        formData.append('endDate', this.state.endDate);
        formData.append('endOnMorning', this.state.endOnMorning);
        formData.append('leaveType', this.state.leaveType);
        formData.append('halfDayBreakCount', this.state.startDate - this.state.endDate);
        console.log(this.state)

        postHolidayData(formData).then(res => {
            this.setState({
                posts: res.data
            })
        })

        this.setState({
            collabId: this.props.user.user.id,
            startDate: '',
            startOnMorning: true,
            endDate: '',
            endOnMorning: true,
            leaveType: '',
            halfDayBreakCount: '',
            alertC: 2,
        })
    }

    render() {
        const { startDate, startOnMorning, endDate, endOnMorning, leaveType, halfDayBreakCount, alertC } = this.state;
        return (
            <div>
                <div>
                    <Link to="/holiday"><ButtonComponent type="button" color="bg-indigo-500" colorText="white" body="Retour" logo={faBackspace} /></Link>
                </div>
                <div className="flex items-center justify-center bg-white">
                    <div className="flex flex-col" id="top">
                        {alertC === 1 ?
                            <AlertComponent color="bg-red-400" borderColor="border-red-500" textColor="text-white"
                                logo={faWindowClose}
                                title="Demande de congé annulée" body="Vous pouvez effectuer une nouvelle demande" />
                            : null}
                        {alertC === 2 ?
                            <AlertComponent color="bg-green-400" borderColor="border-green-500" textColor="text-black"
                                logo={faCheckCircle}
                                title="Demande de congé effectuée" body="Vous pouvez toujours la modifier depuis ..." />
                            : null}

                        <div className="flex flex-col">
                            <div className="text-gray-400 font-bold uppercase w-screen text-center">
                                Nouvelle demande de congé
                            </div>
                            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                                <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                                    <form id="create_holiday_request" className="mb-0 space-y-6" method="POST" onSubmit={this.handleSubmit}>

                                        <div>
                                            <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700">Type de congés</label>
                                            <div className="mt-1">
                                                <select required value={leaveType} onChange={this.handleChange} name="leaveType" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                                    <option onChange={this.handleChange} value="">--- select ---</option>
                                                    <option onChange={this.handleChange} value="0">Congés payés</option>
                                                    <option onChange={this.handleChange} value="1">Congé maladie</option>
                                                    <option onChange={this.handleChange} value="2">Congé parental</option>
                                                    <option onChange={this.handleChange} value="3">Sans solde</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Holiday Begin on ... */}
                                        <div>
                                            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Date de début</label>
                                            <div>
                                                <input required value={startDate} name="startDate" onChange={this.handleChange} type="date" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="startOnMorning" className="block text-sm font-medium text-gray-700">Heure de début</label>
                                            <div className="mt-1">
                                                <select required value={startOnMorning} name="startOnMorning" onChange={this.handleChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                                    <option onChange={this.handleChange} value="true">Matin</option>
                                                    <option onChange={this.handleChange} value="false">Après-midi</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Holiday End on ... */}
                                        <div>
                                            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Date de fin</label>
                                            <div>
                                                <input required value={endDate} name="endDate" onChange={this.handleChange} type="date" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="endOnMorning" className="block text-sm font-medium text-gray-700">Heure de fin</label>
                                            <div className="mt-1">
                                                <select required value={endOnMorning} onChange={this.handleChange} name="endOnMorning" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                                    <option onChange={this.handleChange} value="true">Matin</option>
                                                    <option onChange={this.handleChange} value="false">Après-midi</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Will be calculated automatically with input form */}
                                        <div>
                                            <label htmlFor="halfDayBreakCount" className="block text-sm font-medium text-gray-700">Nombre(s) de demi-journée(s)</label>
                                            <div>
                                                <input type="text" value={halfDayBreakCount} id="halfDayBreakCount" name="halfDayBreakCount" readOnly className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                            </div>
                                        </div>

                                        {/* <div>
                                        <label htmlFor="commentary" className="block text-sm font-medium text-gray-700">Commentaires</label>
                                        <div>
                                            <textarea id="commentary" name="commentary" className="w-full border border-gray-300 px-3 py-20 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"></textarea>
                                        </div>
                                    </div> */}


                                        <div className="flex flex-row justify-around">
                                            <div>
                                                <a href="#top">
                                                    {/* <ButtonComponent type="button" color="bg-red-400" colorText="white"
                                                        body="Annuler" logo={faBan}
                                                        onClickMethod={this.handleCancel} /> */}
                                                    <button onClick={this.handleCancel} className="text-center h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#top">
                                                    {/* <ButtonComponent type="button" color="bg-indigo-500" colorText="white"
                                                        body="Sauvegarder" logo={faSave} /> */}
                                                    <button className="text-center h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                                        <FontAwesomeIcon icon={faSave} />
                                                    </button>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#top">
                                                    {/* <ButtonComponent type="submit" color="bg-green-500" colorText="white"
                                                        body="Soumettre" logo={faPaperPlane} /> */}
                                                    <button className="text-center h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                                        <FontAwesomeIcon icon={faPaperPlane} />
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getUser: () => dispatch(getUser()),
    }
}

export default connect(mapStateToProps, mapActionToProps)(PostRequestHoliday);