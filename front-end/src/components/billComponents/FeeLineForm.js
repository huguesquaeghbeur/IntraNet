import { PureComponent } from "react";
import { feeType } from "../../datas/bill/billBaseData"
import Select from 'react-select'
import ValidationFormModalWindow from "./ValidationFormModalWindow";
import ListModalWindow from "./ListModalWindow";

// parent component : billComponent/AddFeeLineModalWindow


export default class FeeLineForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            validationFormMW: false,
            showingList: false,
            spent: this.props.bill.spents.filter(s => s.id == this.props.spentId),
            billId: this.props.bill.id,
            expenseDate: undefined,
            amount: undefined,
            missionId: undefined,
            feeType: undefined,
            advanceCash: undefined,
            isExactAmount: undefined,
            commentary: undefined,
        }
    }

    componentDidMount() {

        let tab = []
        let tabMissions = []
        Object.keys(feeType).map((key, index) => {
            tab = [...tab, {
                value: index,
                label: feeType[key],
                name: "feeType"
            }]
        })
        this.props.collaborator.missions.map((key, index) => {
            tabMissions = [...tabMissions, {
                value: key.id,
                label: key.name,
                name: "missionId"
            }]

        })
        if (this.state.spent[0] === undefined) {
            this.setState({
                validate: 1,
                options: tab,
                optionsMission: tabMissions
            })
        }
        else {
            this.setState({
                options: tab,
                optionsMission: tabMissions,
                id: this.state.spent[0].id,
                commentary: this.state.commentary !== "" ? this.state.spent[0].commentary : "",
                feeType: this.state.spent[0].feeType,
                expenseDate: this.state.spent[0].expenseDate.slice(0, 10),
                missionId: this.state.spent[0].missionId,
                isExactAmount: this.state.spent[0].isExactAmount,
                advanceCash: this.state.spent[0].advanceCash,
                amount: this.state.spent[0].amount,
                validate: this.state.spent[0].validate,
                files: this.state.spent[0].proofs,
            })
        }

    }

    submitAction() {
        if (this.props.collaborator !== undefined && this.props.collaborator.status !== "0") {
            this.setState({
                ...this.state,
                validate: 3
            }, () => {
                this.confirmAction()
            })
        }
        else {
            this.setState({
                ...this.state,
                validate: 2
            }, () => {
                this.confirmAction()
            })
        }
    }

    confirmAction() {
        if (Object.values(this.state).includes(undefined) || Object.values(this.state).includes("")) {
            this.setState({
                validationFormMW: true
            })
        } else {
            if (this.state.spent[0] != undefined) {
                this.props.UpdateFeeLine(this.state)
            }
            else {
                this.props.SaveFeeLine(this.state)
            }
        }

    }

    handleFileChange = (e) => {
        this.setState({
            [e.target.name]: e.target.files,
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSelectChange = (e) => {
        this.setState({
            [e.name]: e.value
        })
    }

    closeValidationMW = () => {
        this.setState({
            validationFormMW: false,
        })
    }

    handleProofClick(proofs) {
        this.setState({
            proofs: proofs
        }, () => {
            this.setState({
                showingList: true
            })
        })
    }
    closeListMW = () => {
        this.setState({
            showingList: false,
            proofs: undefined,
        })
    }

    render() {
        return (
            <section>
                {this.state.validationFormMW ?
                    <ValidationFormModalWindow
                        closeValidationMW={this.closeValidationMW}
                        inputName={Object.keys(this.state).find(key => this.state[key] === undefined || this.state[key] === "")}
                    /> : null}
                {this.state.showingList ?
                    <ListModalWindow
                        closeListMW={this.closeListMW}
                        proofs={this.state.proofs}
                    /> : null}
                <form className="" >
                    {/* Date de la dépense */}
                    <div>
                        <label htmlFor="expenseDate" className="block text-gray-600 mb-1 text-sm font-medium text-gray-900 " >Date </label>
                        <input value={this.state.expenseDate ?? ""} onChange={(e) => this.handleChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="date" name="expenseDate" required />
                    </div>
                    {/* Amount */}
                    <div className="mb-1">
                        <label htmlFor="amount" className="block text-gray-600 mb-1 text-sm font-medium text-gray-900 ">Montant </label>
                        <input value={this.state.amount ?? ""} onChange={(e) => this.handleChange(e)} type="number" name="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>

                    {/* Mission */}
                    <div className="mb-1">
                        <label htmlFor="missionId" className="block text-gray-600 mb-1 text-sm font-medium text-gray-900 ">Mission concernée</label>
                        <Select
                            defaultValue={this.state.missionId ?? ""}
                            placeholder={this.state.missionId !== undefined && this.state.optionsMission !== undefined ? this.state.optionsMission.filter(l => l.value === this.state.missionId)[0].label : ""}
                            options={this.state.optionsMission}
                            onChange={(this.handleSelectChange)} />
                    </div>

                    {/* Fee Type */}
                    <div className="mb-1">
                        <label htmlFor="feeType" className="block text-gray-600 mb-1 text-sm font-medium text-gray-900 ">Type de dépense</label>
                        <Select
                            defaultValue={Object.values(feeType)[this.state.feeType] ?? ""}
                            placeholder={Object.values(feeType)[this.state.feeType] ?? ""}
                            options={this.state.options}
                            onChange={(this.handleSelectChange)} />
                    </div>

                    <div className="flex justify-around">
                        <div>
                            {/* advance y/n */}
                            <legend>Avance sur frais ?</legend>
                            <span className="flex items-baseline ml-3">
                                <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="advanceCash" value="false" />
                                <label htmlFor="advanceCash" className="block text-gray-600 mb-1 text-sm font-medium text-gray-900 " >Non</label>
                            </span>
                            <span className="flex items-baseline ml-3">
                                <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="advanceCash" value="true" />
                                <label htmlFor="advanceCash" className="block text-gray-600 mb-1 text-sm font-medium text-gray-900 ">Oui</label>
                            </span>

                        </div>

                        <div>
                            {/* exact amount y/n */}
                            <legend>Montant exact ?</legend>
                            <span className="flex items-baseline ml-3">
                                <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="isExactAmount" value="false" />
                                <label htmlFor="isExactAmount" className="block text-gray-600 mb-1 text-sm font-medium text-gray-900 " >Non</label>
                            </span>
                            <span className="flex items-baseline ml-3">
                                <input onChange={(e) => this.handleChange(e)} className="mr-2" type="radio" name="isExactAmount" value="true" />
                                <label htmlFor="isExactAmount" className="block text-gray-600 mb-1 text-sm font-medium text-gray-900 ">Oui</label>
                            </span>
                        </div>
                    </div>

                    {/* files input */}
                    <div>
                        <div className="flex flex-between pt-2">
                            <label htmlFor="file" className="block text-gray-600  text-sm font-medium text-gray-900 " >Justificatifs</label>
                            <input onChange={(e) => this.handleFileChange(e)} type="file" name="proofs" className="block text-gray-600 ml-2 mb-2 text-sm font-medium text-gray-900 " multiple />
                        </div>
                        {this.state.files !== undefined && this.state.files.length > 0 ?
                            <button type="button" onClick={() => this.handleProofClick(this.state.files)} className="text-sm text-gray-700 underline mb-2">
                                Afficher les justificatifs
                            </button>
                            :
                            null
                        }
                    </div>

                    {/* Commentary */}
                    <div>
                        <label htmlFor="commentary" className="block mb-1 text-gray-600 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea value={this.state.commentary ?? ""} onChange={(e) => this.handleChange(e)} name="commentary" rows="2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
                    </div>
                    <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-gray-700 background-transparent font-bold uppercase px-6  text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"

                            type="button"
                            onClick={() => this.confirmAction()}
                        >
                            Sauvegarder
                        </button>
                        <button
                            className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
                            type="button"
                            onClick={() => this.submitAction()}
                        >
                            Soumettre
                        </button>
                    </div>
                </form>
            </section>
        );
    }
}
