function getCurrentDate(id:number): string{
    let date= new Date();
    date.setDate(date.getDate() + id-1);
    return (date.toLocaleString("ru", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }));
}
export default getCurrentDate