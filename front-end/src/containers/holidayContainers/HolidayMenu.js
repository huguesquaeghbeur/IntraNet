import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { faList, faChevronRight, faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                            <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                                {/* <!-- Nav Icon --> */}
                                <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                                    <FontAwesomeIcon icon={faAlignLeft} className="mx-auto 
                            text-indigo-900 text-2xl md:text-3xl"/>
                                </div>

                                {/* <!-- Text --> */}
                                <div className="grow flex flex-col pl-5 pt-2">
                                    <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Formulaire
                                    </div>

                                    <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                                        Faire une nouvelle demande
                                    </div>
                                </div>

                                {/* <!-- Chevron --> */}
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 mdi-24px my-auto
                        group-hover:text-gray-700 transition-all duration-200 delay-100" />
                            </div>
                            </Link>

                            {/* <!-- Nav Item #2 --> */}
                            <Link to="/holiday/list">
                            <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                                {/* <!-- Nav Icon --> */}
                                <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                                <FontAwesomeIcon icon={faList} className="mx-auto 
                            text-indigo-900 text-2xl md:text-3xl"/>
                                </div>

                                {/* <!-- Text --> */}
                                <div className="grow flex flex-col pl-5 pt-2">
                                    <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Historique
                                    </div>

                                    <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                                        Liste des congés en attente
                                    </div>
                                </div>

                                {/* <!-- Chevron --> */}
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 mdi-24px my-auto
                        group-hover:text-gray-700 transition-all duration-200 delay-100" />
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HolidayMenu;