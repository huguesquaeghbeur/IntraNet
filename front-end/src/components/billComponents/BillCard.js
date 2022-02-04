import { PureComponent } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteBill } from '../../redux/actions/billsActions'
import { deleteBillFromApi } from "../../services/billsService"
import { dateFormat } from '../../services/formatService'
import { getCollaboratorById } from "../../services/collaboratorData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTrashAlt, faPaperPlane, faEye } from "@fortawesome/free-solid-svg-icons";

// parent component : billContainers/BillsOverview

export class BillCard extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    getTotal() {
        var temp = 0
        if (this.props.bill.spents !== null)
            this.props.bill.spents.forEach(spent => {
                temp += spent.amount
            })
        this.setState({
            total: temp
        })
    }
    componentDidMount() {
        if (this.props.inManagement) {
            getCollaboratorById(this.props.bill.collaboratorId).then(res => {
                this.setState({
                    collaborator: res.data
                })
            })
        }
        this.getTotal()
    }
    componentDidUpdate() {
        this.getTotal()
    }
    render() {
        return (
            <div className="w-96 overflow-hidden rounded-lg shadow-lg ">
                <div className="px-6 py-4">
                    <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{!this.props.bill.isSubmitted ? "En rédaction" : dateFormat(this.props.bill.submissionDate)}</h5>
                    {!this.props.inManagement ?
                        <div>
                            <hr />
                            <p className="leading-normal text-gray-700 ">
                                {this.props.bill.spents !== null ?
                                    this.props.bill.spents.length > 1 ?
                                        `${this.props.bill.spents.filter(s=>s.validate===4).length}/${this.props.bill.spents.length} lignes de frais validées` : `${this.props.bill.spents.length} ligne de frais`
                                    : null}.</p>
                            <p className="leading-normal text-gray-700">Total : {this.state.total}€</p>
                        </div>
                        : null
                    }
                    {this.props.inManagement && this.state.collaborator !== undefined ?
                        <p className="leading-normal text-gray-700">{this.state.collaborator.firstName} {this.state.collaborator.lastName}</p>
                        : null}
                    <div className="text-center">

                        {!this.props.bill.isSubmitted ?
                            <button onClick={() => this.props.sendBill(this.props.bill)} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button> : null
                        }
                        {!this.props.inManagement ?

                            <Link to={`/bills/${this.props.bill.id}`}>
                                <button className="text-center h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                    <FontAwesomeIcon icon={faListUl} />
                                </button>
                            </Link> : null
                        }

                        {!this.props.inManagement ?
                            <button onClick={() => this.props.showConfirmation(this.props.bill.id)} className=" h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button> : null
                        }

                        {this.props.inManagement ?
                            <button onClick={() => this.props.showDetail(this.props.bill.id)} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faEye} />
                            </button> : null}
                    </div>
                </div>
            </div>
        )
    }
}
