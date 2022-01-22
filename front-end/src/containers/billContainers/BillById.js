import { PureComponent } from "react"
import { useParams } from 'react-router-dom';
import { getBillByIdApi } from '../../services/billsService'
import { FeeLine } from '../../components/billComponents/FeeLine'
import AddFeeLineModalWindow from '../../components/billComponents/AddFeeLineModalWindow'
class BillByIdComponent extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            bill: {},
            isShowingForm: false
        }
    }

    componentDidMount() {
        getBillByIdApi(this.props.billId).then(res => {
            console.log("JE suis dans le then")
            this.setState({
                bill: res.data
            })
        }).catch(err => {
            console.log(err)
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

    render() {
        return (
            <div>
                {this.state.isShowingForm ?
                    <AddFeeLineModalWindow
                        closeForm={this.handleCloseFeeLineForm}
                        bill={this.state.bill}
                    /> : null}
                <h4>Collaborateur id : {this.state.bill.collaboratorId !== null ? this.state.bill.collaboratorId : null}</h4>
                <h4>Bill id : {this.state.bill.id !== null ? this.state.bill.id : null}</h4>
                <button onClick={() => this.handleAddFeeLineClick()} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Ajouter ligne de frais</button>

                <div className="flex flex-wrap justify-around">{this.state.bill.spents !== undefined ? this.state.bill.spents.map((spent, index) => <FeeLine key={index} FeeLine={spent} />) : null}</div>
            </div>
            // <div>{this.state.bill != null ? `Prix de la premiere ligne de frais ${this.state.bill.spents[0].amount}`  : null }</div>
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

