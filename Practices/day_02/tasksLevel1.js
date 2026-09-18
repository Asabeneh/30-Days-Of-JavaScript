// 1. Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
desafio = '30 Days Of JavaScript';


//Imprima la cadena en la consola del navegador usando console.log()
console.log('desafio ---> ', desafio);


// Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log('Longitud desafio --->', desafio.length);


// Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log('toUpperCase() --->', desafio.toUpperCase());


// Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log('toLowerCase() --->', desafio.toLowerCase());


// Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log('substr() --->', desafio.substr(0, 2));


// Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
let phrase = 'Days Of JavaScript';
console.log('substr() --->', desafio.substr(0, desafio.length - phrase.length ));


// Verifique si la cadena contiene una palabra Script usando el método includes()
console.log('includes() --->', desafio.includes('Script'));


// Divide la cadena en un array usando el método split()
console.log('split() --->', desafio.split());


// Divida la cadena 30 Days Of JavaScript en el espacio usando el método split()
console.log('split("") --->', desafio.split(" "));


// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log('split(", ") --->', str.split(", "));


// C30 Days Of JavaScript a 30 Days Of Python usando el método replace().
console.log('replace() --->', desafio.replace('JavaScript', 'Pyton'));


// ¿Qué es el carácter en el índice 15 en la cadena '30 Days Of JavaScript'? Utilice el método charAt().
console.log('charAt() --->', desafio.charAt(15));


// ¿Cuál es el código de carácter de J en la cadena '30 Days Of JavaScript' usando charCodeAt()
console.log('charCodeAt() --->', desafio.charCodeAt(11));


// Use indexOf para determinar la posición de la primera aparición de a en 30 Days Of JavaScript
console.log('indexOf() --->', desafio.indexOf('a'));


// Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 Days Of JavaScript.
console.log('lastIndexOf() --->', desafio.lastIndexOf('a'));


// Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let str2 = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log('indexOf() --->', str2.indexOf('porque'));


// Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log('lastIndexOf() --->', str2.lastIndexOf('porque'));


// Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log('search()) --->', str2.search('porque'));


// Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 Days Of JavaScript'.
let str3 = '       No puedes terminar una oración con porque porque porque es una conjunción'
console.log('str3 --->', str3);
console.log('trim() --->', str3.trim());


// Use el método startsWith() con la cadena 30 Days Of JavaScript y haga que el resultado sea verdadero
console.log('startsWith() --->', desafio.startsWith('30 Days'));


// Use el método endsWith() con la cadena 30 Days Of JavaScript y haga que el resultado sea verdadero
console.log('endsWith() --->', desafio.endsWith('Script'));


// Usa el método match() para encontrar todos los a en 30 Days Of JavaScript
let pattern = /a/gi
console.log('match() --->', desafio.match(pattern));


// Use concat() y fusione '30 Days Of ' y 'JavaScript' en una sola cadena, '30 Days Of JavaScript'
let strOne = '30 Days Of ';
let strTwo = 'JavaScript';
console.log('concat() --->', strOne.concat(strTwo));


// Use el método repeat() para imprimir 30 Days Of JavaScript 2 veces
console.log('repeat() --->', desafio.repeat(2));
