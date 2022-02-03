import React, {PureComponent} from 'react';
import { useParams } from "react-router-dom";
import { getInfoRequestById } from '../services/infoData';
import { postInfoData } from '../services/infoData';
import '../styles/reponseinfo.css'

 class ReponseInfo extends PureComponent{
    constructor(props){
        super(props)
            this.state ={
               
            }
        
    }
    
    componentDidMount(){
        getInfoRequestById(this.props.infoById).then(response => {
            this.setState({
                Titre: response.data.titre,
                Body: response.data.body

            })
            console.log(this.state.titre)
        }).catch(error => {
            console.log(error);
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('firstName', this.state.titre);
        formdata.append('Body', this.state.body);
        postInfoData(this.props.infoById, formdata).then(response => {
            this.setState({
                message: response.data.message
            })
            console.log(this.state.message);
        })
    }
    render(){
        return(
            <div>
                <form className='mb-0 space-y-6' method='post' onSubmit={this.handleSubmit}>
                <h2>Repondre a une information</h2>
                <label htmlFor='title' className="block text-sm font-medium text-gray-700">Titre</label>
                <input type='text' name='title' onChange={this.handleChange} value={this.state.titre}
                 className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                <label htmlFor='body'>Commentaire</label>
                <textarea type='text' name='body' onChange={this.handleChange} value={this.state.body}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                 <button type='submit'  className='w-30 justify-center py-2 px-4 border boder-transparent rounded-md shadow-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500'>Envoyer</button>
                </form>
            </div>
        )
    }
}
export default function Getid() {
    const { id } = useParams()
    return (
        <ReponseInfo infoById={id} />
    )
}
