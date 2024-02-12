<div align="center">
  <h1> 30 Dias de JavaScript: Arrays </h1>
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

[<< Dia 4](../Dia_04_Condicionais.md) | [Dia 6 >>](../Dia_06_Loops/Dia_06_Loops.md)

![Dia 5](/images/banners/day_1_5.png)

- [📔 Dia 5](#-dia-5)
  - [Arrays](#arrays)
    - [Como criar um array vazio](#como-criar-um-array-vazio)
    - [Como criar um array com valores](#como-criar-um-array-com-valores)
    - [Criando um array usando split](#criando-um-array-usando-split)
    - [Acessando itens do array usando índice](#acessando-itens-do-array-usando-índice)
    - [Modificando elemento do array](#modificando-elemento-do-array)
    - [Métodos para manipular array](#métodos-para-manipular-array)
      - [Construtor de Array](#construtor-de-array)
      - [Criando valores estáticos com fill](#criando-valores-estáticos-com-fill)
      - [Concatenando array usando concat](#concatenando-array-usando-concat)
      - [Obtendo o tamanho do array](#obtendo-o-tamanho-do-array)
      - [Obtendo índice de um elemento no array](#obtendo-índice-de-um-elemento-no-array)
      - [Obtendo o último índice de um elemento no array](#obtendo-o-último-índice-de-um-elemento-no-array)
      - [Verificando array](#verificando-array)
      - [Convertendo array para string](#convertendo-array-para-string)
      - [Juntando elementos do array](#juntando-elementos-do-array)
      - [Fatiando elementos do array](#fatiando-elementos-do-array)
      - [Método splice em array](#método-splice-em-array)
      - [Adicionando item ao array usando push](#adicionando-item-ao-array-usando-push)
      - [Removendo o elemento final usando pop](#removendo-o-elemento-final-usando-pop)
      - [Removendo um elemento do início](#removendo-um-elemento-do-início)
      - [Adicionando um elemento no início](#adicionando-um-elemento-no-início)
      - [Invertendo a ordem do array](#invertendo-a-ordem-do-array)
      - [Ordenando elementos no array](#ordenando-elementos-no-array)
    - [Array de arrays](#array-de-arrays)
  - [💻 Exercício](#-exercício)
    - [Exercício: Nível 1](#exercício-nível-1)
    - [Exercício: Nível 2](#exercício-nível-2)
    - [Exercício: Nível 3](#exercício-nível-3)

# 📔 Dia 5

## Arrays

Ao contrário das variáveis, um array pode armazenar _vários valores_. Cada valor em um array tem um _índice_, e cada índice tem _uma referência em um endereço de memória_. Cada valor pode ser acessado usando seus _índices_. O índice de um array começa do _zero_, e o índice do último elemento é menor por um do que o comprimento do array.

Um array é uma coleção de diferentes tipos de dados que são ordenados e modificáveis. Um array permite armazenar elementos duplicados e diferentes tipos de dados. Um array pode estar vazio ou pode ter valores de diferentes tipos de dados.

### Como criar um array vazio

Em JavaScript, podemos criar um array de diferentes maneiras. Vamos ver diferentes formas de criar um array.
É muito comum usar _const_ em vez de _let_ para declarar uma variável de array. Se você usar const, significa que não usará esse nome de variável novamente.

- Usando o construtor Array

```js
// sintaxe
const arr = Array();
// ou
// let arr = new Array()
console.log(arr); // []
```

- Usando colchetes([])

```js
// sintaxe
// Esta é a maneira mais recomendada de criar uma lista vazia
const arr = [];
console.log(arr);
```

### Como criar um array com valores

Array com valores iniciais. Usamos a propriedade length para encontrar o comprimento de um array.

```js
const numeros = [0, 3.14, 9.81, 37, 98.6, 100]; // array de números
const frutas = ['banana', 'laranja', 'manga', 'limão']; // array de strings, frutas
const vegetais = ['Tomate', 'Batata', 'Repolho', 'Cebola', 'Cenoura']; // array de strings, vegetais
const produtosAnimais = ['leite', 'carne', 'manteiga', 'iogurte']; // array de strings, produtos
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB']; // array de tecnologias web
const paises = ['Finlândia', 'Dinamarca', 'Suécia', 'Noruega', 'Islândia']; // array de strings, países

// Imprima o array e seu comprimento

console.log('Números:', numeros);
console.log('Quantidade de números:', numeros.length);

console.log('Frutas:', frutas);
console.log('Quantidade de frutas:', frutas.length);

console.log('Vegetais:', vegetais);
console.log('Quantidade de vegetais:', vegetais.length);

console.log('Produtos animais:', produtosAnimais);
console.log('Quantidade de produtos animais:', produtosAnimais.length);

console.log('Tecnologias web:', webTechs);
console.log('Quantidade de tecnologias web:', webTechs.length);

console.log('Países:', paises);
console.log('Quantidade de países:', paises.length);
```

```sh
Números: [0, 3.14, 9.81, 37, 98.6, 100]
Quantidade de números: 6
Frutas: ['banana', 'laranja', 'manga', 'limão']
Quantidade de frutas: 4
Vegetais: ['Tomate', 'Batata', 'Repolho', 'Cebola', 'Cenoura']
Quantidade de vegetais: 5
Produtos de origem animal: ['leite', 'carne', 'manteiga', 'iogurte']
Quantidade de produtos de origem animal: 4
Tecnologias web: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB']
Quantidade de tecnologias web: 7
Países: ['Finlândia', 'Estônia', 'Dinamarca', 'Suécia', 'Noruega']
Quantidade de países: 5
```

- O array pode ter itens de diferentes tipos de dados

```js
const arr = [
  'Asabeneh',
  250,
  true,
  { country: 'Finlândia', city: 'Helsinque' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
]; // arr contendo diferentes tipos de dados
console.log(arr);
```

### Criando um array usando split

Como vimos na seção anterior, podemos dividir uma string em diferentes posições e transformá-la em um array. Vamos ver os exemplos abaixo.

```js
let js = 'JavaScript';
const charsInJavaScript = js.split('');

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companies = companiesString.split(',');

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'Eu amo ensinar e empoderar pessoas. Eu ensino HTML, CSS, JS, React, Python.';
const words = txt.split(' ');

console.log(words);
// o texto tem caracteres especiais, pense como você pode obter apenas as palavras
// ["Eu", "amo", "ensinar", "e", "empoderar", "pessoas.", "Eu", "ensino", "HTML,", "CSS,", "JS,", "React,", "Python"]
```

### Acessando itens do array usando índice

Acessamos cada elemento em um array usando seu índice. O índice de um array começa do 0. A imagem abaixo mostra claramente o índice de cada elemento no array.

![arr index](/images/array_index.png)

```js
const frutas = ['banana', 'laranja', 'manga', 'limão'];
let primeiraFruta = frutas[0]; // estamos acessando o primeiro item usando seu índice

console.log(primeiraFruta); // banana

let segundaFruta = frutas[1];
console.log(segundaFruta); // laranja

let ultimaFruta = frutas[3];
console.log(ultimaFruta); // limão
// O último índice pode ser calculado da seguinte forma

let ultimoIndice = frutas.length - 1;
ultimaFruta = frutas[ultimoIndice];

console.log(ultimaFruta); // limão
```

```js
const numeros = [0, 3.14, 9.81, 37, 98.6, 100]; // conjunto de números

console.log(numeros.length); // => para saber o tamanho do array, que é 6
console.log(numeros); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numeros[0]); // -> 0
console.log(numeros[5]); // -> 100

let ultimoIndice = numeros.length - 1;
console.log(numeros[ultimoIndice]); // -> 100
```

```js
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]; // Lista de tecnologias web

console.log(webTechs); // todos os itens do array
console.log(webTechs.length); // => para saber o tamanho do array, que é 7
console.log(webTechs[0]); // -> HTML
console.log(webTechs[6]); // -> MongoDB

ultimoIndice = webTechs.length - 1;
console.log(webTechs[ultimoIndice]); // -> MongoDB
```

```js
const paises = [
  'Albânia',
  'Bolívia',
  'Canadá',
  'Dinamarca',
  'Etiópia',
  'Finlândia',
  'Alemanha',
  'Hungria',
  'Irlanda',
  'Japão',
  'Quênia',
]; // Lista de países

console.log(paises); // -> todos os países no array
console.log(paises[0]); // -> Albânia
console.log(paises[10]); // -> Quênia

ultimoIndice = paises.length - 1;
console.log(paises[ultimoIndice]); // -> Quênia
```

```js
const carrinhoDeCompras = [
  'Leite',
  'Manga',
  'Tomate',
  'Batata',
  'Abacate',
  'Carne',
  'Ovos',
  'Açúcar',
]; // Lista de produtos alimentícios

console.log(carrinhoDeCompras); // -> todo o carrinho de compras no array
console.log(carrinhoDeCompras[0]); // -> Leite
console.log(carrinhoDeCompras[7]); // -> Açúcar

ultimoIndice = carrinhoDeCompras.length - 1;
console.log(carrinhoDeCompras[ultimoIndice]); // -> Açúcar
```

### Modificando elemento do array

Um array é mutável (modificável). Uma vez que um array é criado, podemos modificar o conteúdo dos elementos do array.

```js
const numeros = [1, 2, 3, 4, 5];
numeros[0] = 10; // alterando 1 no índice 0 para 10
numeros[1] = 20; // alterando 2 no índice 1 para 20

console.log(numeros); // [10, 20, 3, 4, 5]

const paises = [
  'Albânia',
  'Bolívia',
  'Canadá',
  'Dinamarca',
  'Etiópia',
  'Finlândia',
  'Alemanha',
  'Hungria',
  'Irlanda',
  'Japão',
  'Quênia',
];

paises[0] = 'Afeganistão'; // Substituindo Albânia por Afeganistão
let ultimoIndice = paises.length - 1;
paises[ultimoIndice] = 'Coreia'; // Substituindo Quênia por Coreia

console.log(paises);
```

```sh
["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]
```

### Métodos para manipular array

Existem diferentes métodos para manipular um array. Estes são alguns dos métodos disponíveis para lidar com arrays: _Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift_

#### Construtor de Array

Array:Para criar um array.

```js
const arr = Array(); // cria um array vazio
console.log(arr);

const oitoValoresVazios = Array(8); // cria oito valores vazios
console.log(oitoValoresVazios); // [vazio x 8]
```

#### Criando valores estáticos com fill

fill: Preenche todos os elementos do array com um valor estático

```js
const arr = Array(); // cria um array vazio
console.log(arr);

const oitoValoresX = Array(8).fill('X'); // cria oito valores de elementos preenchidos com 'X'
console.log(oitoValoresX); // ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

const oitoValores0 = Array(8).fill(0); // cria oito valores de elementos preenchidos com '0'
console.log(oitoValores0); // [0, 0, 0, 0, 0, 0, 0, 0]

const quatroValores4 = Array(4).fill(4); // cria 4 valores de elementos preenchidos com '4'
console.log(quatroValores4); // [4, 4, 4, 4]
```

#### Concatenando array usando concat

concat:Para concatenar dois arrays.

```js
const primeiraLista = [1, 2, 3];
const segundaLista = [4, 5, 6];
const terceiraLista = primeiraLista.concat(segundaLista);

console.log(terceiraLista); // [1, 2, 3, 4, 5, 6]
```

```js
const frutas = ['banana', 'laranja', 'manga', 'limão']; // array de frutas
const vegetais = ['Tomate', 'Batata', 'Repolho', 'Cebola', 'Cenoura']; // array de vegetais
const frutasEVegetais = frutas.concat(vegetais); // concatena os dois arrays

console.log(frutasEVegetais);
```

```sh
["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]
```

#### Obtendo o tamanho do array

Length:Para saber o tamanho do array

```js
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.length); // -> 5 é o tamanho do array
```

#### Obtendo índice de um elemento no array

indexOf:Para verificar se um item existe em um array. Se existir, retorna o índice; caso contrário, retorna -1.

```js
const numeros = [1, 2, 3, 4, 5];

console.log(numeros.indexOf(5)); // -> 4
console.log(numeros.indexOf(0)); // -> -1
console.log(numeros.indexOf(1)); // -> 0
console.log(numeros.indexOf(6)); // -> -1
```

Verificar se um elemento existe em um array.

- Verifica itens em um array

```js
const frutas = ['banana', 'laranja', 'manga', 'limão'];
let indice = frutas.indexOf('banana');  // 0

if(indice === -1){
   console.log('Esta fruta não existe no array');
} else {
    console.log('Esta fruta existe no array');
}
// Esta fruta existe no array

// nos podemos usar ternario tambem
index === -1
  ? console.log('Esta fruta não existe no array');
  : console.log('Esta fruta existe no array');

// vamos verificar se abacate existe no array
indice = frutas.indexOf('abacate');  // -1, se o elemento não for encontrado, o índice é -1
if(indice === -1){
   console.log('Esta fruta não existe no array');
} else {
    console.log('Esta fruta existe no array');
}
// Esta fruta não existe no array
```

#### Obtendo o último índice de um elemento no array

lastIndexOf: Fornece a posição do último item no array. Se existir, retorna o índice; caso contrário, retorna -1.

```js
const numeros = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numeros.lastIndexOf(2)); // 7
console.log(numeros.lastIndexOf(0)); // -1
console.log(numeros.lastIndexOf(1)); //  6
console.log(numeros.lastIndexOf(4)); //  3
console.log(numeros.lastIndexOf(6)); // -1
```

includes: Para verificar se um item existe em um array. Se existir, retorna verdadeiro; caso contrário, retorna falso.

```js
// const numbers = [1, 2, 3, 4, 5];
const numeros = [1, 2, 3, 4, 5];

console.log(numbers.includes(5)); // verdadeiro
console.log(numbers.includes(0)); // falso
console.log(numbers.includes(1)); // verdadeiro
console.log(numbers.includes(6)); // falso

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]; // List of web technologies

console.log(webTechs.includes('Node')); // verdadeiro
console.log(webTechs.includes('C')); // falso
```

#### Verificando array

Array.isArray:Para verificar se o tipo de dado é um array

```js
const numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers)); // verdadeiro

const number = 100;
console.log(Array.isArray(number)); // falso
```

#### Convertendo array para string

toString: Converte o array para string

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook
```

#### Juntando elementos do array

join: É usado para juntar os elementos do array, o argumento passado no método join será utilizado para unir os elementos do array e retornar como uma string. Por padrão, ele junta com uma vírgula, mas podemos passar diferentes parâmetros de string que podem ser unidos entre os itens.

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join()); // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')); //AsabenehMathiasEliasBrook
console.log(names.join(' ')); //Asabeneh Mathias Elias Brook
console.log(names.join(', ')); //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')); //Asabeneh # Mathias # Elias # Brook

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]; // List of web technologies

console.log(webTechs.join()); // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # ')); // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
```

#### Fatiando elementos do array

Slice: Para cortar múltiplos itens em um intervalo. Ele recebe dois parâmetros: posição inicial e final. Não inclui a posição final.

```js
const numeros = [1, 2, 3, 4, 5];

console.log(numeros.slice()); // -> copia todos os itens
console.log(numeros.slice(0)); // -> copia todos os itens
console.log(numeros.slice(0, numeros.length)); // copia todos os itens
console.log(numeros.slice(1, 4)); // -> [2, 3, 4] // não inclui a posição final
```

#### Método splice em array

Splice: Recebe três parâmetros: Posição inicial, número de itens a serem removidos e número de itens a serem adicionados.

```js
const numeros = [1, 2, 3, 4, 5];
numeros.splice();
console.log(numeros); // -> remove todos os itens
```

```js
const numeros = [1, 2, 3, 4, 5];
numeros.splice(0, 1);
console.log(numeros); // remove o primeiro item
```

```js
const numeros = [1, 2, 3, 4, 5, 6];
numeros.splice(3, 3, 7, 8, 9);
console.log(numeros); // -> [1, 2, 3, 7, 8, 9] // remove três itens e substitui por três itens
```

#### Adicionando item ao array usando push

Push: adicionando item no final. Para adicionar item ao final de um array existente usamos o método push.

```js
// syntax
const arr = ['item1', 'item2', 'item3'];
arr.push('novo item');
console.log(arr); //
// ['item1', 'item2', 'item3', 'novo item']
```

```js
const numeros = [1, 2, 3, 4, 5];
numeros.push(6);
console.log(numeros); // -> [1, 2, 3, 4, 5, 6]

numeros.pop(); // -> remove um item do final
console.log(numeros); // -> [1, 2, 3, 4, 5]
```

```js
let fruits = ['banana', 'orange', 'mango', 'lemon'];
fruits.push('apple');
console.log(fruits); // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push('lime');
console.log(fruits); // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']
```

#### Removendo o elemento final usando pop

pop: Removendo item no final.

```js
const numeros = [1, 2, 3, 4, 5];
numeros.pop(); // -> remove um item do final
console.log(numeros); // -> [1, 2, 3, 4]
```

#### Removendo um elemento do início

shift: Removendo um elemento do array no início do array.

```js
const numeros = [1, 2, 3, 4, 5];
numeros.shift(); // -> remove um item do início
console.log(numeros); // -> [2, 3, 4, 5]
```

#### Adicionando um elemento no início

unshift: Adicionando um elemento no início do array.

```js
const numeros = [1, 2, 3, 4, 5];
numeros.unshift(0); // -> adiciona um item no início
console.log(numeros); // -> [0, 1, 2, 3, 4, 5]
```

#### Invertendo a ordem do array

reverse: inverte a ordem de um array

```js
const numeros = [1, 2, 3, 4, 5];
numeros.reverse(); // -> inverte a ordem do array
console.log(numeros); // [5, 4, 3, 2, 1]

numeros.reverse();
console.log(numeros); // [1, 2, 3, 4, 5]
```

#### Ordenando elementos no array

sort: organiza os elementos do array em ordem ascendente. Sort aceita uma função de callback, veremos como usar sort com uma função de callback nas próximas seções.

```js
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse(); // after sorting we can reverse it
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
```

### Array de arrays

Um array pode armazenar diferentes tipos de dados, incluindo outro array. Vamos criar um array de arrays:

```js
const primeirosNumeros = [1, 2, 3];
const segundosNumeros = [1, 4, 9];

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArray[0]); // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
```

🌕 Você é diligente e já alcançou bastante. Acabou de completar os desafios do dia 5 e está cinco passos à frente no seu caminho para a grandeza. Agora faça alguns exercícios para o seu cérebro e para o seu músculo.

## 💻 Exercício

### Exercício: Nível 1

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
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
```

1. Declare um array vazio;
2. Declare um array com mais de 5 elementos;
3. Encontre o comprimento do seu array;
4. Obtenha o primeiro item, o item do meio e o último item do array;
5. Declare um array chamado mixedDataTypes, coloque diferentes tipos de dados no array e encontre o comprimento do array. O tamanho do array deve ser maior que 5;
6. Declare uma variável de array nomeada itCompanies e atribua valores iniciais como Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon;
7. Imprima o array usando console.log();
8. Imprima o número de empresas no array;
9. Imprima a primeira empresa, a empresa do meio e a última empresa;
10. Imprima cada empresa;
11. Mude cada nome da empresa para maiúsculas uma a uma e imprima-as;
12. Imprima o array como uma frase: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon são grandes empresas de TI.
13. Verifique se uma determinada empresa existe no array itCompanies. Se existir, retorne a empresa, caso contrário, retorne uma mensagem de empresa não encontrada;
14. Filtre empresas que têm mais de um 'o' sem usar o método filter;
15. Ordene o array usando o método sort();
16. Reverta o array usando o método reverse();
17. Fatie os primeiros 3 empresas do array;
18. Fatie as últimas 3 empresas do array;
19. Fatie a empresa ou empresas do meio do array;
20. Remova a primeira empresa do array;
21. Remova a empresa ou empresas do meio do array;
22. Remova a última empresa do array;
23. Remova todas as empresas de TI;

### Exercício: Nível 2

1. Crie um arquivo countries.js separado e armazene o array countries nele, crie um arquivo web_techs.js separado e armazene o array webTechs nele. Acesse ambos os arquivos no arquivo main.js;
1. Primeiro remova todas as pontuações e mude a string para array e conte o número de palavras no array;

   ```js
   let texto =
     'Eu amo ensinar e empoderar pessoas. Eu ensino HTML, CSS, JS, React, Python.';
   console.log(palavras);
   console.log(palavras.length);
   ```

   ```sh
   ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

   13
   ```

1. No carrinho de compras seguinte, adicione, remova, edite itens;

   ```js
   const carrinhoDeCompras = ['Leite', 'Café', 'Chá', 'Mel'];
   ```

   - adicione 'Carne' no início do seu carrinho de compras se ainda não foi adicionado;
   - adicione Açúcar no final do seu carrinho de compras se ainda não foi adicionado;
   - remova 'Mel' se você for alérgico a mel;
   - modifique Chá para 'Chá Verde';

1. Verifique no array countries se 'Etiópia' existe no array, se existir, imprima 'ETIÓPIA'. Se não existir, adicione ao array countries.
1. No array webTechs, verifique se Sass existe no array e, se existir, imprima 'Sass é um preprocessador CSS'. Se não existir, adicione Sass ao array e imprima o array.
1. Concatene os seguintes dois variáveis e armazene em uma variável fullStack.

   ```js
   const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
   const backEnd = ['Node', 'Express', 'MongoDB'];

   console.log(fullStack);
   ```

   ```sh
   ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
   ```

### Exercício: Nível 3

1.  A seguir está um array com as idades de 10 estudantes:

        ```js
        const idades = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
        ```

        - Ordene o array e encontre a idade mínima e máxima
        - Encontre a idade mediana (um item do meio ou dois itens do meio divididos por dois)
        - Encontre a idade média (todas as idades divididas pelo número de itens)
        - Encontre o intervalo das idades (máxima menos mínima)
        - Compare o valor de (mínima - média) e (máxima - média), use o método _abs()_

    1.Fatie os dez primeiros países do [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

1.  Encontre o(s) país(es) do meio no [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
1.  Divida o array de países em dois arrays iguais se for par. Se o array de países não for par, adicione um país a mais para a primeira metade.

🎉 PARABÉNS ! 🎉

[<< Day 4](../Dia_04_Condicionais/Dia_04_condicionais.md) | [Day 6 >>](../Dia_06_Loops/dia_06_loops.md)
