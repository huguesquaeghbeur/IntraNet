import { PureComponent } from "react"
import { useParams } from 'react-router-dom';
import {getBillByIdApi} from '../services/billsService'
import {FeeLine} from '../components/FeeLine'
class BillByIdComponent extends PureComponent{
        constructor(props){
            super(props)
            this.state ={
                bill: {}
            }
            console.log("Dans constructor billBYId")
        }

        componentDidMount(){
            console.log("dans le did mount")
            
            getBillByIdApi(this.props.billId).then(res=>{
                console.log("JE suis dans le then")
                this.setState({
                    bill: res.data
                })
                console.log("début this.state.bill")
                console.log(this.state.bill)
                console.log("fin this.state.bill")

            }).catch(err =>{
                console.log(err)
            })
            console.log(this.state.bill)
        }

    render () {
        return(
            <div>

                <h4>Collaborateur id : {this.state.bill.collaboratorId !== null ? this.state.bill.collaboratorId : null}</h4>
                <h4>Bill id : {this.state.bill.id !== null ? this.state.bill.id : null}</h4>
                <button className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Ajouter ligne de frais</button> 
                <div className="flex flex-wrap justify-around">{this.state.bill.spents !== undefined ? this.state.bill.spents.map((spent,index) => <FeeLine key={index} FeeLine={spent}/>) : null}</div>
            </div>
            // <div>{this.state.bill != null ? `Prix de la premiere ligne de frais ${this.state.bill.spents[0].amount}`  : null }</div>
        )
    }
}

export default function GetId() {
    const {id} = useParams()
    console.log("Dans getid")
    return (
        <BillByIdComponent
        billId={id}
    />)
}

