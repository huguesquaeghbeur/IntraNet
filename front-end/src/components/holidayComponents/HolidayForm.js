import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from '../toolComponents/ButtonComponent';
import { updateHolidayAction } from '../../redux/actions/holidayAction';

class HolidayForm extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            holiday: this.props.holiday,
            startDate: this.props.holiday.startDate,
            startOnMorning: this.props.holiday.startOnMorning,
            endDate: this.props.holiday.startDate,
            endOnMorning: this.props.holiday.endOnMorning,
            leaveType: this.props.holiday.leaveType
        }
    }

    componentDidMount() {
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        if (this.props.holiday.id != undefined) {
            formData.append('startDate', this.state.startDate);
            formData.append('startOnMorning', this.state.startOnMorning);
            formData.append('endDate', this.state.endDate);
            formData.append('endOnMorning', this.state.endOnMorning);
            formData.append('leaveType', this.state.leaveType);
        }
        await updateHolidayAction(this.props.holiday.id, formData).then(res => {
            console.log("res.data")
            console.log(res.data)
            this.setState({
                holiday: res.data
            })
        })
        window.location.reload(true)
    }

    render() {
        const { startDate, startOnMorning, endDate, endOnMorning, leaveType, } = this.state;
        return (
            <section className=" py-1 bg-blueGray-50">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-blueGray-700 text-xl font-bold">
                                    Nouvelle demande
                                </h6>
                                <button onClick={() => this.props.updateClickCloseForm()} className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button" >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form method="PUT" onSubmit={this.handleSubmit}>
                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Informations du congé
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="leaveType">
                                                Type de congé
                                            </label>
                                            <select required defaultValue={leaveType} onChange={(e) => this.handleChange(e)} name="leaveType" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                <option onChange={(e) => this.handleChange(e)} value="">--- select ---</option>
                                                <option onChange={(e) => this.handleChange(e)} value="0">Congés payés</option>
                                                <option onChange={(e) => this.handleChange(e)} value="1">Congé maladie</option>
                                                <option onChange={(e) => this.handleChange(e)} value="2">Congé parental</option>
                                                <option onChange={(e) => this.handleChange(e)} value="3">Sans solde</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                                Email address
                                            </label>
                                            <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="un input disponible..." />
                                        </div>
                                    </div> */}
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Email address
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="un input disponible..." />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="startDate">
                                                Date de début
                                            </label>
                                            <input required defaultValue={startDate} name="startDate" onChange={(e) => this.handleChange(e)} type="date" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="startOnMorning">
                                                Heure de début
                                            </label>
                                            <select required defaultValue={startOnMorning} name="startOnMorning" onChange={(e) => this.handleChange(e)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                <option onChange={(e) => this.handleChange(e)} value="true">Matin</option>
                                                <option onChange={(e) => this.handleChange(e)} value="false">Après-midi</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="endDate">
                                                Date de fin
                                            </label>
                                            <input required defaultValue={endDate} name="endDate" onChange={(e) => this.handleChange(e)} type="date" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="endOnMorning">
                                                Heure de fin
                                            </label>
                                            <select required defaultValue={endOnMorning} name="endOnMorning" onChange={(e) => this.handleChange(e)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                <option onChange={(e) => this.handleChange(e)} value="true">Matin</option>
                                                <option onChange={(e) => this.handleChange(e)} value="false">Après-midi</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-4/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="halfDayBreakCount">
                                                Nombre de journée(s) posée(s)
                                            </label>
                                            <input readOnly name="halfDayBreakCount" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={this.props.holiday.halfDayBreakCount / 2 ?? ""} />
                                        </div>
                                    </div>
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                                <div className="container mx-auto px-4">
                                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                                        <div className="w-full md:w-6/12 px-4 mx-auto text-center flex justify-center">
                                            <ButtonComponent
                                                type="submit"
                                                color="bg-green-500"
                                                colorText="white"
                                                body="Valider les modifications"
                                                logo={faCheck}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <footer className="relative  pt-8 pb-6 mt-2">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                    [...]
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        );
    }
}

export default HolidayForm;