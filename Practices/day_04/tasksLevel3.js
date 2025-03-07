/* 
// 1. Escribe un programa que diga el número de días en un mes.

let month = prompt('Ingrese el mes: ');

switch (month) {
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        console.log(`${month.toUpperCase()} tiene 31 días`);
        break;
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':
        console.log(`${month.toUpperCase()} tiene 31 días`);
        break;
    case 'febrero':
        console.log(`${month.toUpperCase()} tiene 28 días`);
        break;
    default:
        console.log('Ingrese mes válido...')
}

*/


// 2. Escribe un programa que diga el número de días en un mes.  Tomar en cuenta año bisiesto

let month = prompt('Ingrese el mes: ');

switch (month) {
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        console.log(`${month.toUpperCase()} tiene 31 días`);
        break;
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':
        console.log(`${month.toUpperCase()} tiene 31 días`);
        break;
    case 'febrero':
        console.log(`${month.toUpperCase()} tiene 29 días`);
        break;
    default:
        console.log('Ingrese mes válido...')
}