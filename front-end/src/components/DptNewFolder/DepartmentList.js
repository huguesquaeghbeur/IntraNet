import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import { getAllDepartments } from '../../services/departmentData';
// import SingleDepartment from './SingleDepartment';

class DepartmentList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

            departments: []            
        }
        
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
                    {departments.map(department =>
                        <div>
                        <div key={department.id} className="border bg-slate-100 hover:bg-slate-200 rounded-md shadow-ambre-100/50 p-2 m-4">
                            <div className="flex justify-between">
                            <div className="bg-orange-100 rounded-md p-1">{department.title}</div>
                                <div className="rounded-full bg-cyan-300 p-1 m-1">
                                    # {department.id}
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