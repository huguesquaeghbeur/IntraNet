import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DepartmentDescriptionUniqueId extends Component {
    render() {
        return (
            <div>

                <div>




                    <div class="p-10 gap-5">

                        <div class="rounded overflow-hidden shadow-lg">
                            {/* <img class="w-full" src="/mountain.jpg" alt="Mountain"/> */}
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                <Link to="/departments/description/byid" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-red-400 hover:text-green-200 mr-4'>Search by ID</Link>
                                </div>                                
                            </div>
                            
                            
                        </div>
                        <div class="rounded overflow-hidden shadow-lg">
                            {/* <img class="w-full" src="/mountain.jpg" alt="Mountain"/> */}
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                <Link to="/departments/description" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-red-400 hover:text-green-200 mr-4'>Search by Title</Link>
                                </div>                                
                            </div>
                            
                            
                        </div>
                        

                    </div>



                    {/* <Link to="/departments/description" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-red-400 hover:text-green-200 mr-4'>Search by ID</Link>
                    <Link to="/departments/description" className='classLienClickable block mt-4 lg:inline-block lg:mt-0 text-red-400 hover:text-green-200 mr-4'>Search by Title</Link> */}

                </div>








                {/* <div>
                    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        
                        <div class="rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="/mountain.jpg" alt="Mountain"/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">Mountain</div>
                                    <p class="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                </div>
                        </div>
                        
                        <div class="rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="/river.jpg" alt="River"/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">River</div>
                                    <p class="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
                                </div>
                        </div>

                        
                        <div class="rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="/forest.jpg" alt="Forest"/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">Forest</div>
                                    <p class="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                                </div>
                        </div>
                    </div>
                </div> */}
            </div>

        );
    }
}

export default DepartmentDescriptionUniqueId;