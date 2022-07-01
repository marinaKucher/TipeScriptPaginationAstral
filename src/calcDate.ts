function calcDate(id:number): string{
    let date= new Date();
    date.setDate(date.getDate() + id-1);
    return (date.toLocaleString("ru", {
        month: 'long',
        day: 'numeric'
    })+ " "+ date.getFullYear()  +" года");
}

export default calcDate