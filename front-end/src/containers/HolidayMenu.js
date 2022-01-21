import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class HolidayMenu extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="grid justify-items-center">
                
                {/* <!-- Continue With --> */}
                <div class="flex flex-col mt-8">
                    <div class="text-gray-400 font-bold uppercase">
                        Demande de congés
                    </div>

                    <div class="flex flex-col items-stretch mt-5">
                        {/* <!-- Nav Item #1 --> */}
                        <div class="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">
                            <Link to="/holiday/post">
                                {/* <!-- Nav Icon --> */}
                                <div class="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                                    <i class="mdi mdi-home-outline mx-auto 
                            text-indigo-900 text-2xl md:text-3xl"></i>
                                </div>

                                {/* <!-- Text --> */}
                                <div class="grow flex flex-col pl-5 pt-2">
                                    <div class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Formulaire
                                    </div>

                                    <div class="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                                        Faire une nouvelle demande de congés
                                    </div>
                                </div>

                                {/* <!-- Chevron --> */}
                                <i class="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                            </Link>
                        </div>

                        {/** Will be hidden for collaborator & visible for Chief or HR */}

                        {/* <!-- Nav Item #2 --> */}
                        <div class="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">
                            <Link to="list">
                                {/* <!-- Nav Icon --> */}
                                <div class="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                                    <i class="mdi mdi-home-outline mx-auto 
                            text-indigo-900 text-2xl md:text-3xl"></i>
                                </div>

                                {/* <!-- Text --> */}
                                <div class="grow flex flex-col pl-5 pt-2">
                                    <div class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                                        Historique
                                    </div>

                                    <div class="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                                        Liste des demandes en attentes de validation
                                    </div>
                                </div>

                                {/* <!-- Chevron --> */}
                                <i class="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HolidayMenu;