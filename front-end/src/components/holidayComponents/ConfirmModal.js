import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faTimes } from "@fortawesome/free-solid-svg-icons";

class ConfirmModal extends PureComponent {
    constructor(props) {
        super(props)
    }
    handleConfirm = () => {
        this.props.delete();
    }
    handleCancel = () => {
        this.props.cancel();
    }

    render() {
        return (
            <div>
                <div className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full">
                    <div className="relative px-4 w-full max-w-md h-full md:h-auto">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div className="flex justify-end p-2">
                                <button onClick={() => this.handleCancel()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="p-6 pt-0 text-center">
                                <FontAwesomeIcon icon={faBan} />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{this.props.question}</h3>
                                <button onClick={() => this.handleConfirm()} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    Supprimer
                                </button>
                                <button onClick={() => this.handleCancel()} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">
                                    Annuler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConfirmModal;