import React, { PureComponent } from 'react';

class HolidayOverview extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            holidays: []
        }
    }


    render() {

        return (
            <div>
                <h1 className="justify-center">Demande de congés</h1>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form className="mb-0 space-y-6" method="POST">
                            <div>
                                <label for="collaborator" className="block text-sm font-medium text-gray-700">Demandeur</label>
                                <div>
                                    <input id="collaborator" name="collaborator" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                </div>
                            </div>
                            
                            <div>
                                <label for="holidayType" className="block text-sm font-medium text-gray-700">Type de congés</label>
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
                                <label for="startDate" className="block text-sm font-medium text-gray-700">Date de début</label>
                                <div>
                                    <input type="date" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"/>
                                </div>
                            </div>
                            <div>
                                <label for="startOnMorning" className="block text-sm font-medium text-gray-700">Heure de début</label>
                                <div className="mt-1">
                                    <select className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                        <option value="">Matin</option>
                                        <option value="">Après-midi</option>
                                    </select>
                                </div>
                            </div>

                            {/* Holiday End on ... */}
                            <div>
                                <label for="endDate" className="block text-sm font-medium text-gray-700">Date de fin</label>
                                <div>
                                    <input type="date" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"/>
                                </div>
                            </div>
                            <div>
                                <label for="endOnMorning" className="block text-sm font-medium text-gray-700">Heure de fin</label>
                                <div className="mt-1">
                                    <select className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                        <option value="">Matin</option>
                                        <option value="">Après-midi</option>
                                    </select>
                                </div>
                            </div>

                            {/* Will be calculated automatically with input form */}
                            <div>
                                <label for="halfDayBreak" className="block text-sm font-medium text-gray-700">Nombre(s) de demi-journée(s)</label>
                                <div>
                                    <input value="0" id="halfDayBreak" name="halfDayBreak" readOnly className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                </div>
                            </div>

                            <div>
                                <label for="commentary" className="block text-sm font-medium text-gray-700">Commentaires</label>
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

export default HolidayOverview;