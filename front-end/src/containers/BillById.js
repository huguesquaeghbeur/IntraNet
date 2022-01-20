import { PureComponent } from "react"
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { useParams } from 'react-router-dom';
import { getBillByIdApi } from "../services/billsService";

// export default function BillById() {
//     let [bill,setBill] = useState([])
//     getBillByIdApi(useParams()).then(data => setBill(data))
//     console.log(bill)
//     return (<p></p>)
// }

class BillByIdComponent extends PureComponent{
        constructor(props){
            super(props)
    
        }
        componentDidMount(){

            console.log(this.props.billId)
        }

    render () {
        return(
            <div>je suis la bill {this.props.billId}</div>
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

