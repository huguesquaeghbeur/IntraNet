import React, { PureComponent } from 'react';
import { useParams } from 'react-router-dom';
import HolidayCard from '../../components/holidayComponents/HolidayCard';
import ButtonComponent from '../../components/toolComponents/ButtonComponent';
import { getHolidayRequestById, deleteHolidayApi } from '../../services/holidayData';
import { faBan } from "@fortawesome/free-solid-svg-icons";

class HolidayById extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            holiday: {},
            deleted: false
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

    render() {
        return (
            <div className="flex items-center justify-center bg-white">
                <div className="flex flex-col">
                {!this.state.deleted ? (
                    <div className="flex flex-col">
                        <div className="text-gray-400 font-bold uppercase">
                            Demande de congés n° {this.state.holiday.id}
                        </div>
                        {this.state.holiday ?
                            <div>
                                <HolidayCard post={this.state.holiday} />
                                <div className="flex justify-center">
                                    <ButtonComponent
                                        type="button"
                                        color="red"
                                        colorText="white"
                                        body="Supprimer"
                                        logo={faBan}
                                        onClickMethod={this.handleDelete}
                                    />
                                </div>
                            </div>
                            :
                            <div>
                            </div>}
                    </div>) : null}
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