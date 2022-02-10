import { PureComponent } from "react"
import { inputName } from '../../datas/bill/billBaseData'
import { baseSpentUrl } from '../../services/billsService'

export default class ListModalWindow extends PureComponent {
    constructor(props) {
        super(props)
    }

    handleCancelAction() {
        this.props.closeListMW()
    }

    render() {
        return (
            <div className="mx-justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-11/12 md:w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="bg-gray-200 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center justify-end p-1 border-t border-solid mt-3">
                        </div>
                        {/*body*/}
                        <div className="flex justify-center border-4">
                            {this.props.proofs !== undefined ?
                                <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                                    {
                                        this.props.proofs.map(p =>
                                            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                                                <a className="underline" href={baseSpentUrl + p.pdfUrl} target="_blank">
                                                    {p.pdfUrl.slice(37)}
                                                </a>
                                            </li>)
                                    }
                                </ul>
                                :
                                <p className="text-center py-5 bg-white rounded-lg border border-gray-200 w-96 text-gray-900">{this.props.commentary}</p>
                            }
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-1 border-t border-solid ">
                            <button
                                className="text-gray-700  font-bold uppercase  px-4 text-sm outline-none focus:outline-none mr-1 mb-1 "
                                type="button"
                                onClick={() => this.handleCancelAction()}
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}