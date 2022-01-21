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
            <div class="flex items-center justify-center bg-white">
                <div class="flex flex-col">

                    {/* <!-- Continue With --> */}
                    <div class="flex flex-col">
                        <div class="text-gray-400 font-bold uppercase">
                            Gestion des congés
                        </div>

                        <div class="flex flex-col items-stretch mt-5">
                            {/* <!-- Nav Item #1 --> */}
                            <Link to="/holiday/post">
                            <div class="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                                {/* <!-- Nav Icon --> */}
                                <div class="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                                    <FontAwesomeIcon icon={faAlignLeft} className="mx-auto 
                            text-indigo-900 text-2xl md:text-3xl"/>
                                </div>

                                {/* <!-- Text --> */}
                                <div class="grow flex flex-col pl-5 pt-2">
                                    <div class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Formulaire
                                    </div>

                                    <div class="font-semibold text-sm md:text-md lg:text-lg
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
                            <div class="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                                {/* <!-- Nav Icon --> */}
                                <div class="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                                <FontAwesomeIcon icon={faList} className="mx-auto 
                            text-indigo-900 text-2xl md:text-3xl"/>
                                </div>

                                {/* <!-- Text --> */}
                                <div class="grow flex flex-col pl-5 pt-2">
                                    <div class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Historique
                                    </div>

                                    <div class="font-semibold text-sm md:text-md lg:text-lg
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