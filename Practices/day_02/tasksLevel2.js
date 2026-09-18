// 1. Usando console.log() imprima la siguiente declaración:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let str1 = "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another";
console.log(str1);


// 2. Usando console.log() imprima la siguiente cita de la Madre Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let str2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(str2);


// 3. Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
console.log(typeof(Number('10')) === typeof(10));


// 4. Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
console.log(Math.round(parseFloat('9.8')) === 10);


// 5. Verifique si 'on' se encuentra tanto en Python como en la jargon
let str5 = 'jargon';
console.log(str5.includes('on'));


// 6. Espero que este curso no esté lleno de jargon. Compruebe si jargon está en la oración.
let str6 = 'Espero que este curso no esté lleno de jargon';
console.log(str6.includes(str5));


// 7. Genere un número aleatorio entre 0 y 100 inclusive.
console.log(Math.round(Math.random() * 101));


// 8. Genere un número aleatorio entre 50 y 100 inclusive.
let min8 = 50;
let max8 = 101;
console.log(Math.floor(Math.random() * (max8 - min8) + min8));


// 9. Genere un número aleatorio entre 0 y 255 inclusive.
let min9 = 0;
let max9 = 256;
console.log(Math.floor(Math.random() * (max9 - min9) + min9));


// 10. Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
let str10 = 'JavaScript';
let max10 = str10.length;
let index = Math.floor(Math.random() * max10);
console.log('index ---> ', index, str10[index])


// 11. Use console.log() y caracteres de escape para imprimir el siguiente patrón.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
let valueR1 = 1,
    valueR2 = 2,
    valueR3 = 3,
    valueR4 = 4,
    valueR5 = 5;
console.log(`${valueR1} \t1 \t${Math.pow(valueR1, 1)} \t${Math.pow(valueR1, 2)} \t${Math.pow(valueR1, 3)}`);
console.log(`${valueR2} \t1 \t${Math.pow(valueR2, 1)} \t${Math.pow(valueR2, 2)} \t${Math.pow(valueR2, 3)}`);
console.log(`${valueR3} \t1 \t${Math.pow(valueR3, 1)} \t${Math.pow(valueR3, 2)} \t${Math.pow(valueR3, 3)}`);
console.log(`${valueR4} \t1 \t${Math.pow(valueR4, 1)} \t${Math.pow(valueR4, 2)} \t${Math.pow(valueR4, 3)}`);
console.log(`${valueR5} \t1 \t${Math.pow(valueR5, 1)} \t${Math.pow(valueR5, 2)} \t${Math.pow(valueR5, 3)}`);


// Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let str12 = 'No puedes terminar una oración con porque porque porque es una conjunción';
let phrase12 = 'porque porque porque';
let index12 = str12.indexOf(phrase12);
console.log(index12);
console.log(str12.substr(index12, phrase12.length));