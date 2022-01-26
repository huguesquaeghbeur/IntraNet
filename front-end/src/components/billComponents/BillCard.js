import { PureComponent } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteBill } from '../../redux/actions/billsActions'
import { deleteBillFromApi } from "../../services/billsService"
import { dateFormat } from '../../services/formatService'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export class BillCard extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    componentDidMount() {
        var temp = 0
        if (this.props.bill.spents !== null)
            this.props.bill.spents.forEach(spent => {
                temp += spent.amount
            })
        this.setState({
            total: temp
        })
    }

    render() {
        return (
            <div className="max-w-xs overflow-hidden rounded-lg shadow-lg ">
                <div className="px-6 py-4">
                    Bill id : {this.props.bill.id}
                    <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{!this.props.bill.isSubmitted ? "En rédaction" : dateFormat(this.props.bill.submissionDate)}</h5>
                    <hr />
                    <p className="leading-normal text-gray-700">{this.props.bill.spents !== null ? this.props.bill.spents.length > 1 ? `${this.props.bill.spents.length} lignes` : `${this.props.bill.spents.length} ligne` : null} de frais.</p>
                    <p className="leading-normal text-gray-700">Total : {this.state.total}€</p>
                    <Link to={`/bills/${this.props.bill.id}`}><button className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                        <FontAwesomeIcon icon={faListUl} />
                    </button>
                    </Link>
                    <button onClick={() => this.props.showConfirmation(this.props.bill.id)} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        )
    }
}
