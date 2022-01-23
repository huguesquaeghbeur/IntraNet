import { PureComponent, useCallback, useEffect } from "react"
// import { useParams } from 'react-router-dom';
import { useState } from "react";
// import { getBillById } from '../../services/billsService'
import { FeeLine } from '../../components/billComponents/FeeLine'
import AddFeeLineModalWindow from '../../components/billComponents/AddFeeLineModalWindow'
import { getCollaboratorById } from "../../services/collaboratorData"
import { updateBillApi } from '../../services/billsService'
import { connect } from 'react-redux';
import { deleteSpent, getBillById } from '../../redux/actions/billsActions'
import { get } from "react-hook-form";


class BillByIdComponent extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            bill: {},
            isShowingForm: false
        }
    }
    // componentDidMount() {
    //     console.log("dans le mount")
    //     // console.log(this.props.bill)
    //     // console.log(this.props.getBill(this.props.billId))
    //     this.setState({
    //         bill: this.props.bill
    //     })
    // }
    componentDidMount(){
        this.props.getBillById(this.props.id)
        console.log("did mount")
    }
    componentDidUpdate() {
        console.log("dans le update")
        // console.log(this.props.bill)
        // console.log(this.props.getBill(this.props.billId))
        this.setState({
            bill: this.props.bill
        })
    }

    handleAddFeeLineClick = () => {
        this.setState({
            isShowingForm: true
        })
    }
    handleCloseFeeLineForm = () => {
        this.setState({
            isShowingForm: false
        })
    }
    handleSaveFeeLine = (feeLine) => {
        console.log("formDATA de bill by id")
        console.log(feeLine)
        updateBillApi(feeLine)
    }

    render() {
        return (
            <div>
                {this.state.isShowingForm ?
                    <AddFeeLineModalWindow
                        closeForm={this.handleCloseFeeLineForm}
                        bill={this.state.bill}
                        collaborator={this.state.collaborator}
                        handleSave={this.handleSaveFeeLine}
                    /> : null}
                <h4>Collaborateur id : {this.state.bill.collaboratorId !== null ? this.state.bill.collaboratorId : null}</h4>
                <h4>Bill id : {this.state.bill.id !== null ? this.state.bill.id : null}</h4>
                <button onClick={() => this.handleAddFeeLineClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Ajouter ligne de frais</button>

                <div className="flex flex-wrap justify-around">{this.state.bill.spents !== undefined ? this.state.bill.spents.map((spent, index) => <FeeLine key={index} FeeLine={spent}  />) : null}</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log("dans le map")
    console.log(state.bills.bill)
    return {
        bill: state.bills.bill,
        isLoading: state.bills.isLoading,
    }
}

const mapActionToProps = (dispatch) => {
    return {
        deleteSpent: (id) => dispatch(deleteSpent(id)),
        getBillById: (id) => dispatch(getBillById(id))
    }
}

export default connect(mapStateToProps, mapActionToProps)(BillByIdComponent)