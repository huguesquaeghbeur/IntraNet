import { faCheck, faEye, faPencilAlt, faTrashAlt, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PureComponent } from "react";
import { deleteSpent } from "../../services/billsService";
import { dateFormat } from "../../services/formatService"

// parent component : billContainer/BillByid & billComponent/DetailModalWindow

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
        // console.log(this.state.FeeLine.validate)
    }
    handleSubmitClick() {
        console.log("this feeline")
        console.log(this.state.FeeLine)

        this.state.FeeLine.validate++
        console.log(this.state.FeeLine)
        this.props.changeValidateLevel(this.state.FeeLine)
    }
    handleRejectClick() {
        this.state.FeeLine.validate = 0
        this.props.changeValidateLevel(this.state.FeeLine)
    }
    handleModifyClick() {
        this.props.modifyClick(this.props.FeeLine.id)
    }
    handleDeleteClick() {
        this.props.handleDeleteClick(this.props.FeeLine.id)
    }

    render() {
        return (
            <div className="w-80  rounded-lg shadow-lg mb-6">
                <div className="px-6 py-4 ">
                    <div className="flex justify-between">
                        <p className="mb-3 text-xl font-semibold tracking-tight text-gray-800"><b>{dateFormat(this.state.FeeLine.expenseDate) !== undefined ? dateFormat(this.state.FeeLine.expenseDate) : "Date à binder"}</b></p>
                        <p><b>{this.state.FeeLine.validate > 1 ? "En cours de validation" : ""}</b></p>
                        <p><b>{this.state.FeeLine.validate == 0 ? "Demande refusée" : ""}</b></p>
                    </div>
                    <hr />
                    <p className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{this.state.FeeLine.missionId !== undefined ? `Mission id : ${this.props.FeeLine.missionId}` : null} </p>
                    <p className="leading-normal text-xl text-gray-700"> {this.state.FeeLine.amount !== undefined ? this.state.FeeLine.amount : null}€ {this.state.FeeLine.advanceCash !== undefined ? this.state.FeeLine.advanceCash === true ? "de frais anticipé." : "de frais réel." : null} </p>
                    <p className="leading-normal text-gray-700"></p>
                    <hr />
                    <div className="text-center">
                        {/* {(this.state.FeeLine.validate > 1) ?
                            <button onClick={() => this.handleViewClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faEye} />
                            </button> : null} */}
                        {(this.state.FeeLine.validate > 1) ?
                            <button onClick={() => this.handleRejectClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faBan} />
                            </button> : null}
                        {(!(this.state.FeeLine.validate < 1) && this.state.FeeLine.validate < 5) ?
                            <button onClick={() => this.handleSubmitClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faCheck} />
                            </button> : null}
                        {!(this.state.FeeLine.validate > 1) ?
                            <button onClick={() => this.handleModifyClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </button> : null}
                        {!(this.state.FeeLine.validate > 1) ?
                            <button onClick={() => this.handleDeleteClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button> : null}

                    </div>
                </div>
            </div>
        )
    }
}


