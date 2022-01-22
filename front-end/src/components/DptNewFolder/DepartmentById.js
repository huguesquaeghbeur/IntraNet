import { PureComponent } from "react"
import { useParams } from 'react-router-dom';
import { getDepartmentRequestById } from "../../services/departmentData";
// import { connect } from 'react-redux';

class DepartmentById extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            department: {}
        }

    }
    componentDidMount() {

        getDepartmentRequestById(this.props.id).then(res => {
            console.log("JE suis dans le then")
            this.setState({
                department: res.data
            })
            console.log("début this.state.department")
            console.log(this.state.department)
            console.log("fin this.state.department")

        }).catch(err => {
            console.log(err)
        })

        console.log(this.state.department)

    }

    render() {
        return (
            <div>
                <div>{this.state.department != null ? `Titre du premier dpt ${this.state.department.title}` : null}</div>
                <div className="flex flex-col justify-around">
                    <div>
                        <div key={this.state.department.id} className="border bg-slate-100 hover:bg-slate-200 rounded-md shadow-ambre-100/50 p-2 m-4">
                            <div className="flex justify-between">
                                <div className="bg-orange-100 rounded-md p-1">{this.state.department.title}</div>
                                <div className="rounded-full bg-cyan-300 p-1 m-1">
                                    # {this.state.department.id}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}





export default function GetId() {
    const { id } = useParams()

    return (
        <DepartmentById
            id={id}
        />)
}