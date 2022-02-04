import React, { PureComponent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HolidayCard from '../../components/holidayComponents/HolidayCard';
import ButtonComponent from '../../components/toolComponents/ButtonComponent';
import { getHolidayRequestById, deleteHolidayApi, validateHolidayApi } from '../../services/holidayData';
import { faBackspace, faBan, faCheck, faCalendarCheck, faUndoAlt, faTrashAlt, faPencilAlt, faSpinner } from "@fortawesome/free-solid-svg-icons";
import HolidayForm from '../../components/holidayComponents/HolidayForm';
import ConfirmModal from '../../components/holidayComponents/ConfirmModal';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/userAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HolidayById extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            deleted: false,
            collab: {},
            showUpdateForm: false,
            showConfirmModal: false,
            currentUser: undefined
        }
    }

    componentDidMount = async () => {
        // let url = window.location.pathname.slice(9);
        // this.props.getUser()
        await getHolidayRequestById(this.props.holidayId).then(res => {

            this.setState({
                ...this.state,
                post: res.data,
                postId: res.data.id,
                collab: res.data.collaboratorId,
            })
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

    handleDelete = (e) => {
        e.preventDefault();
        let url = window.location.pathname.slice(9);
        deleteHolidayApi(url).then(res => {
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
        let url = window.location.pathname.slice(9);
        const formData = new FormData();
        formData.append('validation', number)

        await validateHolidayApi(url, formData).then(res => {
            this.setState({
                validation: res.data
            })
        })
        window.location.reload(true);
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div>
                <div>
                    <Link to="/holiday/list"><ButtonComponent type="button" color="bg-indigo-500" colorText="white" body="Retour" logo={faBackspace} /></Link>
                </div>

                <div className="flex items-center justify-center bg-white">
                    <div className="flex flex-col">

                        <div className="flex flex-col">
                            <div className="text-gray-400 font-bold uppercase">
                                Demande de congés n° {this.state.post.id}
                            </div>
                            <div className="flex flex-col justify-center">
                                <HolidayCard post={this.state.post} />
                            </div>

                            {currentUser && currentUser.id == this.state.post.collaboratorId ?
                                <div>
                                    <ButtonComponent type="button" color="bg-red-500" colorText="white"
                                        body="Supprimer" logo={faTrashAlt}
                                        onClickMethod={() => this.handleOpenModal()} />
                                    <ButtonComponent type="button" color="bg-indigo-500" colorText="white"
                                        body="Modifier" logo={faPencilAlt}
                                        onClickMethod={() => this.updateClickOpenForm()} />
                                </div> : null}

                            {currentUser && currentUser.status == 2 && this.state.post.validation == 1 && currentUser.departmentId == this.state.post.departmentId && currentUser.id != this.state.post.collaboratorId ?
                                <div>
                                    <ButtonComponent type="button" color="bg-indigo-400" colorText="white"
                                        body="Renvoyer au collaborateur" logo={faUndoAlt}
                                        onClickMethod={() => this.handleValidate(1)} />
                                    <ButtonComponent type="button" color="bg-green-400" colorText="white"
                                        body="Valider (CDS)" logo={faCheck}
                                        onClickMethod={() => this.handleValidate(2)} />
                                    <ButtonComponent type="button" color="bg-red-600" colorText="white"
                                        body="Refuser" logo={faBan}
                                        onClickMethod={() => this.handleValidate(0)} />
                                </div> : null}

                            {currentUser && currentUser.status == 1 && currentUser.departmentId == 1 && this.state.post.validation == 2 && currentUser.departmentId == this.state.post.departmentId && currentUser.id != this.state.post.collaboratorId ?
                                <div>
                                    <ButtonComponent type="button" color="bg-indigo-400" colorText="white"
                                        body="Renvoyer au collaborateur" logo={faUndoAlt}
                                        onClickMethod={() => this.handleValidate(1)} />
                                    <ButtonComponent type="button" color="bg-green-400" colorText="white"
                                        body="Valider (CDS)" logo={faCheck}
                                        onClickMethod={() => this.handleValidate(3)} />
                                    <ButtonComponent type="button" color="bg-red-600" colorText="white"
                                        body="Refuser" logo={faBan}
                                        onClickMethod={() => this.handleValidate(0)} />
                                </div> : null}

                            {currentUser && currentUser.status == 3 && this.state.post.validation == 3 && currentUser.id != this.state.post.collaboratorId ?
                                <div>
                                    <ButtonComponent type="button" color="bg-indigo-400" colorText="white"
                                        body="Renvoyer au collaborateur" logo={faUndoAlt}
                                        onClickMethod={() => this.handleValidate(1)} />
                                    <ButtonComponent type="button" color="bg-green-400" colorText="white"
                                        body="Valider (CDS)" logo={faCheck}
                                        onClickMethod={() => this.handleValidate(4)} />
                                    <ButtonComponent type="button" color="bg-red-600" colorText="white"
                                        body="Refuser" logo={faBan}
                                        onClickMethod={() => this.handleValidate(0)} />
                                </div> : null}

                            {/* TODO STATUS 5 (CEO) */}

                            {currentUser != undefined ? <div>{currentUser.firstName}</div> : <div>Failed</div>}



                            {/* {this.state.currentUser != undefined && this.state.post && (this.state.currentUser.id == this.state.post.collaboratorId) ?

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
                                    this.state.currentUser !== undefined && this.state.post && (this.state.currentUser.status == 2 && this.state.post.validation == 1) && this.state.post.collaboratorId != this.state.currentUser.id ?
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
                                        this.state.currentUser != undefined && this.state.post && (this.state.currentUser.status == 0 && this.state.currentUser.departmentId == 1 && this.state.post.validation == 2) && this.state.post.collaboratorId != this.state.currentUser.id ?
                                            < div >
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
                                            </div>
                                            :
                                            this.state.currentUser != undefined && this.state.post && (this.state.currentUser.id == 3 && this.state.currentUser.departmentId == 1 && this.state.post.validation == 3) && this.state.post.collaboratorId != this.state.currentUser.id ?
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
                                                </div>
                                                :
                                                this.state.currentUser != undefined && this.state.post && (this.state.currentUser.status == 5 && this.state.post.validation == 3) && this.state.post.collaboratorId != this.state.currentUser.id ?
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
                                                    </div>
                                                    :
                                                    <div>Spinner</div>} */}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getUser: () => dispatch(getUser())
    }
}

// export default connect(mapStateToProps, mapActionToProps)(HolidayById);

export default connect(mapStateToProps, mapActionToProps)(function GetId() {
    const { id } = useParams()
    return (
        <HolidayById holidayId={id} />
    )
})












/* : null
                                /* // this.state.post && (this.state.idCollab == this.state.post.collaboratorId || this.state.role == "chief" || this.state.department == "Ressources Humaines") && (this.state.post.validation == 1 || this.state.post.validation == 2) ?
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
                                //                 </div> */