import { PureComponent } from "react"
import { useParams } from 'react-router-dom';
import {getBillByIdApi} from '../services/billsService'

class BillByIdComponent extends PureComponent{
        constructor(props){
            super(props)
            this.state ={
            }
    
        }
        componentDidMount(){
            
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
            <div>{this.state.bill != null ? `Prix de la premiere ligne de frais ${this.state.bill.spents[0].amount}`  : null }</div>
            
        )
    }
}

export default function GetId() {
    const {id} = useParams()
    return (
        <BillByIdComponent
        billId={id}
    />)
}

