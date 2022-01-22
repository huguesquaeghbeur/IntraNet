import { PureComponent } from "react";
import FeeLineForm from "./FeeLineForm";

export default class AddFeeLineModalWindow extends PureComponent {
    constructor(props) {
        super(props)
    }
    state = {}
    handleClose(){
        this.props.closeForm()
    }


    render() {
        return (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-96 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="bg-gray-50 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Nouvelle ligne de frais
                            </h3>
                            <button
                                className="h-10 px-5 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                                type="button"
                                onClick={() => this.handleClose()}
                            >
                                Annuler
                            </button>

                        </div>
                        {/*body*/}
                        <div className="relative p-4 flex-auto">
                            <FeeLineForm
                                bill={this.props.bill}
                            />
                        </div>
                        {/*footer*/}

                    </div>
                </div>
            </div>
        );
    }
}