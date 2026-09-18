// 1. Cree un formato de hora legible por humanos usando el objeto Date.
// La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let hour = currentDate.getHours();
let newHour = hour.toString().length > 1 ? hour.toString() : '0' + hour.toString();
let minutes = currentDate.getMinutes();
let newMinutes = minutes.toString().length > 1 ? minutes.toString() : '0' + minutes.toString();

console.log(`${year}-${month}-${day} ${newHour}:${newMinutes}`);