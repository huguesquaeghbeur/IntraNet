import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import HolidayCard from './HolidayCard';
import ButtonComponent from '../toolComponents/ButtonComponent';
import { faBackspace, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { getHolidaysFromApi } from '../../redux/actions/holidayAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HolidayList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            role: ""
        }
    }

    componentDidMount = () => {

        this.props.getAllHolidaysFromApi();
        // getAllCollaborator().then(res => {
        //     this.setState({
        //         collabs: res.data
        //     })
        // })
    }

    handleRole = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.holidays.filter(h => h.validation == 1).map(h => console.log(h))
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

                        {/* <!-- Continue With --> */}
                        <div className="flex flex-col">
                            <div className="text-gray-400 font-bold uppercase">
                                Gestion des congés
                            </div>
                            <div className="flex flex-row flex-wrap justify-around">
                                {this.state.role && this.props.holidays.filter(h => h.collaboratorId == this.state.role) ?
                                    this.props.holidays.filter(h => h.collaboratorId == this.state.role).map(filteredHoliday => (
                                        <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                        </Link>
                                    ))
                                    : null}
                                {this.state.role == "SChief" ?
                                    this.props.holidays.filter(h => h.validation == 1).map(filteredHoliday => (
                                        <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                        </Link>))
                                    : null}
                                {this.state.role == "HR" ?
                                    this.props.holidays.filter(h => h.validation == 2).map(filteredHoliday => (
                                        <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                        </Link>))
                                    : null }
                            </div>
                            {/* {this.state.holidays && (this.state.role == this.state.holidays.collaboratorId) ?
                                <div className="flex flex-row flex-wrap justify-around">
                                    {this.props.holidays.map(post =>
                                        <Link to={`/holiday/${post.id}`} key={post.id}>
                                            <HolidayCard post={post} />
                                        </Link>
                                    )}
                                </div>
                                :
                                this.state.post && (this.state.role === "SChief" && this.state.post.validation == 1)
                            } */}
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
    }
}
export default connect(mapStateToProps, mapActionToProps)(HolidayList);