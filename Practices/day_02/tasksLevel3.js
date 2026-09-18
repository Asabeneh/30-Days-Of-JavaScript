// 1. Cuente el número de palabras amor en esta oración:
// El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. 
let str1 = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor'
let pattern1 = /amor/gi;
console.log(str1.match(pattern1).length);


// 2. Usa match() para contar el número de todos los porque en la siguiente oración:
// No puedes terminar una oración con porque porque porque es una conjunción
let str2 = 'No puedes terminar una oración con porque porque porque es una conjunción';
let pattern2 = /porque/gi;
console.log(str2.match(pattern2).length);


// 3. Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).
const sentence =
"%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let pattern3 = /([%$@&#;])/gi;
let newSentence = sentence.replace(pattern3, '');
console.log(newSentence);


// 4. Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 
let str4 = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.';
let patter4 = /\d+/g;
let data = str4.match(patter4);
let salAnual = (Number(data[0]) * 12) + (Number(data[1])) + (Number(data[2] * 12));
console.log(`El salario anual es: ${salAnual.toFixed(2)} COP`);