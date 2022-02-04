// const DepartmentChief = 2
// const HRM = 3
// const CFO = 4
// const CEO = 5


export const feeType = {
    other: "Autre",
    transport: "Transport",
    registration: "Inscription",
    equipment: "Matériel",
}


//key : collaborator status ; value: feeline status - usefull to display feeline witch waiting for validation

export const ValidateLevel = {
    "2" : "2",
    "4" : "3",
    "5" : "3"
}


export const inputName = {
    expenseDate: "date",
    amount: "montant",
    missionId: "mission",
    feeType: "type de frais",
    proofs:"justificatif",
    commentary:"commentaire"
}
