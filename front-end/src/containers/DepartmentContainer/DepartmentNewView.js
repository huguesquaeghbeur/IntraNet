import { PureComponent } from "react"
import { connect } from 'react-redux';

// import { fetchAllBills, postBill, sendBill, deleteBill } from '../../redux/actions/billsActions'
import { deleteDepartmentAction , fetchAllDepartments , updateDepartment , postDepartment } from "../../redux/actions/departmentAction";

// import { BillCard } from "../../components/billComponents/BillCard";
import { DepartmentCard } from "../../components/DptNewFolder/DepartmentCard";

// import ConfirmationModalWindow from "../../components/billComponents/ConfirmationModalWindow";
import DeleteDptConfirmation from "../../components/dptAddDelete/DeleteDptConfirmation"

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { getDateNowForBdd, dateFormat } from '../../services/formatService'


export class DepartmentNewView extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showConfirmation: false,
        }
    }

    componentDidMount() {
        this.props.getAllDptsFromApi()
    }

    handleCreateDptClickNewView = () => {
        const formData = new FormData()
        formData.append("id", 1)
        this.props.postDepartment(formData)
    }

    deleteDptNewView = () => {
        this.props.deleteDepartmentAction(this.state.idDptToDelete)
        this.setState({
            showConfirmation: false,
            idDptToDelete: undefined
        })
    }
    // sendDptNewView = (department) => {

    //     console.log("dans le send dpt overview")
    //     console.log(this.props.departments[this.props.departments.length - 1])
    //     const d = this.props.departments.filter(d => d.submissionDate == getDateNowForBdd())
    //     console.log(d > 0)
    //     console.log(dateFormat(this.props.departments[5].submissionDate))
    //     console.log(dateFormat(getDateNowForBdd()))


    //     console.log(department.id)
    //     console.log(this.props.departments.filter(d => d.submissionDate == getDateNowForBdd()))
    //     if (this.props.departments.filter(bd => dateFormat(d.submissionDate) == dateFormat(getDateNowForBdd())).length == 0) {
    //         department.submissionDate = getDateNowForBdd()
    //         department.isSubmitted = true
    //         this.props.sendDptNewView(department)
    //     }
    //     else
    //         console.log("dans le else")
    // }
    closeConfirmationDptNewWindow = () => {
        this.setState({
            showConfirmation: false
        })
    }
    showConfirmationDptNewWindow = (id) => {
        this.setState({
            showConfirmation: true,
            idDptToDelete: id
        })
    }

    render() {
        console.log(this.props.isLoading)
        return (
            // <section>
            //     <h1 className="italic text-3xl mb-5 text-center">Gestion des notes de frais</h1>
            //     <div className="text-center m-2 ">
            //         {/* <button onClick={() => this.handleCreateBillClick()} className="h-10 px-5 mb-5 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Ajouter une note de frais</button> */}
            //         <button onClick={() => this.handleCreateBillClick()} class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            //             <FontAwesomeIcon icon={faPlus} />
            //         </button>
            //     </div>
            //     <div className={`flex flex-wrap  justify-center items-center space-x-4 ${this.props.isLoading ? null : "invisible"}`}>
            //         <svg className="animate-spin h-5 w-5 mr-3 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            //         </svg>
            //     </div>
            //     <div>
            //         {this.state.showConfirmation ? <ConfirmationModalWindow
            //             deleteBillAction={this.deleteBill}
            //             showConfirmation={this.showConfirmationModalWindow}
            //             closeConfirmationModalWindow={this.closeConfirmationModalWindow}
            //         /> : null}

            //         <div className="flex flex-wrap justify-around ">{this.props.bills !== undefined ? this.props.bills.map((bill, index) => <div className="mb-5" key={index}><BillCard bill={bill} sendBill={this.sendBill} showConfirmation={this.showConfirmationModalWindow} /></div>) : null}</div>
            //     </div>
            // </section>
            <section>
                <h1 className="italic text-3xl mb-5 text-center">Gestion des départments</h1>
                <div className="text-center m-2 ">

                    <button onClick={() => this.handleCreateDptClickNewView()} className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                
                <div>
                    {this.state.showConfirmation ? <DeleteDptConfirmation
                        deleteDepartActionOverview={this.deleteDepartmentAction}
                        showConfirmationDpt={this.showConfirmationDptWindow}
                        closeConfirmationDpt={this.closeConfirmationDptWindow}
                    /> : null}

                    <div className="flex flex-wrap justify-around ">{this.props.departments !== undefined ? this.props.departments.map((department, index) => <div className="mb-5" key={index}><DepartmentCard department={department} handleUpdateClick={this.handleUpdateClick} showConfirmation={this.showConfirmationDptWindow} /></div>) : null}</div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        departments: state.departments.departments,
        isLoading: state.departments.isLoading
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getAllDptsFromApi: () => dispatch(fetchAllDepartments()),
        postDptNew: (department) => dispatch(postDepartment(department)),
        sendDptNewView: (department) => dispatch(updateDepartment(department)),
        deleteDptNewView: (id) => dispatch(deleteDepartmentAction(id))
    }
}

export default connect(mapStateToProps, mapActionToProps)(DepartmentNewView)










