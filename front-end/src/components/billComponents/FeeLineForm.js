import { PureComponent } from "react";

export default class FeeLineForm extends PureComponent {
    constructor(props) {
        super(props);
    }
    handleChange = (e) => {
        console.log("handleChange")
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount(){
        console.log("form mounted")
        console.log(this.props.bill.id)
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    render() {
        return (

            <form className="">
                {/* Date de la dépense */}
                <div>
                    <label for="expenseDate" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " >Date de la dépense</label>
                    <input onChange={(e) => this.handleChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="date" name="expenseDate" required />
                </div>
                {/* Amount */}
                <div className="mb-1">
                    <label for="amount" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">Montant de la dépense</label>
                    <input onChange={(e) => this.handleChange(e)} type="number" name="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>

                <div className="flex justify-around">
                    <div>
                        {/* advance y/n */}
                        <legend>Avance sur frais ?</legend>
                        <span className="flex items-baseline">
                            <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="advanceCash" value="0" checked />
                            <label for="advanceCash" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " >Non</label>
                        </span>
                        <span className="flex items-baseline">
                            <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="advanceCash" value="1" />
                            <label for="advanceCash" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 ">Oui</label>
                        </span>
                    </div>
                    <div>
                        {/* exact amount y/n */}
                        <legend>Montant exact ?</legend>
                        <span className="flex items-baseline">
                            <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="isExactAmount" value="0" />
                            <label htmlFor="isExactAmount" className="block text-gray-600 mb-2 text-sm font-medium text-gray-900 " >Non</label>
                        </span>
                        <span className="flex items-baseline">
                            <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="isExactAmount" value="1" checked />
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
                    <textarea onChange={(e) => this.handleChange(e)} name="message" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                        className="text-gray-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => this.handleConfirmAction()}
                    >
                        Sauvegarder
                    </button>
                    <button
                        className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                        type="button"
                        onClick={() => this.handleCancelAction()}
                    >
                        Soumettre
                    </button>
                </div>
            </form>
        );
    }
}
