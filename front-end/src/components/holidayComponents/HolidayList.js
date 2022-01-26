import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import HolidayCard from './HolidayCard';
import ButtonComponent from '../toolComponents/ButtonComponent';
import { faBackspace, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { getHolidaysFromApi } from '../../redux/actions/holidayAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAllCollaborator } from '../../services/collaboratorData';

class HolidayList extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            // posts: [],
            collabs: []
        }
    }

    componentDidMount = () => {
        // getAllHolidays().then(res => {
        //     this.setState({
        //         posts: res.data
        //     })
        //     console.log(res.data)
        // })
        this.props.getAllHolidaysFromApi();
        getAllCollaborator().then(res => {
            this.setState({
                collabs: res.data
            })
        })
    }

    render() {
        // const { posts } = this.state
        console.log(this.props.holidays)
        console.log(this.props.collabs)
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
                        <div className="flex flex-col">
                            <div className="text-gray-400 font-bold uppercase">
                                Gestion des congés
                            </div>
                            <div className="flex flex-row flex-wrap justify-around">
                                {this.props.holidays.map(post =>
                                    <Link to={`/holiday/${post.id}`} key={post.id}>
                                        <HolidayCard post={post} />
                                    </Link>
                                )}
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
    }
}
export default connect(mapStateToProps, mapActionToProps)(HolidayList);