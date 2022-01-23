import { PureComponent } from "react";
import { feeType } from "../../datas/bill/billBaseData"
import Select from 'react-select'

export default class FeeLineForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isExactAmount: "true",
            advanceCash: "false",
        }
    }

    componentDidMount() {
        let tab = []
        Object.keys(feeType).map((key, index) => {
            tab = [...tab, {
                value: index,
                label: feeType[key],
                name: "feeType"
            }]
        })
        this.setState({
            options: tab
        })
    }

    handleSaveAction() {
        const formData = new FormData()
        formData.append("billId", this.props.bill.id)
        if (this.state.file != undefined)
            formData.append("proof", this.state.file)
        formData.append("missionId", 1)
        formData.append("advanceCash", this.state.advanceCash)
        formData.append("commentary", this.state.commentary)
        formData.append("isExactAmount", this.state.isExactAmount)
        formData.append("validateLevel", 1)
        formData.append("expenseDate", this.state.expenseDate)
        formData.append("feeType", this.state.feeType)
        formData.append("amount",this.state.amount)
        this.props.handleSave(formData)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name)

    }
    handleSelectChange = (e) => {
        this.setState({
            [e.name]: e.value
        })
    }

    render() {
        return (

            <form className="">
                {/* Date de la dépense */}
                <div>
                    <label htmlFor="expenseDate" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " >Date de la dépense</label>
                    <input onChange={(e) => this.handleChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="date" name="expenseDate" required />
                </div>
                {/* Amount */}
                <div className="mb-1">
                    <label htmlFor="amount" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">Montant de la dépense</label>
                    <input onChange={(e) => this.handleChange(e)} type="number" name="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                {/* Fee Type */}
                <div className="mb-1">
                    <label htmlFor="feeType" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">Type de dépense</label>
                    {/* <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"> */}
                    <Select
                        options={this.state.options}
                        onChange={(this.handleSelectChange)} />
                    {/* </select> */}
                </div>

                <div className="flex justify-around">
                    <div>
                        {/* advance y/n */}
                        <legend>Avance sur frais ?</legend>
                        <span className="flex items-baseline">
                            <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="advanceCash" value="false" checked />
                            <label htmlFor="advanceCash" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " >Non</label>
                        </span>
                        <span className="flex items-baseline">
                            <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="advanceCash" value="true" />
                            <label htmlFor="advanceCash" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">Oui</label>
                        </span>
                    </div>
                    <div>
                        {/* exact amount y/n */}
                        <legend>Montant exact ?</legend>
                        <span className="flex items-baseline">
                            <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="isExactAmount" value="false" />
                            <label htmlFor="isExactAmount" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " >Non</label>
                        </span>
                        <span className="flex items-baseline">
                            <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="isExactAmount" value="true" checked />
                            <label htmlFor="isExactAmount" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">Oui</label>
                        </span>
                    </div>
                </div>

                {/* files input */}
                <div>
                    <label htmlFor="file" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " >Justificatifs</label>
                    <input onChange={(e) => this.handleChange(e)} type="file" name="file" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " multiple />

                </div>
                {/* Commentary */}
                <div>
                    <label htmlFor="commentary" className="block mb-2 text-gray-600 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea onChange={(e) => this.handleChange(e)} name="commentary" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                        className="text-gray-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => this.handleSaveAction()}
                    >
                        Sauvegarder
                    </button>
                    <button
                        className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                        type="button"
                        onClick={() => this.handleSubmitAction()}
                    >
                        Soumettre
                    </button>
                </div>
            </form>
        );
    }
}
