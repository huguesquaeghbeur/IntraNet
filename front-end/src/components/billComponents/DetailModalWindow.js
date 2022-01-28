import { PureComponent } from "react"
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FeeLine } from "./FeeLine";
// parent container : billContainers/BillsOverview

export default class DetailModalWindow extends PureComponent {
    constructor(props) {
        super(props);
        console.log(this.props.bill[0].id)
    }
    handleCancelAction() {
        this.props.closeConfirmationModalWindow()
    }
 

    render() {
        return (
                <div className="  overflow-y-scroll justify-center items-center flex   fixed inset-0  z-50 outline-none focus:outline-none">
                    <div className="relative w-auto  max-w-3xl h-screen mt-20  ">
                        {/*content*/}
                        <div className="bg-gray-200 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex flex-row-reverse justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <button
                                    className="h-10 px-5 mx-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                                    type="button"
                                    onClick={() => this.handleCancelAction()}
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>

                            </div>
                            {/*body*/}
                            <div className="relative p-4 flex-auto">
                                <p className="text-center text-blueGray-500 text-lg leading-relaxed">
                                    <div className="flex flex-wrap justify-around ">{this.props.bill[0].spents !== undefined ? this.props.bill[0].spents.map((spent, index) => <div className="mb-5" key={index}>
                                        <FeeLine key={index} FeeLine={spent} Index={index} handleDeleteClick={this.handleDeleteClick} changeValidateLevel={this.props.changeValidateLevel} modifyClick={this.handleModifyClick} submitClick={this.submitFeeLine} /></div>) : null}
                                        </div>
                                </p>
                            </div>
                            {/*footer*/}
                            {/* <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
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
                            </div> */}
                        </div>
                    </div>
            </div>);
    }
}
