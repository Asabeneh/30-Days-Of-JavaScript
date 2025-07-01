//1- Obtenha a entrada do usuário usando prompt(“Digite sua idade:”). Se o usuário tiver 18 anos ou mais, dê o feedback: 'Você tem idade suficiente para dirigir', mas se não tiver
// 18 anos, dê outro feedback indicando quantos anos ele precisa esperar para completar 18 anos
let idade = prompt("Digite sua idade:");
if (idade >= 18) {
  console.log("Você tem idade suficiente para dirigir");
} else {
  let anosRestantes = 18 - idade;
  console.log(
    `Você precisa esperar mais ${anosRestantes} anos para completar 18 anos`
  );
}

//2 - Compare os valores de myAge e yourAge usando if … else. Com base na comparação, registre o resultado no console indicando quem é mais velho (eu ou você).
// Use prompt(“Digite sua idade:”) para obter a idade como entrada.
let myAge = 27;
let yourAge = prompt("Digite sua idade:");
if (myAge > yourAge) {
  console.log("Eu sou mais velho que você");
} else if (myAge < yourAge) {
  console.log("Você é mais velho que eu");
} else {
  console.log("Nós temos a mesma idade");
}
//3 - Se a for maior que b, retorne 'a é maior que b' senão 'a é menor que b'. Tente implementar de duas maneiras
//usando if else
//operador ternário.
let a = 4;
let b = 3;
if (a > b) {
  console.log("a é maior que b");
} else {
  console.log("a é menor que b");
}
// Usando operador ternário
let resultado = a > b ? "a é maior que b" : "a é menor que b";
console.log(resultado);

//4 - Números pares são divisíveis por 2 e o resto é zero. Como você verifica se um número é par ou não usando JavaScript?
//Digite um número: 2
//2 é um número par
let numero = prompt("Digite um número:");
if (numero % 2 === 0) {
  console.log(`${numero} é um número par`);
} else {
  console.log(`${numero} é um número ímpar`);
}

//Digite um número: 9
//9 é um número ímpar.
let numero2 = prompt("Digite um número:");
if (numero2 % 2 === 0) {
  console.log(`${numero2} é um número par`);
} else {
  console.log(`${numero2} é um número ímpar`);
}

//5 - Escreva um código que possa dar notas aos alunos de acordo com suas pontuações:
//80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F
let nota = prompt("Digite a pontuação do aluno:");
if (nota >= 80 && nota <= 100) {
  console.log("A");
} else if (nota >= 70 && nota < 80) {
  console.log("B");
} else if (nota >= 60 && nota < 70) {
  console.log("C");
} else if (nota >= 50 && nota < 60) {
  console.log("D");
} else if (nota >= 0 && nota < 50) {
  console.log("F");
} else {
  console.log("Nota inválida");
}
//6 - Verifique se um dia é dia de semana ou um dia útil. Seu script receberá o dia como entrada.
/*    Qual é o dia hoje? Sábado
    Sábado é um fim de semana.    

    Qual é o dia hoje? sábaDo
    Sábado é um fim de semana.

    Qual é o dia hoje? Sexta-feira
    Sexta-feira é um dia útil.

    Qual é o dia hoje? sexTA-feiRa
    Sexta-feira é um dia útil.*/

let dia = prompt("Qual é o dia hoje?").toLowerCase();
if (
  dia === "segunda-feira" ||
  dia === "terça-feira" ||
  dia === "quarta-feira" ||
  dia === "quinta-feira" ||
  dia === "sexta-feira"
) {
  console.log(`${dia.charAt(0).toUpperCase() + dia.slice(1)} é um dia útil.`);
} else if (dia === "sábado" || dia === "domingo") {
  console.log(
    `${dia.charAt(0).toUpperCase() + dia.slice(1)} é um fim de semana.`
  );
} else {
  console.log("Dia inválido. Por favor, digite um dia da semana válido.");
}
//7 - screva um programa que informe o número de dias em um mês.
/*  Digite um mês: Janeiro
  Janeiro tem 31 dias.

  Digite um mês: JANEIRO
  Janeiro tem 31 dias

  Digite um mês: Fevereiro
  Fevereiro tem 28 dias.

  Digite um mês: FEvereiro
  Fevereiro tem 28 dias.*/
let mes = prompt("Digite um mês:").toLowerCase();
switch (mes) {
  case "janeiro":
  case "março":
  case "maio":
  case "julho":
  case "agosto":
  case "outubro":
  case "dezembro":
    console.log(`${mes.charAt(0).toUpperCase() + mes.slice(1)} tem 31 dias.`);
    break;
  case "abril":
  case "junho":
  case "setembro":
  case "novembro":
    console.log(`${mes.charAt(0).toUpperCase() + mes.slice(1)} tem 30 dias.`);
    break;
  case "fevereiro":
    console.log(`${mes.charAt(0).toUpperCase() + mes.slice(1)} tem 28 dias.`);
    break;
  default:
    console.log("Mês inválido. Por favor, digite um mês válido.");
}
