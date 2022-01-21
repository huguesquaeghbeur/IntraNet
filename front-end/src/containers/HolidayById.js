import React, { PureComponent } from 'react';
import { useParams } from 'react-router-dom';
import HolidayCard from '../components/HolidayCard';
import { getHolidayRequestById } from '../services/holidayData';

class HolidayById extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            holiday : {}
        }
    }

    componentDidMount(){
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
            <div>
                {this.props.holidayId !== undefined ?
                <HolidayCard post={this.state.holiday} />
                 : null }
            </div>
        );
    }
}
export default function GetId()
{
    const {id}  = useParams()
    return (
        <HolidayById holidayId={id}/>
    )
}