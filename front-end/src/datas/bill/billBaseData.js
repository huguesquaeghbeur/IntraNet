export const feeType = {
    other: "Autre",
    transport: "Transport",
    registration: "Inscription",
    equipment: "Matériel",
}

export function GetId(){
    const { id } = useParams()
    return id
}