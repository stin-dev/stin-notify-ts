import "./extenstions";

const date = new Date(2019, 2, 19, 12, 10);
const otherdate = new Date(date.getTime());
otherdate.setDate(date.getDate() + 6);
console.log(date);
console.log(otherdate);