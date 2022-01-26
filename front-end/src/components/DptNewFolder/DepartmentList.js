import React, { PureComponent } from 'react';

// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { getAllDepartments, updateDepartmentApi } from '../../services/departmentData';
// import SingleDepartment from './SingleDepartment';


class DepartmentList extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {

            departments: []
        }

    }


    handleRemoveDpt = (e) => {
        const id = e.target.getAttribute("this.state.departments.id")
        updateDepartmentApi(this.state.departments.filter(departments => this.state.departments.id !== id));
    };


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
                    {departments.map(department =>
                        <div>
                            <div key={department.id} className="border bg-slate-100 hover:bg-slate-200 rounded-md shadow-ambre-100/50 p-2 m-4">
                                <div className="flex justify-between">
                                    <div className="bg-orange-100 rounded-md p-1">{department.title}</div>
                                    <div className="rounded-full bg-cyan-300 p-1 m-1">

                                        <button onClick={() => this.handleRemoveDpt(department.id)} className='bg-red-400 rounded-md p-1 m-1 '>delete</button>
                                        # {department.id}
                                    </div>
                                </div>

                            </div>



                            <div class="p-10 gap-5">

                                <div class="rounded overflow-hidden shadow-lg">
                                    {/* <img class="w-full" src="/mountain.jpg" alt="Mountain"/> */}
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2">{department.title}</div>
                                        <p class="text-gray-700 text-base">
                                            Vous êtes bien dans le département : {department.title} /
                                            <br/>
                                            Son iD est : {department.id} /
                                            <br/>
                                            Nous vous souhaitons un bon séjour au sein de {department.title}
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
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

export default DepartmentList;