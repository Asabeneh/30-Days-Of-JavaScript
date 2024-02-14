<div align="center">
  <h1> 30 Dias de JavaScript: Loops</h1>
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

[<< Dia 5](../Dia_05_Arrays/Dia_05_Arrays.md) | [Dia 7 >>](../Dia_07_Funcoes/Dia_07_Funcoes.md)

![Dia 5](../../images/banners/day_1_6.png)

- [📔 Dia 6](#-dia-6)
  - [Loops](#loops)
    - [Loop for](#for-loop)
    - [Loop while](#while-loop)
    - [Loop do while](#do-while-loop)
    - [Loop for of](#for-of-loop)
    - [break](#break)
    - [continue](#continue)
  - [💻 Exercícios: Dia 6](#-exercíciosdia-6)
    - [Exercícios: Nível 1](#exercícios-nível-1)
    - [Exercícios: Nível 2](#exercícios-nível-2)
    - [Exercícios: Nível 3](#exercícios-nível-3)

# 📔 Dia 6

## Loops

A maioria das atividades que fazemos na vida estão cheias de repetições. Imagine se eu pedisse para você imprimir de 0 a 100 usando console.log(). Para implementar esta simples tarefa pode levar de 2 a 5 minutos, esse tipo de tarefa tediosa e repetitiva pode ser realizada usando loop. Se você prefere assistir a vídeos, pode conferir os [tutoriais em vídeo](https://www.youtube.com/channel/UCM4xOopkYiPwJqyKsSqL9mw)

Em linguagens de programação para realizar tarefa repetitiva usamos diferentes tipos de loops. Os seguintes exemplos são os loops mais usados em JavaScript e outras linguagens de programação.

### Loop for

```js
// Estrutura do loop for
for(initialization, condition, increment/decrement){
  // código vai aqui
}
```

```js
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// 0 1 2 3 4 5
```

```js
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 5 4 3 2 1 0
```

```js
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
```

```sh
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
```

```js
const paises = ['Finlandia', 'Suecia', 'Dinamarca', 'Noruega', 'Islandia'];
const novoArray = [];
for (let i = 0; i < paises.length; i++) {
  novoArray.push(paises[i].toUpperCase());
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
```

Adicionando todos os elementos no array

```js
const numeros = [1, 2, 3, 4, 5];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma = soma + numeros[i]; // pode ser encurtado, soma += numeros[i]
}

console.log(soma); // 15
```

Criando um novo array com base no array existente

```js
const numeros = [1, 2, 3, 4, 5];
const novoArray = [];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  novoArray.push(numeros[i] ** 2);
}

console.log(novoArray); // [1, 4, 9, 16, 25]
```

```js
const paises = ['Finlandia', 'Suecia', 'Noruega', 'Dinamarca', 'Islandia'];
const novoArray = [];
for (let i = 0; i < paises.length; i++) {
  // A função toUpperCase() é usada para converter o texto em maiúsculas
  novoArray.push(paises[i].toUpperCase());
}

console.log(novoArray); // ['FINLANDIA', 'SUECIA', 'NORUEGA', 'DINAMARCA', 'ISLANDIA']
```

### loop while

```js
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// 0 1 2 3 4 5
```

### loop do while

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);

// 0 1 2 3 4 5
```

### for of loop

Nos usamos o loop for of para arrays. É uma maneira muito útil de iterar através de um array se não estivermos interessados no índice de cada elemento no array.

```js
for (const element of arr) {
  // código vai aqui
}
```

```js
const numeros = [1, 2, 3, 4, 5];

for (const num of numeros) {
  console.log(num);
}

// 1 2 3 4 5

for (const num of numeros) {
  console.log(num * num);
}

// 1 4 9 16 25

// adicionando todos os elementos no array
let soma = 0;
for (const num of numeros) {
  soma = soma + num;
  // pode ser encurtado assim, soma += num
  // depois disso, usaremos a sintaxe mais curta (+=, -=, *=, /= etc)
}
console.log(soma); // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]); // pega apenas a primeira letra de cada elemento, H C J R N M
}
```

```js
const paises = ['Finlandia', 'Suecia', 'Noruega', 'Dinamarca', 'Islandia'];
const novoArray = [];
for (const country of paises) {
  novoArray.push(country.toUpperCase());
}

console.log(novoArray); // ['FINLANDIA', 'SUECIA', 'NORUEGA', 'DINAMARCA', 'ISLANDIA']
```

### break

Break é usado para interromper um loop.

```js
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// 0 1 2
```

O código acima para se 3 for encontrado no processo de iteração.

### continue

Nós usamos a palavra-chave _continue_ para pular certas iterações.

```js
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 0 1 2 4 5
```

🌕 Você é tão corajoso, você chegou tão longe. Agora, você ganhou o poder de automatizar tarefas repetitivas e tediosas. Você acabou de completar os desafios do dia 6 e está 6 etapas a mais para sua grandiosidade. Agora alguns exercícios para seu cérebro e seus músculos.

## 💻 Exercícios:Dia 6

### Exercícios: Nível 1

```js
const paises = [
  'Albania',
  'Bolivia',
  'Canada',
  'Dinamarca',
  'Ethiopia',
  'Finlandia',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
```

1. Itere de 0 a 10 usando um loop for, faça o mesmo usando um loop while e um loop do while
2. Itere de 10 a 0 usando um loop for, faça o mesmo usando um loop while e um loop do while
3. Itere de 0 para n usando um loop for
<!-- 4. Write a loop that makes the following pattern using console.log(): -->
4. Escreva um loop que faz o seguinte padrão usando console.log():

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```

5. Use loop para imprimir o seguinte padrão:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```

6. Usando loop imprima o seguinte padrão

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```

7. Use um loop para iterar de 0 a 100 e imprimir apenas números pares
8. Use um loop para iterar de 0 a 100 e imprimir apenas números ímpares
9. Use um loop para iterar de 0 a 100 e imprimir apenas números primos
10. Use um loop for para iterar de 0 a 100 e imprimir a soma de todos os números.

    ```sh
    A soma de todos os números de 0 a 100 é 5050.
    ```

11. Use um loop for para iterar de 0 a 100 e imprimir a soma de todos os números pares e a soma de todos os números ímpares.

    ```sh
    A soma de todos os números pares de 0 a 100 é 2550. E a soma de todos os números ímpares de 0 a 100 é 2500.
    ```

12. Use um loop for para iterar de 0 a 100 e imprimir a soma de todos os números pares e a soma de todos os números ímpares. Imprima a soma de pares e a soma de ímpares como array.

    ````sh
      [2550, 2500]

    ```sh
      [2550, 2500]
    ````

13. Desenvolva um pequeno script que gere um array de 5 números aleatórios.
14. Desenvolva um pequeno script que gere um array de 5 números aleatórios e os números devem ser únicos
15. Desenvolva um pequeno script que gere um id aleatório de seis caracteres:

    ```sh
    5j2khz
    ```

### Exercícios: Nível 2

1. Desenvolva um pequeno script que gere um id aleatório de qualquer número de caracteres:

   ```sh
     fe3jo1gl124g
   ```

   ```sh
     xkqci4utda1lmbelpkm03rba
   ```

1. Escreva um script que gere um número hexadecimal aleatório.

   ```sh
   '#ee33df'
   ```

1. Escreva um script que gere um número de cor rgb aleatório.

   ```sh
   rgb(240,180,80)
   ```

1. Usando o array paises acima, crie o seguinte novo array.

   ```sh
   ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
   ```

1. Usando o array paises acima, crie um array para o comprimento dos paises.

   ```sh
   [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
   ```

<!-- 1. Use the paises array to create the following array of arrays: -->

1. Use o array paises para criar o seguinte array de arrays:

   ```sh
     [
     ['Albania', 'ALB', 7],
     ['Bolivia', 'BOL', 7],
     ['Canada', 'CAN', 6],
     ['Dinamarca', 'DEN', 7],
     ['Ethiopia', 'ETH', 8],
     ['Finlandia', 'FIN', 7],
     ['Germany', 'GER', 7],
     ['Hungary', 'HUN', 7],
     ['Ireland', 'IRE', 7],
     ['Islandia', 'ICE', 7],
     ['Japan', 'JAP', 5],
     ['Kenya', 'KEN', 5]
   ]
   ```

1. No array de paises acima, verifique se algum dos paises contem a palavra "land". Se algum pais conter "land", imprima como um array. Se nenhum paises conter a palavra "land", imprima "Todos os paises são sem land".

   ```sh
   ['Finlandia','Ireland', 'Islandia']
   ```

<!-- 1. In above paises array, check if there is a country or paises end with a substring 'ia'. If there are paises end with, print it as array. If there is no country containing the word 'ai', print 'These are paises ends without ia'. -->

1. No array de paises acima, verifique se algum dos paises termina com a substring "ia". Se algum dos paises terminar, imprima como um array. Se nenhum dos paises conter a palavra "ai", imprima "Esses são os paises terminados com ia"

   ```sh
   ['Albania', 'Bolivia','Ethiopia']
   ```

1. Usando o array de paises acima, procure o paises que contenha a maior quantidade de caracteres.

   ```sh
   Ethiopia
   ```

1. Usando o array de paises acima, encontre o paises que contenha apenas 5 caracteres.

   ```sh
   ['Japan', 'Kenya']
   ```

1. Encontre a palavra mais longa no array webTechs
<!-- 1. Use the webTechs array to create the following array of arrays: -->
1. Use o array webTechs para criar o seguinte array de arrays:

   ```sh
   [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
   ```

1. Uma aplicação criada usando MongoDB, Express, React e Node é chamada de aplicativo MERN. Crie o acrônimo MERN usando o array mernStack
1. Itere através do array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando um loop for ou um loop for of e imprima os itens.
1. Este é um array de frutas, ['banana', 'orange', 'mango', 'lemon'] inverta a ordem usando um loop sem usar o método reverse.
1. Imprima todos os elementos do array como mostrado abaixo.

   ```js
   const fullStack = [
     ['HTML', 'CSS', 'JS', 'React'],
     ['Node', 'Express', 'MongoDB'],
   ];
   ```

   ```sh
     HTML
     CSS
     JS
     REACT
     NODE
     EXPRESS
     MONGODB
   ```

### Exercícios: Nível 3

1. Copie o array de paises (Evite mutação)
1. Arrays são mutáveis. Crie uma cópia do array que não modifique o original. Ordene o array copiado e armazene em uma variável sortedCountries
1. Ordene o array webTechs e o array mernStack
1. Extraia todos os paises que contenham a palavra "land" do [array de paises](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/paises.js) e imprima como array
1. Encontre o paises que contenha a maior quantidade de caracteres no [array de paises](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/paises.js)
1. Extraia todos os paises que contenham a palavra "land" do [array de paises](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/paises.js) e imprima como array
1. Extraia todos os paises que contenham apenas quatro caracteres do [array de paises](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/paises.js) e imprima como array
1. Extraia todos os paises que contenham duas ou mais palavras do [array de paises](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/paises.js) e imprima como array
1. Inverta o [array de paises](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/paises.js) e coloque cada país em maiúsculas e armazene como um array

🎉 PARABÉNS ! 🎉

[<< Dia 5](../Dia_05_Arrays/Dia_05_Arrays.md) | [Dia 7 >>](../Dia_07_Funcoes/Dia_07_Funcoes.md)
