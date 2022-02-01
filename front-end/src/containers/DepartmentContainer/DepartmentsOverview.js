import { PureComponent } from "react";
import { connect } from 'react-redux';
import { fetchAllDepartments, postDepartment, updateDepartment } from '../../redux/actions/departmentAction';
import { Link } from 'react-router-dom';
import { DepartmentCard } from '../../components/DptNewFolder/DepartmentCard';
/* import { fakeDepartmentPost } from "../../datas/departmentData"; */
export class DepartmentsOverview extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            department: {}
        }
    }
    handleUpdateClick = () => {
        const formdata = new FormData()

        formdata.append('title', "Ca à l'air de fonctionner")


        console.log("formdata " + formdata)

        this.props.updateDepartment(formdata)
    }

    handlePostClick = () => {
        const formdata = new FormData()
        // formdata.append('amount',66)
        // formdata.append('commentary',"Ca à l'air de marcher")
        // formdata.append('advanceCash',false)
        // formdata.append('isExactAmount',false)
        // formdata.append('missionId',1)
        formdata.append('id', 1)

        console.log("fakeDepartmentPost" + JSON.stringify(fakeDepartmentPost))
        console.log("formdata " + formdata)

        this.props.updateDepartment(formdata)

    }

    handleFetchClick = () => {
        console.log("handle click overview")
        this.props.fetchAllDepartments()
        console.log(this.props.departments)
    }
    componentDidUpdate() {
        console.log("DepartmentsOverview updated ")
        console.log(this.props.departments)
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Je suis une liste de departments</h1>
                    {console.log("Le map suit")}
                    <div className="flex flex-wrap justify-around">{this.props.departments !== undefined ? this.props.departments.map((department, index) => <DepartmentCard key={index} department={department} />) : null}</div>
                    <button onClick={() => this.handleFetchClick()}> Fetch departments </button>
                    <button onClick={() => this.handlePostClick()}> Post departments </button>
                    <button onClick={() => this.handleUpdateClick()}> Update departments </button>
                    
                    {console.log("Le map est fait")}
                </div>
                <div>
                <Link to="/departments/list" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>DepartmentsList</Link>
                <br/>
                <hr/>
                <Link to="/departments/description" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-red-400 hover:text-green-200 mr-4'>DepartmentsDescription</Link>
                    {/* <a href="/departments/list" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>
                        DepartmentsList
                    </a> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapstatetoprops " + state.departments.departments)
    return {
        departments: state.departments.departments
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getAllDepartments: () => dispatch(fetchAllDepartments()),
        postDepartmentData: (department) => dispatch(postDepartment(department)),
        updateDepartmentApi: (department) => dispatch(updateDepartment(department))
    }
}

export default connect(mapStateToProps, mapActionToProps)(DepartmentsOverview)