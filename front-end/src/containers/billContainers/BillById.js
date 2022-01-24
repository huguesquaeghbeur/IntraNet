import { PureComponent, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { useState } from "react";
// import { getBillById } from '../../services/billsService'
import { FeeLine } from '../../components/billComponents/FeeLine'
import AddFeeLineModalWindow from '../../components/billComponents/AddFeeLineModalWindow'
import { getCollaboratorById } from "../../services/collaboratorData"
import { updateBillApi } from '../../services/billsService'
import { connect } from 'react-redux';
import { deleteSpent, getBillById } from '../../redux/actions/billsActions'
import { get } from "react-hook-form";
import { deleteSpentFromApi, getBillByIdApi, updateSpentFromApi } from "../../services/billsService"

class BillByIdComponent extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isShowingForm: false
        }
    }
    componentDidMount() {
        console.log("dans le mount")

        getBillByIdApi(this.props.billId).then((res) => {
            this.setState({
                bill: res.data,
                billId: res.data.id,
                spents: res.data.spents
            }, () => {
                console.log(this.state)
            })
        })
    }
    componentDidUpdate() {
        console.log("dans le up")
        console.log(this.state.spents)
        // console.log(this.props.bill)
        // console.log(this.props.getBill(this.props.billId))
        // this.setState({
        //     bill: this.props.bill
        // })
        // this.setState({
        //     bill: this.props.bill
        // })
        // if(this.state.bill!={}){
        //     this.setState({
        //         bill: this.props.bill
        //     },()=>{
        //         console.log("dans le if")
        //     console.log(this.state.bill)
        //     })

        // }
        // this.setState({
        //     bill: this.props.bill,
        //     billId: this.props.billId
        // })
        // this.props.getBill(this.props.billId)

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
        console.log("formDATA de bill by id")
        console.log(feeLine)
        updateBillApi(feeLine).then(() => {
            getBillByIdApi(this.props.billId).then((res) => {
                this.setState({
                    bill: res.data,
                    billId: res.data.id,
                    spents: res.data.spents,
                    spentId: undefined
                }, () => {
                    console.log(this.state)
                })
            })
        })
    }

    SubmitFeeLine = (feeLine) => {
        updateBillApi(feeLine).then(() => {
            getBillByIdApi(this.props.billId).then((res) => {
                this.setState({
                    bill: res.data,
                    billId: res.data.id,
                    spents: res.data.spents,
                    spentId: undefined

                }, () => {
                    console.log(this.state)
                })
            })
        })
    }

    handleDelete = (i) => {
        const spent = this.state.spents.filter(s => s.id != i)
        deleteSpentFromApi(i).then(res => {
            this.setState({
                spents: undefined,
            })
        }).then(res => {
            this.setState({
                spents:spent
            })
        })
    }

    handleModifyClick = (i) => {
        this.setState({
            isShowingForm: true,
            spentId: i
        }, () => {

        })
    }

    UpdateFeeLine = (formData) => {
        console.log("dans lupdate")
        console.log(formData.get("id"))
        console.log(formData.get("commentary"))
        updateSpentFromApi(formData).then(res => {
            this.setState({
                bill: undefined,
                billId: res.data.id,
                spents: undefined,
                spentId: undefined
            })
        }).then(res => {
            console.log("dans res ")
            console.log(res)
            getBillByIdApi(this.props.billId).then((res) => {
                console.log("aget bill après uptdate")
                console.log(res.data)
                this.setState({
                    isShowingForm: false,
                    bill: res.data,
                    billId: res.data.id,
                    spents: res.data.spents,
                    spentId: undefined

                }, () => {
                    console.log("dans le setstate apré update")
                    console.log(this.state)
                })
            })
        })
    }
    render() {
        return (

            <section className="m-3.5">
                <h1 className="italic text-3xl mb-5 text-center">Note de frais</h1>
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
                    <div className="flex flex-wrap justify-around">{this.state.spents !== undefined ? this.state.spents.map((spent, index) => <FeeLine key={index} FeeLine={spent} delete={this.handleDelete} modifyClick={this.handleModifyClick} />) : null}</div>
                </div>
            </section>
        )
    }
}

export default function GetId() {
    console.log("dans le get")
    const { id } = useParams()
    return (
        <BillByIdComponent
            billId={id}
        />)
}
