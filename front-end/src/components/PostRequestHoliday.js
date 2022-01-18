import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { postRequestHolidayInApi } from '../redux/actions/holidayAction';

class PostRequestHoliday extends PureComponent {
    state = {
        collabId: '',
        startDate: '',
        startOnMorning: '',
        endDate: '',
        endOnMorning: '',
        halfDayBreakCount: ''
    }

    handleTextChange = (event) => {
        const {target: {collabId, value}} = event;
        this.setState({ [collabId]: value});
        console.log(this.state);
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.postRequestHolidayInApi(this.state);
        this.setState();
    }

    render() {
        return (
            <div>
                <h1 className="justify-center">Demande de congés</h1>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form className="mb-0 space-y-6" method="POST" onSubmit={this.handleOnSubmit}>
                            <div>
                                <label htmlFor="collaborator" className="block text-sm font-medium text-gray-700">Demandeur</label>
                                <div>
                                    <input onChange={this.handleTextChange}  id="collaborator" name="collaborator" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="holidayType" className="block text-sm font-medium text-gray-700">Type de congés</label>
                                <div className="mt-1">
                                    <select className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                        <option value="">Congés payés</option>
                                        <option value="">Sans solde</option>
                                        <option value="">RTT</option>
                                        <option value="">Autre ...</option>
                                    </select>
                                </div>
                            </div>

                            {/* Holiday Begin on ... */}
                            <div>
                                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Date de début</label>
                                <div>
                                    <input onChange={this.handleTextChange} value={this.state.startDate} type="date" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="startOnMorning" className="block text-sm font-medium text-gray-700">Heure de début</label>
                                <div className="mt-1">
                                    <select onChange={this.handleTextChange} value={this.state.startOnMorning} name="startOnMorning" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                        <option onChange={this.handleTextChange} value={this.state.startOnMorning = true}>Matin</option>
                                        <option onChange={this.handleTextChange} value={this.state.startOnMorning = false}>Après-midi</option>
                                    </select>
                                </div>
                            </div>

                            {/* Holiday End on ... */}
                            <div>
                                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Date de fin</label>
                                <div>
                                    <input onChange={this.handleTextChange} value={this.state.endDate} type="date" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="endOnMorning" className="block text-sm font-medium text-gray-700">Heure de fin</label>
                                <div className="mt-1">
                                    <select name="endOnMorning" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                        <option onChange={this.handleTextChange} value={this.state.endOnMorning = true}>Matin</option>
                                        <option onChange={this.handleTextChange} value={this.state.endOnMorning = false}>Après-midi</option>
                                    </select>
                                </div>
                            </div>

                            {/* Will be calculated automatically with input form */}
                            <div>
                                <label htmlFor="halfDayBreak" className="block text-sm font-medium text-gray-700">Nombre(s) de demi-journée(s)</label>
                                <div>
                                    <input onChange={this.handleTextChange} value={this.state.halfDayBreakCount} id="halfDayBreak" name="halfDayBreak" readOnly className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
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
                                    <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 focus:ring-offset-2 focus:ring-red-500">
                                        Annuler
                                    </button>
                                </div>
                                <div>
                                    <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:ring-offset-2 focus:ring-indigo-500">
                                        Sauvegarder
                                    </button>
                                </div>
                                <div>
                                    <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500">
                                        Soumettre
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(PostRequestHoliday);