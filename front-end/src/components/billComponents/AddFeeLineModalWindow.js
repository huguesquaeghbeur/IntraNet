import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PureComponent } from "react";
import FeeLineForm from "./FeeLineForm";

// parent component : billContainerBillByid
// child component : billComponent/FeeLineForm


export default class AddFeeLineModalWindow extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            spentId: this.props.spentId
        }
    }
    handleClose() {
        this.props.closeForm()
    }

    render() {
        return (
            <div className="modal fixed inset-x-auto top-0 outline-none  overflow-y-hidden md:top-56 lg:top-10 ">
                <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none  ">
                    {/*content*/}
                    <div className="modal-dialog relative w-auto pointer-events-none">
                        <div className="modal-content   bg-gray-200 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md  outline-none text-current">

                            {/*header*/}
                            <div className="flex items-center justify-between p-2 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-xl font-semibold ml-5">
                                    Nouvelle dépense
                                </h3>
                                <button
                                    className="h-10 px-4 mr-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                                    type="button"
                                    onClick={() => this.handleClose()}
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>

                            </div>
                            {/*body*/}
                            <div className="modal-body px-4  relative  bg-gray-100   ">

                                <FeeLineForm
                                    bill={this.props.bill}
                                    collaborator={this.props.collaborator}
                                    SaveFeeLine={this.props.SaveFeeLine}
                                    UpdateFeeLine={this.props.UpdateFeeLine}
                                    SubmitFeeLine={this.props.SubmitFeeLine}
                                    spentId={this.props.spentId}
                                />
                            </div>
                            {/*footer*/}
                            {/* <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            </div> */}

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}