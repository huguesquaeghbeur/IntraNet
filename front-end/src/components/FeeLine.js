import { PureComponent } from "react";
import {getApiById} from "../services/billsService"

export class FeeLine extends PureComponent{
    constructor(props){
        super(props)
        console.log(this.props.match.params.bill.id)

    }
    componentDidMount(){
        this.setState({
            bill:getApiById(this.props.id)
        })
        console.log("dans le feeLine composant : ")

    }
}