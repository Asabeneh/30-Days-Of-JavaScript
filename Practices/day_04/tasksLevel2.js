/*

// 1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = Number(prompt('Ingrese el puntaje del estudiante: '));

switch (true) {
    case score >= 80:
        console.log('El estudiante tiene una calificación con la letra A');
        break;
    case score >= 70:
        console.log('El estudiante tiene una calificación con la letra B');
        break;
    case score >= 60:
        console.log('El estudiante tiene una calificación con la letra C');
        break;
    case score >= 50:
        console.log('El estudiante tiene una calificación con la letra D');
        break;
    case score >= 0:
        console.log('El estudiante tiene una calificación con la letra F');
        break;
    default:
        console.log('Puntaje no válido (0 - 100)');
}


// 2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es:

// Septiembre, Octubre o Noviembre, la temporada es Otoño.
// Diciembre, Enero o Febrero, la temporada es Invierno.
// Marzo, Abril o Mayo, la temporada es Primavera
// Junio, Julio o Agosto, la temporada es Verano

let month = prompt('Ingrese el mes: ');

switch (month) {
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
        console.log('Está en temporada de OTOÑO');
        break;
    case 'diciembre':
    case 'enero':
    case 'febrero':
        console.log('Está en temporada de INVIERNO');
        break;
    case 'marzo':
    case 'abril':
    case 'mayo':
        console.log('Está en temporada de PRIMAVERA');
        break;
    case 'junio':
    case 'julio':
    case 'agosto':
        console.log('Está en temporada de VERANO');
        break;
    default:
        console.log('Ingrese mes válido...')
}
*/


// 3. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.
let day = prompt('Qué día quiere consultar: ');
switch (day) {
    case 'lunes':
    case 'martes':
    case 'miércoles':
    case 'jueves':
    case 'viernes':
        console.log(`El ${day.toUpperCase()} es un día laborable`)
        break;        
        case 'sábado':
        case 'domingo':
            console.log(`El ${day.toUpperCase()} es un día No laborable. Es fin de semana`)
            break;
    default:
        console.log('Ingrese un día válido...')
        break;
}

