/*
// 1. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área
// de un triángulo (área = 0,5 x b x h).
let base = Number(prompt('Ingrese la base del triángulo: '));
let hight = Number(prompt('Ingrese la altura del triángulo: '));
console.log(`El área del triángulo de base ${base} y altura ${hight} es: ${0.5 * base * hight}`);


// 2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule 
// el perímetro del triángulo (perímetro = a + b + c)
let sideA = Number(prompt('Ingrese lado A del triángulo: '));
let sideB = Number(prompt('Ingrese lado B del triángulo: '));
let sideC = Number(prompt('Ingrese lado C del triángulo: '));
console.log(`El perímetro del triángulo de lados ${sideA}, ${sideB} y ${sideC} es: ${sideA + sideB + sideC}`);

// 3. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el
// perímetro del rectángulo (perímetro = 2 x (largo + ancho))
let large = Number(prompt('Ingrese largo del rectángulo: '));
let width = Number(prompt('Ingrese ancho del rectángulo: '));
console.log(`El área del rectángulo de largo ${large} y ancho ${width} es: ${large * width}`);
console.log(`El perímetro del rectángulo de largo ${large} y ancho ${width} es: ${2 * (large + width)}`);


// 4. Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia
// de un círculo (c = 2 x pi x r) donde pi = 3.14.
let radio = Number(prompt('Ingrese el radio del círculo: '));
console.log(`El área del círculo de radio ${radio} es: ${Math.PI * radio * radio}`);
console.log(`La circunferencia del círculo de radio ${radio} es: ${2 * Math.PI * radio}`);


// 5. Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
let equation = 'y=-2x-15';
let m = equation.split('=');
console.log('Pendiente de la recta y=2x-2 es: ', m[1].substr(0,  m[1].indexOf('x')));
let valueY = m[1].substr(m[1].indexOf('x') + 1, m[1].length - 1);
console.log(`Intersección con y: P(0, ${valueY})`);
let valueX = (-1 * valueY) / m[1].substr(0,  m[1].indexOf('x'));
console.log(`Intersección con x: P(${valueX}, 0)`);


// 6. La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)
let x1 = 2,
y1 = 2,
x2 = 6,
    y2 = 10;
    let pending = (y2-y1)/(x2-x1);
    console.log('La pendiente de la recta es: ', pending)
    
    
    // 7. Compare la pendiente de las dos preguntas anteriores.
    let pendingEx1 = Number(m[1].substr(0,  m[1].indexOf('x')));
let pendingEx2 = Number(pending);
console.log(`La pendiente de los puntos (0, ${valueY}) y (${valueX}, 0) es ${pendingEx1} `);
console.log(`La pendiente de los puntos (2, 2) y (10, 6) es ${pendingEx2} `);
console.log('Las pendientes son iguales? ---> ', pendingEx1 === pendingEx2);
console.log('La pendiente 1 es mayor a la pendiente 2? --->', pendingEx1 > pendingEx2);
console.log('La pendiente 1 es menor a la pendiente 2? --->', pendingEx1 < pendingEx2);


// 8. Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.
let x = 0;
let y = (Math.pow(x, 2)) + (6 * x) + 9;
console.log(`x = ${x} ---> y = ${y}`);


// 9. Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora.
// ¿Calcular el salario de la persona?
let hoursJobs = Number(prompt('Ingrese horas trabajadas: '));
let payHours = Number(prompt('Ingrese pago pot horas trabajadas: '));
let salary = hoursJobs * payHours;
console.log('Tiene salario de: ', salary);


// 10. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
let myName = 'Marlon García';
(myName.length > 7) ? console.log(`Mi nombre es largo`) : console.log(`Mi nombre es corto`);


// 11. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
let firstName = 'Marlon',
lastName = 'García';
(firstName.length > lastName.length) ?
console.log(`Mi primer nombre, ${firstName} es más largo que mi mi apellido, ${lastName}`) :
console.log(`Mi primer nombre, ${firstName} es más corto que mi mi apellido, ${lastName}`);


// 12. Declare dos variables myAge y yourAge y asignarles los valores iniciales:
let myAge = 20,
yourAge = 40;
(myAge > yourAge) ?
console.log(`Soy ${myAge - yourAge} años mayor que tú`) :
console.log(`Soy ${yourAge - myAge} años menor que tú`);


// 13. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca,
// si no dígale que espere una cierta cantidad de años.
let yearBirth = Number(prompt('Ingrese de nacimiento: '));
let currentDate = new Date();
let ageUser = currentDate.getFullYear() - yearBirth;
(ageUser >= 18) ?
console.log(`Tienes ${ageUser} años. Tiene edad suficiente para conducir`) :
console.log(`Tienes ${ageUser} años. Podrás conducir después de ${18 - ageUser} años`);

// 14. Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede 
// vivir una persona. Supongamos que alguien vive solo cien años
let years = Number(prompt('Ingrese número de años: '));
let quantitySeg = 365 * 24 * 60 * 60 * years;
console.log(`La persona puede vivir ${quantitySeg} segundos`);
*/


// 15. Cree un formato de hora legible por humanos usando el objeto Date.
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();
// YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${day} ${hour}:${minutes}`);
// DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${year} ${hour}:${minutes}`);
// DD/MM/YYYY
console.log(`${day}-${month}-${year}`);
