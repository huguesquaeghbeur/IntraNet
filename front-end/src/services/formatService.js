
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
export const dateFormat = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', options)
}

export const getDateNowForBdd = () => {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}