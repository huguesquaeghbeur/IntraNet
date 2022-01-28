import { PureComponent } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

// import { deleteBill } from '../../redux/actions/billsActions'
import { deleteDepartmentAction } from "../../redux/actions/departmentAction";

// import { deleteBillFromApi } from "../../services/billsService"
import { deleteDptFromApi } from "../../services/departmentData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTrashAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// parent component : dptContainers/DepartmentsOverview

export class DepartmentCard extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    // getTotal() {
    //     var temp = 0
    //     if (this.props.bill.spents !== null)
    //         this.props.bill.spents.forEach(spent => {
    //             temp += spent.amount
    //         })
    //     this.setState({
    //         total: temp
    //     })
    // }

    // componentDidMount() {
    //     this.getTotal()
    // }

    // componentDidUpdate() {
    //     this.getTotal()
    // }

    render() {
        return (
            <div className="w-96 overflow-hidden rounded-lg shadow-lg ">
                <div className="px-6 py-4">
                    {/* <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{!this.props.department.isSubmitted ? "En rédaction" : dateFormat(this.props.bill.submissionDate)}</h5>
                    <hr />
                    <p className="leading-normal text-gray-700 ">{this.props.bill.spents !== null ? this.props.bill.spents.length > 1 ? `${this.props.bill.spents.length} lignes` : `${this.props.bill.spents.length} ligne` : null} de frais.</p>
                    <p className="leading-normal text-gray-700">Total : {this.state.total}€</p> */}
                    <div className="text-center">

                        {!this.props.department.isSubmitted ?
                            <button onClick={() => this.props.update(this.props.department)} className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button> : null
                        }

                        <Link to={`/departments/${this.props.department.id}`}>
                            <button className="text-center h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faListUl} />
                            </button>
                        </Link>

                        {/* {!this.props.department.isSubmitted ? */}
                        {true ?
                            <button onClick={() => this.props.showConfirmation(this.props.department.id)} className=" h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button> : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}