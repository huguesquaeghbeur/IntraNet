import { PureComponent } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getDepartmentById} from '../../redux/actions/departmentAction';


export class DepartmentCard extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            department: {}
            
        }
        console.log("DepartmentCard")
    }

    // handleGetDepartmentByIdClick=()=>{
    //     console.log("DepartmentCard handle get by id : "+this.props.department.id)
    //     this.props.getDepartmentRequestById(this.props.bill.id)

    // }

    

    render() {
        return (
            <div className="max-w-xs overflow-hidden rounded-lg shadow-lg ">
                <div className="px-6 py-4">
                    <h5 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">Department id : {this.props.department.id}</h5>
                    <hr />
                    <p className="leading-normal text-gray-700">{this.props.department.title}</p>
                    
                    
                    <Link to={`/departments/${this.props.department.id}`}><button className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Gérer</button></Link>
                </div>
            </div>
        )
    }
}
const mapActionToProps = (dispatch) => {
    return {
        getDepartmentRequestById : (id) => dispatch(getDepartmentById(id)),
    }
}
const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, mapActionToProps)(DepartmentCard)