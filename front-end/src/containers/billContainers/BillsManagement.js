import { PureComponent } from "react"
import { connect } from 'react-redux';
import { fetchAllBills, postBill, sendBill, deleteBill, updateSpent, getBillsByDepartment } from '../../redux/actions/billsActions'
import { getUser } from '../../redux/actions/userAction'
import { getCollaboratorByDepartmentId } from '../../redux/actions/collaboratorAction'
import { BillCard } from "../../components/billComponents/BillCard";
import ConfirmationModalWindow from "../../components/billComponents/ConfirmationModalWindow";
import DetailModalWindow from "../../components/billComponents/DetailModalWindow"
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDateNowForBdd, dateFormat } from '../../services/formatService'
import { generateFormDataFromFeeLine } from '../../services/billsService'
import { getRole } from "../../services/userService";
import { Navigate } from "react-router-dom";
import { ValidateLevel } from '../../datas/bill/billBaseData'


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
        this.props.getUser()
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
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin text-2xl" />
                </div>

                <div className="">
                    {this.state.showDetail ?
                        <DetailModalWindow
                            closeConfirmationModalWindow={this.closeConfirmationModalWindow}
                            changeValidateLevel={this.changeValidateLevel}
                            billId={this.state.billId}
                            bills={this.props.bills}
                            user={this.props.user}
                        /> : null}
                    <div className="flex flex-wrap justify-around ">
                        {this.props.bills !== undefined && this.props.user !== undefined ?
                            this.props.bills.map((bill, index) =>
                                bill.spents.filter(s => s.validate == ValidateLevel[this.props.user.status]).length > 0 ?
                                    <div className="mb-5 w-2/3 lg:w-1/3 mx-2" key={index}>
                                        <BillCard bill={bill}
                                            sendBill={this.sendBill}
                                            showConfirmation={this.showConfirmationModalWindow}
                                            showDetail={this.showDetailModalWindow}
                                            inManagement={true}
                                        /></div>
                                    : null)
                            : null}</div>
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