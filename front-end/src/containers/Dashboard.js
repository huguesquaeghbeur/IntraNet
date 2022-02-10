import { PureComponent } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/actions/userAction";
import { faClock, faSave } from '@fortawesome/free-solid-svg-icons';
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
                                        {userDash.holidays.length > 0 ?
                                                <div>
                                                    <table className="table-fixed border-collapse border border-slate-500 min-w-full">
                                                        <thead>
                                                            <tr className="bg-gray-700 text-sm font-medium text-white">
                                                                <th className="border border-slate-600">#</th>
                                                                <th className="border border-slate-600">Type</th>
                                                                <th className="border border-slate-600">Début (date)</th>
                                                                <th className="border border-slate-600">Heure (début)</th>
                                                                <th className="border border-slate-600">Fin (date)</th>
                                                                <th className="border border-slate-600">Heure (fin)</th>
                                                                <th className="border border-slate-600">Demi-journée(s)</th>
                                                                <th className="border border-slate-600">Validation</th>
                                                            </tr>
                                                        </thead>
                                                        {userDash.holidays.map(h =>
                                                            <tbody key={h.id}>
                                                                <tr>
                                                                    <td className="border border-slate-700">{h.id}</td>
                                                                    <td className="border border-slate-700">{h.leaveType === 0 ? "payé" : h.leaveType === 1 ? "maladie" : h.leaveType === 2 ? "familial" : h.leaveType === 3 ? "sans solde" : null }</td>
                                                                    <td className="border border-slate-700">{dateFormat(h.startDate)}</td>
                                                                    <td className="border border-slate-700">{h.startOnMorning === true ? ("matin") : ("après-midi")}</td>
                                                                    <td className="border border-slate-700">{dateFormat(h.endDate)}</td>
                                                                    <td className="border border-slate-700">{h.endOnMorning === true ? ("matin") : ("après-midi")}</td>
                                                                    <td className="border border-slate-700">{h.halfDayBreakCount}</td>
                                                                    <td className="border border-slate-700">{h.validation === 0 ? "refusé" : h.validation === 1 ? "initial" : h.validation === 2 ? "département" : h.validation === 3 ? "RH" : h.validation === 4 ? "acceptée" : null }</td>
                                                                </tr>
                                                            </tbody>
                                                        )}
                                                    </table>
                                                </div>
                                            : null}
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