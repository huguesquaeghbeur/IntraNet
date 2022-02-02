import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PureComponent } from "react";
import FeeLineForm from "./FeeLineForm";

// parent component : billContainerBillByid
// child component : billComponent/FeeLineForm


export default class AddFeeLineModalWindow extends PureComponent {
    constructor(props) {
        super(props)
        this.state={
            spentId:this.props.spentId
        }
        // console.log("props modal bill id "+this.props.billId)
    }
    handleClose(){
        this.props.closeForm()
    }
    // handleSave(feeLine){
    //     console.log("save")
    //     console.log(feeLine)
    //     // console.log(this.state.spentId)

    //     // this.setState({
    //     //     spentId:undefined
    //     // })
    //     this.props.SaveFeeLine(feeLine);
    // }
    // handleSubmit(feeLine){
    //     // this.setState({
    //     //     spentId:undefined
    //     // })
    //     this.props.SubmitFeeLine(feeLine);
    // }
    // handleUpdate(formData, feeLine){
    //     // this.setState({
    //     //     spentId:undefined
    //     // })
    //     this.props.UpdateFeeLine(formData, feeLine);
    // }

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
                                <FontAwesomeIcon icon={faTimes} />
                            </button>

                        </div>
                        {/*body*/}
                        <div className="relative p-4 flex-auto ">
                            <FeeLineForm
                                bill={this.props.bill}
                                collaborator={this.props.collaborator}
                                SaveFeeLine={this.props.SaveFeeLine}
                                UpdateFeeLine = {this.props.UpdateFeeLine}
                                SubmitFeeLine = {this.props.SubmitFeeLine}
                                spentId={this.props.spentId}
                            />
                        </div>
                        {/*footer*/}

                    </div>
                </div>
            </div>
        );
    }
}