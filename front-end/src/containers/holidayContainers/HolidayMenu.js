import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { faList, faAlignLeft, faTasks } from "@fortawesome/free-solid-svg-icons";
import MenuItem from '../../components/holidayComponents/MenuItem';

class HolidayMenu extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // <!-- Page Container -->
            <div className="flex items-center justify-center bg-white">
                <div className="flex flex-col">

                    {/* <!-- Continue With --> */}
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
                            {/* <!-- Nav Item #2 --> */}
                            <Link to="/holiday/list">
                                <MenuItem
                                    icon={faTasks}
                                    title="Gestion"
                                    text="Gestion des gongès en attente" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default HolidayMenu;