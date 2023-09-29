<div align="center">
  <h1> 30 Dias De JavaScript: Condicionais</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>Author:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
  <small> January, 2020</small>
  </sub>
</div>

[<< Day 3](../03_Day_Booleans_operators_date/03_booleans_operators_date.md) | [Day 5 >>](../05_Day_Arrays/05_day_arrays.md)

![Thirty Days Of JavaScript](../images/banners/day_1_4.png)

- [📔 Day 4](#-day-4)
	- [Conditionals](#conditionals)
		- [If](#if)
		- [If Else](#if-else)
		- [If  Else if Else](#if--else-if-else)
		- [Switch](#switch)
		- [Ternary Operators](#ternary-operators)
	- [💻 Exercises](#-exercises)
		- [Exercises: Level 1](#exercises-level-1)
		- [Exercises: Level 2](#exercises-level-2)
		- [Exercises: Level 3](#exercises-level-3)

# 📔 Day 4

## Conditionals

Declarações condicionais são usadas para tomar decisões com base em diferentes condições.
Por padrão, as instruções no script JavaScript são executadas sequencialmente de cima para baixo. Caso a lógica de processamento assim o exija, o fluxo sequencial de execução pode ser alterado de duas maneiras:

- Execução condicional: um bloco de uma ou mais instruções será executado se uma determinada expressão for verdadeira
- Execução repetitiva: um bloco de uma ou mais instruções será executado repetidamente enquanto uma determinada expressão for verdadeira. Nesta seção, abordaremos as instruções _if_, _else_, _else if_. A comparação e os operadores lógicos que aprendemos nas seções anteriores serão úteis aqui.

As condições podem ser implementadas das seguintes maneiras:

- if
- if else
- if else if else
- switch
- ternary operator

### If

Em JavaScript e outras linguagens de programação a palavra-chave _if_ é usado para verificar se uma condição é verdadeira e para executar o código de bloco. Para criar uma condição if, precisamos _if_ palavra-chave, condição entre parênteses e bloco de código dentro de uma curva bracket({}).

```js
// sintaxe
if (condição) {
  //esta parte do código é executada em condições verdadeiras
}
```

**Example:**

```js
let num = 3
if (num > 0) {
  console.log(`${num} é um número positivo`)
}
//  3 é um número positivo
```

Como você pode ver no exemplo de condição acima, 3 é maior que 0, portanto é um número positivo. A condição era verdadeira e o bloco de código foi executado. No entanto, se a condição for falsa, não veremos nenhum resultado.

```js
let isRaining = true
if (isRaining) {
  console.log('Lembre-se de levar sua capa de chuva.')
}
```

O mesmo vale para a segunda condição, se isRaining for falso, o bloco if não será executado e não veremos nenhuma saída. Para ver o resultado de uma condição falsa, devemos ter outro bloco, que será _else_.

### If Else

Se a condição for verdadeira, o primeiro bloco será executado; caso contrário, a condição else será executada.

```js
// sintaxe
if (condição) {
  // esta parte do código é executada em condições verdadeiras
} else {
  // esta parte do código é executada em condições falsas
}
```

```js
let num = 3
if (num > 0) {
  console.log(`${num} é um número positivo`)
} else {
  console.log(`${num} é um número negativo`)
}
//  3  é um número positivo
num = -3
if (num > 0) {
  console.log(`${num} é um número positivo`)
} else {
  console.log(`${num} é um número negativo`)
}
//  é um número negativo
```

```js
let isRaining = true
if (isRaining) {
  console.log('Você precisa de uma capa de chuva.')
} else {
  console.log('Não há necessidade de capa de chuva.')
}
// Você precisa de uma capa de chuva.

isRaining = false
if (isRaining) {
  console.log('Você precisa de uma capa de chuva.')
} else {
  console.log(Não há necessidade de capa de chuva.')
}
// Não há necessidade de capa de chuva.
```

A última condição é falsa, portanto o bloco else foi executado. E se tivermos mais de duas condições? Nesse caso, usaríamos as condições *else if* .

### If  Else if Else

Em nossa vida diária, tomamos decisões diariamente. Tomamos decisões não verificando uma ou duas condições, mas sim com base em múltiplas condições. Assim como no nosso dia a dia, a programação também é cheia de condicionantes. Usamos *else if* quando temos múltiplas condições.

```js
// syntax
if (condição) {
     // code
} else if (condição) {
   // code
} else {
    //  code

}
```

**Examplo:**

```js
let a = 0
if (a > 0) {
  console.log(`${a} é um número positivo`)
} else if (a < 0) {
  console.log(`${a} é um número negativo`)
} else if (a == 0) {
  console.log(`${a} é zero`)
} else {
  console.log(`${a} não é um número`)
}
```

```js
// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('Você precisa de uma capa de chuva.')
} else if (weather === 'cloudy') {
  console.log('Pode estar frio, você precisa de uma jaqueta.')
} else if (weather === 'sunny') {
  console.log('Saia livremente.')
} else {
  console.log('Não há necessidade de capa de chuva.')
}
```

### Switch

Switch é uma alternativa para **if else if else**.
A instrução switch começa com uma palavra-chave *switch* seguida por um parêntese e um bloco de código. Dentro do bloco de código teremos casos diferentes. O bloco case é executado se o valor entre parênteses da instrução switch corresponder ao valor case. A instrução break serve para encerrar a execução para que a execução do código não pare depois que a condição for satisfeita. O bloco padrão é executado se todos os casos não satisfizerem a condição.

```js
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}
```

```js
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('Você precisa de uma capa de chuva.')
    break
  case 'cloudy':
    console.log('Pode estar frio, você precisa de uma jaqueta.')
    break
  case 'sunny':
    console.log('Saia livremente.')
    break
  default:
    console.log('Não há necessidade de capa de chuva.')
}

// Switch mais exemplos
let dayUserInput = prompt('Que dia é hoje ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'segunda-feira':
    console.log('Hoje é segunda-feira')
    break
  case 'terça-feira':
    console.log('Hoje é terça-feira')
    break
  case 'quarta-feira':
    console.log('Hoje é quarta-feira')
    break
  case 'quinta-feira':
    console.log('Hoje é quinta-feira')
    break
  case 'sexta-feira':
    console.log('Hoje é sexta-feira')
    break
  case 'sábado':
    console.log('Hoje é sábado')
    break
  case 'domingo':
    console.log('Hoje é domingo')
    break
  default:
    console.log('Não é um dia de semana.')
}

```

// Exemplos para usar condições nos casos

```js
let num = prompt('Insira numeros');
switch (true) {
  case num > 0:
    console.log('O número é positivo');
    break;
  case num == 0:
    console.log('Números é zero');
    break;
  case num < 0:
    console.log('O número é negativo');
    break;
  default:
    console.log('O valor inserido não foi um número');
}
```

### Operadores Ternários

Outra forma de escrever condicionais é usando operadores ternários. Já abordamos isso em outras seções, mas também devemos mencioná-lo aqui.

```js
let isRaining = true
isRaining
  ? console.log('Você precisa de uma capa de chuva.')
  : console.log('Não há necessidade de capa de chuva.')
```

🌕  Você é extraordinário e tem um potencial notável. Você acabou de completar os desafios do dia 4 e está quatro passos à frente em seu caminho para a grandeza. Agora faça alguns exercícios para o cérebro e os músculos..  

## 💻 Exercícios

### Exercícios: Nível 1

1. Obtenha a entrada do usuário usando prompt (“Digite sua idade:”). Se o usuário tiver 18 anos ou mais, dê feedback: 'Você tem idade suficiente para dirigir', mas se não tiver 18 anos, dê outro feedback informando que deve esperar o número de anos que ele precisa para completar 18 anos.

   ```sh
   Digite sua idade: 30
   Você tem idade suficiente para dirigir.

   Digite sua idade:15
   Você tem 3 anos para dirigir.
   ```

1. Compare os valores de myAge e yourAge usando if… else. Com base na comparação e registre o resultado no console informando quem é mais velho (eu ou você). Use prompt(“Digite sua idade:”) para obter a idade como entrada.

   ```sh
    Digite sua idade: 30
    Você é 5 anos mais velho que eu.
   ```

1. Se a for maior que b, retorne 'a é maior que b', caso contrário, 'a é menor que b'. Tente implementá-lo de maneiras

     - usando if else
     - operador ternário.

    ```js
      let a = 4
      let b = 3
    ```

    ```sh
      4 is greater than 3
    ```

1. Os números pares são divisíveis por 2 e o resto é zero. Como você verifica se um número é par ou não usando JavaScript?

    ```sh
     Digite um número: 2
     2 é um número par

     Digite um número: 9
     9 é um número ímpar.
    ```

### Exercícios: Nível 2

1. Escreva um código que possa dar notas aos alunos de acordo com suas pontuações:
    - 80-100, UM
    - 70-89,B
    - 60-69, C
    - 50-59, D
    - 0-49, F
1. Verifique se a estação é Outono, Inverno, Primavera ou Verão.
    Se a entrada do usuário for:
    - Setembro, Outubro ou Novembro, a estação é Outono.
    - Dezembro, Janeiro ou Fevereiro, a época é Inverno.
    - Março, abril ou maio, a estação é primavera
    - Junho, julho ou agosto, a temporada é verão
1. Verifique se um dia é fim de semana ou dia útil. Seu script levará o dia como entrada.

```sh
     Que dia é hoje? Sábado
     Sábado é fim de semana.

     Que dia é hoje? sábado
     Sábado é fim de semana.

     Que dia é hoje? Sexta-feira
     Sexta-feira é dia útil.

     Que dia é hoje? Sexta-feira
     Sexta-feira é dia útil.
  ```

### Exercícios: Nível 3

1. Escreva um programa que informe o número de dias de um mês.

   ```sh
     Digite um mês: janeiro
     Janeiro tem 31 dias.

     Insira um mês: JANEIRO
     Janeiro tem 31 dias

     Digite um mês: fevereiro
     Fevereiro tem 28 dias.

     Digite um mês: fevereiro
     Fevereiro tem 28 dias.
   ```

1. Escreva um programa que informe o número de dias de um mês, agora considere o ano bissexto.

🎉 PARABÉNS! 🎉

[<< Dia 3](../Dia_03_Booleanos_Operadores_Data/dia_03_booleanos_operadores_data.md) | [Dia 5 >>](../05_Day_Arrays/05_day_arrays.md)
