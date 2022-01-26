import { faCheck, faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PureComponent } from "react";
import { deleteSpent } from "../../services/billsService";
import { dateFormat } from "../../services/formatService"


export class FeeLine extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            FeeLine: {}
        }
    }

    componentDidMount() {
        this.setState({
            FeeLine: this.props.FeeLine
        })
    }

    handleSubmitClick() {
        this.state.FeeLine.validate += 1
        this.props.submitClick(this.state.FeeLine)
    }
    handleModifyClick() {
        this.props.modifyClick(this.props.FeeLine.id)
    }
    handleDeleteClick() {
        this.props.deleteClick(this.props.FeeLine.id)
    }

    render() {
        return (
            <div className="w-96  rounded-lg shadow-lg mb-6">
                <div className="px-6 py-4 ">
                    <p className="mb-3 text-xl font-semibold tracking-tight text-gray-800"><b>{dateFormat(this.state.FeeLine.expenseDate) !== undefined ? dateFormat(this.state.FeeLine.expenseDate) : "Date à binder"}</b></p>
                    <hr />
                    <p className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{this.state.FeeLine.missionId !== undefined ? `Mission id : ${this.props.FeeLine.missionId}` : null} </p>
                    <p className="leading-normal text-xl text-gray-700"> {this.state.FeeLine.amount !== undefined ? this.state.FeeLine.amount : null}€ {this.state.FeeLine.advanceCash !== undefined ? this.state.FeeLine.advanceCash === true ? "de frais anticipé." : "de frais réel." : null} </p>
                    <p className="leading-normal text-gray-700"></p>
                    <hr />
                    <div className="text-center">
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
            </div>
        )
    }
}


