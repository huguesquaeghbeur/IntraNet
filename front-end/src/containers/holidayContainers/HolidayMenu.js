import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { faList, faAlignLeft, faTasks, faSpinner } from "@fortawesome/free-solid-svg-icons";
import MenuItem from '../../components/holidayComponents/MenuItem';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/userAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HolidayMenu extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        await this.props.getUser()
    }

    render() {
        return (
            // <!-- Page Container -->
            <div className="flex items-center justify-center bg-white">

                <div className="flex flex-col">
                    {this.props.user == undefined ?
                        /* <!-- Continue With --> */
                        <div>
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin text-2xl" />
                        </div>
                        :
                        <div className="flex flex-col">
                            <div className="text-gray-400 font-bold uppercase">
                                Gestion des congés
                            </div>

                            <div className="flex flex-col items-stretch mt-5">
                                {/* <!-- Nav Item #1 --> */}
                                <Link to="/holiday/post">
                                    <MenuItem
                                        icon={faAlignLeft}
                                        title="Formulaire"
                                        text="Faire une nouvelle demande" />
                                </Link>
                                {/* <!-- Nav Item #2 --> */}
                                <Link to="/holiday/own">
                                    <MenuItem
                                        icon={faList}
                                        title="Historique"
                                        text="Liste des congés personnels en attente" />
                                </Link>
                                {this.props.user.user != undefined && this.props.user.user.status >= 2 && this.props.user.user.status <= 5 ?
                                    <Link to="/holiday/list">
                                        <MenuItem
                                            icon={faTasks}
                                            title="Gestion"
                                            text="Gestion des gongès en attente" />
                                    </Link>
                                    : null}
                            </div>
                        </div>
                    }
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getUser: () => dispatch(getUser()),
    }
}

export default connect(mapStateToProps, mapActionToProps)(HolidayMenu);