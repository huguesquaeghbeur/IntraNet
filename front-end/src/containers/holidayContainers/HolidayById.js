import React, { PureComponent } from 'react';
import { Link, useParams } from 'react-router-dom';
import HolidayCard from '../../components/holidayComponents/HolidayCard';
import ButtonComponent from '../../components/toolComponents/ButtonComponent';
import { getHolidayRequestById, deleteHolidayApi, validateHolidayApi } from '../../services/holidayData';
import { faBackspace, faBan, faCheck } from "@fortawesome/free-solid-svg-icons";

class HolidayById extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            holiday: {},
            deleted: false,
        }
    }

    componentDidMount() {
        getHolidayRequestById(this.props.holidayId).then(res => {
            this.setState({
                holiday: res.data
            })
            console.log(this.state.holiday)
        }).catch(error => {
            console.log(error)
        })
    }

    handleDelete = (e) => {
        e.preventDefault();
        
        deleteHolidayApi(this.props.holidayId).then(res => {
            this.setState({
                posts: res.data,
                deleted: true
            })
        })
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
                        {!this.state.deleted ? (
                            <div className="flex flex-col">
                                <div className="text-gray-400 font-bold uppercase">
                                    Demande de congés n° {this.state.holiday.id}
                                </div>
                                {this.state.holiday ?
                                    <div className="flex flex-col justify-center">
                                        <HolidayCard post={this.state.holiday} />
                                        <div className="flex justify-center">
                                            <ButtonComponent
                                                type="button"
                                                color="bg-red-500"
                                                colorText="white"
                                                body="Supprimer"
                                                logo={faBan}
                                                onClickMethod={() => this.handleDelete}
                                            />
                                            <ButtonComponent
                                                type="button"
                                                color="bg-indigo-400"
                                                colorText="white"
                                                body="Renvoyer au collaborateur"
                                                logo={faBan}
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
                                                logo={faCheck}
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
                                    :
                                    <div>
                                    </div>}
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