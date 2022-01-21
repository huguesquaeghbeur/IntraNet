import { PureComponent } from "react"
import { useParams } from 'react-router-dom';
import { updateDepartmentApi } from "../../services/departmentData";
import {getDepartmentRequestById} from '../services/departmentData'

class DepartmentByIdContainerClass extends PureComponent{
        constructor(props){
            super(props)
            this.state ={
                department: {}
            }
            console.log("Dans constructor dptByIdContainer")
        }

        componentDidMount(){
            console.log("dans le did mount")
            
            getDepartmentRequestById(this.props.id).then(res=>{
                console.log("je suis dans le then")
                this.setState({
                    department: res.data
                })
                console.log("début this.state.department")
                console.log(this.state.department)
                console.log("fin this.state.department")
                

            }).catch(err =>{
                console.log(err)
            })
            console.log(this.state.department)
        }

    render () {
        return(
            <div>

                <h4>Department id : {this.state.department.id !== null ? this.state.department.id : null}</h4>
                
                <button className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Update department title</button> 
                <div className="flex flex-wrap justify-around">{this.state.department.title !== undefined ? this.state.department.title.map((title,index) => <updateDepartmentApi key={index} FeeLine={title}/>) : null}</div>
            </div>
            // <div>{this.state.bill != null ? `Prix de la premiere ligne de frais ${this.state.bill.spents[0].amount}`  : null }</div>
        )
    }
}

export default function GetId() {
    const {id} = useParams()
    const {title} = useParams()
    console.log("Dans getid")
    return (
        <DepartmentByIdContainerClass
        id={id}
        title={title}
    />)
}