import { PureComponent } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/userAction";
import { faBaby, faCheck, faClock, faDollarSign, faFileMedical, faNotEqual, faTimesCircle, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dateFormat } from '../services/formatService';

class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            checked: true
        }
    }

    componentDidMount() {
        this.props.getUser()
    }

    componentDidUpdate() {
        console.log(this.props.user.user)
        console.log(this.state.checked)
    }

    render() {
        const userDash = this.props.user.user;
        return (
            <section>
                <h1 className="italic text-3xl mb-5 text-center">Tableau de bord</h1>
                {this.props.user.user !== undefined ? (
                    <div>
                        <h2 className="text-2xl mb-5 text-center">Bienvenue {userDash.firstName} {userDash.lastName}</h2>
                        <span className="grid grid-cols-2 grid-rows-1 gap-2 flex justify-start">
                            {this.state.checked ? (
                                <span>
                                    <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-orange-500"
                                        onClick={() => this.setState({ checked: false })} >Voir vos notes de frais</button>
                                    <h2 className="text-xl mb-5 text-center">Demande de congé</h2>
                                    <div className="flex justify-start grid grid-cols-1 gap-1">
                                        {userDash.holidays.map(u =>
                                            <div key={u.id} className="m-2 p-2 md:px-7 xl:px-8 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                                                <div className="flex justify-between">
                                                    <div>
                                                        {(u.validation === 1) ? (
                                                            <span className="text-sm px-3 bg-yellow-200 text-yellow-700 rounded-full"><FontAwesomeIcon icon={faClock} /> en attente de validation du CDS</span>
                                                        ) : (u.validation === 2) ? (
                                                            <div className="text-sm px-3 bg-orange-200 text-orange-600 rounded-full"><FontAwesomeIcon icon={faClock} /> en attente de validation RH</div>
                                                        ) : (u.validation === 3) ? (
                                                            <div className="text-sm px-3 bg-orange-400 text-orange-900 rounded-full"><FontAwesomeIcon icon={faCheck} /> en attente de validation DRH</div>
                                                        ) : (u.validation === 4) ? (
                                                            <div className="text-sm px-3 bg-green-200 text-green-800 rounded-full"><FontAwesomeIcon icon={faCheck} /> Validé</div>
                                                        ) : (u.validation === 0) ? (
                                                            <div className="text-sm px-3 bg-red-200 text-red-800 rounded-full"><FontAwesomeIcon icon={faTimesCircle} /> Refusé</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="rounded-xl bg-slate-300 text-slate-700 p-1 m-1">
                                                        # {u.id}
                                                    </div>
                                                </div>
                                                <div className="flex justify-center">
                                                    <b>{userDash.firstName} {userDash.lastName}</b>
                                                </div>
                                                <div className="text-blue-500 pt-2 text-center">
                                                    <b>
                                                        {u.leaveType === 0 ? (
                                                            <span>Congé payé <FontAwesomeIcon icon={faDollarSign} /></span>
                                                        ) : (u.leaveType === 1) ? (
                                                            <span>Congé maladie <FontAwesomeIcon icon={faFileMedical} /></span>
                                                        ) : (u.leaveType === 2) ? (
                                                            <span>Congé parental <FontAwesomeIcon icon={faBaby} /></span>
                                                        ) : (u.leaveType === 3) ? (
                                                            <span>Congé sans solde <FontAwesomeIcon icon={faNotEqual} /></span>
                                                        ) : null}
                                                    </b>
                                                </div>
                                                <div className="flex flex-col justify-around">
                                                    <div className="pt-2 flex justify-center">
                                                        Début : <b className="pl-1">{dateFormat(u.startDate)}</b>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <b>{u.startOnMorning === true ? <div className="text-yellow-500">Matin</div> : <div className="text-orange-500">Après-midi</div>}</b>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        Fin : <b className="pl-1">{dateFormat(u.endDate)}</b>
                                                    </div>
                                                    <div className="flex justify-center pb-2">
                                                        <b>{u.endOnMorning === true ? <div className="text-yellow-500">Matin</div> : <div className="text-orange-500">Après-midi</div>}</b>
                                                    </div>
                                                    <div className="rounded-xl bg-slate-300 flex justify-center mt-4">
                                                        Jours cumulés : <b>{(u.halfDayBreakCount / 2).toString()}</b>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </span>
                            ) : (
                                <span>
                                    <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-orange-500"
                                        onClick={() => this.setState({ checked: true })} >Voir vos demandes de congés</button>
                                    <h2 className="text-xl mb-5 text-center">Note de frais</h2>
                                    <div className="flex justify-start grid grid-cols-1 gap-1">
                                        {userDash.bills.map(b =>
                                            <div key={b.id} className="m-2 p-2 md:px-7 xl:px-8 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                                                <div className="flex justify-between">
                                                    <div>
                                                        {(b.isSubmitted === false) ? (
                                                            <span className="text-sm px-3 bg-yellow-200 text-yellow-700 rounded-full"><FontAwesomeIcon icon={faSave} /> sauvegarder</span>
                                                        ) : (b.isSubmitted === true) ? (
                                                            <div className="text-sm px-3 bg-orange-200 text-orange-600 rounded-full"><FontAwesomeIcon icon={faClock} /> en attente de validation</div>

                                                        ) : null}
                                                    </div>
                                                    <div className="rounded-xl bg-slate-300 text-slate-700 p-1 m-1">
                                                        # {b.id}
                                                    </div>
                                                </div>
                                                <div className="flex justify-center">
                                                    <b>{userDash.firstName} {userDash.lastName}</b>
                                                </div>

                                                <div>
                                                    {b.spents.length > 0 ? (
                                                        <div>
                                                            <table className="table-fixed border-collapse border border-slate-500 min-w-full">
                                                                <thead>
                                                                    <tr className="bg-gray-700 text-sm font-medium text-white">
                                                                        <th className="border border-slate-600">#</th>
                                                                        <th className="border border-slate-600">Frais</th>
                                                                        <th className="border border-slate-600">Estimé</th>
                                                                        <th className="border border-slate-600">Type</th>
                                                                        <th className="border border-slate-600">Date</th>
                                                                        <th className="border border-slate-600">Montant</th>
                                                                    </tr>
                                                                </thead>
                                                                {b.spents.map(s =>
                                                                    <tbody key={s.id}>
                                                                        <tr>
                                                                            <td className="border border-slate-700">{s.id}</td>
                                                                            <td className="border border-slate-700">{s.advanceCash === true ? ("avance de frais") : ("dépense immédiate")}</td>
                                                                            <td className="border border-slate-700">{s.isExactAmount === true ? ("frais réel") : ("frais estimé")}</td>
                                                                            <td className="border border-slate-700">{s.feeType === 0 ? (
                                                                                <span>autres dépenses</span>
                                                                            ) : (s.feeType === 1) ? (
                                                                                <span>transport</span>
                                                                            ) : (s.feeType === 2) ? (
                                                                                <span>inscription</span>
                                                                            ) : (s.feeType === 3) ? (
                                                                                <span>matériel</span>
                                                                            ) : null}</td>
                                                                            <td className="border border-slate-700">{dateFormat(s.expenseDate)}</td>
                                                                            <td className="border border-slate-700">{s.amount} €</td>
                                                                        </tr>
                                                                    </tbody>
                                                                )}
                                                            </table>
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </span>
                            )}
                            <span>
                                <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-orange-500"
                                >Notifications</button>
                            </span>
                        </span>

                    </div>
                ) : null}

            </section>
        )
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

export default connect(mapStateToProps, mapActionToProps)(Dashboard)