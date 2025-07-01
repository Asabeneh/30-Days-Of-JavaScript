//1 - Declare uma variável chamada desafio e atribua a ela um valor inicial '30 Dias de JavaScript'.
let desafio = "30 Dias de JavaScript";

//2 - Imprimir uma string no console do browser usando console.log()
console.log(javaScript);

//3 - Imprimir o length da string no console do browser usando o console.log().
console.log(javaScript.length);

//4 - Troque todos os caracteres da string para letras maiúsculas usando o método toUpperCase().
console.log(desafio.toUpperCase());

//5 - Troque todos os caracteres da string para letras minúsculas usando o método toLowerCase().
console.log(desafio.toLowerCase());

//6 - Retirar (Slice) a primeira letra da string usando os métodos substr() ou substring().
console.log(desafio.substring(1));
console.log(desafio.slice(1));

//7 - Dividir a frase Days Of JavaScript de 30 Days Of JavaScript.
console.log(desafio.split(""));

//8 - Verificar se a string contém a palavra Script usando o método includes().
console.log(desafio.includes("Script"));

//9 - Separar a string em um array usando o método split().
console.log(desafio.split());

//10 - Separar a string 30 Dias de JavaScript com espaços usando o método split().
console.log(desafio.split(" "));

//11 - "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" split a string com vírgulas e mude-a para um array.
empresas = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(empresas.split(", "));

//12 - Mude 30 Dias de JavaScript para 30 Dias de Python usando o método replace().
console.log(desafio.split("Javascript").join("Phyton"));

//13 - Qual é o caractere no index 15 em "30 Dias de JavaScript' string? Use o método charAt().
let texto = "30 Dias de JavaScript";
let caractere = texto.charAt(15);
console.log(caractere);

//14 - Qual é o código do caractere de J em "30 Dias de JavaScript" string usando o método charCodeAt().
let texto1 = "30 Dias de JavaScript";
let codigo = texto1.charCodeAt(11);
console.log(codigo);

//15 - Use indexOf para determinar a posição da primeira ocorrência de a em 30 Dias de JavaScript.
console.log(desafio.indexOf("a"));

//16 - Use lastIndexOf para determinar a posição da última ocorrência de a em 30 Dias de JavaScript.
console.log(desafio.lastIndexOf("a"));

//17 - Use indexOf para encontrar a posição da primeira ocorrência da palavra because na seguinte frase:'You cannot end a sentence with because because because is a conjunction'.
let frase =
  "You cannot end a sentence with because because because is a conjunction";
console.log(frase.indexOf("because"));

//18 - Use lastIndexOf para encontrar a posição da última ocorrência da palavra because na seguinte frase:'You cannot end a sentence with because because because is a conjunction'.
console.log(frase.lastIndexOf("because"));

//19 - Use search para encontrar a posição da primeira ocorrência da palavra because na seguinte frase:'You cannot end a sentence with because because because is a conjunction'.
console.log(frase.search("because"));

//20 - Use trim() para remover qualquer espaço adicional no início e no final da string .E.g " 30 Dias de JavaScript ".
let fraseComEspacos = " 30 Dias de JavaScript ";
console.log(fraseComEspacos.trim());

//21 - Use startsWith() com a string 30 Dias De JavaScript e faça o resultado ser verdadeiro.
console.log(desafio.startsWith("30 Dias De JavaScript"));

//22 - Use endsWith() com a string 30 Dias De JavaScript e faça o resultado ser verdadeiro.
let desafio2 = "30 Dias De JavaScript";
console.log(desafio2.endsWith("30 Dias De JavaScript"));

//23 - Use match() para encontrar todos os a's em 30 Dias De JavaScript.
let desafio3 = "30 Dias De JavaScript";
console.log(desafio3.match(/a/g));

//24 - Use concat() para unir "30 Dias de" e "JavaScript" para uma única string, "30 Dias de JavaScript".
let parte1 = "30 Dias de";
let parte2 = "JavaScript";
console.log(parte1.concat(" ", parte2));

//25 - Use repeat() para imprimir 30 Dias De JavaScript 2 vezes.
let repeticao = desafio.repeat(2);
console.log(repeticao);

//Exercícios 2

//Usando o console.log() imprimir a seguinte citação:
//  "Não há exercício melhor para o coração que ir lá em baixo e levantar as pessoas" by John Holmes nos ensina a ajudar outras pessoas.
let citação = `"Não há exercício melhor para o coração que ir lá em baixo e levantar as pessoas" by John Holmes nos ensina a ajudar outras pessoas.`;
console.log(citação);

//Usando o console.log() imprimir a seguinte citação de Madre Teresa:
//  "O amor não é paternalista e a caridade não tem a ver com pena, tem a ver com amor. Caridade e amor são a mesma coisa – com a caridade você dá amor, então não dê apenas dinheiro, mas estenda sua mão."
let citação2 = `"O amor não é paternalista e a caridade não tem a ver com pena, tem a ver com amor. Caridade e amor são a mesma coisa – com a caridade você dá amor, então não dê apenas dinheiro, mas estenda sua mão."`;
console.log(citação2);

