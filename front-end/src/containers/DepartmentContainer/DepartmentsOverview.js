import { PureComponent } from "react";
import { connect } from 'react-redux';
import { deleteDepartmentAction, fetchAllDepartments, postDepartment, updateDepartment } from '../../redux/actions/departmentAction';
import { Link } from 'react-router-dom';
import { DepartmentCard } from '../../components/DptNewFolder/DepartmentCard';
import { fakeDepartmentPost } from "../../datas/departmentData";

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

    // deleteDepartmentOverview = () => {
    //     this.props.deleteDepartmentOverview(this.state.idDptToDelete)
    //     this.setState({
    //         showConfirmation: false,
    //         idDptToDelete: undefined
    //     })
    // }


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




    // closeConfirmationDptWindow = () => {
    //     this.setState({
    //         showConfirmation: false
    //     })
    // }
    // showConfirmationDptWindow = (id) => {
    //     this.setState({
    //         showConfirmation: true,
    //         idDptToDelete: id
    //     })
    // }


    render() {
        console.log(this.props.isLoading)
        return (
            <div>
                <div>
                    <h1>Je suis une liste de departments</h1>
                    {console.log("Le map suit")}
                    <div className="flex flex-wrap justify-around">{this.props.departments !== undefined ? this.props.departments.map((department, index) => <DepartmentCard key={index} department={department} />) : null}</div>
                    {/* <button onClick={() => this.handleFetchClick()}> Fetch departments </button>
                    <button onClick={() => this.handlePostClick()}> Post departments </button>
                    <button onClick={() => this.handleUpdateClick()}> Update departments </button> */}

                    {console.log("Le map est fait")}
                </div>
                <div>
                    <Link to="/departments/list" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>DepartmentsList</Link>
                    <br />
                    <hr />
                    <Link to="/departments/description" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-red-400 hover:text-green-200 mr-4'>DepartmentsDescription</Link>
                    <br />
                    <hr />
                    <Link to="/departments/form" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-red-400 hover:text-green-200 mr-4'>DptForm</Link>
                    {/* <a href="/departments/list" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-green-200 mr-4'>
                        DepartmentsList
                    </a> */}
                </div>
                <div>là va y avoir le new truc qui va suivre.....</div>
                <br /><hr />
                <div>
                    <Link to="/departments/newview" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-red-400 hover:text-green-200 mr-4'>New View Dpt</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapstatetoprops " + state.departments.departments)
    return {
        departments: state.departments.departments,
        isLoading: state.departments.isLoading
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getAllDepartments: () => dispatch(fetchAllDepartments()),
        postDepartmentData: (department) => dispatch(postDepartment(department)),
        updateDepartmentApi: (department) => dispatch(updateDepartment(department)),
        // deleteDptFromApi: (id) => dispatch(deleteDepartmentAction(id))
    }
}

export default connect(mapStateToProps, mapActionToProps)(DepartmentsOverview)