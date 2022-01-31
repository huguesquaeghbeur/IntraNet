
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
export const dateFormat = (date)=>{
    return new Date(date).toLocaleDateString('fr-FR', options)
}