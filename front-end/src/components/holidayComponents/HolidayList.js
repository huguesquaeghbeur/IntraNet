import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import HolidayCard from './HolidayCard';
import ButtonComponent from '../toolComponents/ButtonComponent';
import { faBackspace, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { getHolidaysFromApi } from '../../redux/actions/holidayAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAllDepartments } from '../../services/departmentData';
import { getUser } from '../../redux/actions/userAction';

class HolidayList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            department: "",
            allDepartment: {},
        }
    }

    componentDidMount(){
        this.props.getUser();
        this.props.getAllHolidaysFromApi();
        getAllDepartments().then(res => {
            this.setState({
                allDepartment: res.data
            })
        })
    }

    handleRole = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.props.user)
    }

    render() {
        console.log(this.props.user.user)
        return (
            <div>
                <div>
                    <Link to="/holiday"><ButtonComponent type="button" color="bg-indigo-500" colorText="white" body="Retour" logo={faBackspace} /></Link>
                </div>
                <div className="flex items-center justify-center bg-white">
                    <div className="flex flex-col">
                        <div className={`flex flex-wrap justify-center items-center space-x-4 ${this.props.isLoading ? null : "invisible"}`}>
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin text-2xl" />
                        </div>

                        {/* <!-- Continue With --> */}
                        {/* to do Filter by department */}
                        <div className="flex flex-col">
                            <div className="text-gray-400 font-bold uppercase">
                                Gestion des congés
                            </div>
                            <div className="flex flex-row flex-wrap justify-around">
                                {/* need to fix department filter */}
                                {this.props.user.user.status == 2 ?
                                    this.props.holidays.filter(h => h.validation == 1).filter(h => h.collaboratorId != this.props.user.user.id).map(filteredHoliday => (
                                        <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                        </Link>))
                                    : null}
                                {this.props.user.user.status == 0 && this.props.user.user.departmentId == 1 ?
                                    this.props.holidays.filter(h => h.validation == 2).filter(h => h.collaboratorId != this.props.user.user.id).map(filteredHoliday => (
                                        <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                        </Link>))
                                    : null}
                                {/* need to fix exception between HRM - CEO */}
                                {this.props.user.user.status == 3 && this.props.user.user.departmentId == 1 ?
                                    this.props.holidays.filter(h => h.validation == 3).filter(h => h.collaboratorId != this.props.user.user.id).map(filteredHoliday => (
                                        <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                        </Link>))
                                    : null}
                                {this.props.user.status == 5 ?
                                    this.props.holidays.filter(h => h.validation == 3).filter(h => h.collaboratorId != this.props.user.user.id).map(filteredHoliday => (
                                        <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                        </Link>))
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        holidays: state.holidayState.holidays,
        isLoading: state.holidayState.isLoading,
        user: state.user
    }
}
const mapActionToProps = (dispatch) => {
    return {
        getAllHolidaysFromApi: () => dispatch(getHolidaysFromApi()),
        getAllDepartments: () => dispatch(getAllDepartments()),
        getUser: () => dispatch(getUser())
    }
}
export default connect(mapStateToProps, mapActionToProps)(HolidayList);