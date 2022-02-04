import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import HolidayCard from './HolidayCard';
import ButtonComponent from '../toolComponents/ButtonComponent';
import { faBackspace, faBan, faCheck, faSpinner, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { getHolidaysFromApi } from '../../redux/actions/holidayAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAllDepartments } from '../../services/departmentData';
import { getUser } from '../../redux/actions/userAction';
import { validateHolidayApi } from '../../services/holidayData';
import { getAllCollaborator, getCollaboratorById } from '../../services/collaboratorData';

class HolidayList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            allDepartment: [],
            filteredDepartmentId: undefined,
            allCollab: [],
            filteredCollab: [],
            hf: ''
        }
    }

    componentDidMount = async () => {
        await this.props.getUser();
        this.props.getAllHolidaysFromApi();
        //In order to the currentUser Department to filter holiday requests
        getAllDepartments().then(res => {
            this.setState({
                allDepartment: res.data
            })
            this.state.allDepartment.map(d => {
                if (d.id === this.props.user.user.departmentId) {
                    this.setState({
                        filteredDepartmentId: d.id
                    })
                }
            })
        });
        await getAllCollaborator().then(res => {
            this.setState({
                allCollab: res.data
            })
            this.state.allCollab.map(c => {
                if (c.departmentId === this.props.user.user.departmentId) {
                    this.setState({
                        filteredCollab: [...this.state.filteredCollab, c.id]
                    })
                }
            })
        })
        this.props.holidays.map(h => {
            this.filterHoliday(h)
        })
    }


    filterHoliday = (h) => {
        this.state.filteredCollab.map(c => {
            if (c == h.collaboratorId) {
                console.log(h)
                this.setState({
                    hf: [...this.state.hf, h]
                })
            }
        })
    }

    handleStatus = async (number, id) => {
        console.log(number)

        const formData = new FormData();
        formData.append('validation', number)

        await validateHolidayApi(id, formData).then(res => {
            this.setState({
                validation: res.data
            })
        })
        window.location.reload(false);
    }

    render() {
        console.log(this.state.hf)
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
                            <div className="text-gray-400 font-bold uppercase text-center">
                                Gestion des congés
                            </div>
                            <div className="flex flex-row flex-wrap justify-around">


                                {/* need to fix department filter */}
                                {/* Department Chief */}
                                {this.state.hf && this.props.user.user != undefined && this.props.user.user.status == 2 ?
                                    this.state.hf.filter(h => h.validation == 1).filter(h => h.collaboratorId != this.props.user.user.id).map(filteredHoliday => (
                                        // <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>

                                        <div key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                            <div className="flex justify-center">
                                                <ButtonComponent type="button" color="bg-red-400" colorText="white"
                                                    logo={faBan}
                                                    onClickMethod={() => this.handleStatus(0, filteredHoliday.id)} />
                                                <ButtonComponent type="button" color="bg-green-400" colorText="white"
                                                    logo={faCheck}
                                                    onClickMethod={() => this.handleStatus(3, filteredHoliday.id)} />
                                                <ButtonComponent type="button" color="bg-indigo-400" colorText="white"
                                                    logo={faUndoAlt}
                                                    onClickMethod={() => this.handleStatus(1, filteredHoliday.id)} />
                                            </div>
                                        </div>
                                        /* </Link> */
                                    ))
                                    : null}

                                {/* Basic HR */}
                                {this.props.user.user != undefined && this.props.user.user.status == 0 && this.props.user.user.departmentId == 1 ?
                                    this.props.holidays.filter(h => h.validation == 2).filter(h => h.collaboratorId != this.props.user.user.id).map(filteredHoliday => (
                                        // <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                        <div key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                            <div className="flex justify-center">
                                                <ButtonComponent type="button" color="bg-red-400" colorText="white"
                                                    logo={faBan}
                                                    onClickMethod={() => this.handleStatus(0, filteredHoliday.id)} />
                                                <ButtonComponent type="button" color="bg-green-400" colorText="white"
                                                    logo={faCheck}
                                                    onClickMethod={() => this.handleStatus(3, filteredHoliday.id)} />
                                            </div>
                                        </div>
                                        // </Link>
                                    ))
                                    : null}
                                {/* need to fix exception between HRM - CEO */}
                                {this.props.user.user != undefined && this.props.user.user.status == 3 && this.props.user.user.departmentId == 1 ?
                                    this.props.holidays.filter(h => h.validation == 3).filter(h => h.collaboratorId != this.props.user.user.id).map(filteredHoliday => (
                                        // <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                        <div key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                            <div className="flex justify-center">
                                                <ButtonComponent type="button" color="bg-red-400" colorText="white"
                                                    logo={faBan}
                                                    onClickMethod={() => this.handleStatus(0, filteredHoliday.id)} />
                                                <ButtonComponent type="button" color="bg-green-400" colorText="white"
                                                    logo={faCheck}
                                                    onClickMethod={() => this.handleStatus(4, filteredHoliday.id)} />
                                            </div>
                                        </div>
                                        /* </Link> */
                                    ))
                                    : null}
                                {this.props.user.user != undefined && this.props.user.status == 5 ?
                                    this.props.holidays.filter(h => h.validation == 3).filter(h => h.collaboratorId != this.props.user.user.id).map(filteredHoliday => (
                                        // <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                        /* </Link> */
                                        ))
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