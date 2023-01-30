/*
// 1. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:").
// Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad
// suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje 
// que indique que debe esperar la cantidad de años que necesita para cumplir 18.
let ageUser = Number(prompt('Ingrese su edad: '));
if (ageUser >= 18) {
    console.log(`Tienes ${ageUser} años. Tiene edad suficiente para conducir`);
} else {
    console.log(`Tienes ${ageUser} años. Te faltan ${18 - ageUser} años para poder conducir`);
}

// 2. Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el
// resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”)
// para obtener la edad como entrada.
let myAge = Number(prompt('Mi edad: '));
let yourAge = Number(prompt('Tú edad: '));
if (myAge > yourAge) {
    console.log(`Soy ${myAge - yourAge} años mayor, por lo tanto, tengo más edad que tú.`);
} else {
    console.log(`Tú eres ${yourAge - myAge} años mayor, por lo tanto, tienes más edad que yo.`);
}


// 3. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes
let a = 1,
b = 3;
// Usando if else
if (a > b) {
    console.log(`${a} es mayor que ${b}`);
} else {
    console.log(`${a} es menor que ${b}`);
}
// operador ternario.
(a > b) ? console.log(`${a} es mayor que ${b}`) : console.log(`${a} es menor que ${b}`);


// 4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un
// número es par o no usando JavaScript?
let number = Number(prompt('Ingrese un número entero: '));
if (number % 2 === 0) {
    console.log(`${number} es PAR`);
} else {
    console.log(`${number} es IMPAR`);
}

(number % 2 === 0) ? console.log(`${number} es PAR`) : console.log(`${number} es IMPAR`);
*/
