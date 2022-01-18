import { PureComponent } from "react"
import { connect } from 'react-redux';
import { fetchAllBills } from '../redux/actions/billsActions'
export class BillsOverview extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            bills: ""
        }
    }

    handleClick=()=>{
        console.log("handle click overview")

        this.props.getAllBillsFromApi()
        console.log(this.state.bills)
    }

    render() {
        return(
            <div>
                <h1>Je suis une liste de bills</h1>
                <button onClick={() => this.handleClick()}> Fetch bills </button> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.bills.bills
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getAllBillsFromApi : () => dispatch(fetchAllBills())
    }
}

export default connect(mapStateToProps, mapActionToProps)(BillsOverview)