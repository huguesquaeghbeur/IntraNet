import { PureComponent, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { useState } from "react";
// import { getBillById } from '../../services/billsService'
import { FeeLine } from '../../components/billComponents/FeeLine'
import AddFeeLineModalWindow from '../../components/billComponents/AddFeeLineModalWindow'
import { getCollaboratorById } from "../../services/collaboratorData"
import { generateFormDataFromFeeLine, addFeeLineToBillApi } from '../../services/billsService'
import { connect } from 'react-redux';
import { deleteSpent, getBillById } from '../../redux/actions/billsActions'
import { get } from "react-hook-form";
import { deleteSpentFromApi, getBillByIdApi, updateSpentFromApi } from "../../services/billsService"


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
            <section className="m-3.5">
                <h1 className="italic text-3xl mb-5 text-center">Ligne de frais</h1>
                <div className="text-center m-2 ">
                    <button onClick={() => this.handleAddFeeLineClick()} class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="flex flex-wrap justify-around">

                    {this.state.isShowingForm ?
                        <AddFeeLineModalWindow
                            closeForm={this.handleCloseFeeLineForm}
                            bill={this.state.bill}
                            collaborator={this.state.collaborator}
                            SaveFeeLine={this.SaveFeeLine}
                            SubmitFeeLine={this.SubmitFeeLine}
                            UpdateFeeLine={this.UpdateFeeLine}
                            spentId={this.state.spentId}
                        /> : null}
                    <div className="flex flex-wrap justify-around">{this.state.spents !== undefined ? this.state.spents.map((spent, index) => 
                    <FeeLine key={index} 
                    FeeLine={spent} 
                    Index={index} 
                    handleDeleteClick={this.handleDeleteClick} 
                    changeValidateLevel={this.changeValidateLevel} 
                    modifyClick={this.handleModifyClick} 
                    submitClick={this.submitFeeLine}
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
