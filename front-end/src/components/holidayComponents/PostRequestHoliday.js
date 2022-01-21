import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { postHolidayData } from '../../services/holidayData';

class PostRequestHoliday extends PureComponent {
    state = {
        collabId: '',
        startDate: '',
        startOnMorning: true,
        endDate: '',
        endOnMorning: true,
        leaveType: '',
        halfDayBreakCount: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleCancel = () => {
        this.setState({
            collabId: '',
            startDate: '',
            startOnMorning: true,
            endDate: '',
            endOnMorning: true,
            leaveType: '',
            halfDayBreakCount: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('collabId', this.state.collabId);
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
            console.log(res.data)
        })

        this.setState({
            collabId: '',
            startDate: '',
            startOnMorning: true,
            endDate: '',
            endOnMorning: true,
            leaveType: '',
            halfDayBreakCount: ''
        })
    }

    render() {
        const { collabId, startDate, startOnMorning, endDate, endOnMorning, leaveType, halfDayBreakCount } = this.state;
        return (
            <div className="flex items-center justify-center bg-white">
                <div className="flex flex-col">

                    <div className="flex flex-col">
                        <div className="text-gray-400 font-bold uppercase">
                            Nouvelle demande de congé
                        </div>
                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                                <form id="create_holiday_request" className="mb-0 space-y-6" method="POST" onSubmit={this.handleSubmit}>
                                    <div>
                                        <label htmlFor="collabId" className="block text-sm font-medium text-gray-700">Demandeur</label>
                                        <div>
                                            <input value={collabId} onChange={this.handleChange} id="collabId" name="collabId" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700">Type de congés</label>
                                        <div className="mt-1">
                                            <select value={leaveType} onChange={this.handleChange} name="leaveType" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
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
                                            <input value={startDate} name="startDate" onChange={this.handleChange} type="date" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="startOnMorning" className="block text-sm font-medium text-gray-700">Heure de début</label>
                                        <div className="mt-1">
                                            <select value={startOnMorning} name="startOnMorning" onChange={this.handleChange} className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                                <option onChange={this.handleChange} value="true">Matin</option>
                                                <option onChange={this.handleChange} value="false">Après-midi</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Holiday End on ... */}
                                    <div>
                                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Date de fin</label>
                                        <div>
                                            <input value={endDate} name="endDate" onChange={this.handleChange} type="date" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="endOnMorning" className="block text-sm font-medium text-gray-700">Heure de fin</label>
                                        <div className="mt-1">
                                            <select value={endOnMorning} onChange={this.handleChange} name="endOnMorning" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                                <option onChange={this.handleChange} value="true">Matin</option>
                                                <option onChange={this.handleChange} value="false">Après-midi</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Will be calculated automatically with input form */}
                                    <div>
                                        <label htmlFor="halfDayBreakCount" className="block text-sm font-medium text-gray-700">Nombre(s) de demi-journée(s)</label>
                                        <div>
                                            <input value={halfDayBreakCount} onChange={this.handleChange} id="halfDayBreakCount" name="halfDayBreakCount" readOnly className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="commentary" className="block text-sm font-medium text-gray-700">Commentaires</label>
                                        <div>
                                            <textarea id="commentary" name="commentary" className="w-full border border-gray-300 px-3 py-20 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"></textarea>
                                        </div>
                                    </div>


                                    <div className="flex flex-row justify-around">
                                        <div>
                                            <button onClick={this.handleCancel} type="button" className="m-2 w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 focus:ring-offset-2 focus:ring-red-500">
                                                Annuler
                                            </button>
                                        </div>
                                        <div>
                                            <button type="submit" className="m-2 w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:ring-offset-2 focus:ring-indigo-500">
                                                Sauvegarder
                                            </button>
                                        </div>
                                        <div>
                                            <button type="submit" className="m-2 w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500">
                                                Soumettre
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(PostRequestHoliday);