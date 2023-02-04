<div align="center">
  <h1> 30 Dias De JavaScript: Tipos de Dados</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>Autor:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
  <small> Janeiro, 2020</small>
  </sub>
</div>
</div>

[<< Dia 1](../readMe.md) | [Dia 3 >>](../Dia_03_Booleanos_Operadores_Data/dia_03_booleanos_operadores_data.md)

![Thirty Days Of JavaScript](/images/banners/day_1_2.png)

- [📔 Dia 2](#-dia-2)
	- [Tipo de Dados](#tipos-de-dados)
		- [Tipos de Dados Primitivos](#tipos-de-dados-primitivos)
		- [Tipos de Dados Não Primitivos](#tipos-de-dados-não-primitivos)
	- [Números](#Números)
		- [Declarando Tipos de Dados Numéricos](#declarando-tipos-de-dados-numéricos)
		- [Objeto Math](#objeto-math)
			- [Gerador de Número Aleatório](#gerador-de-número-aleatório)
	- [Strings](#strings)
		- [String Concatenação](#string-concatenação)
			- [Concatenando Usando o Operador de Adição](#concatenando-usando-o-operador-de-adição)
			- [Escape Sequences em Strings](#escape-sequences-em-strings)
			- [Strings Literais (Template Strings)](#Strings-Literais-template-strings)
		- [String Métodos](#string-métodos)
	- [Verificando Tipos de Dados e Casting](#verificando-tipos-de-dados-e-casting)
		- [Verificando Tipos de Dados](#verificando-tipos-de-dados)
		- [Mudando Tipo de Dado (Casting)](#mudando-tipo-de-dado-casting)
			- [String para Int](#string-para-int)
			- [String para Float](#string-para-float)
			- [Float para Int](#float-para-int)
	- [💻 Dia 2: Exercícios](#-dia-2-exercícios)
		- [Exercícios: Level 1](#exercícios-level-1)
		- [Exercícios: Level 2](#exercícios-level-2)
		- [Exercícios: Level 3](#exercícios-level-3)

# 📔 Dia 2

## Tipos de Dados

Na sessão anterior, nós mencionamos um pouco sobre tipos de dados. Tipos de dados decrevem as caracteristicas dos dados, e podem ser divididos em duas categorias:

  1. Tipos de dados primitivos
  2. Tipos de dados não primitivos (de referência do objeto.)

### Tipos de Dados Primitivos

Tipos de dados primitivos em JavaScript inclui:

  1. Numbers - Inteiros, floats
  2. Strings - Qualquer dado entre aspas simples, aspas duplas e crase
  3. Booleans - valores verdadeiros ou falsos
  4. Null - valor vazio ou sem valor
  5. Undefined - variável declarada sem um valor
  6. Symbol - Um valor único que pode ser gerado por um construtor de símbolo

Tipos de dados não primitivos em JavaScriot inclui:

  1. Objetos
  2. Arrays

Agora, vamos ver exatamente oque significa tipos de dados primitivos e não primitivos.
*Primitivo* são tipos de dados imutáveis (não-modificável). Uma vez criado um tipo de dado primitivo nós não podemos mais modificá-lo.

**Exemplo:**

```js
let exemplo = 'JavaScript'
```

Se nós tentarmos modificar uma string armazenada na variável *exemplo*, o JavaScript irá mostar um error. Qualquer dado entre aspas simples, aspas duplas, ou crase é um string.

```js
exemplo[0] = 'Y'
```

Esta expressão não muda a string armazenada na variável *exemplo*. Então, podemos dizer que strings não são modificavéis ou in outras palavras imutáveis.
Tipos de dados primitivos são comparados pelo seu valor. Vamos comparar valores de dados diferentes. Veja o exemplo abaixo:

```js
let numeroUm = 3
let numeroDois = 3

console.log(numeroUm == numeroDois)  // verdadeiro

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)                // falso 

let luzLigar = true
let luzApagar = false

console.log(luzLigar == luzApagar)   // falso
```

### Tipos de Dados Não Primitivos

*Não primitivos* são tipos de dados modificáveis ou mutáveis. Nós podemos modificar o valor de um dado tipo não primitivo depois de criado.
Vamos ver isso criando um array, um array é uma lista de valores de dados entre colchetes. Arrays que contém o mesmo ou diferentes tipos de dados. Valores de Arrays são referenciados pelo seu index. Em JavaScript o index do array começa em zero, em outras palavras o primeiro elemento de um array é encontrado no index zero, o segundo elemento no index um, e o terceiro elemento no index dois, etc.

```js
let numeros = [1, 2, 3]
numeros[0] = 1

console.log(numeros)  // [1, 2, 3]
```

Como você pode ver, um array é um tipo de dado não primitivo e mutável. Tipos de dados não primitivos não podem ser comparador pelos seus valores. Mesmo se dois tipos de dados não primitivos tem as mesmas propriedades e valores, eles não podem ser estritamentes iguais.

```js
let nums = [1, 2, 3]
let numeros = [1, 2, 3]

console.log(nums == numeros)  // falso

let userOne = {
nome:'Asabeneh',
profissao:'professor',
país:'Finland'
}

let userTwo = {
nome:'Asabeneh',
profissao:'professor',
country:'Finland'
}

console.log(userOne == userTwo) // falso
```

Regra de ouro, nós não comparamos tipos de dados não primitivos. Não se compara arrays, funções, ou objetos. Porque eles são comparados pela sua referência ao invez do valor. Dois objetos só são estritamentes iguais se a sua referência for o mesmo objeto subjacente.

```js
let nums = [1, 2, 3]
let numeros = nums

console.log(nums == numeros)  // verdadeiro

let userOne = {
nome:'Asabeneh',
profissao:'Professor',
país:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // verdadeiro
```

Com dificuldade de entender a diferença entre tipos de dados primitivos e tipos de dados não primitivos? Você não é o único. Calma e apenas vá para a próxima sessão e tente voltar aqui depois de algum tempo. Agora vamos começar com tipos de dados do tipo número.

## Números

Números são todos os inteiros e valores decimais que podem fazer todas as operações aritméticas.
Vamos ver alguns exemplos de Números.

### Declarando Tipos de Dados Numéricos

```js
let idade = 35
const gravidade = 9.81        // nós usamos const para valores que não mudam, constante gravitacional em 9,8 m/s².
let massa = 72                // massa em Kilogramas
const PI = 3.14               // pi constante geométrica

// Mais exemplos
const pontoEbulicao = 100     // temperatura em oC, ponto de ebulução da água que é uma constante
const temperaturaCorpo = 37   // oC média da temperatura corporal humana, que é uma constante

console.log(idade, gravidade, massa, PI, pontoEbulicao, temperaturaCorpo)
```

### Objeto Math 

Em JavaScript o objeto Math promove muitos métodos para trabalhar com números.

```js
const PI = Math.PI

console.log(PI)                                 // 3.141592653589793

// arredondando para o número mais próximo
// se maior que 0.5 para cima, se menor que 0.5 para baixo.

console.log(Math.round(PI))                     // 3 é o valor mais próximo

console.log(Math.round(9.81))                   // 10

console.log(Math.floor(PI))                     // 3 arredondando para baixo

console.log(Math.ceil(PI))                      // 4 arredondando para cima

console.log(Math.min(-5, 3, 20, 4, 5, 10))      // -5, retorna o valor mínimo

console.log(Math.max(-5, 3, 20, 4, 5, 10))      // 20, retorna o valor máximo

const numAleatorio = Math.random()              // cria um número aleatório entre 0 até 0.999999 
console.log(numAleatorio)

// Vamos criar um número aleatório entre 0 até 10

const num = Math.floor(Math.random () * 11)     // cria um número aleatório entre 0 até 10
console.log(num)

// Valor absoluto
console.log(Math.abs(-10))                      // 10

// Raiz quadrada
console.log(Math.sqrt(100))                     // 10

console.log(Math.sqrt(2))                       // 1.4142135623730951

// Potência
console.log(Math.pow(3, 2))                     // 9

console.log(Math.E)                             // 2.718

// Logaritmo
// Retorna o logaritmo natural com base E de x, Math.log(x)
console.log(Math.log(2))                        // 0.6931471805599453
console.log(Math.log(10))                       // 2.302585092994046

// Retorna o logaritmo natural de 2 e 10 repectivamente
console.log(Math.LN2)                           // 0.6931471805599453
console.log(Math.LN10)                          // 2.302585092994046

// Trigonometria
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
```

#### Gerador de Números Aleatórios

O objeto Math do JavaScript tem o método random() que gera números de 0 ate 0.999999999...

```js
let numeroAleatorio = Math.random()         // gera de 0 até 0.999...
```

Agora, vamos ver como nós podemos usar o método random() para gerar um número aleatório entre 0 e 10:

```js
let numeroAleatorio = Math.random()         // gera de 0 até 0.999
let numeroEntreZeroAteDez = numeroAleatorio * 11

console.log(numeroEntreZeroAteDez)          // retorna: min 0 and max 10.99

let numeroAleatorioParaInteiro = Math.floor(numeroEntreZeroAteDez)
console.log(numeroAleatorioParaInteiro)     // retorna: entre 0 e 10
```

## Strings

Strings são textos, que estão entre **_simples_**, **_duplas_**, **_crase_**. Para declarar uma string, nós precisamos de um nome de variável, operador de atribuição, um valor entre aspas simples, aspas duplas, ou crase.
Vamos ver alguns exemplos de string:

```js
let espaço = ' '                 // um valor de string vazia
let primeiroNone = 'Asabeneh'
let ultimoNome = 'Yetayeh'
let país = 'Finland'
let cidade = 'Helsinki'
let linguagem = 'JavaScript'
let profissao = 'Professor'
let citacao = "The saying,'Seeing is Believing' is not correct in 2020."
let citacaoUsandoCrase = `The saying,'Seeing is Believing' is not correct in 2020.`
```

### String Concatenação

Conectando duas ou mais strings juntas é chamado de concatenação.
Usando as strings declaradas na sessão anterior de strings: 

```js
let nomeCompleto = primeiroNone + espaco + ultimoNome; // concatenação, combinar duas ou mais strings juntas.
console.log(nomeCompleto);
```

```sh
Asabeneh Yetayeh
```

Nós podemos concatenar strings de jeitos diferentes.

#### Concatenando Usando o Operador de Adição

Concatenando usando o operador de adição é o modo antigo de fazer. Este tipo de concatenação é tedioso e propenso a erros. E é muito bom sabe como concatenar deste modo, mas eu sugiro fortemente que use o template ES6 de strings (explicado mais adiante). 

```js
// Declarando diferentes variáveis de diferentes tipos de dados
let espaco = ' '
let primeiroNome = 'Asabeneh'
let ultimoNome = 'Yetayeh'
let pais = 'Finland'
let cidade = 'Helsinki'
let linguagem = 'JavaScript'
let profissao = 'teacher'
let idade = 250

let nomeCompleto = primeiroNome + espaco + ultimoNome
let pessoaUmInfo = nomeCompleto + '. I am ' + idade + '. I live in ' + país; // ES5 adição de string

console.log(pessoaUmInfo)
```

```sh
Asabeneh Yetayeh. I am 250. I live in Finland
```
### Strings Literais Longas

Uma string pode ser apenas um caractere, paragrafo ou uma página. Se o tamanho da string é maior que a linha. Nós podemos usar o caractere barras invertidas (\\) no final de cada linha para indicar que aquela string irá continuar na próxima linha. 
**Exemplo**

```js
const paragrafo = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragrafo)
```

#### Escape Sequences em Strings

Em JavaScript e outras linguagens de programação \ seguido de alguns caracteres, é um escape sequence. Vamos ver os mais usados:

- \n: Nova linha
- \t: Tab, significa 8 espaços
- \\\\: Barra
- \\': Single quote (')
- \\": Double quote (")
  
```js
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // quebra de linha
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // Para mostar uma barra
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
```

saída no console:

```sh
I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020
```

#### Strings Literais (Template Strings)

Para criar Strings Literais , nós usamos crases. Nós podemos injetar dados como expressões para criar String Literais, usando na expressão parentesis ({}) precedido de um sinal de dollar $. Veja a sintaxe abaixo.

```js
//Sintaxe
`String literal text`
`String literal text ${expressão}`
```

**Exemplo: 1**

```js
console.log(`The sum of 2 and 3 is 5`) // escrevendo dados estáticos
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injetando dados dinamicamente
```

**Exemplo:2**

```js
let primeiroNome = 'Asabeneh'
let ultimoNome = 'Yetayeh'
let pais = 'Finland'
let cidade = 'Helsinki'
let linguagem = 'JavaScript'
let profissao = 'teacher'
let idade = 250
let nomeCompleto = primeiroNome + ' ' + ultimoNome

let pessoaInfoUm = `I am ${nomeCompleto}. I am ${idade}. I live in ${pais}.` //ES6 - Método de interpolação de String
let pesoaInfoDois = `I am ${nomeCompleto}. I live in ${cidade}, ${pais}. I am a ${profissao}. I teach ${linguagem}.`
console.log(pessoaInfoUm)
console.log(pesoaInfoDois)
```

```sh
I am Asabeneh Yetayeh. I am 250. I live in Finland.
I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.
```

Usando Literais ou método de interpolação de String, nós podemos adicionar expressões, que podem ser algum valor, ou alguma operação (comparação, aritimética, operador ternário).

```js
let a = 2
let b = 3
console.log(`${a} é maior que ${b}: ${a > b}`)
```

```sh
2 é maior que 3: false
```

### String Métodos

Tudo em JavaScript é um objeto. String é um tipo de dado primitivo, que significa que não podemos modificá-la uma vez criada. Um objeto String pode ter vários métodos. Existe diferentes métodos para strings que pode nos ajudar. 

1. *length*: O  método *length* retorna o número de caracteres em uma string incluindo espaços vázios.

**Exemplo:**

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let primeiroNome = 'Asabeneh'
console.log(primeiroNome.length)  // 8
```

2. *Acessando caracteres em uma string*: Nós podemos acessar cada caractere em uma string usando seu index. Em programação, a contagem começa em 0. O primeiro index de uma string é zero, e o último index é o length de uma string - 1.
  
  ![Accessing string by index](../images/string_indexes.png)

Vamos acessar diferentes caracteres em 'JavaScript' string.

```js
let string = 'JavaScript'
let primeiraLetra = string[0]

console.log(primeiraLetra)           // J

let segundaLetra = string[1]       // a
let terceiraLetra = string[2]
let ultimaLetra = string[9]

console.log(ultimaLetra)            // t

let ultimoIndex = string.length - 1

console.log(ultimoIndex)  // 9
console.log(string[ultimoIndex])    // t
```

3. *toUpperCase()*: Este método muda a string para letras maiúsculas.

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let primeiroNome = 'Asabeneh'

console.log(primeiroNome.toUpperCase())  // ASABENEH

let pais = 'Finland'

console.log(país.toUpperCase())    // FINLAND
```

4. *toLowerCase()*: Este método muda a string para letras minúsculas.

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let primeiroNome = 'Asabeneh'

console.log(primeiroNome.toLowerCase())  // asabeneh

let pais = 'Finland'

console.log(pais.toLowerCase())   // finland
```

5. *substr()*: usando dois argumentos, o index de onde irá começar e o número de caracteres para retirar da string.

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let pais = 'Finland'
console.log(país.substr(3, 4))   // land
```

6. *substring()*: Usando dois argumentos, o index de onde irá começar e o index para parar, mas esse não inclui o caractere no index de parada.

```js
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let pais = 'Finland'

console.log(país.substring(0, 3))   // Fin
console.log(país.substring(3, 7))   // land
console.log(país.substring(3))      // land
```

7. *split()*: O método split divide uma string em um lugar especifico e converte em um array.

```js
let string = '30 Days Of JavaScript'

console.log(string.split())     // muda para um array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // separa em um array com espaço -> ["30", "Days", "Of", "JavaScript"]

let primeiroNome = 'Asabeneh'

console.log(primeiroNome.split())    // muda para um array - > ["Asabeneh"]
console.log(primeiroNome.split(''))  // separa em um array cada letra ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let pais = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(país.split(','))  // separa para um array com vírgula -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(país.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
```

8. *trim()*: Remove espaços adicionais no início ou no final de uma string.

```js
let string = '   30 Days Of JavaScript   '

console.log(string)
console.log(string.trim(' '))

let primeiroNome = ' Asabeneh '

console.log(primeiroNome)
console.log(primeiroNome.trim())  // ainda remove espaços no início e no fim da string
```

```sh
   30 Days Of JavasCript   
30 Days Of JavasCript
  Asabeneh 
Asabeneh
```

9. *includes()*: Usando uma substring como argumento, e então verifica se o argumento exise na string. *includes()* retorna um boolean. Se uma substring existe na string, então retorna true, senão retornará false.

```js
let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - é case sensitive!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let pais = 'Finland'

console.log(país.includes('fin'))     // false
console.log(país.includes('Fin'))     // true
console.log(país.includes('land'))    // true
console.log(país.includes('Land'))    // false
```

10. *replace()*: Usando como parâmetro a antiga substring para uma nova substring.

```js
string.replace(antigaSubstring, novaSubstring)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let pais = 'Finland'
console.log(país.replace('Fin', 'Noman'))       // Nomanland
```
11. *charAt()*: Usando um index e retorna o valor no index selecionado;

```js
string.charAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let ultimoIndex = string.length - 1
console.log(string.charAt(ultimoIndex)) // t
```

12. *charCodeAt()*: Usando um index e retorna o código de caractere (número ASCII) do valor nesse index.

```js
string.charCodeAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII número é 68

let ultimoIndex = string.length - 1
console.log(string.charCodeAt(ultimoIndex)) // t ASCII é 116

```
13.  *indexOf()*: Usando uma substring e o mesmo existe em uma string retorna a primeira posição da substring, se não existe retornará -1

```js
string.indexOf(substring)
```

```js
let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1
```

14.  *lastIndexOf()*: Usando uma substring e o mesmo existe em uma string retorna a última posição da substring, se não existe retornará -1

```js
//syntax
string.lastIndexOf(substring)
```

```js
let string = 'Eu amo JavaScript. Se você não ama JavaScript oque mais voce pode amar?'

console.log(string.lastIndexOf('love'))       // 66
console.log(string.lastIndexOf('you'))        // 56
console.log(string.lastIndexOf('JavaScript')) // 35
```

15. *concat()*: Usando algumas substring e os adiciona (Join).

```js
string.concat(substring, substring, substring)
```

```js
let string = '30'
console.log(string.concat(" Days ", "Of", " JavaScript")) // 30 Days Of JavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland
```

16. *startsWith*: Usando uma substring como argumento, e verifica se a string começa com aquela substring específica. E retorna um boolean(true ou false).

```js
//syntax
string.startsWith(substring)
```

```js
let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false
console.log(string.startsWith('world'))  // false

let country = 'Finland'

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false
```

17. *endsWith*: Usando uma substring como argumento, e verifica se a string termina com aquela substring específica. E retorna um boolean(true ou false).

```js
string.endsWith(substring)
```

```js
let string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in the world')) // true

let pais = 'Finland'

console.log(país.endsWith('land'))         // true
console.log(país.endsWith('fin'))          // false
console.log(país.endsWith('Fin'))          //  false
```

18. *search*: Usando uma substring como um argumento e retorna o index do primeiro resultado. O valor da pesquisa pode ser uma string ou uma expressão regular.

```js
string.search(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
```

19. *match*: Usando uma substring ou expressão regular como um argumento, e retorna um array se exite um resultado, se nao retorna null. Vamos ver como uma expressão regular se parece. Começa com / sinal e terminar com / sinal.

```js
let string = 'love'
let patternOne = /love/     // sem nenhuma flag
let patternTwo = /love/gi   // g-significa procurar em todo o texto, i - case insensitive
```

Sintaxe

```js
// syntax
string.match(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
```

```sh
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", grupo: undefined]
```

```js
let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]
```

"Vamos extrair números de um texto usando uma expressão regular. Essa não é a seção de expressões regulares, não se assuste! Vamos cobrir expressões regulares mais tarde."

```js
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// A letra 'd' com o caractere de escape significa 'd' não como uma letra normal, mas sim como um dígito.
// O sinal '+' significa um ou mais números de dígitos,
// Se houver a letra 'g' depois disso, significa global, pesquisar em todos os lugares.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```

20. *repeat()*: Um número como argumento e retorna uma versão repetida de uma string.

```js
string.repeat(n)
```

```js
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
```

## Verificando Tipos de Dados e Casting

### Verificando Tipos de Dados

Para verificar o tipo de uma variável nós usamos o método _typeOf_.

**Exemplo:**

```js
// Diferente tipos de dados javascript
// vamos declarar diferentes tipos de dados

let primeiroNome = 'Asabeneh'     // string
let ultimoNome = 'Yetayeh'        // string
let pais = 'Finland'              // string
let cidade = 'Helsinki'           // string
let idade = 250                   // número, não é minha idade real, não se preocupe com isso
let profissao                     // undefined, porque o valor não foi definido.

console.log(typeof 'Asabeneh')    // string
console.log(typeof primeiroNome)  // string
console.log(typeof 10)            // number
console.log(typeof 3.14)          // number
console.log(typeof true)          // boolean
console.log(typeof false)         // boolean
console.log(typeof NaN)           // number
console.log(typeof profissao)     // undefined
console.log(typeof undefined)     // undefined
console.log(typeof null)          // object
```

### Mudando Tipo de Dado (Casting)

- Casting: Convertendo um tipo de dados para outro. Usamos _parseInt()_, _parseFloat()_, _Number()_, _+ sign_ +, _str()_
  Quando fazemos operações aritméticas, os números em forma de string devem ser primeiro convertidos em inteiros ou floats, caso contrário, ocorre um erro.

#### String para Int

Podemos converter números em forma de string para um número. Qualquer número dentro de aspas é um número em forma de string. Um exemplo de número em forma de string: '10', '5', etc.
Podemos converter uma string para um número usando os seguintes métodos:

- parseInt()
- Number()
- Plus sign(+)

```js
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
```

```js
let num = '10'
let numInt = Number(num)

console.log(numInt) // 10
```

```js
let num = '10'
let numInt = +num

console.log(numInt) // 10
```

#### String para Float

Nós podemos converter uma string float número para um número float. Qualquer número float entre aspas é uma string float número. Exemplo:
'9.81', '3.14', '1.44', etc.
Podemos converter string float número usando os seguintes métodos:

- parseFloat()
- Number()
- Plus sign(+)

```js
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = +num

console.log(numFloat) // 9.81
```

#### Float para Int

Podemos converter float números para inteiro.
Vamos usar o seguinte método para converter float para int.

- parseInt()
  
```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```

🌕  Você é incrível. Você acabou de completar o dia 2 e está dois passos a frente no seu caminho para o sucesso. Agora faça alguns exercícios para seu cérebro e músculos.

## 💻 Dia 2: Exercícios

### Exercícios: Level 1

1. Declare uma variável chamada desafio e atribua a ela um valor inicial **'30 Dias de JavaScript'**. 
2. Imprimir uma string no console do browser usando __console.log()__ .
3. Imprimir o __length__ da string no console do browser usando o __console.log()__.
4. Troque todos os caracteres da string para letras maiúsculas usando o método __toUpperCase()__.
5. Troque todos os caracteres da string para letras minúsculas usando o método __toLowerCase()__.
6. Retirar (Slice) a primeira letra da string usando os métodos __substr()__ ou __substring()__. 
7. Dividir a frase *Days Of JavaScript* de *30 Days Of JavaScript*.
8. Verificar se a string contém a palavra __Script__ usando o método __includes()__.
9. Separar a __string__ em um __array__ usando o método __split()__.
10. Separar a string 30 Dias de JavaScript com espaços usando o método __split()__.
11. "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" __split__ a string com vírgulas e mude-a para um array. 
12. Mude 30 Dias de JavaScript para 30 Dias de Python usando o método __replace()__.
13. Qual é o caractere no index 15 em "30 Dias de JavaScript' string? Use o método __charAt()__.
14. Qual é o código do caractere de J em "30 Dias de JavaScript" string usando o método __charCodeAt()__.
15. Use __indexOf__ para determinar a posição da primeira ocorrência de __a__ em 30 Dias de JavaScript.
16. Use __lastIndexOf__ para determinar a posição da última ocorrência de __a__ em 30 Dias de JavaScript.
17. Use __indexOf__ para encontrar a posição da primeira ocorrência da palavra __because__ na seguinte frase:__'You cannot end a sentence with because because because is a conjunction'__.
18. Use __lastIndexOf__ para encontrar a posição da última ocorrência da palavra __because__ na seguinte frase:__'You cannot end a sentence with because because because is a conjunction'__.
19. Use __search__ para encontrar a posição da primeira ocorrência da palavra __because__ na seguinte frase:__'You cannot end a sentence with because because because is a conjunction'__.
20. Use __trim()__ para remover qualquer espaço adicional no início e no final da string .E.g "   30 Dias de JavaScript   ".
21. Use __startsWith()__ com a string *30 Dias De JavaScript* e faça o resultado ser verdadeiro.
22. Use __endsWith()__ com a string *30 Dias De JavaScript* e faça o resultado ser verdadeiro.
23. Use __match()__ para encontrar todos os __a__'s em 30 Dias De JavaScript.
24. Use __concat()__ para unir "30 Dias de" e "JavaScript" para uma única string, "30 Dias de JavaScript".
25. Use __repeat()__ para imprimir 30 Dias De JavaScript 2 vezes.

### Exercícios: Level 2

1. Usando o console.log() imprimir a seguinte citação:
  ```sh
    "Não há exercício melhor para o coração que ir lá em baixo e levantar as pessoas" by John Holmes nos ensina a ajudar outras pessoas.
  ```

2. Usando o console.log() imprimir a seguinte citação de Madre Teresa:
  ```sh
    "O amor não é paternalista e a caridade não tem a ver com pena, tem a ver com amor. Caridade e amor são a mesma coisa – com a caridade você dá amor, então não dê apenas dinheiro, mas estenda sua mão."
  ```

3. Verificar se typeOf "10" é exatamente igual a 10. Se não, faça ser exatamente igual.
4. Verificar se parseFloat("9.8) é igual a 10. Se não, faça ser exatamente igual com 10.
5. Verificar se "ão" é encontrado em ambos algodão e jargão.
6. _Espero que este curso não tenha muitos jargões_. Verifique se _jargões_ está na frase. 
7. Gerar um número aleatório entre incluindo 0 e 100.
8. Gerar um número aleatório entre incluindo 50 e 100.
9. Gerar um número aleatório entre incluindo 0 e 255.
10. Acesse os caracteres da string "JavaScript" usando um número aleatório.
11. Use console.log() e imprimir os caracteres no seguinte padrão.
    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12. Use __substr__ para retirar da frase __because because because__ da seguinte frase: __'You cannot end a sentence with because because because is a conjunction'__.

### Exercícios: Level 3

1. "Amor é a melhor coisa neste mundo. Alguns encontraram seu amor e alguns ainda estão procurando pelo seu amor." Contar o número de palavras __amor__ nesta frase.

2. Use __match()__ para contar os números de todos os __because__ na seguinte frase: __'You cannot end a sentence with because because because is a conjunction'__.  

3. Limpar o seguinte texto e encontrar a palavra mais repetida (dica, use replace e expressões regulares)
  ```js
    const frase = " %I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching "
  ```  

4. Calcular o total anual de uma pessoa extraindo os números do seguinte texto. __"Ele recebe 5000 euros de salário por mês, 10000 euros de bônus anual, 15000 euros de cursos onlines por mês.'__. 

🎉 PARABÉNS ! 🎉

[<< Dia 1](../readMe.md) | [Dia 3 >>](../Dia_03_Booleanos_Operadores_Data/dia_03_booleanos_operadores_data.md)
