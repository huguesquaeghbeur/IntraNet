import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import HolidayCard from './HolidayCard';
import ButtonComponent from '../toolComponents/ButtonComponent';
import { faBackspace, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { getHolidaysFromApi } from '../../redux/actions/holidayAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAllDepartments } from '../../services/departmentData';

class HolidayList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            role: "",
            department: "",
            idCollab: "",
            allDepartment: {}
        }
    }

    componentDidMount = () => {

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
    }

    render() {
        console.log(this.props.holidays)
        console.log(this.state)
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

                        {/* <!-- Continue With --> */}
                        {/* to do Filter by department */}
                        <div className="flex flex-col">
                            <div className="text-gray-400 font-bold uppercase">
                                Gestion des congés
                            </div>
                            <div className="flex flex-row flex-wrap justify-around">
                                {/* need to fix department filter */}
                                {this.state.role == "chief" ?
                                    this.props.holidays.filter(h => h.validation == 1).filter(h => h.collaboratorId != this.state.idCollab).map(filteredHoliday => (
                                        <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                        </Link>))
                                    : null}
                                {this.state.role == "basic" && this.state.department == "Ressources Humaines" ?
                                    this.props.holidays.filter(h => h.validation == 2).filter(h => h.collaboratorId != this.state.idCollab).map(filteredHoliday => (
                                        <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                        </Link>))
                                    : null}
                                {/* need to fix exception between HRM - CEO */}
                                {this.state.role == "chief" && this.state.department == "Ressources Humaines" ?
                                    this.props.holidays.filter(h => h.validation == 3).filter(h => h.collaboratorId != this.state.idCollab).map(filteredHoliday => (
                                        <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                        </Link>))
                                    : null}
                                {this.state.role == "cEO" ?
                                    this.props.holidays.filter(h => h.validation == 3).filter(h => h.collaboratorId != this.state.idCollab).map(filteredHoliday => (
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
    }
}
const mapActionToProps = (dispatch) => {
    return {
        getAllHolidaysFromApi: () => dispatch(getHolidaysFromApi()),
        getAllDepartments: () => dispatch(getAllDepartments())
    }
}
export default connect(mapStateToProps, mapActionToProps)(HolidayList);