//Verificar se typeOf "10" é exatamente igual a 10. Se não, faça ser exatamente igual.
let numero = "10";
console.log(typeof numero === "number" ? numero : Number(numero));

//Verificar se parseFloat("9.8) é igual a 10. Se não, faça ser exatamente igual com 10.
let numeroFloat = parseFloat("9.8");
console.log(numeroFloat === 10 ? numeroFloat : 10);

//Verificar se "ão" é encontrado em ambos algodão e jargão.
let palavra1 = "algodão";
let palavra2 = "jargão";
console.log(palavra1.includes("ão") && palavra2.includes("ão"));

//Espero que este curso não tenha muitos jargões. Verifique se jargões está na frase.
let fraseJargao = "Espero que este curso não tenha muitos jargões.";
console.log(fraseJargao.includes("jargões"));

//Gerar um número aleatório entre incluindo 0 e 100.
let numeroAleatorio = Math.floor(Math.random() * 101);
console.log(numeroAleatorio);

//Gerar um número aleatório entre incluindo 50 e 100.
let numeroAleatorio50a100 = Math.floor(Math.random() * 51) + 50;
console.log(numeroAleatorio50a100);

//Gerar um número aleatório entre incluindo 0 e 255.
let numeroAleatorio0a255 = Math.floor(Math.random() * 256);
console.log(numeroAleatorio0a255);

//Acesse os caracteres da string "JavaScript" usando um número aleatório.
let stringJavaScript = "JavaScript";
let indiceAleatorio = Math.floor(Math.random() * stringJavaScript.length);
console.log(stringJavaScript.charAt(indiceAleatorio));

//Use console.log() e imprimir os caracteres no seguinte padrão.

/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/
console.log("1 1 1 1 1");
console.log("2 1 2 4 8");
console.log("3 1 3 9 27");
console.log("4 1 4 16 64");
console.log("5 1 5 25 125");

//Use substr para retirar da frase because because because da seguinte frase: 'You cannot end a sentence with because because because is a conjunction'.
let fraseRetirada =
  "You cannot end a sentence with because because because is a conjunction";
let inicio = fraseRetirada.indexOf("because");
let fim = inicio + "because because because".length;
let resultado = fraseRetirada.substring(inicio, fim);
console.log(resultado);

//Exercícios 3

//"Amor é a melhor coisa neste mundo. Alguns encontraram seu amor e alguns ainda estão procurando pelo seu amor." Contar o número de palavras amor nesta frase.
let amor =
  "Amor é a melhor coisa neste mundo. Alguns encontraram seu amor e alguns ainda estão procurando pelo seu amor.";
let contagemAmor = amor.match(/amor/gi);
console.log(
  `A palavra "amor" aparece ${
    contagemAmor ? contagemAmor.length : 0
  } vezes na frase.`
);

//Use match() para contar os números de todos os because na seguinte frase: 'You cannot end a sentence with because because because is a conjunction'.
let fraseBecause =
  "You cannot end a sentence with because because because is a conjunction";
let contagemBecause = fraseBecause.match(/because/gi);
console.log(
  `A palavra "because" aparece ${
    contagemBecause ? contagemBecause.length : 0
  } vezes na frase.`
);

//Limpar o seguinte texto e encontrar a palavra mais repetida (dica, use replace e expressões regulares)
//  const frase = " %I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching "
let textoLimpar =
  " %I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching ";
let textoLimpo = textoLimpar
  .replace(/[%$@&#;]/g, "")
  .replace(/\s+/g, " ")
  .trim()
  .toLowerCase();
let palavras = textoLimpo.split(" ");
let contagemPalavras = {};
palavras.forEach((palavra) => {
  contagemPalavras[palavra] = (contagemPalavras[palavra] || 0) + 1;
});
let palavraMaisRepetida = Object.keys(contagemPalavras).reduce((a, b) =>
  contagemPalavras[a] > contagemPalavras[b] ? a : b
);
console.log(
  `A palavra mais repetida é "${palavraMaisRepetida}" com ${contagemPalavras[palavraMaisRepetida]} ocorrências.`
);

//Calcular o total anual de uma pessoa extraindo os números do seguinte texto. "Ele recebe 5000 euros de salário por mês, 10000 euros de bônus anual, 15000 euros de cursos onlines por mês.'.
let textoSalario =
  "Ele recebe 5000 euros de salário por mês, 10000 euros de bônus anual, 15000 euros de cursos onlines por mês.";
let numeros = textoSalario.match(/\d+/g).map(Number);
let salarioMensal = numeros[0];
let bonusAnual = numeros[1];
let cursosMensal = numeros[2];
let totalAnual = salarioMensal * 12 + bonusAnual + cursosMensal * 12;
console.log(`O total anual é ${totalAnual} euros.`);
