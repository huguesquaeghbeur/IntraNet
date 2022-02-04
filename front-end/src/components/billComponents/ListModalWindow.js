import { PureComponent } from "react"
import { inputName } from '../../datas/bill/billBaseData'
import { baseSpentUrl } from '../../services/billsService'


export default class ListModalWindow extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)

    }
    handleCancelAction() {
        this.props.closeListMW()
    }

    render() {
        return (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="bg-gray-200 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        {/*body*/}
                        <div className="flex justify-center">
                            <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                                {
                                    this.props.proofs.map(p =>
                                        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                                            <a className="underline" href={baseSpentUrl + p.pdfUrl} target="_blank" download>
                                                {p.pdfUrl.slice(37)}
                                            </a>
                                        </li>)
                                }

                            </ul>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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