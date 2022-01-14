import React, { PureComponent } from 'react';

class HolidayRequestForm extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            holidays: []
        }
    }
    render() {
        return (
            <div className="w-full flex justify-center">
                <form className="w-full max-w-lg">
                    <div className="flex flex-col mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold m-2" for="collaborator">
                                Demandeur
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="collaborator" type="text" placeholder="collaborator name" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold m-2" for="vacancy">
                                Type de congès
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="vacancy">
                                    <option>RTT</option>
                                    <option>Sans solde</option>
                                    <option>Payés</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="startDate">
                                Date de début
                            </label>
                            <input type="date" className="startTime block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="startHour">
                                Heure de début
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="startHour">
                                    <option>Matin</option>
                                    <option>Soir</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="endDate">
                                Date de fin
                            </label>
                            <input type="date" className="endTime block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="endHour">
                                Heure de fin
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="endHour">
                                    <option>Matin</option>
                                    <option>Soir</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="halfDayBreak">
                                Nombres de demi-journées
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly id="halfDayBreak" type="text" placeholder="Demi-journée(s) occupée(s)" />
                        </div>
                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="commentary">
                                Commentaires
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-64 m-2" id="commentary"></textarea>
                        </div>
                    </div>
                    <div>
                        <button class="m-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full" type="submit">
                            Annuler
                        </button>
                        <button class="m-2 bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded-full" type="submit">
                            Sauvegarder
                        </button>
                        <button class="m-2 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-full" type="submit">
                            Soumettre
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default HolidayRequestForm;