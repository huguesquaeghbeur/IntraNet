import { PureComponent } from "react"


export default class DeleteDptConfirmation extends PureComponent {
    constructor(props) {
        super(props)
    }

    handleConfirmAction(){
        this.props.deleteDptAction()
    }
    handleCancelAction(){
        this.props.closeConfirmationDptNewWindow()
    }

    render() {
        return (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="bg-gray-200 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Suppression
                        </h3>

                    </div>
                    {/*body*/}
                    <div className="relative p-4 flex-auto">
                        <p className="text-center text-blueGray-500 text-lg leading-relaxed">
                            Etes-vous sûr ?
                        </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => this.handleConfirmAction()}
                        >
                            Oui
                        </button>
                        <button
                            className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                            type="button"
                            onClick={() => this.handleCancelAction()}
                        >
                            Non
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )
        
    }
}