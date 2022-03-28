import { PureComponent } from "react"
import { connect } from 'react-redux';
import { fetchAllBills, postBill, sendBill, updateSpent, getBillsByDepartment, getBillsByCollaborator, deleteBill } from '../../redux/actions/billsActions'
import { getUser } from '../../redux/actions/userAction'
import { getCollaboratorByDepartmentId } from '../../redux/actions/collaboratorAction'
import { BillCard } from "../../components/billComponents/BillCard";
import ConfirmationModalWindow from "../../components/billComponents/ConfirmationModalWindow";
import DetailModalWindow from "../../components/billComponents/DetailModalWindow"
import { faSpinner, faPlus } from "@fortawesome/free-solid-svg-icons";
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
        this.props.getBillsByCollaborator()
        this.props.getUser()
    }


    handleCreateBillClick = () => {
        const formData = new FormData()
        formData.append("collabId", this.props.user.id)
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
        const b = this.props.bills.filter(b => b.submissionDate == getDateNowForBdd())
        if (this.props.bills.filter(b => dateFormat(b.submissionDate).slice(3) === dateFormat(getDateNowForBdd()).slice(3)).length === 0) {
            bill.submissionDate = getDateNowForBdd()
            bill.isSubmitted = true
            this.props.sendBill(bill)
        }
    }
    closeConfirmationModalWindow = () => {
        this.setState({
            showConfirmation: false,
            showDetail: false
        })
    }
    showConfirmationModalWindow = (id) => {
        this.setState({
            showConfirmation: true,
            idBillToDelete: id
        })
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
            <section className=" mx-auto">
                {this.props.management && getRole() == "Basic" ? <Navigate to="/" /> : null}
                <h1 className="italic text-3xl mb-5 text-center">Gestion des notes de frais</h1>
                <div className="text-center m-2 ">
                    {/* <button onClick={() => this.handleCreateBillClick()} className="h-10 px-5 mb-5 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Ajouter une note de frais</button> */}
                    <button onClick={() => this.handleCreateBillClick()} className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className={`flex flex-wrap  justify-center items-center space-x-4 ${this.props.isLoading ? null : "invisible"}`}>
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin text-2xl" />
                </div>
                <div className="">
                    {this.state.showConfirmation ? <ConfirmationModalWindow
                        deleteBillAction={this.deleteBill}
                        showConfirmation={this.showConfirmationModalWindow}
                        closeConfirmationModalWindow={this.closeConfirmationModalWindow}
                    /> : null}
                    <div className="flex flex-wrap justify-around ">{this.props.bills !== undefined ? 
                    this.props.bills.map((bill, index) =>
                        <div className="mb-5 w-2/3" key={index}>
                            <BillCard bill={bill}
                                sendBill={this.sendBill}
                                showConfirmation={this.showConfirmationModalWindow}
                                showDetail={this.showDetailModalWindow}
                                inManagement={false} 
                                />
                        </div>) : null}</div>

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
        getBillsByDepartment: (id) => dispatch(getBillsByDepartment(id)),
        getBillsByCollaborator: (id) => dispatch(getBillsByCollaborator(id))
    }
}
export default connect(mapStateToProps, mapActionToProps)(BillsOverview)