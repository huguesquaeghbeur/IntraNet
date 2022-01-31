import React, { PureComponent } from 'react';
import { Link, useParams } from 'react-router-dom';
import HolidayCard from '../../components/holidayComponents/HolidayCard';
import ButtonComponent from '../../components/toolComponents/ButtonComponent';
import { getHolidayRequestById, deleteHolidayApi, validateHolidayApi } from '../../services/holidayData';
import { faBackspace, faBan, faCheck, faCalendarCheck, faUndoAlt, faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import HolidayForm from '../../components/holidayComponents/HolidayForm';
import ConfirmModal from '../../components/holidayComponents/ConfirmModal';

class HolidayById extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            deleted: false,
            collab: {},
            role: "",
            department: "",
            idCollab: "",
            showUpdateForm: false,
            showConfirmModal: false,
        }
    }

    componentDidMount = () => {
        getHolidayRequestById(this.props.holidayId).then(res => {
            this.setState({
                post: res.data,
                postId: res.data.id,
                collab: res.data.collaboratorId
            })
            
        }).catch(error => {
            console.log(error)
        })
    }
    updateClickOpenForm = () => {
        this.setState({
            showUpdateForm: true
        })
    }
    updateClickCloseForm = () => {
        this.setState({
            showUpdateForm: false
        })
    }

    handleRole = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDelete = (e) => {
        e.preventDefault();

        deleteHolidayApi(this.props.holidayId).then(res => {
            this.setState({
                post: "",
                deleted: true
            })
        })
        // window.location.assign("http://localhost:3000/holiday/list");
    }
    handleOpenModal = () => {
        this.setState({
            showConfirmModal: true
        })
        console.log(this.state.showConfirmModal)
    }
    handleCloseModal = () => {
        this.setState({
            showConfirmModal: false
        })
    }

    // handleSave = () => {
    //     const formData = new FormData();
    //     formData.append('id', this.state.post.id)
    //     formData.append('collaboratorId', this.state.post.collaboratorId)
    //     formData.append('')
    // }

    handleValidate = async (number) => {
        console.log(number)
        const formData = new FormData();
        formData.append('validation', number)

        await validateHolidayApi(this.props.holidayId, formData).then(res => {
            this.setState({
                validation: res.data
            })
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
                        <div className="flex justify-center">
                            <div className="m-2 p-2">
                                <div className="p-2">
                                    <label className="p-2" htmlFor="department">RH</label>
                                    <input onChange={(e) => this.handleRole(e)} type="radio" id="department" value="Ressources Humaines" name="department"></input>
                                </div>
                                <div className="p-2">
                                    <label className="p-2" htmlFor="department">Comptabilité</label>
                                    <input onChange={(e) => this.handleRole(e)} type="radio" id="department" value="Comptabilité" name="department"></input>
                                </div>
                                <div className="p-2">
                                    <label className="p-2" htmlFor="department">empty department</label>
                                    <input onChange={(e) => this.handleRole(e)} type="radio" id="department" value="" name="department"></input>
                                </div>
                            </div>
                            <div className="m-2 p-2">
                                <div className="p-2">
                                    <label className="p-2" htmlFor="idCollab">#1</label>
                                    <input onChange={(e) => this.handleRole(e)} type="radio" id="idCollab" value="1" name="idCollab"></input>
                                </div>
                                <div className="p-2">
                                    <label className="p-2" htmlFor="idCollab">#2</label>
                                    <input onChange={(e) => this.handleRole(e)} type="radio" id="idCollab" value="2" name="idCollab"></input>
                                </div>
                                <div className="p-2">
                                    <label className="p-2" htmlFor="idCollab">#3</label>
                                    <input onChange={(e) => this.handleRole(e)} type="radio" id="idCollab" value="3" name="idCollab"></input>
                                </div>
                                <div className="p-2">
                                    <label className="p-2" htmlFor="idCollab">empty id</label>
                                    <input onChange={(e) => this.handleRole(e)} type="radio" id="idCollab" value="" name="idCollab"></input>
                                </div>
                            </div>
                            <div className="m-2 p-2">
                                <div className="p-2">
                                    <label className="p-2" htmlFor="role">Basic</label>
                                    <input onChange={(e) => this.handleRole(e)} type="radio" id="role" value="basic" name="role"></input>
                                </div>
                                <div className="p-2">
                                    <label className="p-2" htmlFor="role">CDS</label>
                                    <input onChange={(e) => this.handleRole(e)} type="radio" id="role" value="chief" name="role"></input>
                                </div>
                                <div className="p-2">
                                    <label className="p-2" htmlFor="role">PDG</label>
                                    <input onChange={(e) => this.handleRole(e)} type="radio" id="role" value="cEO" name="role"></input>
                                </div>
                                <div className="p-2">
                                    <label className="p-2" htmlFor="role">empty role</label>
                                    <input onChange={(e) => this.handleRole(e)} type="radio" id="role" value="" name="role"></input>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-gray-400 font-bold uppercase">
                                Demande de congés n° {this.state.post.id}
                            </div>
                            {this.state.post && (this.state.idCollab == this.state.post.collaboratorId) ?
                                <div>
                                    {!this.state.showUpdateForm ?
                                        <div className="flex flex-col justify-center">
                                            <HolidayCard post={this.state.post} />
                                            <div className="flex justify-center">
                                                <ButtonComponent type="button" color="bg-red-500" colorText="white"
                                                    body="Supprimer" logo={faTrashAlt}
                                                    onClickMethod={() => this.handleOpenModal()} />
                                                <ButtonComponent type="button" color="bg-indigo-500" colorText="white"
                                                    body="Modifier" logo={faPencilAlt}
                                                    onClickMethod={() => this.updateClickOpenForm()} />
                                            </div>
                                        </div>
                                        : <div>
                                            <div className="flex">
                                                <div>
                                                    <HolidayForm
                                                        holiday={this.state.post}
                                                        updateClickCloseForm={() => this.updateClickCloseForm()} />
                                                </div>
                                                <div>
                                                    <HolidayCard post={this.state.post} />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                :
                                this.state.post && (this.state.role == "chief" && this.state.post.validation == 1) && this.state.post.collaboratorId != this.state.idCollab ?
                                    <div>
                                        <div className="flex flex-col justify-center">
                                            <HolidayCard post={this.state.post} />
                                            <div className="flex justify-center">
                                                <ButtonComponent type="button" color="bg-indigo-400" colorText="white"
                                                    body="Renvoyer au collaborateur" logo={faUndoAlt}
                                                    onClickMethod={() => this.handleValidate(1)} />
                                                <ButtonComponent type="button" color="bg-green-400" colorText="white"
                                                    body="Valider (CDS)" logo={faCheck}
                                                    onClickMethod={() => this.handleValidate(2)} />
                                                <ButtonComponent type="button" color="bg-red-600" colorText="white"
                                                    body="Refuser" logo={faBan}
                                                    onClickMethod={() => this.handleValidate(0)} />
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    this.state.post && (this.state.role == "basic" && this.state.department == "Ressources Humaines" && this.state.post.validation == 2) && this.state.post.collaboratorId != this.state.idCollab ?
                                        <div>
                                            <div className="flex flex-col justify-center">
                                                <HolidayCard post={this.state.post} />
                                                <div className="flex justify-center">
                                                    <ButtonComponent type="button" color="bg-indigo-400" colorText="white"
                                                        body="Renvoyer au collaborateur" logo={faUndoAlt}
                                                        onClickMethod={() => this.handleValidate(1)} />
                                                    <ButtonComponent type="button" color="bg-green-400" colorText="white"
                                                        body="Valider (CDS)" logo={faCheck}
                                                        onClickMethod={() => this.handleValidate(3)} />
                                                    <ButtonComponent type="button" color="bg-red-600" colorText="white"
                                                        body="Refuser" logo={faBan}
                                                        onClickMethod={() => this.handleValidate(0)} />
                                                </div>
                                            </div>
                                        </div> :
                                        this.state.post && (this.state.role == "chief" && this.state.department == "Ressources Humaines" && this.state.post.validation == 3) && this.state.post.collaboratorId != this.state.idCollab ?
                                            <div>
                                                <div className="flex flex-col justify-center">
                                                    <HolidayCard post={this.state.post} />
                                                    <div className="flex justify-center">
                                                        < ButtonComponent type="button" color="bg-green-500" colorText="white"
                                                            body="Valider (RH)" logo={faCalendarCheck}
                                                            onClickMethod={() => this.handleValidate(4)} />
                                                        <ButtonComponent type="button" color="bg-red-600" colorText="white"
                                                            body="Refuser" logo={faBan}
                                                            onClickMethod={() => this.handleValidate(0)} />
                                                    </div>
                                                </div>
                                            </div> :
                                            this.state.post && (this.state.role == "cEO" && this.state.post.validation == 3) && this.state.post.collaboratorId != this.state.idCollab ?
                                                <div>
                                                    <div className="flex flex-col justify-center">
                                                        <HolidayCard post={this.state.post} />
                                                        <div className="flex justify-center">
                                                            < ButtonComponent type="button" color="bg-green-500" colorText="white"
                                                                body="Valider (RH)" logo={faCalendarCheck}
                                                                onClickMethod={() => this.handleValidate(4)} />
                                                            <ButtonComponent type="button" color="bg-red-600" colorText="white"
                                                                body="Refuser" logo={faBan}
                                                                onClickMethod={() => this.handleValidate(0)} />
                                                        </div>
                                                    </div>
                                                </div> : null
                                // this.state.post && (this.state.idCollab == this.state.post.collaboratorId || this.state.role == "chief" || this.state.department == "Ressources Humaines") && (this.state.post.validation == 1 || this.state.post.validation == 2) ?
                                //     <div className="bg-orange-400 text-white">
                                //         Demande en traitement
                                //     </div>
                                //     :
                                //     this.state.post && (this.state.idCollab == this.state.post.collaboratorId || this.state.role == "chief" || this.state.department == "Ressources Humaines") && this.state.post.validation == 3 ?
                                //         <div className="bg-orange-600 text-white">
                                //             Demande en traitement (DRH)
                                //         </div>
                                //         :
                                //         this.state.post && (this.state.idCollab == this.state.post.collaboratorId || this.state.role == "chief" || this.state.department == "Ressources Humaines") && this.state.post.validation == 3 ?
                                //             <div className="bg-green-400 text-white">
                                //                 Demande validée
                                //             </div> :
                                //             this.state.post && (this.state.idCollab == this.state.post.collaboratorId || this.state.role == "chief" || this.state.department == "Ressources Humaines") && this.state.post.validation == 0 ?
                                //                 <div className="bg-red-400 text-white">
                                //                     Demande refusée
                                //                 </div>
                                //                 :
                                //                 <div className="bg-red-400 text-white">
                                //                     Demande inexistante ou droits non appropriés
                                //                 </div>
                            }
                        </div>
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