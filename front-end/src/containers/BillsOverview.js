import { PureComponent } from "react"
import { connect } from 'react-redux';
import { fetchAllBills, postBill, updateBill } from '../redux/actions/billsActions'
import {fakeBillPost} from '../datas/billData'
import { BillCard } from "../components/BillCard";
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
    componentDidUpdate(){
        console.log("BillsOverview updated ")
        console.log(this.props.bills)
    }
    render() {
        return(
            <div>
                <h1>Je suis une liste de bills</h1>
                {console.log("Le map suit")}
                <div className="flex flex-wrap justify-around">{this.props.bills !== undefined ? this.props.bills.map((bill,index) => <BillCard key={index} bill={bill}/>) : null}</div>
                <button onClick={() => this.handleFetchClick()}> Fetch bills </button> 
                <button onClick={() => this.handlePostClick()}> Post bills </button> 
                <button onClick={() => this.handleUpdateClick()}> Update bills </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapstatetoprops "+state.bills.bills)
    return {
        bills: state.bills.bills
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getAllBillsFromApi : () => dispatch(fetchAllBills()),
        postBill : (bill) => dispatch(postBill(bill)),
        updateBill : (bill) => dispatch(updateBill(bill))
    }
}

export default connect(mapStateToProps, mapActionToProps)(BillsOverview)