const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]

function getCurrentDate(id:number): string{
    let date= new Date();
    date.setDate(date.getDate() + id);
    let dateOfCreation;
    dateOfCreation = String(date.getDate()) +" " + months[date.getMonth()] +" "+ date.getFullYear();
    return  dateOfCreation;
}
export default getCurrentDate