import { faCheck, faEye, faPencilAlt, faTrashAlt, faBan, faThermometerThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PureComponent } from "react";
import { deleteSpent } from "../../services/billsService";
import { dateFormat } from "../../services/formatService"
import axios from "axios";
import { baseSpentUrl } from '../../services/billsService'
import ListModalWindow from './ListModalWindow'
// parent component : billContainer/BillByid & billComponent/DetailModalWindow

export class FeeLine extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            FeeLine: {},
            showingList: false
        }
    }

    componentDidMount() {
        axios.get("http://localhost:42515/api/mission/detail/" + this.props.FeeLine.missionId).then(res => {
            this.setState({
                mission: res.data
            })
        }).catch(err => {
            console.log(err)
        })
        this.setState({
            FeeLine: this.props.FeeLine
        })
    }

    handleSubmitClick() {
        if (this.props.collaborator !== undefined && this.props.collaborator.status !== "0" && !inManagement) {
            this.setState({
                FeeLine: {
                    ...this.state.FeeLine,
                    validate: 3
                }
            }, () => {
                this.props.changeValidateLevel(this.state.FeeLine)
            })
        } else {
            this.state.FeeLine.validate++
            this.props.changeValidateLevel(this.state.FeeLine)
        }
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
    closeListMW = () => {
        this.setState({
            showingList: false,
            proofs: undefined,
            commentary: undefined
        })
    }
    handleProofClick(proofs) {
        this.setState({
            proofs: proofs
        }, () => {
            this.setState({
                showingList: true
            })
        })
    }
    handleCommentaryClick(commentary) {
        this.setState({
            commentary: commentary
        }, () => {
            this.setState({
                showingList: true
            })
        })
    }
    render() {
        return (
            <div className="w-80  rounded-lg shadow-lg mb-6">
                {this.state.showingList ?
                    <ListModalWindow
                        closeListMW={this.closeListMW}
                        proofs={this.state.proofs}
                        commentary={this.state.commentary}
                    /> : null}
                <div className="px-6 py-4 ">
                    <div className="flex justify-between">
                        <p className="mb-3 text-xl font-semibold tracking-tight text-gray-800"><b>{dateFormat(this.state.FeeLine.expenseDate) !== undefined ? dateFormat(this.state.FeeLine.expenseDate) : "Date à binder"}</b></p>
                        <p><b>{this.state.FeeLine.validate > 1 && this.state.FeeLine.validate < 4 ? "En validation" : ""}</b></p>
                        <p><b>{this.state.FeeLine.validate == 0 ? "Refusée" : ""}</b></p>
                        <p><b>{this.state.FeeLine.validate == 4 ? "Validée" : ""}</b></p>

                    </div>
                    <hr />
                    <p className="text-xl font-semibold tracking-tight text-gray-800">{this.state.mission !== undefined ? ` ${this.state.mission.name}` : null} </p>
                    <p className="leading-normal text-lg text-gray-800"> {this.state.FeeLine.amount !== undefined ? this.state.FeeLine.amount : null}€ {this.state.FeeLine.advanceCash !== undefined ? this.state.FeeLine.advanceCash === true ? "de frais anticipé." : "de frais réel." : null} </p>
                    {this.state.FeeLine.proofs !== undefined && this.state.FeeLine.proofs.length > 0 ?
                        <button onClick={() => this.handleProofClick(this.state.FeeLine.proofs)}>Afficher les justificatifs</button>
                        :
                        <button onClick={() => this.handleCommentaryClick(this.state.FeeLine.commentary)}>Afficher le commentaire</button>
                    }
                    <div className="text-center">
                        {/* {(this.state.FeeLine.validate > 1) ?
                            <button onClick={() => this.handleViewClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faEye} />
                            </button> : null} */}
                        {(this.props.inManagement && this.state.FeeLine.validate < 4) ?
                            <button onClick={() => this.handleRejectClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faBan} />
                            </button> : null}
                        {(this.props.inManagement && this.state.FeeLine.validate < 4) || (!this.props.inManagement && this.state.FeeLine.validate == 1) ?
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


