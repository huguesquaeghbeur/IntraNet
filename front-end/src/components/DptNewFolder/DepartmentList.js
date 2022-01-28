import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteDptFromApi, getAllDepartments, updateDepartmentApi } from '../../services/departmentData';
// import SingleDepartment from './SingleDepartment';


class DepartmentList extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            idState: undefined,
            departments: []
        }

    }


    // handleRemoveDpt = (idState) => {

    //     // const id = e.target.getAttribute("this.state.departments.id")
    //     deleteDptFromApi(this.state.departments.filter(department => department.id !== idState));
    //     this.state.department.id = idState;
    //     console.log(idState)
    // };this.state.departments.filter(d => d.id!=e)
    handleDeleteClick(e) {

        deleteDptFromApi(e)
        window.location.reload();
    }



    componentDidMount() {
        console.log("coucou c nou")
        getAllDepartments().then(res => {
            this.setState({
                departments: res.data
            })

        })
    }

    render() {
        const { departments } = this.state
        console.log(departments)
        return (
            <div>
                <div className="flex flex-col justify-around">
                    {this.state.departments.map(department =>
                        <div>
                            {/* <div key={department.id} className="border bg-slate-100 hover:bg-slate-200 rounded-md shadow-ambre-100/50 p-2 m-4">
                                <div className="flex justify-between">
                                    <div className="bg-orange-100 rounded-md p-1">{department.title}</div>
                                    <div className="rounded-full bg-cyan-300 p-1 m-1">

                                        <button onClick={() => this.handleDeleteClick(department.id)} className='bg-red-400 rounded-md p-1 m-1 '><FontAwesomeIcon icon={faTrashAlt} /></button>
                                        # {department.id}
                                    </div>

                                </div>

                            </div> */}



                            <div className="p-10 gap-5">

                                <div className="rounded overflow-hidden shadow-lg">
                                    {/* <img class="w-full" src="/mountain.jpg" alt="Mountain"/> */}
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{department.title}</div>
                                        <p className="text-gray-700 text-base">
                                            Vous êtes bien dans le département : {department.title} /
                                            <br />
                                            Son iD est : {department.id} /
                                            <br />
                                            Nous vous souhaitons un bon séjour au sein de {department.title}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                    </div>
                                    <div className="flex justify-end">
                                        
                                        <div className="rounded-full bg-blue-300 p-1 m-1">

                                            <button onClick={() => this.handleDeleteClick(department.id)} className='bg-red-400 rounded-md p-1 m-1 '><FontAwesomeIcon icon={faTrashAlt} /></button>
                                            # {department.id}
                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>
                    )}
                </div>
            </div>
        );
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
        deleteDptFromList: (id) => dispatch(deleteDptFromApi(id))
    }
}


export default connect(mapStateToProps, mapActionToProps)(DepartmentList)
