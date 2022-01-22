import { PureComponent } from "react"
import { connect } from 'react-redux';
import { fetchAllBills, postBill, updateBill, deleteBill } from '../../redux/actions/billsActions'
import { createBill } from '../../services/billsService'
import { fakeBillPost } from '../../datas/billData'
import { BillCard } from "../../components/billComponents/BillCard";
import ConfirmationModalWindow from "../../components/billComponents/ConfirmationModalWindow";

export class BillsOverview extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showConfirmation: false,
        }
    }
    handleUpdateClick = () => {
        const formdata = new FormData()
        formdata.append('billId', 7)
        formdata.append('amount', 66)
        formdata.append('commentary', "Ca à l'air de marcher")
        formdata.append('advanceCash', false)
        formdata.append('isExactAmount', false)
        formdata.append('missionId', 1)
        formdata.append('collabId', 1)

        console.log("formdata " + formdata)

        this.props.updateBill(formdata)
    }

    handlePostClick = () => {
        const formdata = new FormData()
        // formdata.append('amount',66)
        // formdata.append('commentary',"Ca à l'air de marcher")
        // formdata.append('advanceCash',false)
        // formdata.append('isExactAmount',false)
        // formdata.append('missionId',1)
        formdata.append('collabId', 1)

        console.log("fakeBillPost" + JSON.stringify(fakeBillPost))
        console.log("formdata " + formdata)

        this.props.updateBill(formdata)

    }

    handleFetchClick = () => {
        console.log("handle click overview")
        this.props.getAllBillsFromApi()
        console.log(this.props.bills)
    }
    handleCreateBillClick = () => {
        const formData = new FormData()
        formData.append("collabId", 1)
        console.log(formData)
        this.props.postBill(formData)
    }
    componentDidMount() {
        this.props.getAllBillsFromApi()
    }
    componentDidUpdate() {
        console.log("BillsOverview updated ")

    }

    deleteBill = () => {
        console.log("dans le delete apres modal")
        console.log(this.state.idBillToDelete)
        this.props.deleteBill(this.state.idBillToDelete)
        this.setState({
            showConfirmation: false,
            idBillToDelete: undefined
        })
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
        return (
            <div>
                {this.state.showConfirmation ? <ConfirmationModalWindow
                    deleteBillAction={this.deleteBill}
                    showConfirmation={this.showConfirmationModalWindow}
                    closeConfirmationModalWindow={this.closeConfirmationModalWindow}
                /> : null}
                <div className="flex flex-wrap justify-evenly m-2">
                    <h1 className="italic text-3xl mb-5">Gestion des notes de frais</h1>
                    <button onClick={() => this.handleCreateBillClick()} className="h-10 px-5 mb-5 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Ajouter une note de frais</button>
                </div>
                <div className="flex flex-wrap justify-around ">{this.props.bills !== undefined ? this.props.bills.map((bill, index) => <div className="mb-5"><BillCard key={index} bill={bill} showConfirmation={this.showConfirmationModalWindow} /></div>) : null}</div>
            </div>


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
        updateBill: (bill) => dispatch(updateBill(bill)),
        deleteBill: (id) => dispatch(deleteBill(id))
    }
}

export default connect(mapStateToProps, mapActionToProps)(BillsOverview)