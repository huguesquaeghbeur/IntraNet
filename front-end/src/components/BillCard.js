import { PureComponent } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {getBillById} from '../redux/actions/billsActions'
import {dateFormat} from '../services/formatService'

export class BillCard extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }

    }


    componentDidMount() {
        var temp = 0
        this.props.bill.spents.forEach(spent => {
            temp += spent.amount
        })
        this.setState({
            total: temp
        })
    }

    render() {
        return (
            <div className="w-96 overflow-hidden rounded-lg shadow-lg ">
                <div className="px-6 py-4">
                    <hr />
                    <p className="leading-normal text-gray-700">{this.props.bill.spents.length} {this.props.bill.spents.length > 1 ? " lignes" : " ligne"} de frais.</p>
                    {console.log("amount " + this.props.bill.id + " : ")}
                    {console.log(this.state.total)}
                    <p className="leading-normal text-gray-700">Total : {this.state.total}€</p>
                    <Link to={`/bills/${this.props.bill.id}`}><button className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Gérer</button></Link>
                </div>
            </div>
        )
    }
}
const mapActionToProps = (dispatch) => {
    return {
        getBillByIdFromApi : (id) => dispatch(getBillById(id)),
    }
}
const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, mapActionToProps)(BillCard)