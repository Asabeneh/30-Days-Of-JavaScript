<div align="center">
  <h1> 30 Dias de JavaScript: Condicionais </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Seguir no Twitter" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Autor:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Janeiro, 2020</small>
</sub>

</div>

[<< Dia 3](../Dia_03_Booleanos_Operadores_Data/Dia_03_booleanos_operadores_data.md) | [Dia 5 >>](../05_Day_Arrays/05_day_arrays.md)

![Trinta Dias de JavaScript](../../images/banners/day_1_4.png)

- [📔 Dia 4](#-dia-4)
  - [Condicionais](#condicionais)
    - [If](#if)
    - [If Else](#if-else)
    - [If Else If Else](#if--else-if-else)
    - [Switch](#switch)
    - [Operadores Ternários](#operadores-ternários)
  - [💻 Exercícios](#-exercícios)
    - [Exercícios: Nível 1](#exercícios-nível-1)
    - [Exercícios: Nível 2](#exercícios-nível-2)
    - [Exercícios: Nível 3](#exercícios-nível-3)

# 📔 Dia 4

## Condicionais

As declarações condicionais são usadas para tomar decisões com base em diferentes condições.
Por padrão, as declarações em JavaScript são executadas sequencialmente de cima para baixo. Se a lógica de processamento exigir, o fluxo sequencial de execução pode ser alterado de duas maneiras:

- Execução condicional: um bloco de uma ou mais declarações será executado se uma certa expressão for verdadeira
- Execução repetitiva: um bloco de uma ou mais declarações será repetidamente executado enquanto uma certa expressão for verdadeira. Nesta seção, vamos cobrir as declarações _if_, _else_ , _else if_. Os operadores de comparação e lógicos que aprendemos nas seções anteriores serão úteis aqui.

Condições podem ser implementadas das seguintes maneiras:

- if
- if else
- if else if else
- switch
- operador ternário

### If

Em JavaScript e outras linguagens de programação, a palavra-chave _if_ é usada para verificar se uma condição é verdadeira e para executar o bloco de código. Para criar uma condição if, precisamos da palavra-chave _if_, condição dentro de um parêntese e bloco de código dentro de chaves ({}).

```js
// sintaxe
if (condição) {
  // esta parte do código é executada para condição verdadeira
}
```

**Exemplo:**

```js
let num = 3;
if (num > 0) {
  console.log(`${num} é um número positivo`);
}
//  3 é um número positivo
```

Como você pode ver no exemplo de condição acima, 3 é maior que 0, então é um número positivo. A condição foi verdadeira e o bloco de código foi executado. No entanto, se a condição for falsa, não veremos nenhum resultado.

```js
let isRaining = true;
if (isRaining) {
  console.log('Lembre-se de levar seu casaco de chuva.');
}
```

O mesmo vale para a segunda condição, se isRaining for falso, o bloco if não será executado e não veremos nenhum resultado. Para ver o resultado de uma condição falsa, deveríamos ter outro bloco, que será else.

### If Else

Se a condição for verdadeira, o primeiro bloco será executado, se não, a condição else será executada.

```js
// sintaxe
if (condição) {
  // esta parte do código é executada para condição verdadeira
} else {
  // esta parte do código é executada para condição falsa
}
```

```js
let num = 3;
if (num > 0) {
  console.log(`${num} é um número positivo`);
} else {
  console.log(`${num} é um número negativo`);
}
//  3 é um número positivo

num = -3;
if (num > 0) {
  console.log(`${num} é um número positivo`);
} else {
  console.log(`${num} é um número negativo`);
}
//  -3 é um número negativo
```

```js
let isRaining = true;
if (isRaining) {
  console.log('Você precisa de um casaco de chuva.');
} else {
  console.log('Não precisa de casaco de chuva.');
}
// Você precisa de um casaco de chuva.

isRaining = false;
if (isRaining) {
  console.log('Você precisa de um casaco de chuva.');
} else {
  console.log('Não precisa de casaco de chuva.');
}
// Não precisa de casaco de chuva.
```

A última condição é falsa, portanto, o bloco else foi executado. E se tivermos mais de duas condições? Nesse caso, usaríamos condições else if.

### If Else if Else

Na nossa vida diária, tomamos decisões diariamente. Tomamos decisões não apenas verificando uma ou duas condições, mas fazemos decisões baseadas em múltiplas condições. Semelhante à nossa vida diária, a programação também está cheia de condições. Usamos else if quando temos múltiplas condições.

```js
// sintaxe
if (condição) {
  // código
} else if (condição) {
  // código
} else {
  //  código
}
```

**Exemplo:**

```js
let a = 0;
if (a > 0) {
  console.log(`${a} é um número positivo`);
} else if (a < 0) {
  console.log(`${a} é um número negativo`);
} else if (a == 0) {
  console.log(`${a} é zero`);
} else {
  console.log(`${a} não é um número`);
}
```

```js
// if else if else
let clima = 'ensolarado';
if (clima === 'chuvoso') {
  console.log('Você precisa de um casaco de chuva.');
} else if (clima === 'nublado') {
  console.log('Pode estar frio, você precisa de uma jaqueta.');
} else if (clima === 'ensolarado') {
  console.log('Saia livremente.');
} else {
  console.log('Não precisa de casaco de chuva.');
}
```

### Switch

Switch é uma alternativa para **if else if else**.
A declaração switch começa com a palavra-chave _switch_ seguida por um parêntese e bloco de código. Dentro do bloco de código, teremos diferentes casos. O bloco de caso é executado se o valor nos parênteses da declaração switch corresponder ao valor do caso. A declaração break é para terminar a execução para que a execução do código não continue após a condição ser satisfeita. O bloco default é executado se todos os casos não satisfizerem a condição.

```js
switch (valorDoCaso) {
  case 1:
    // código
    break;
  case 2:
    // código
    break;
  case 3:
    // código
    break;
  default:
  // código
}
```

```js
let clima = 'nublado';
switch (clima) {
  case 'chuvoso':
    console.log('Você precisa de um casaco de chuva.');
    break;
  case 'nublado':
    console.log('Pode estar frio, você precisa de uma jaqueta.');
    break;
  case 'ensolarado':
    console.log('Saia livremente.');
    break;
  default:
    console.log('Não precisa de casaco de chuva.');
}

// Mais Exemplos de Switch
let diaEntradaUsuario = prompt('Que dia é hoje?');
let dia = diaEntradaUsuario.toLowerCase();

switch (dia) {
  case 'segunda-feira':
    console.log('Hoje é segunda-feira');
    break;
  case 'terça-feira':
    console.log('Hoje é terça-feira');
    break;
  case 'quarta-feira':
    console.log('Hoje é quarta-feira');
    break;
  case 'quinta-feira':
    console.log('Hoje é quinta-feira');
    break;
  case 'sexta-feira':
    console.log('Hoje é sexta-feira');
    break;
  case 'sábado':
    console.log('Hoje é sábado');
    break;
  case 'domingo':
    console.log('Hoje é domingo');
    break;
  default:
    console.log('Não é um dia da semana.');
}
```

// Exemplos para usar condições nos casos

```js
let num = prompt('Digite um número');
switch (true) {
  case num > 0:
    console.log('O número é positivo');
    break;
  case num == 0:
    console.log('O número é zero');
    break;
  case num < 0:
    console.log('O número é negativo');
    break;
  default:
    console.log('O valor digitado não foi um número');
}
```

### Operadores Ternários

Outra maneira de escrever condicionais é usando operadores ternários. Já cobrimos isso em outras seções, mas também devemos mencionar aqui.

```js
let isRaining = true;
isRaining
  ? console.log('Você precisa de um casaco de chuva.')
  : console.log('Não precisa de casaco de chuva.');
```

🌕 Você é extraordinário e possui um potencial notável. Você acabou de completar os desafios do dia 4 e está quatro passos à frente no seu caminho para a grandeza. Agora faça alguns exercícios para o seu cérebro e músculo.

## 💻 Exercícios

### Exercícios: Nível 1

1. Obtenha a entrada do usuário usando prompt(“Digite sua idade:”). Se o usuário tiver 18 anos ou mais, dê o feedback: 'Você tem idade suficiente para dirigir', mas se não tiver 18 anos, dê outro feedback indicando quantos anos ele precisa esperar para completar 18 anos.

```sh
Digite sua idade: 30
Você tem idade suficiente para dirigir.

Digite sua idade: 15
Você tem que esperar mais 3 anos para dirigir.
```

1. Compare os valores de myAge e yourAge usando if … else. Com base na comparação, registre o resultado no console indicando quem é mais velho (eu ou você). Use prompt(“Digite sua idade:”) para obter a idade como entrada.

```sh
Digite sua idade: 30
Você é 5 anos mais velho do que eu.
```

1. Se a for maior que b, retorne 'a é maior que b' senão 'a é menor que b'. Tente implementar de duas maneiras

   - usando if else
   - operador ternário.

```js
let a = 4;
let b = 3;
```

```sh
4 é maior que 3
```

1. Números pares são divisíveis por 2 e o resto é zero. Como você verifica se um número é par ou não usando JavaScript?

```sh
Digite um número: 2
2 é um número par

Digite um número: 9
9 é um número ímpar.
```

### Exercícios: Nível 2

1. Escreva um código que possa dar notas aos alunos de acordo com suas pontuações:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
1. Verifique se a estação é Outono, Inverno, Primavera ou Verão.
   Se a entrada do usuário for:
   - Setembro, Outubro ou Novembro, a estação é Outono.
   - Dezembro, Janeiro ou Fevereiro, a estação é Inverno.
   - Março, Abril ou Maio, a estação é Primavera
   - Junho, Julho ou Agosto, a estação é Verão
1. Verifique se um dia é dia de semana ou um dia útil. Seu script receberá o dia como entrada.

```sh
    Qual é o dia hoje? Sábado
    Sábado é um fim de semana.

    Qual é o dia hoje? sábaDo
    Sábado é um fim de semana.

    Qual é o dia hoje? Sexta-feira
    Sexta-feira é um dia útil.

    Qual é o dia hoje? sexTA-feiRa
    Sexta-feira é um dia útil.
```

### Exercícios: Nível 3

1. Escreva um programa que informe o número de dias em um mês.

```sh
  Digite um mês: Janeiro
  Janeiro tem 31 dias.

  Digite um mês: JANEIRO
  Janeiro tem 31 dias

  Digite um mês: Fevereiro
  Fevereiro tem 28 dias.

  Digite um mês: FEvereiro
  Fevereiro tem 28 dias.
```

1. Escreva um programa que informe o número de dias em um mês, agora considerando o ano bissexto.

🎉 PARABÉNS ! 🎉

[<< Day 3](../Dia_03_Booleanos_Operadores_Data/Dia_03_booleanos_operadores_data.md) | [Day 5 >>](../05_Day_Arrays/05_day_arrays.md)
