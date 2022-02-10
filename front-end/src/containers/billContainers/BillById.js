import { PureComponent, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { FeeLine } from '../../components/billComponents/FeeLine'
import AddFeeLineModalWindow from '../../components/billComponents/AddFeeLineModalWindow'
import { getUserFromToken } from "../../services/collaboratorData"
import { generateFormDataFromFeeLine, addFeeLineToBillApi } from '../../services/billsService'
import { deleteSpent, getBillById } from '../../redux/actions/billsActions'
import { deleteSpentFromApi, getBillByIdApi, updateSpentFromApi } from "../../services/billsService"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// childs component : billComponent/FeeLineForm & billComponent/AddFeeLineModalWindow

class BillByIdComponent extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isShowingForm: false
        }
    }

    componentDidMount() {
        getBillByIdApi(this.props.billId).then((res) => {
            this.setState({
                bill: res.data,
                billId: res.data.id,
                spents: res.data.spents
            })
        })
        getUserFromToken().then(res => {
            this.setState({
                collaborator: res.data.collaborator
            })
        })

    }
    handleAddFeeLineClick = () => {
        this.setState({
            isShowingForm: true
        })
    }
    handleCloseFeeLineForm = () => {
        this.setState({
            isShowingForm: false,
            spentId: undefined
        })
    }

    SaveFeeLine = (feeLine) => {
        const formData = generateFormDataFromFeeLine(feeLine)
        addFeeLineToBillApi(formData).then((res) => {
            this.updateState(res.data, false)
        })
    }
    changeValidateLevel = (feeLine) => {
        const formData = generateFormDataFromFeeLine(feeLine)
        updateSpentFromApi(formData).then(res => {
            this.updateState(res.data, true)
        })
    }

    UpdateFeeLine = (feeLine) => {
        const formData = generateFormDataFromFeeLine(feeLine)
        updateSpentFromApi(formData).then(res => {
            this.updateState(res.data, true)
        })
    }

    handleDeleteClick = (i) => {
        const spents = this.state.spents.filter(s => s.id != i)
        deleteSpentFromApi(i).then(res => {
            this.setState({
                spents: undefined,
            })
        }).then(() => {
            this.setState({
                spents: spents
            })
        })
    }

    handleModifyClick = (i) => {
        this.setState({
            isShowingForm: true,
            spentId: i,
        })
    }
    updateState(apiRes, isFeeLineExist) {
        let spents = undefined

        if (isFeeLineExist) {
            spents = this.state.spents.map(s => s.id != apiRes.spent.id ? s : apiRes.spent)
        } else {
            spents = this.state.spents
            spents.unshift(apiRes.spent)
        }

        const bill = {
            ...this.state.bill,
            spents: spents
        }

        this.setState({
            spents: undefined,
            spentId: undefined,
            bill: undefined
        }, () => {
            this.setState({
                spents: spents,
                isShowingForm: false,
                bill: bill
            })
        }
        )
    }

    render() {
        return (
            <section>
                <h1 className="italic text-3xl mb-5 text-center">Ligne de frais</h1>
                <div className="text-center m-2 ">
                    <button onClick={() => this.handleAddFeeLineClick()} className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className="flex flex-wrap justify-around">

                    {this.state.isShowingForm && this.state.collaborator !== undefined ?
                        <AddFeeLineModalWindow
                            closeForm={this.handleCloseFeeLineForm}
                            bill={this.state.bill}
                            collaborator={this.state.collaborator}
                            SaveFeeLine={this.SaveFeeLine}
                            SubmitFeeLine={this.SubmitFeeLine}
                            UpdateFeeLine={this.UpdateFeeLine}
                            spentId={this.state.spentId}
                        /> : null}
                    <div className="flex flex-wrap justify-around w-2/3">{this.state.spents !== undefined ? this.state.spents.map((spent, index) =>
                        <FeeLine key={index}
                            FeeLine={spent}
                            Index={index}
                            handleDeleteClick={this.handleDeleteClick}
                            changeValidateLevel={this.changeValidateLevel}
                            modifyClick={this.handleModifyClick}
                            submitClick={this.submitFeeLine}
                            collaborator={this.state.collaborator}
                            inManagement={false}
                        />) : null}</div>
                </div>
            </section>
        )
    }
}

export default function GetId() {
    const { id } = useParams()
    return (
        <BillByIdComponent
            billId={id}
        />)
}
