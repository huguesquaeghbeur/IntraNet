import { PureComponent } from "react"
import { connect } from 'react-redux';
import { fetchAllBills, postBill, updateBill, deleteBill } from '../../redux/actions/billsActions'
import {createBill} from '../../services/billsService'
import {fakeBillPost} from '../../datas/billData'
import { BillCard } from "../../components/billComponents/BillCard";

export class BillsOverview extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handleUpdateClick = () => {
        const formdata = new FormData()
        formdata.append('billId',7)
        formdata.append('amount',66)
        formdata.append('commentary',"Ca à l'air de marcher")
        formdata.append('advanceCash',false)
        formdata.append('isExactAmount',false)
        formdata.append('missionId',1)
        formdata.append('collabId',1)

        console.log("formdata "+formdata)

        this.props.updateBill(formdata)
    }

    handlePostClick =()=>{
        const formdata = new FormData()
        // formdata.append('amount',66)
        // formdata.append('commentary',"Ca à l'air de marcher")
        // formdata.append('advanceCash',false)
        // formdata.append('isExactAmount',false)
        // formdata.append('missionId',1)
        formdata.append('collabId',1)

        console.log("fakeBillPost"+JSON.stringify(fakeBillPost))
        console.log("formdata "+formdata)

        this.props.updateBill(formdata)

    }

    handleFetchClick=()=>{
        console.log("handle click overview")
        this.props.getAllBillsFromApi()
        console.log(this.props.bills)
    }
    handleCreateBillClick=()=>{
        const formData = new FormData()
        formData.append("collabId",1)
        console.log(formData)
        this.props.postBill(formData)
    }
    componentDidMount(){
        this.props.getAllBillsFromApi()
    }
    componentDidUpdate(){
        console.log("BillsOverview updated ")

    }

    deleteBill=(id)=>{
        this.props.deleteBill(id)
    }

    render() {
        return(
            <div>
                <h1>Je suis une liste de bills</h1>
                <button onClick={() => this.handleCreateBillClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Ajouter une note de frais</button>
                {console.log("Le map suit")}
                {console.log(this.props.isLoading)}
                {console.log(this.props.bills)}
                <div className="flex flex-wrap justify-around">{ this.props.bills !== undefined  ? this.props.bills.map((bill,index) => <BillCard key={index} bill={bill} deleteBillAction={this.deleteBill}/>) : null}</div>
                <button onClick={() => this.handleFetchClick()}> Fetch bills </button> 
                <button onClick={() => this.handlePostClick()}> Post bills </button> 
                <button onClick={() => this.handleUpdateClick()}> Update bills </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.bills.bills,
        isLoading:state.bills.isLoading
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getAllBillsFromApi : () => dispatch(fetchAllBills()),
        postBill : (bill) => dispatch(postBill(bill)),
        updateBill : (bill) => dispatch(updateBill(bill)),
        deleteBill : (id) => dispatch(deleteBill(id))
    }
}

export default connect(mapStateToProps, mapActionToProps)(BillsOverview)