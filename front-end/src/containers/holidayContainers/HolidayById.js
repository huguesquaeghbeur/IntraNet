import React, { PureComponent } from 'react';
import { Link, useParams } from 'react-router-dom';
import HolidayCard from '../../components/holidayComponents/HolidayCard';
import ButtonComponent from '../../components/toolComponents/ButtonComponent';
import { getHolidayRequestById, deleteHolidayApi, validateHolidayApi } from '../../services/holidayData';
import { faBackspace, faBan, faCheck, faCalendarCheck, faUndoAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { getCollaboratorById } from '../../services/collaboratorData';

class HolidayById extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            deleted: false,
            collab: {}
        }
    }

    componentDidMount = () => {
        getHolidayRequestById(this.props.holidayId).then(res => {
            this.setState({
                post: res.data
            })
        }).then(() => {
            getCollaboratorById(this.state.post.collaboratorId).then(res => {
                this.setState({
                    collab: res.data
                })
            })
        }).catch(error => {
            console.log(error)
        })
    }

    handleDelete = (e) => {
        e.preventDefault();
        
        deleteHolidayApi(this.props.holidayId).then(res => {
            this.setState({
                post: res.data,
                deleted: true
            })
        })
        window.location.assign("http://localhost:3000/holiday/list");
    }
    handleValidate = async (number) => {
        console.log(number)
        const formData = new FormData();
        formData.append('validation', number)

        await validateHolidayApi(this.props.holidayId, formData).then(res => {
            this.setState({
                validation: res.data
            })
            console.log(res.data)
        })
        window.location.reload(true);
    }

    render() {
        
        return (
            <div>
                <div>
                    <Link to="/holiday/list"><ButtonComponent type="button" color="bg-indigo-500" colorText="white" body="Retour" logo={faBackspace} /></Link>
                </div>
                <div className="flex items-center justify-center bg-white">
                    <div className="flex flex-col">
                        {this.state.post ? (
                            <div className="flex flex-col">
                                <div className="text-gray-400 font-bold uppercase">
                                    Demande de congés n° {this.state.post.id}
                                </div>
                                
                                    <div className="flex flex-col justify-center">
                                        <HolidayCard post={this.state.post} collab ={this.state.collab} />
                                        <div className="flex justify-center">
                                            <ButtonComponent
                                                type="button"
                                                color="bg-red-500"
                                                colorText="white"
                                                body="Supprimer"
                                                logo={faTrashAlt}
                                                onClickMethod={this.handleDelete}
                                            />
                                            <ButtonComponent
                                                type="button"
                                                color="bg-indigo-400"
                                                colorText="white"
                                                body="Renvoyer au collaborateur"
                                                logo={faUndoAlt}
                                                onClickMethod={() => this.handleValidate(1)}
                                            />
                                            
                                             <ButtonComponent
                                                type="button"
                                                color="bg-yellow-400"
                                                colorText="white"
                                                body="Valider (CDS)"
                                                logo={faCheck}
                                                onClickMethod={() => this.handleValidate(2)}
                                            />

                                             <ButtonComponent
                                                type="button"
                                                color="bg-green-500"
                                                colorText="white"
                                                body="Valider (RH)"
                                                logo={faCalendarCheck}
                                                onClickMethod={() => this.handleValidate(3)}
                                            />
                                            
                                            <ButtonComponent
                                                type="button"
                                                color="bg-red-600"
                                                colorText="white"
                                                body="Refuser"
                                                logo={faBan}
                                                onClickMethod={() => this.handleValidate(0)}
                                            />
                                            
                                        </div>
                                    </div>
                                    {this.state.deleted === true ?
                                    <div className="bg-red-400">Aucune demande avec cet id</div> : null }
                            </div>) : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default function GetId() {
    const { id } = useParams()
    return (
        <HolidayById holidayId={id} />
    )
}