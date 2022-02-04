import { PureComponent } from "react"
import {inputName} from '../../datas/bill/billBaseData'
// parent container : billComponent/FeeLineForm


export default class ValidationFormModalWindow extends PureComponent {
    constructor(props) {
        super(props)
        console.log(inputName[this.props.inputName])
    }


    handleCancelAction(){
        this.props.closeValidationMW()
    }

    render() {
        return (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="bg-gray-200 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" ml-2 p-3 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Erreur
                        </h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-4 flex-auto">
                        <p className="text-center text-blueGray-200 text-lg leading-relaxed">
                            Indiquez le champ {inputName[this.props.inputName]}.
                        </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => this.handleCancelAction()}
                        >
                            D'accord
                        </button>

                    </div>
                </div>
            </div>
        </div>
        )
        
    }
}