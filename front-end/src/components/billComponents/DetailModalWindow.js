import { PureComponent } from "react"
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FeeLine } from "./FeeLine";
// parent container : billContainers/BillsOverview

export default class DetailModalWindow extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            bill: this.props.bills.filter(b => b.id == this.props.billId)
        }

    }
    handleCancelAction() {
        this.props.closeConfirmationModalWindow()
    }


    render() {
        return (
            <div className="modal fixed inset-x-10 inset-y-20 outline-none  overflow-y-hidden ">
                <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none  ">
                    {/*content*/}
                    <div class="modal-dialog relative w-auto pointer-events-none">
                        <div className="modal-content   bg-gray-200 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md  outline-none text-current">
                            {/*header*/}
                            <div className="modal-header   flex flex-row-reverse items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <button
                                    className="h-8 px-3  text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                                    type="button"
                                    onClick={() => this.handleCancelAction()}
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>

                            </div>
                            {/*body*/}
                            <div className="modal-body   relative  bg-gray-100 overflow-y-scroll max-h-96 ">
                                <p className="text-center my-5 text-blueGray-500 text-lg leading-relaxed">
                                    <div className="flex flex-wrap justify-around ">{this.state.bill[0] !== undefined ? this.state.bill[0].spents.map((spent, index) => <div className="mb-5" key={index}>
                                        <FeeLine key={index} FeeLine={spent} Index={index} handleDeleteClick={this.handleDeleteClick} changeValidateLevel={this.props.changeValidateLevel} modifyClick={this.handleModifyClick} submitClick={this.submitFeeLine} /></div>) : null}
                                    </div>
                                </p>
                            </div>
                            {/*footer*/}
                            <div
                                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                {/* <button type="button"
                                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button"
                                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                Save changes
                            </button> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>);
    }
}
