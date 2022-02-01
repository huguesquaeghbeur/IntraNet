import { PureComponent } from "react"
import { connect } from 'react-redux';
import { fetchAllBills, postBill, sendBill, deleteBill, updateSpent, getBillsByDepartment } from '../../redux/actions/billsActions'
import { getUser } from '../../redux/actions/userAction'
import { getCollaboratorByDepartmentId } from '../../redux/actions/collaboratorAction'
import { BillCard } from "../../components/billComponents/BillCard";
import ConfirmationModalWindow from "../../components/billComponents/ConfirmationModalWindow";
import DetailModalWindow from "../../components/billComponents/DetailModalWindow"
import { faIgloo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDateNowForBdd, dateFormat } from '../../services/formatService'
import { generateFormDataFromFeeLine } from '../../services/billsService'
import { getRole } from "../../services/userService";
import { Navigate } from "react-router-dom";

export class BillsOverview extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showConfirmation: false,
            showDetail: false,
        }
    }

    componentDidMount() {
        this.props.getBillsByDepartment()
    }

    closeConfirmationModalWindow = () => {
        this.setState({
            showConfirmation: false,
            showDetail: false
        })
    }

    sendBill = (bill) => {
        const b = this.props.bills.filter(b => b.submissionDate == getDateNowForBdd())
        if (this.props.bills.filter(b => dateFormat(b.submissionDate) == dateFormat(getDateNowForBdd())).length == 0) {
            bill.submissionDate = getDateNowForBdd()
            bill.isSubmitted = true
            this.props.sendBill(bill)
        }
        else
            console.log("dans le else")
    }

    showDetailModalWindow = (id) => {
        this.setState({
            showDetail: true,
            billId: id
        })

    }

    changeValidateLevel = (feeLine) => {
        this.props.updateSpent(feeLine)
        this.setState({
            showDetail: false
        }, () => {
            this.showDetailModalWindow(feeLine.billId)
        })
    }

    render() {

        return (
            <section>
                {this.props.management && getRole() == "Basic" ? <Navigate to="/" /> : null}
                <h1 className="italic text-3xl mb-5 text-center">Gestion des notes de frais</h1>

                <div className={`flex flex-wrap  justify-center items-center space-x-4 ${this.props.isLoading ? null : "invisible"}`}>
                    <svg className="animate-spin h-5 w-5 mr-3 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </div>

                <div className="">
                    {this.state.showDetail ? <DetailModalWindow
                        closeConfirmationModalWindow={this.closeConfirmationModalWindow}
                        changeValidateLevel={this.changeValidateLevel}
                        billId={this.state.billId}
                        bills={this.props.bills}
                    /> : null}
                        <div className="flex flex-wrap justify-around ">{this.props.bills !== undefined ? this.props.bills.map((bill, index) => <div className="mb-5" key={index}><BillCard bill={bill} sendBill={this.sendBill} showConfirmation={this.showConfirmationModalWindow} showDetail={this.showDetailModalWindow} /></div>) : null}</div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.bills.bills,
        isLoading: state.bills.isLoading,
        user: state.user.user,
        collaboratorByDepartment: state.collaborator.collaboratorsByDepartment
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getAllBillsFromApi: () => dispatch(fetchAllBills()),
        postBill: (bill) => dispatch(postBill(bill)),
        sendBill: (bill) => dispatch(sendBill(bill)),
        deleteBill: (id) => dispatch(deleteBill(id)),
        updateSpent: (feeLine) => dispatch(updateSpent(feeLine)),
        getUser: () => dispatch(getUser()),
        getCollaboratorByDepartmentId: (id) => dispatch(getCollaboratorByDepartmentId(id)),
        getBillsByDepartment: () => dispatch(getBillsByDepartment())
    }
}
export default connect(mapStateToProps, mapActionToProps)(BillsOverview)