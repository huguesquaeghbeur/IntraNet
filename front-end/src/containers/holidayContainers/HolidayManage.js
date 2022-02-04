import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HolidayCard from '../../components/holidayComponents/HolidayCard';
import ButtonComponent from '../../components/toolComponents/ButtonComponent';
import { getHolidayRequestById } from '../../services/holidayData';

export default function HolidayManage() {

    const [h, setH] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect=()=> {
        const {id} = useParams()
        getVacancy(id)
    }
    
    const getVacancy = async (id) => {
        await getHolidayRequestById(id).then(res => {
            setH(res.data);
            setLoading(false);
        })
    }

    return (
        <div>
            <div>
                <Link to="/holiday/list"><ButtonComponent type="button" color="bg-indigo-500" colorText="white" body="Retour" logo={faBackspace} /></Link>
            </div>

            <div className="flex items-center justify-center bg-white">
                <div className="flex flex-col">
                
                    <div className="flex flex-col">
                        <div className="text-gray-400 font-bold uppercase">
                            Demande de congés
                        </div>
                        <div className="flex flex-col justify-center">
                            <HolidayCard post={h} />
                        </div>

                        {/* {currentUser && currentUser.id == this.state.post.collaboratorId ?
                                <div>
                                    <ButtonComponent type="button" color="bg-red-500" colorText="white"
                                        body="Supprimer" logo={faTrashAlt}
                                        onClickMethod={() => this.handleOpenModal()} />
                                    <ButtonComponent type="button" color="bg-indigo-500" colorText="white"
                                        body="Modifier" logo={faPencilAlt}
                                        onClickMethod={() => this.updateClickOpenForm()} />
                                </div> : null} */}
                    </div>
                </div>
            </div>
        </div>
    )
}