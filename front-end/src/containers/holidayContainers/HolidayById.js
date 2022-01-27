import React, { PureComponent } from 'react';
import { Link, useParams } from 'react-router-dom';
import HolidayCard from '../../components/holidayComponents/HolidayCard';
import ButtonComponent from '../../components/toolComponents/ButtonComponent';
import { getHolidayRequestById, deleteHolidayApi, validateHolidayApi } from '../../services/holidayData';
import { faBackspace, faBan, faCheck, faCalendarCheck, faUndoAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class HolidayById extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            deleted: false,
            collab: {},
            role: ""
        }
    }

    componentDidMount = () => {
        getHolidayRequestById(this.props.holidayId).then(res => {
            this.setState({
                post: res.data,
                postId: res.data.id,
                collab: res.data.collaboratorId
            })
            console.log(this.state)
        })
            // .then(() => {
            //     getCollaboratorById(this.state.collab).then(r => {
            //         this.setState({
            //             collab: r.data
            //         })
            //     })
            //     console.log(this.state.collab)
            // })
            .catch(error => {
                console.log(error)
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

    handleSave = () => {
        const formData = new FormData();
        formData.append('id', this.state.post.id)
        formData.append('collaboratorId', this.state.post.collaboratorId)
        formData.append('')
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
        console.log(this.state.post.collaboratorId)
        console.log(this.state.role)
        return (
            <div>
                <div>
                    <Link to="/holiday/list"><ButtonComponent type="button" color="bg-indigo-500" colorText="white" body="Retour" logo={faBackspace} /></Link>
                </div>
                <div className="flex items-center justify-center bg-white">
                    <div className="flex flex-col">
                        <div className="flex justify-center">
                            <div className="p-2">
                                <label className="p-2" htmlFor="role">CDS</label>
                                <input onChange={(e) => this.handleRole(e)} type="radio" id="role" value="SChief" name="role"></input>
                            </div>
                            <div className="p-2">
                                <label className="p-2" htmlFor="role">RH</label>
                                <input onChange={(e) => this.handleRole(e)} type="radio" id="role" value="HR" name="role"></input>
                            </div>
                            <div className="p-2">
                                <label className="p-2" htmlFor="role">#1</label>
                                <input onChange={(e) => this.handleRole(e)} type="radio" id="role" value="1" name="role"></input>
                            </div>
                            <div className="p-2">
                                <label className="p-2" htmlFor="role">#2</label>
                                <input onChange={(e) => this.handleRole(e)} type="radio" id="role" value="2" name="role"></input>
                            </div>
                            <div className="p-2">
                                <label className="p-2" htmlFor="role">#3</label>
                                <input onChange={(e) => this.handleRole(e)} type="radio" id="role" value="3" name="role"></input>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            {/* Test */}

                            {this.state.post && (this.state.role == this.state.post.collaboratorId) ?
                                <div>
                                    <div className="text-gray-400 font-bold uppercase">
                                        Demande de congés n° {this.state.post.id}
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <HolidayCard post={this.state.post} />
                                        <div className="flex justify-center">
                                            <ButtonComponent
                                                type="button"
                                                color="bg-red-500"
                                                colorText="white"
                                                body="Supprimer"
                                                logo={faTrashAlt}
                                                onClickMethod={this.handleDelete}
                                            />
                                        </div>
                                    </div>
                                </div>
                                :
                                this.state.post && (this.state.role === "SChief" && this.state.post.validation == 1) ?
                                    <div>
                                        <div className="text-gray-400 font-bold uppercase">
                                            Demande de congés n° {this.state.post.id}
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <HolidayCard post={this.state.post} />
                                            <div className="flex justify-center">
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
                                                    color="bg-green-400"
                                                    colorText="white"
                                                    body="Valider (CDS)"
                                                    logo={faCheck}
                                                    onClickMethod={() => this.handleValidate(2)}
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
                                    </div>
                                    :
                                    this.state.post && (this.state.role === "HR" && this.state.post.validation == 2) ?
                                        <div>
                                            <div className="text-gray-400 font-bold uppercase">
                                                Demande de congés n° {this.state.post.id}
                                            </div>

                                            <div className="flex flex-col justify-center">
                                                <HolidayCard post={this.state.post} />
                                                <div className="flex justify-center">
                                                    < ButtonComponent
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
                                        </div> :
                                        this.state.post && (this.state.role == this.state.post.collaboratorId || this.state.role == "SChief" || this.state.role == "HR") && (this.state.post.validation == 1 || this.state.post.validation == 2) ?
                                            <div className="bg-orange-400 text-white">
                                                Demande en traitement
                                            </div>
                                            :
                                            this.state.post && (this.state.role == this.state.post.collaboratorId || this.state.role == "SChief" || this.state.role == "HR") && this.state.post.validation == 3 ?
                                                <div className="bg-green-400 text-white">
                                                    Demande validée
                                                </div>
                                                :
                                                this.state.post && (this.state.role == this.state.post.collaboratorId || this.state.role == "SChief" || this.state.role == "HR") && this.state.post.validation == 0 ?
                                                    <div className="bg-red-400 text-white">
                                                        Demande refusée
                                                    </div>
                                                    :
                                                    <div className="bg-red-400 text-white">
                                                        Demande inexistante ou droits non appropriés
                                                    </div>
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