import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { postDepartmentData } from '../../services/departmentData';

class PostRequestDepartment extends PureComponent {
    state = {
        title: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })        
    }

    

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', this.state.title);        
        console.log(this.state)

        postDepartmentData(formData).then(res => {
            this.setState({
                departments: res.data
            })
            console.log(res.data)

        })
    }

    

    render() {
        const { title } = this.state;
        return (
            <div>
                <h1 className="justify-center">~~Post Department~~</h1>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form className="mb-0 space-y-6" method="POST" onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titre du dpt</label>
                                <div>
                                    <input value={title} onChange={this.handleChange} id="title" name="title" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                </div>
                            </div>

                            {/* <div>
                                <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700">Type de department</label>
                                <div className="mt-1">
                                    <select value={leaveType} onChange={this.handleChange} name="leaveType" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                        <option onChange={this.handleChange} value="0">Congés payés</option>
                                        <option onChange={this.handleChange} value="1">Congé maladie</option>
                                        <option onChange={this.handleChange} value="2">Congé parental</option>
                                        <option onChange={this.handleChange} value="3">Sans solde</option>
                                    </select>
                                </div>
                            </div> */}

                            

                            

                            


                            <div className="flex flex-row justify-around">
                                <div>
                                    <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 focus:ring-offset-2 focus:ring-red-500">
                                        Annuler
                                    </button>
                                </div>                                
                                <div>
                                    <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500">
                                        Soumettre
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(PostRequestDepartment);