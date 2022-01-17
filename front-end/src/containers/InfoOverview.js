import React, {PureComponent} from 'react';

class InfoOverview extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            infos: []
        }
    }
    render(){
        return(
            <div>
                <h1 className='justify-center'>Demande d'information</h1>
                <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                    <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
                        <form className='mb-0 space-y-6' method='POST'>
                            <label for="collaborator" className="block text-sm font-medium text-gray-700">Demandeur</label>
                            <div>
                                <input id='collaborator' name='collaborator' required className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'/>
                            </div>
                            <label for="commentary" className="block text-sm font-medium text-gray-700">Description</label>
                            <div>
                                <textarea id='commentary' name='commentary' className='w-full border border-gray-300 px-3 py-20 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'></textarea>
                            </div>
                            <button type='submit' className='w-30 justify-center py-2 px-4 border boder-transparent rounded-md shadow-sm font-medium text-white bg-green-600 focus:ring-offset-2 focus:ring-green-500'>Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
   

}

export default InfoOverview;