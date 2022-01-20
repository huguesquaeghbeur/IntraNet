import { PureComponent } from "react";
import { getApiById } from "../services/billsService"


export class FeeLine extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
        console.log("Dans le contstructor de FeeLine : ")
        console.log(this.props.FeeLine)
        console.log(this.props.FeeLine.amount)
    }
    render() {
        return (
            <div class=" rounded-lg shadow-lg">
                <div class="px-6 py-4">
                    <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">{this.props.FeeLine !== undefined ? `Date : date à binder - Mission id : ${this.props.FeeLine.missionId}` : null}</h4>
                    <p class="leading-normal text-gray-700">{this.props.Feeline !== undefined ? this.props.FeeLine.amount : this.props.FeeLine.amount}€</p>
                </div>
            </div>
        )
    }
}


