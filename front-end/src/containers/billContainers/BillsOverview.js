import { PureComponent } from "react"
import { connect } from 'react-redux';
import { fetchAllBills, postBill, sendBill, deleteBill } from '../../redux/actions/billsActions'
import { BillCard } from "../../components/billComponents/BillCard";
import ConfirmationModalWindow from "../../components/billComponents/ConfirmationModalWindow";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDateNowForBdd,dateFormat } from '../../services/formatService'


export class BillsOverview extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showConfirmation: false,
        }
    }

    componentDidMount() {
        this.props.getAllBillsFromApi()
    }

    handleCreateBillClick = () => {
        const formData = new FormData()
        formData.append("collabId", 1)
        this.props.postBill(formData)
    }

    deleteBill = () => {
        this.props.deleteBill(this.state.idBillToDelete)
        this.setState({
            showConfirmation: false,
            idBillToDelete: undefined
        })
    }
    sendBill = (bill) => {

        console.log("dans le send bill overview")
        console.log(this.props.bills[this.props.bills.length - 1])
        const b = this.props.bills.filter(b => b.submissionDate == getDateNowForBdd())
        console.log(b > 0)
        console.log(dateFormat(this.props.bills[5].submissionDate))
        console.log(dateFormat(getDateNowForBdd()))


        console.log(bill.id)
        console.log(this.props.bills.filter(b => b.submissionDate == getDateNowForBdd()))
        if (this.props.bills.filter(b => dateFormat(b.submissionDate) == dateFormat(getDateNowForBdd())).length == 0){
            bill.submissionDate = getDateNowForBdd()
            bill.isSubmitted = true
            this.props.sendBill(bill)
        }
        else
            console.log("dans le else")
    }
    closeConfirmationModalWindow = () => {
        this.setState({
            showConfirmation: false
        })
    }
    showConfirmationModalWindow = (id) => {
        this.setState({
            showConfirmation: true,
            idBillToDelete: id
        })
    }

    render() {
        console.log(this.props.isLoading)
        return (
            <section>
                <h1 className="italic text-3xl mb-5 text-center">Gestion des notes de frais</h1>
                <div className="text-center m-2 ">
                    {/* <button onClick={() => this.handleCreateBillClick()} className="h-10 px-5 mb-5 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Ajouter une note de frais</button> */}
                    <button onClick={() => this.handleCreateBillClick()} class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className={`flex flex-wrap  justify-center items-center space-x-4 ${this.props.isLoading ? null : "invisible"}`}>
                    <svg className="animate-spin h-5 w-5 mr-3 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </div>
                <div>
                    {this.state.showConfirmation ? <ConfirmationModalWindow
                        deleteBillAction={this.deleteBill}
                        showConfirmation={this.showConfirmationModalWindow}
                        closeConfirmationModalWindow={this.closeConfirmationModalWindow}
                    /> : null}

                    <div className="flex flex-wrap justify-around ">{this.props.bills !== undefined ? this.props.bills.map((bill, index) => <div className="mb-5" key={index}><BillCard bill={bill} sendBill={this.sendBill} showConfirmation={this.showConfirmationModalWindow} /></div>) : null}</div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.bills.bills,
        isLoading: state.bills.isLoading
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getAllBillsFromApi: () => dispatch(fetchAllBills()),
        postBill: (bill) => dispatch(postBill(bill)),
        sendBill: (bill) => dispatch(sendBill(bill)),
        deleteBill: (id) => dispatch(deleteBill(id))
    }
}

export default connect(mapStateToProps, mapActionToProps)(BillsOverview)