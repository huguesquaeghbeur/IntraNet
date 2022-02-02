import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Management(props) {
    const currentUser = props.currentUser;

    return (
        <Menu as="div" className="relative inline-block text-center mt-1">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-orange-500">
                    Gestions
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 text-white 
                    ring-1 ring-black ring-opacity-5 focus:outline-none">

                    <div className="py-1">


                        {/* 
                                 Les onglets du PDG 
                    */}


                        {currentUser === "CEO" ?
                            <div>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="/departments"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Services
                                        </Link>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="/management/bills"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Note de frais
                                        </Link>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="/collaborator"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Collaborateurs
                                        </Link>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="/holiday"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Congés
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                            : null}



                        {/* 
                                 Les onglets du directeur financier 
                    */}




                        {currentUser === "CFO" ?
                            <div>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="management/bills"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Note de frais
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="/holiday"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Congés
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                            : null}




                        {/* 
                                 Les onglets de la DRH 
                    */}




                        {currentUser === "HRM" ?
                            <div>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="management/bills"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Note de frais
                                        </Link>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="/holiday"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Congés
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                            : null}



                        {/* 
                                 Les onglets dU chef de projet 
                    */}



                        {currentUser === "ProjectChief" ?
                            <div>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="management/bills"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Note de frais
                                        </Link>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="/holiday"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Congés
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                            : null}




                        {/* 
                                 Les onglets du chef de service 
                    */}




                        {currentUser === "DepartmentChief" ?
                            <div>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="/management/bills"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Note de frais
                                        </Link>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="/holiday"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-white',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Congés
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>
                            : null}



                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )

}