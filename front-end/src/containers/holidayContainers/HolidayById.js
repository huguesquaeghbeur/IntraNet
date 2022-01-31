import React, { PureComponent } from 'react';
import { useParams } from 'react-router-dom';
import HolidayCard from '../../components/holidayComponents/HolidayCard';
import { getHolidayRequestById } from '../../services/holidayData';

class HolidayById extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            holiday: {}
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

    render() {
        return (
            <div class="flex items-center justify-center bg-white">
                <div class="flex flex-col">

                    <div class="flex flex-col">
                        <div class="text-gray-400 font-bold uppercase">
                            Dema,nde de congés n° {this.state.holiday.id}
                        </div>
                        {this.props.holidayId !== undefined ?
                            <HolidayCard post={this.state.holiday} />
                            : null}
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