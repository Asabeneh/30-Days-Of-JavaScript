// 1. Declare las siguientes variables y asignar un valor, use el operador 
// typeof para verificar diferentes tipos de datos:
let firstName = 'Marlon', 
    lastName = 'García', 
    country = 'Colombia', 
    city = 'Medellín', 
    age = 50,
    isMarried = true, 
    year = 2023; 
console.log('firstName ---> \t', typeof(firstName));
console.log('lastName ---> \t', typeof(lastName));
console.log('country ---> \t', typeof(country));
console.log('city -----> \t', typeof(city));
console.log('age ------> \t', typeof(age));
console.log('isMarried ---> \t', typeof(isMarried));
console.log('year ------> \t', typeof(year));


// 2. Verifique si typeof '10' es igual a 10
console.log(typeof('10') == 10);
console.log(typeof('10') === 10);


// 3. Verifique si parseInt('9.8') es igual a 10
console.log(parseInt('9.8') == 10);
console.log(parseInt('9.8') === 10);


// 4. Verifique cualquier valor booleano true o false.
console.log(isMarried == true);
console.log(isMarried == false);


// 5. Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
console.log(10 > 5);
console.log('z' > 'm');
console.log(Math.pow(2,4) > Math.sqrt(16));


// 6. Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
console.log(1 > 5);
console.log('marlon'.length < 'papá'.length);
console.log(Math.pow(2,4) > Math.sqrt(1000));


// 7. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log().
// Después de decidir el resultado, confirmelo usando console.log()
/* 
    _ 4 > 3:    true
    _ 4 >= 3:   true
    _ 4 < 3:    false
    _ 4 <= 3:   false
    _ 4 == 4:   true
    _ 4 === 4:  true
    _ 4 != 4:   false
    _ 4 !== 4:  false
    _ 4 != '4': false
    _ 4 == '4': true
    _ 4 === '4':false
*/
console.log('4 > 3 ---> \t\t',4 > 3);
console.log('4 >= 3 ---> \t\t',4 >= 3);
console.log('4 < 3 ---> \t\t',4 < 3);
console.log('4 <= 3 ---> \t\t',4 <= 3);
console.log('4 == 4 ---> \t\t',4 == 4);
console.log('4 === 4 ---> \t\t',4 === 4);
console.log('4 != 4 ---> \t\t',4 != 4);
console.log('4 !== 4 ---> \t\t',4 !== 4);
console.log('4 != "4" ---> \t\t',4 != '4');
console.log('4 == "4" ---> \t\t',4 == '4');
console.log('4 === "4" ---> \t\t',4 === '4');


// 8. Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
console.log('Python'.length > 'jargon'.length);


// 9. Calcule primero el resultado de las siguientes expresiones sin usar console.log().
// Después de decidir el resultado, confirmelo usando console.log()
/*
    _ 4 > 3 && 10 < 12:     T && T  true
    _ 4 > 3 && 10 > 12:     T && F  false
    _ 4 > 3 || 10 < 12:     T || T  true 
    _ 4 > 3 || 10 > 12:     T || F  true
    _ !(4 > 3):             !T      false
    _ !(4 < 3):             !F      true
    _ !(false):             !F      true
    _ !(4 > 3 && 10 < 12):  !(T && T)   !T  false
    _ !(4 > 3 && 10 > 12):  !(T && F)   !F  true
    _ !(4 === '4'):         !F      true
    _ No hay 'on' tanto en dragon como en python
*/
console.log("4 > 3 && 10 < 12 ---> ", 4 > 3 && 10 < 12);
console.log("4 > 3 && 10 > 12 ---> ", 4 > 3 && 10 > 12);
console.log("4 > 3 || 10 < 12 ---> ", 4 > 3 || 10 < 12);
console.log("4 > 3 || 10 > 12 ---> ", 4 > 3 || 10 > 12);
console.log("!(4 > 3) ---> ", !(4 > 3));
console.log("!(4 < 3) ---> ", !(4 < 3));
console.log("!(false) ---> ", !(false));
console.log("!(4 > 3 && 10 < 12) ---> ", !(4 > 3 && 10 < 12));
console.log("!(4 > 3 && 10 > 12) ---> ", !(4 > 3 && 10 > 12));
console.log("!(4 === '4') ---> ", !(4 === '4'));
console.log(!(!'dragon'.includes('on') && !'python'.includes('on')));


// 10. Utilice el objeto Date para realizar las siguientes actividades
/* 
    _ ¿Qué año es hoy?
    _ ¿Qué mes es hoy con un número?
    _ ¿Qué fecha es hoy?
    _ ¿Qué día es hoy con un número?
    _ ¿Cuál es la hora actual?
    _ ¿Cuántos minutos hay actualmente?
    _ Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
*/
let currentDate = new Date();
console.log('¿Qué año es hoy? ---> ', currentDate.getFullYear());
console.log('¿Qué mes es hoy con un número? ---> ', currentDate.getMonth() + 1);
let dateToday = `${currentDate.getDate()} / ${currentDate.getMonth()+1} / ${currentDate.getFullYear()}`;
console.log('¿Qué fecha es hoy? ---> ', dateToday);
console.log('¿Qué día es hoy con un número? ---> ', currentDate.getDay());
let timeCurrent = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
console.log('¿Cuál es la hora actual? ---> ', timeCurrent);
console.log('¿Cuántos minutos hay actualmente? ---> ', currentDate.getMinutes());
console.log('Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora. ---> ', Date.now());