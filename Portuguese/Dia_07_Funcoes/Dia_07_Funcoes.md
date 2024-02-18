<div align="center">
  <h1>30 Dias De JavaScript: Funções</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Autor:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small>Janeiro, 2020</small>
</sub>

</div>

[<< Dia 6](../Dia_06_Loops/dia_06_Loops.md) | [Dia 8 >>](../Dia_08_Objetos/dia_08_Objetos.md)

![Thirty Days Of JavaScript](../images/banners/day_1_7.png)

- [📔 Dia 7](#-dia-7)
  - [Funções](#funções)
    - [Declaração de Função](#declaração-de-função)
    - [Função sem parâmetro e retorno](#função-sem-parâmetro-e-retorno)
    - [Função retornando valor](#função-retornando-valor)
    - [Função com um parâmetro](#função-com-um-parâmetro)
    - [Função com dois parâmetros](#função-com-dois-parâmetros)
    - [Função com muitos parâmetros](#função-com-muitos-parâmetros)
    - [Função com número ilimitado de parâmetros](#função-com-número-ilimitado-de-parâmetros)
      - [Número ilimitado de parâmetros em função regular](#número-ilimitado-de-parâmetros-em-função-regular)
      - [Número ilimitado de parâmetros em função de seta](#número-ilimitado-de-parâmetros-em-função-de-seta)
    - [Função Anônima](#função-anônima)
    - [Função de Expressão](#função-de-expressão)
    - [Funções Autoinvocáveis](#funções-autoinvocáveis)
    - [Função de Seta](#função-de-seta)
    - [Função com parâmetros padrão](#função-com-parâmetros-padrão)
    - [Declaração de função versus Função de seta](#declaração-de-função-versus-função-de-seta)
  - [💻 Exercícios](#-exercícios)
    - [Exercícios: Nível 1](#exercícios-nível-1)
    - [Exercícios: Nível 2](#exercícios-nível-2)
    - [Exercícios: Nível 3](#exercícios-nível-3)

# 📔 Dia 7

## Funções

Até agora, vimos muitas funções integradas no JavaScript. Nesta seção, focaremos em funções personalizadas. O que é uma função? Antes de começarmos a criar funções, vamos entender o que é uma função e por que precisamos de funções?

Uma função é um bloco de código reutilizável ou declarações de programação projetadas para realizar uma tarefa específica.
Uma função é declarada pela palavra-chave function seguida de um nome, seguido por parênteses (). Os parênteses podem conter um parâmetro. Se uma função tiver um parâmetro, ela será chamada com um argumento. Uma função também pode ter um parâmetro padrão. Para armazenar dados em uma função, ela deve retornar algum tipo de dado. Para obter o valor, chamamos ou invocamos uma função.
Funções tornam o código:

- Limpo e fácil de ler
- Reutilizável
- Fácil de testar

Uma função pode ser declarada ou criada de várias maneiras:

- _Declaração de função_
- _Função de expressão_
- _Função anônima_
- _Função de seta_ (Arrow Function)

### Declaração de Função

Vamos ver como declarar uma função e como chamá-la.

```js
// declarando uma função sem um parâmetro
function nomeDaFuncao() {
  // o código vai aqui
}
nomeDaFuncao(); // chamando a função pelo nome e com parênteses
```

### Função sem parâmetro e retorno

A função pode ser declarada sem um parâmetro.

**Exemplo:**

```js
// função sem parâmetro, uma função que faz um número ao quadrado
function quadrado() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}

quadrado(); // 4

// função sem parâmetro
function somarDoisNumeros() {
  let numUm = 10;
  let numDois = 20;
  let soma = numUm + numDois;

  console.log(soma);
}

somarDoisNumeros(); // uma função tem que ser chamada pelo seu nome para ser executada
```

```js
function imprimirNomeCompleto() {
  let primeiroNome = 'Asabeneh';
  let sobrenome = 'Yetayeh';
  let espaco = ' ';
  let nomeCompleto = primeiroNome + espaco + sobrenome;
  console.log(nomeCompleto);
}

imprimirNomeCompleto(); // chamando uma função
```

### Função retornando valor

A função também pode retornar valores, se uma função não retornar valores o valor da função é indefinido. Vamos escrever as funções acima com retorno. De agora em diante, retornamos valor para uma função em vez de imprimi-lo.

```js
function imprimirNomeCompleto() {
  let primeiroNome = 'Asabeneh';
  let sobrenome = 'Yetayeh';
  let espaco = ' ';
  let nomeCompleto = primeiroNome + espaco + sobrenome;
  return nomeCompleto;
}
console.log(imprimirNomeCompleto());
```

```js
function somarDoisNumeros() {
  let numUm = 2;
  let numDois = 3;
  let total = numUm + numDois;
  return total;
}

console.log(somarDoisNumeros());
```

### Função com um parâmetro

Em uma função, podemos passar diferentes tipos de dados (número, string, booleano, objeto, função) como um parâmetro.

```js
// função com um parâmetro
function nomeDaFuncao(param1) {
  // o código vai aqui
}
nomeDaFuncao(param1); // durante a chamada ou invocação, um argumento é necessário

function areaDoCirculo(r) {
  let area = Math.PI * r * r;
  return area;
}

console.log(areaDoCirculo(10)); // deve ser chamada com um argumento

function quadrado(numero) {
  return numero * numero;
}

console.log(quadrado(10));
```

### Função com dois parâmetros

```js
// função com dois parâmetros
function nomeDaFuncao(param1, param2) {
  // o código vai aqui
}
nomeDaFuncao(param1, param2); // durante a chamada ou invocação, dois argumentos são necessários
// Função sem parâmetro não recebe entrada, então vamos fazer uma função com parâmetros
function somarDoisNumeros(numUm, numDois) {
  let soma = numUm + numDois;
  console.log(soma);
}
somarDoisNumeros(10, 20); // chamando funções
// Se uma função não retornar, ela não armazena dados, então ela deve retornar

function somarDoisNumeros(numUm, numDois) {
  let soma = numUm + numDois;
  return soma;
}

console.log(somarDoisNumeros(10, 20));
function imprimirNomeCompleto(primeiroNome, sobrenome) {
  return `${primeiroNome} ${sobrenome}`;
}
console.log(imprimirNomeCompleto('Asabeneh', 'Yetayeh'));
```

### Função com muitos parâmetros

```js
// função com vários parâmetros
function nomeDaFuncao(param1, param2, param3,...) {
  // o código vai aqui
}
nomeDaFuncao(param1, param2, param3,...); // durante a chamada ou invocação, três argumentos são necessários

// esta função recebe um array como parâmetro e soma os números no array
function somarValoresArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma = soma + arr[i];
  }
  return soma;
}
const numeros = [1, 2, 3, 4, 5];
// chamando a função
console.log(somarValoresArray(numeros));

const areaDoCirculo = (raio) => {
  let area = Math.PI * raio * raio;
  return area;
}
console.log(areaDoCirculo(10));
```

### Função com número ilimitado de parâmetros

Às vezes, não sabemos quantos argumentos o usuário vai passar. Portanto, devemos saber como escrever uma função que pode receber um número ilimitado de argumentos. A maneira de fazer isso tem uma diferença significativa entre uma declaração de função (função regular) e uma função de seta. Vamos ver exemplos em ambas declaração de função e função de seta.

#### Número ilimitado de parâmetros em função regular

Uma declaração de função fornece um objeto de argumentos de escopo de função. Qualquer coisa que passarmos como argumento na função pode ser acessada a partir do objeto arguments dentro das funções. Vamos ver um exemplo.

```js
// Vamos acessar o objeto arguments

function somarTodosNums() {
  console.log(arguments);
}

somarTodosNums(1, 2, 3, 4);
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

```js
// declaração de função

function somarTodosNums() {
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}

console.log(somarTodosNums(1, 2, 3, 4)); // 10
console.log(somarTodosNums(10, 20, 13, 40, 10)); // 93
console.log(somarTodosNums(15, 20, 30, 25, 10, 33, 40)); // 173
```

#### Número ilimitado de parâmetros em função de seta

A função de seta não possui o objeto de argumentos de escopo de função. Para implementar uma função que recebe um número ilimitado de argumentos em uma função de seta, usamos o operador de propagação seguido por qualquer nome de parâmetro. Qualquer coisa que passarmos como argumento na função pode ser acessada como array na função de seta. Vamos ver um exemplo.

```js
// Vamos acessar o objeto arguments

const somarTodosNums = (...args) => {
  // console.log(arguments), objeto de arguments não encontrado em função de seta
  // em vez disso, usamos um parâmetro seguido pelo operador de propagação (...)
  console.log(args);
};

somarTodosNums(1, 2, 3, 4);
// [1, 2, 3, 4]
```

```js
// declaração de função

const somarTodosNums = (...args) => {
  let soma = 0;
  for (const elemento of args) {
    soma += elemento;
  }
  return soma;
};

console.log(somarTodosNums(1, 2, 3, 4)); // 10
console.log(somarTodosNums(10, 20, 13, 40, 10)); // 93
console.log(somarTodosNums(15, 20, 30, 25, 10, 33, 40)); // 173
```

### Função Anônima

Função anônima ou sem nome.

```js
const funcaoAnonima = function () {
  console.log(
    'Eu sou uma função anônima e meu valor está armazenado em funcaoAnonima'
  );
};
```

### Função de Expressão

Funções de expressão são funções anônimas. Depois de criarmos uma função sem nome e a atribuímos a uma variável. Para retornar um valor da função, devemos chamar a variável. Veja o exemplo abaixo.

```js
// Função de expressão
const quadrado = function (n) {
  return n * n;
};

console.log(quadrado(2)); // -> 4
```

### Funções Autoinvocáveis

Funções autoinvocáveis são funções anônimas que não precisam ser chamadas para retornar um valor.

```js
(function (n) {
  console.log(n * n);
})(2); // 4, mas em vez de apenas imprimir, se quisermos retornar e armazenar os dados, fazemos como mostrado abaixo

let numeroAoQuadrado = (function (n) {
  return n * n;
})(10);

console.log(numeroAoQuadrado);
```

### Função de Seta

A função de seta é uma alternativa para escrever uma função, no entanto, declaração de função e função de seta têm algumas pequenas diferenças.

A função de seta usa seta em vez da palavra-chave function para declarar uma função. Vamos ver tanto a declaração de função quanto a função de seta.

```js
// Assim é como escrevemos uma função normal ou de declaração
// Vamos mudar esta função de declaração para uma função de seta
function quadrado(n) {
  return n * n;
}

console.log(quadrado(2)); // 4

const quadrado = (n) => {
  return n * n;
};

console.log(quadrado(2)); // -> 4

// se tivermos apenas uma linha no bloco de código, pode ser escrito da seguinte forma, retorno explícito
const quadrado = (n) => n * n; // -> 4
```

```js
const mudarParaMaiusculo = (arr) => {
  const newArr = [];
  for (const elemento of arr) {
    newArr.push(elemento.toUpperCase());
  }
  return newArr;
};

const paises = ['Finlândia', 'Suécia', 'Noruega', 'Dinamarca', 'Islândia'];
console.log(mudarParaMaiusculo(paises));

// ["FINLÂNDIA", "SUÉCIA", "NORUEGA", "DINAMARCA", "ISLÂNDIA"]
```

```js
const imprimirNomeCompleto = (primeiroNome, ultimoNome) => {
  return `${primeiroNome} ${ultimoNome}`;
};

console.log(imprimirNomeCompleto('Asabeneh', 'Yetayeh'));
```

A função acima tem apenas a declaração de retorno, portanto, podemos retorná-la explicitamente da seguinte forma.

```js
const imprimirNomeCompleto = (primeiroNome, ultimoNome) =>
  `${primeiroNome} ${ultimoNome}`;

console.log(imprimirNomeCompleto('Asabeneh', 'Yetayeh'));
```

### Função com parâmetros padrão

Às vezes passamos valores padrão para os parâmetros, quando invocamos a função se não passarmos um argumento o valor padrão será usado. Tanto a declaração de função quanto a função de seta podem ter um valor padrão ou valores.

```js
// sintaxe
// Declarando uma função
function nomeDaFuncao(param = valor) {
  //códigos
}

// Chamando função
nomeDaFuncao();
nomeDaFuncao(arg);
```

**Exemplo:**

```js
function saudacoes(nome = 'Pedro') {
  let mensagem = `${nome}, bem-vindo aos 30 Dias De JavaScript!`;
  return mensagem;
}

console.log(saudacoes());
console.log(saudacoes('Asabeneh'));
```

```js
function gerarNomeCompleto(primeiroNome = 'Asabeneh', ultimoNome = 'Yetayeh') {
  let espaco = ' ';
  let nomeCompleto = primeiroNome + espaco + ultimoNome;
  return nomeCompleto;
}

console.log(gerarNomeCompleto());
console.log(gerarNomeCompleto('David', 'Smith'));
```

```js
function calcularIdade(anoDeNascimento, anoAtual = 2019) {
  let idade = anoAtual - anoDeNascimento;
  return idade;
}

console.log('Idade: ', calcularIdade(1819));
```

```js
function pesoDoObjeto(massa, gravidade = 9.81) {
  let peso = massa * gravidade + ' N'; // o valor deve ser convertido para string primeiro
  return peso;
}

console.log('Peso de um objeto em Newton: ', pesoDoObjeto(100)); // gravidade na superfície da Terra
console.log('Peso de um objeto em Newton: ', pesoDoObjeto(100, 1.62)); // gravidade na superfície da Lua
```

Vamos ver como escrevemos as funções acimas com funções de seta

```js
// sintaxe
// Declarando uma função
const nomeDaFuncao = (param = valor) => {
  //códigos
};

// Chamando função
nomeDaFuncao();
nomeDaFuncao(arg);
```

**Exemplo:**

```js
const saudacoes = (nome = 'Pedro') => {
  let mensagem = nome + ', bem-vindo aos 30 Dias De JavaScript!';
  return mensagem;
};

console.log(saudacoes());
console.log(saudacoes('Asabeneh'));
```

```js
const gerarNomeCompleto = (
  primeiroNome = 'Asabeneh',
  ultimoNome = 'Yetayeh'
) => {
  let espaco = ' ';
  let nomeCompleto = primeiroNome + espaco + ultimoNome;
  return nomeCompleto;
};

console.log(gerarNomeCompleto());
console.log(gerarNomeCompleto('David', 'Smith'));
```

```js
const calcularIdade = (anoDeNascimento, anoAtual = 2019) =>
  anoAtual - anoDeNascimento;
console.log('Idade: ', calcularIdade(1819));
```

```js
const pesoDoObjeto = (massa, gravidade = 9.81) => massa * gravidade + ' N';

console.log('Peso de um objeto em Newton: ', pesoDoObjeto(100)); // gravidade na superfície da Terra
console.log('Peso de um objeto em Newton: ', pesoDoObjeto(100, 1.62)); // gravidade na superfície da Lua
```

### Declaração de função versus Função de seta

Será abordado em outra seção.

🌕 Você é uma estrela em ascensão, agora você conhece funções. Agora, você está super carregado com o poder das funções. Você acabou de completar os desafios do dia 7 e está 7 passos à frente no seu caminho para a grandeza. Agora faça alguns exercícios para o seu cérebro e para o seu músculo.

## 💻 Exercícios

### Exercícios: Nível 1

1. Declare uma função _fullName_ e ela imprime seu nome completo.
2. Declare uma função _fullName_ e agora ela recebe firstName, lastName como parâmetro e retorna seu nome completo.
3. Declare uma função _addNumbers_ e ela recebe dois parâmetros e retorna a soma.
4. A área de um retângulo é calculada como segue: _área = comprimento x largura_. Escreva uma função que calcula _areaOfRectangle_.
5. O perímetro de um retângulo é calculado como segue: _perímetro= 2x(comprimento + largura)_. Escreva uma função que calcula _perimeterOfRectangle_.
6. O volume de um prisma retangular é calculado como segue: _volume = comprimento x largura x altura_. Escreva uma função que calcula _volumeOfRectPrism_.
7. A área de um círculo é calculada como segue: _área = π x r x r_. Escreva uma função que calcula _areaOfCircle_
8. A circunferência de um círculo é calculada como segue: _circunferência = 2πr_. Escreva uma função que calcula _circumOfCircle_
9. A densidade de uma substância é calculada como segue:_densidade= massa/volume_. Escreva uma função que calcula _density_.
10. A velocidade é calculada dividindo a distância total coberta por um objeto em movimento pela quantidade total de tempo tomado. Escreva uma função que calcula a velocidade de um objeto em movimento, _speed_.
11. O peso de uma substância é calculado como segue: _peso = massa x gravidade_. Escreva uma função que calcula _weight_.
12. A temperatura em oC pode ser convertida para oF usando esta fórmula: _oF = (oC x 9/5) + 32_. Escreva uma função que converte oC para oF _convertCelsiusToFahrenheit_.
13. O índice de massa corporal (IMC) é calculado como segue: _imc = peso em Kg / (altura x altura) em m2_. Escreva uma função que calcula _bmi_. O IMC é usado para definir amplamente diferentes grupos de peso em adultos de 20 anos ou mais. Verifique se uma pessoa está _abaixo do peso, peso normal, sobrepeso_ ou _obesa_ com base nas informações fornecidas abaixo.

    - Os mesmos grupos se aplicam a homens e mulheres.
    - _Abaixo do peso_: IMC é menor que 18.5
    - _Peso normal_: IMC é 18.5 a 24.9
    - _Sobrepeso_: IMC é 25 a 29.9
    - _Obeso_: IMC é 30 ou mais

14. Escreva uma função chamada _checkSeason_, ela recebe um parâmetro de mês e retorna a estação: Outono, Inverno, Primavera ou Verão.
15. Math.max retorna seu maior argumento. Escreva uma função findMax que recebe três argumentos e retorna o máximo deles sem usar o método Math.max.

    ```js
    console.log(findMax(0, 10, 5));
    10;
    console.log(findMax(0, -10, -2));
    0;
    ```

### Exercícios: Nível 2

1. Equação linear é calculada como segue: _ax + by + c = 0_. Escreva uma função que calcula o valor de uma equação linear, _solveLinEquation_.
2. Equação quadrática é calculada como segue: _ax2 + bx + c = 0_. Escreva uma função que calcula o valor ou valores de uma equação quadrática, _solveQuadEquation_.

   ```js
   console.log(solveQuadratic()); // {0}
   console.log(solveQuadratic(1, 4, 4)); // {-2}
   console.log(solveQuadratic(1, -1, -2)); // {2, -1}
   console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
   console.log(solveQuadratic(1, 0, -4)); //{2, -2}
   console.log(solveQuadratic(1, -1, 0)); //{1, 0}
   ```

3. Declare uma função chamada _printArray_. Ela recebe um array como parâmetro e imprime cada valor do array.
4. Escreva uma função chamada _showDateTime_ que mostra a hora neste formato: 08/01/2020 04:08 usando o objeto Date.

   ```sh
   showDateTime()
   08/01/2020 04:08
   ```

5. Declare uma função chamada _swapValues_. Esta função troca o valor de x por y.

   ```js
   swapValues(3, 4); // x => 4, y=>3
   swapValues(4, 5); // x = 5, y = 4
   ```

6. Declare uma função chamada _reverseArray_. Ela recebe um array como parâmetro e retorna o inverso do array (não use o método).

   ```js
   console.log(reverseArray([1, 2, 3, 4, 5]));
   //[5, 4, 3, 2, 1]
   console.log(reverseArray(['A', 'B', 'C']));
   //['C', 'B', 'A']
   ```

7. Declare uma função chamada _capitalizeArray_. Ela recebe um array como parâmetro e retorna o array com letras maiúsculas.

8. Declare uma função chamada _addItem_. Ela recebe um item como parâmetro e retorna um array após adicionar o item.

9. Declare uma função chamada _removeItem_. Ela recebe um índice como parâmetro e retorna um array após remover um item.

10. Declare uma função chamada _sumOfNumbers_. Ela recebe um número como parâmetro e soma todos os números naquele intervalo.

11. Declare uma função chamada _sumOfOdds_. Ela recebe um número como parâmetro e soma todos os números ímpares naquele intervalo.

12. Declare uma função chamada _sumOfEven_. Ela recebe um número como parâmetro e soma todos os números pares naquele intervalo.

13. Declare uma função chamada _evensAndOdds_. Ela recebe um inteiro positivo como parâmetro e conta o número de pares e ímpares no número.

```sh
evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
```

14. Escreva uma função que recebe qualquer número de argumentos e retorna a soma dos argumentos.

```js
sum(1, 2, 3); // -> 6
sum(1, 2, 3, 4); // -> 10
```

15. Escreva uma função que gera um _randomUserIp_.

16. Escreva uma função que gera um _randomMacAddress_.

17. Declare uma função chamada _randomHexaNumberGenerator_. Quando esta função é chamada, ela gera um número hexadecimal aleatório. A função retorna o número hexadecimal.

```sh
console.log(randomHexaNumberGenerator());
'#ee33df'
```

18. Declare uma função chamada _userIdGenerator_. Quando esta função é chamada, ela gera um id de sete caracteres. A função retorna o id.

```sh
console.log(userIdGenerator());
41XTDbE
```

### Exercícios: Nível 3

1. Modifique a função _userIdGenerator_. Declare uma função chamada _userIdGeneratedByUser_. Ela não recebe nenhum parâmetro, mas recebe duas entradas usando prompt(). Uma das entradas é o número de caracteres e a segunda entrada é o número de ids que devem ser gerados.

   ```sh
   userIdGeneratedByUser()
   'kcsy2
   SMFYb
   bWmeq
   ZXOYh
   2Rgxf
   '
   userIdGeneratedByUser()
   '1GCSgPLMaBAVQZ26
   YD7eFwNQKNs7qXaT
   ycArC5yrRupyG00S
   UbGxOFI7UXSWAyKN
   dIV0SSUTgAdKwStr
   '
   ```

2. Escreva uma função chamada _rgbColorGenerator_ e ela gera cores RGB.

   ```sh
   rgbColorGenerator()
   rgb(125,244,255)
   ```

3. Escreva uma função **_arrayOfHexaColors_** que retorna qualquer número de cores hexadecimais em um array.

4. Escreva uma função **_arrayOfRgbColors_** que retorna qualquer número de cores RGB em um array.

5. Escreva uma função **_convertHexaToRgb_** que converte cor hexadecimal para RGB e retorna uma cor RGB.

6. Escreva uma função **_convertRgbToHexa_** que converte cor RGB para hexadecimal e retorna uma cor hexadecimal.

7. Escreva uma função **_generateColors_** que pode gerar qualquer número de cores hexadecimais ou RGB.

   ```js
   console.log(generateColors('hexa', 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
   console.log(generateColors('hexa', 1)); // '#b334ef'
   console.log(generateColors('rgb', 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
   console.log(generateColors('rgb', 1)); // 'rgb(33,79, 176)'
   ```

8. Chame sua função _shuffleArray_, ela recebe um array como parâmetro e retorna um array embaralhado.

9. Chame sua função _factorial_, ela recebe um número inteiro como parâmetro e retorna um fatorial do número.

10. Chame sua função _isEmpty_, ela recebe um parâmetro e verifica se está vazio ou não.

11. Chame sua função _sum_, ela recebe qualquer número de argumentos e retorna a soma.

12. Escreva uma função chamada _sumOfArrayItems_, ela recebe um parâmetro de array e retorna a soma de todos os itens. Verifique se todos os itens do array são do tipo número. Se não, forneça um feedback adequado.

13. Escreva uma função chamada _average_, ela recebe um parâmetro de array e retorna a média dos itens. Verifique se todos os itens do array são do tipo número. Se não, forneça um feedback adequado.

14. Escreva uma função chamada _modifyArray_ que recebe um array como parâmetro e modifica o quinto item do array e retorna o array. Se o comprimento do array for menor que cinco, retorna 'item não encontrado'.

```js
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
```

```sh
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
```

```js
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
```

```sh
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
```

```js
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
```

```sh
  'Not Found'
```

15. Escreva uma função chamada _isPrime_, que verifica se um número é um número primo.

16. Escreva uma função que verifica se todos os itens são únicos no array.

17. Escreva uma função que verifica se todos os itens do array são do mesmo tipo de dados.

18. O nome de variável em JavaScript não suporta caracteres especiais ou símbolos exceto \$ ou \_. Escreva uma função **isValidVariable** que verifica se uma variável é válida ou inválida.

19. Escreva uma função que retorna um array de sete números aleatórios em uma faixa de 0-9. Todos os números devem ser únicos.

```js
sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];
```

20. Escreva uma função chamada reverseCountries, ela recebe o array de países e, primeiro, copia o array e retorna a inversão do array original.

🎉 PARABÉNS ! 🎉

[<< Dia 6](../Dia_06_Loops/dia_06_Loops.md) | [Dia 8 >>](../Dia_08_Objetos/dia_08_Objetos.md)
