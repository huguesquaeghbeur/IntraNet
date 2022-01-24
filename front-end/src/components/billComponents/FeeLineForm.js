import { PureComponent } from "react";
import { feeType } from "../../datas/bill/billBaseData"
import Select from 'react-select'

export default class FeeLineForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isExactAmount: "true",
            advanceCash: "false",
            spent: this.props.bill.spents.filter(s => s.id == this.props.spentId)
        }
        console.log('form constructor ' + this.props.spentId)
    }

    componentDidMount() {
        let tab = []
        console.log("obje")
        console.log()

        Object.keys(feeType).map((key, index) => {
            tab = [...tab, {
                value: index,
                label: feeType[key],
                name: "feeType"
            }]
        })
        console.log("dans le mount")
        console.log(this.props.spentId)
        if (this.state.spent[0] == undefined) {
            this.setState({
                options: tab
            })
        }
        else {
            console.log("dans le else")
            console.log(this.state.spent)
            console.log(this.state.spent[0].commentary)
            this.setState({
                options: tab,
                commentary: this.state.spent[0].commentary,
                feeType: this.state.spent[0].feeType,
                expenseDate: this.state.spent[0].expenseDate.slice(0, 10),
                missionId: 1,
                isExactAmount: this.state.spent[0].isExactAmount,
                advanceCash: this.state.spent[0].advanceCash,
                amount: this.state.spent[0].amount
            }, () => {
                console.log("dans le setstate")
                console.log(this.state.feeType)
                console.log(Object.values(feeType)[this.state.feeType])

                console.log(this.state.expenseDate.slice(0, 10))
                console.log(this.state.commentary)
            })
        }



        this.setState({
            options: tab,
            // commentary: this.props.spentId != undefined ? "blavla" :"bloblo"
        })
        console.log("did mount fee for ")
        console.log(this.props.spentId)
    }

    handleSaveAction() {
        console.log("dans le save acation   ")
        const formData = new FormData()
        console.log("fee line form " + this.props.bill.id)
        formData.append("billId", this.props.bill.id)
            formData.append("proof", this.state.file)
        formData.append("missionId", 1)
        formData.append("advanceCash", this.state.advanceCash)
        formData.append("commentary", this.state.commentary)
        formData.append("isExactAmount", this.state.isExactAmount)
        formData.append("validateLevel", 1)
        formData.append("expenseDate", this.state.expenseDate)
        formData.append("feeType", this.state.feeType)
        formData.append("amount", this.state.amount)

        if (this.state.spent[0] != undefined) {
            formData.append("id", this.state.spent[0].id)
            this.props.UpdateFeeLine(formData)
        }
        else
            this.props.SaveFeeLine(formData)

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name)
        console.log(this.state)


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
                    <input value={this.state.expenseDate ?? ""} onChange={(e) => this.handleChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="date" name="expenseDate" required />
                </div>
                {/* Amount */}
                <div className="mb-1">
                    <label htmlFor="amount" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">Montant de la dépense</label>
                    <input value={this.state.amount ?? ""} onChange={(e) => this.handleChange(e)} type="number" name="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                {/* Fee Type */}
                <div className="mb-1">
                    <label htmlFor="feeType" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">Type de dépense</label>
                    {/* <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"> */}
                    <Select
                        defaultValue={Object.values(feeType)[this.state.feeType] ?? ""}
                        placeholder={Object.values(feeType)[this.state.feeType] ?? ""}
                        options={this.state.options}
                        onChange={(this.handleSelectChange)} />
                    {/* </select> */}
                </div>

                <div className="flex justify-around">
                    <div>
                        {/* advance y/n */}
                        <legend>Avance sur frais ?</legend>

                        {this.state.advanceCash == "0" ?
                            <span >
                                <span className="flex items-baseline">
                                    <input checked onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="advanceCash" value="false" />
                                    <label htmlFor="advanceCash" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " >Non</label>
                                </span>
                                <span className="flex items-baseline">
                                    <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="advanceCash" value="true" />
                                    <label htmlFor="advanceCash" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">Oui</label>
                                </span>
                            </span>
                            :
                            <span >
                                <span className="flex items-baseline">
                                    <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="advanceCash" value="false" />
                                    <label htmlFor="advanceCash" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " >Non</label>
                                </span>
                                <span className="flex items-baseline">
                                    <input checked onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="advanceCash" value="true" />
                                    <label htmlFor="advanceCash" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">Oui</label>
                                </span>
                            </span>
                        }

                    </div>

                    <div>
                        {/* exact amount y/n */}
                        <legend>Montant exact ?</legend>
                        {this.state.isExactAmount == "0" ?
                            <span >
                                <span className="flex items-baseline">
                                    <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="isExactAmount" value="false" checked />
                                    <label htmlFor="isExactAmount" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " >Non</label>
                                </span>
                                <span className="flex items-baseline">
                                    <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="isExactAmount" value="true" />
                                    <label htmlFor="isExactAmount" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">Oui</label>
                                </span>
                            </span>
                            :
                            <span >

                                <span className="flex items-baseline">
                                    <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="isExactAmount" value="false" />
                                    <label htmlFor="isExactAmount" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " >Non</label>
                                </span>
                                <span className="flex items-baseline">
                                    <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="isExactAmount" value="true" checked />
                                    <label htmlFor="isExactAmount" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">Oui</label>
                                </span>
                            </span>
                        }
                    </div>
                </div>
                {/* files input */}
                <div>
                    <label htmlFor="file" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " >Justificatifs</label>
                    <input onChange={(e) => this.handleChange(e)} type="file" name="file" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " multiple />

                </div>
                {/* Commentary */}
                <div>
                    {console.log("commentarire " + this.state.commentary)}
                    <label htmlFor="commentary" className="block mb-2 text-gray-600 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea value={this.state.commentary ?? ""} onChange={(e) => this.handleChange(e)} name="commentary" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
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
