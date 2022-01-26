import { faCheck, faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PureComponent } from "react";
import { deleteSpent } from "../../services/billsService";
import { dateFormat } from "../../services/formatService"


export class FeeLine extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            feeline: {}
        }

    }

    componentDidMount() {
        this.setState({
            feeline: this.props.FeeLine
        })
    }

    handleSubmitClick() {
    }
    handleModifyClick() {
        this.props.modifyClick(this.props.FeeLine.id)
    }
    handleDeleteClick() {
        this.props.delete(this.props.FeeLine.id)
    }

    render() {
        return (
            <div class=" rounded-lg shadow-lg mb-6">
                <div class="px-6 py-4 ">
                    <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">{dateFormat(this.state.feeline.expenseDate) !== undefined ? `Date : ${dateFormat(this.state.feeline.expenseDate)}` : "Date à binder"} </h4>
                    <h3 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">{this.state.feeline.missionId !== undefined ? `Mission id : ${this.props.FeeLine.missionId}` : null}</h3>
                    <p class="leading-normal text-gray-700"> {this.state.feeline.amount !== undefined ? this.state.feeline.amount : null}€ {this.state.feeline.advanceCash !== undefined ? this.state.feeline.advanceCash === true ? "de frais anticipé." : "de frais réel." : null}  </p>
                    <p class="leading-normal text-gray-700"></p>
                    <button onClick={() => this.handleSubmitClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button onClick={() => this.handleModifyClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                    <button onClick={() => this.handleDeleteClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        )
    }
}


