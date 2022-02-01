import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import{getInfosApi} from '../redux/actions/infoAction';
import {postInfoData} from '../services/infoData';


class InfoOverview extends PureComponent {
    state ={
        collabId: "",
        title: "",
        body: "",
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    
    handleSubmit =(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('collabId', this.state.collabId);
        formData.append('title', this.state.title);
        formData.append('body', this.state.body);
        postInfoData(formData).then(res =>
            {this.setState({
                posts: res.data
            })
            console.log(this.state);
        })
    }
    
    render() {
        const {collabId, title, body } = this.state;
        return (
            <div>
                <h1 className='justify-center'>Demande d'information</h1>
                <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                    <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
                        <form className='mb-0 space-y-6' method='POST'onSubmit={this.handleSubmit}>
                            <label htmlFor="collabId" className="block text-sm font-medium text-gray-700 ">Demandeur</label>
                            <div>
                                <input value={collabId} onChange={this.handleChange} id='collabId' name='collabId' required className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                            </div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 ">Titre</label>
                            <div>
                                <input value={title} onChange={this.handleChange} id='title' name='title' required className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                            </div>
                            <label htmlFor="service" className='block text-sm font-medium text-gray-700'>Service</label>
                            <div className='mt-1'>
                                <select className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'>
                                    <option value="">Comptabilité</option>
                                    <option value="">Direction</option>
                                    <option value="">RH</option>
                                </select>
                            </div>
                            <label htmlFor="body" className="block text-sm font-medium text-gray-700">Description</label>
                            <div>
                                <textarea value={body} onChange={this.handleChange} id='body' name='body' className='w-full border border-gray-300 px-3 py-20 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'></textarea>
                            </div>
                            <div>
                            <button type='submit' className='w-30 justify-center py-2 px-4 border boder-transparent rounded-md shadow-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500'>Envoyer</button>
                            
                            
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }


}
const mapStateToProps = (state) =>{
    return {
        
        Title: state.info.infos,
        Body: state.info.infos
    }
}

const mapActionToProps = (dispath) =>{
    return{
        getInfosApi: () =>dispath(getInfosApi())
    }
}

export default connect(mapStateToProps, mapActionToProps) (InfoOverview);