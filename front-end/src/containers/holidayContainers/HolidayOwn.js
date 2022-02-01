import { faBackspace, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HolidayCard from '../../components/holidayComponents/HolidayCard';
import ButtonComponent from '../../components/toolComponents/ButtonComponent';
import { getHolidaysFromApi } from '../../redux/actions/holidayAction';
import { getUser } from '../../redux/actions/userAction';

class HolidayOwn extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { }
    }


    componentDidMount = async () => {
        await this.props.getUser();
        this.props.getAllHolidaysFromApi();
    }
    handleRole = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.props.user)
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

                        <div className="flex flex-col">
                            <div className="text-gray-400 font-bold uppercase">
                                Historique des demande de congés en cours 
                            </div>
                            <div className="flex flex-row flex-wrap justify-around">
                                {this.props.user.user != undefined && this.props.user.user.id && this.props.holidays.filter(h => h.collaboratorId == this.props.user.user.id) ?
                                    this.props.holidays.filter(h => h.collaboratorId == this.props.user.user.id).map(filteredHoliday => (
                                        <Link to={`/holiday/${filteredHoliday.id}`} key={filteredHoliday.id}>
                                            <HolidayCard post={filteredHoliday} />
                                        </Link>
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
        getUser: () => dispatch(getUser())
    }
}

export default connect(mapStateToProps, mapActionToProps)(HolidayOwn);