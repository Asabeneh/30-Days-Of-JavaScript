# 30 Dias de JavaScript

| # Dia |                                                                       Tópicos                                                                            |
| ----- |   :-------------------------------------------------------------------------------------------------------------------------------------------------:    |
| 01    |                                                             [Introdução](./readMe.md)                                                                    |
| 02    |                                               [Tipos de Dados](./02_Day_Data_types/02_day_data_types.md)                                                 |
| 03    |                             [Booleanos, Operadores, Data](./03_Day_Booleans_operators_date/03_booleans_operators_date.md)                                |
| 04    |                                            [Condicionais](./04_Day_Conditionals/04_day_conditionals.md)                                                  |
| 05    |                                                     [Arrays](./05_Day_Arrays/05_day_arrays.md)                                                           |
| 06    |                                                       [Loops](./06_Day_Loops/06_day_loops.md)                                                            |
| 07    |                                                 [Funções](./07_Day_Functions/07_day_functions.md)                                                        |
| 08    |                                                    [Objetos](./08_Day_Objects/08_day_objects.md)                                                         |
| 09    |                             [Higher Order Functions](./09_Day_Higher_order_functions/09_day_higher_order_functions.md)                                   |
| 10    |                                           [Sets and Maps](./10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)                                                |
| 11    |                      [Destructuring and Spreading](./11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)                           |
| 12    |                                  [Expressões Regulares](./12_Day_Regular_expressions/12_day_regular_expressions.md)                                      |
| 13    |                             [Método Console Objeto](./13_Day_Console_object_methods/13_day_console_object_methods.md)                                    |
| 14    |                                         [Tratamento de Errors](./14_Day_Error_handling/14_day_error_handling.md)                                         |
| 15    |                                                    [Classes](./15_Day_Classes/15_day_classes.md)                                                         |
| 16    |                                                        [JSON](./16_Day_JSON/16_day_json.md)                                                              |
| 17    |                                            [Armazenamento na Web](./17_Day_Web_storages/17_day_web_storages.md)                                          |
| 18    |                                                  [Promises](./18_Day_Promises/18_day_promises.md)                                                        |
| 19    |                                                   [Closure](./19_Day_Closures/19_day_closures.md)                                                        |
| 20    |                                  [Escrevendo Código Limpo](./20_Day_Writing_clean_codes/20_day_writing_clean_codes.md)                                   |
| 21    |                                                          [DOM](./21_Day_DOM/21_day_dom.md)                                                               |
| 22    |                            [Manipulando DOM Objetos](./22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md)                                 |
| 23    |                                        [Event Listeners](./23_Day_Event_listeners/23_day_event_listeners.md)                                             |
| 24    |                             [Mini Projeto: Sistema Solar](./24_Day_Project_solar_system/24_day_project_solar_system.md)                                  |
| 25    | [Mini Projeto: Visualização de Dados de Paises do mundo](./25_Day_World_countries_data_visualization_1/25_day_world_countries_data_visualization_1.md)   |
| 26    | [Mini Projeto: Visualização de Dados de Paises do mundo 2](./26_Day_World_countries_data_visualization_2/26_day_world_countries_data_visualization_2.md) |
| 27    |                             [Mini Projeto: Portfólio](./27_Day_Mini_project_portfolio/27_day_mini_project_portfolio.md)                                  |
| 28    |                          [Mini Projeto: Leaderboard](./28_Day_Mini_project_leaderboard/28_day_mini_project_leaderboard.md)                               |
| 29    |             [Mini Projeto: Caracteres Animados](./29_Day_Mini_project_animating_characters/29_day_mini_project_animating_characters.md)                  |
| 30    |                                     [Projetos Finais](./30_Day_Mini_project_final/30_day_mini_project_final.md)                                          |

🧡🧡🧡 HAPPY CODING 🧡🧡🧡

<div>
<small>Dê suporte ao <strong>Autor</strong> para criar mais materiais educacionais</small> <br />  
<a href = "https://www.paypal.me/asabeneh"><img src='/images/paypal_lg.png' alt='Paypal Logo' style="width:10%"/></a>
</div>

<div align="center">
  <h1> 30 Dias de JavaScript: Introdução</h1>
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

<div>

🇬🇧 [English](../readMe.md)
🇪🇸 [Spanish](../Spanish/readme.md)
🇮🇹 [Italian](../Italian/readMe.md)
🇷🇺 [Russian](../RU/README.md)
🇹🇷 [Turkish](../Turkish/readMe.md)
🇦🇿 [Azerbaijan](../Azerbaijani/readMe.md)
🇰🇷 [Korean](../Korea/README.md)
🇻🇳 [Vietnamese](../Vietnamese/README.md)
🇵🇱 [Polish](../Polish/readMe.md)
🇧🇷 [Portuguese](./readMe.md)

</div>

</div>
</div>

[Dia 2 >>](./02_Day_Data_types/02_day_data_types.md)

![Trinta Dias de JavaScript](/images/day_1_1.png)

- [30 dias de JavaScript](#30-dias-de-javascript)
- [📔 Dia 1](#-dia-1)
	- [Introdução](#introdução)
	- [Requisitos](#requisitos)
	- [Setup](#setup)
		- [Instalação Node.js](#instalação-nodejs)
		- [Navegador](#navegador)
			- [Instalando Google Chrome](#instalando-google-chrome)
			- [Abrindo o Google Chrome Console](#abrindo-o-google-chrome-console)
			- [Escrevendo Código no console do Navegador](#escrevendo-código-no-console-do-navegador)
				- [Console.log](#consolelog)
				- [Console.log com Múltiplos Argumentos](#console.log-com-múltiplos-argumentos)
				- [Comentários](#comentários)
				- [Sintaxe](#sintaxe)
			- [Aritimética](#aritimética)
		- [Editor de Código](#editor-de-código)
			- [Instalando o Visual Studio Code](#instalando-o-visual-studio-code)
			- [Como usar o Visual Studio Code](#como-usar-o-visual-studio-code)
	- [Adicionando JavaScript Para uma Página na Web ](#adicionando-javaScript-para-uma-página-na-web )
		- [Script em Linha](#inline-script)
		- [Script Interno](#script-interno)
		- [Script Externo](#script-externo)
		- [Múltiplos Scripts Externos](#múltiplos-scripts-externos)
	- [Introdução a tipo de Dados](#introdução-a-tipo-de-dados)
		- [Números](#números)
		- [Strings](#strings)
		- [Booleanos](#booleans)
		- [Undefined](#undefined)
		- [Null](#null)
	- [Verificando Tipos de Dados](#verificando-tipos-de-dados)
	- [Comentários novamente](#comentários-novamente)
	- [Variáveis](#variáveis)
- [💻 Dia 1: Exercícios](#-dia-1-exercícios)

# 📔 Dia 1

## Introdução

**Parabéns** Em decidir de participar do desafio 30DaysOfJavaScript. Neste desafio você aprenderá tudo que precisa para ser um programador JavaScript, e em general, todo o conceito de programação. No fim do desafio voce estará adquirindo o Certificado de conclusão do desafio 30DaysOfJavaScript. Em caso de precisar de ajuda ou se preferir ajudar outros você pode entrar no [Grupo Telegram](https://t.me/ThirtyDaysOfJavaScript).

**30DaysOfJavaScript** desafio é um guia tanto para iniciantes e Avançados JavaScript Desenvolvedores, Bem vindo ao JavaScript. JavaScript é a linguagem da internet. Eu me divirto em usar e ensinar JavaScript e eu acredito que voce fará tambem.

Neste passo a passo do desafio JavaScript, você aprenderá JavaScript, a mais popular linguagem de programação da história da humanindade.
JavaScript é usado **_para adicionar interatividade aos websites, desenvolvimento de mobile apps, desktop aplicações, jogos_** e nos dias de hoje JavaScript pode ser usado para **_machine learning_** e **_AI_**.
**_JavaScript (JS)_** Teve um aumento na popularidade nos últimos anos e segue como a linguagem de programação líder por seis anos consecutivos e é a linguagem de programação mais usada no GitHub

## Requisitos

Sem conhecimentos prévios de programação é exigido para seguir este desafio. Precisará apenas:
1. Motivação
2. Um computador
3. Internet
4. Um navegador
5. Um editor de Código

## Setup

Eu acredito que voce tem a motivação e o forte desejo de ser um desenvolvedor, um computador e internet. Se voce tem isso, então você tem tudo para iniciar.

## Instalação Node.js

Você pode não precisar do Node.js agora mas você precisará mais tarde. Instalação do [node.js](https://nodejs.org/en/).

![Node download](/images/download_node.png)

Depois do download click duplo no ícone e intalar

![Instalação node](/images/install_node.png)

Nós podemos verificar se o Node está instalador na nossa máquina local abrindo nosso terminal do dispositivo ou prompt de comando.

```sh
asabeneh $ node -v
v12.14.0
```

Enquanto fazia este tutorial eu estava usando a versão 12.14.0 do Node, mas agora a recomendada versão do Node.js para dowload é v14.17.6, pelo tempo que você usar este material pode haver versão mais atual do Node.js.

### Navegador

Existe muitos navegadores por ai, Entento, Eu fortemente recomento o Google Chrome.

#### Instalando Google Chrome

Instalar o [Google Chrome](https://www.google.com.br/chrome/) se você não tem um ainda. Nós podemos escrever um pequeno código de JavaScript no console do browser, mas nós não usamos o console do navegador para desenvolver aplicações.

![Google Chrome](/images/google_chrome.png)

#### Abrindo o Google Chrome Console

Você pode abrir o Google Chrome console por um ou outro clicando nos 3 pontos no topo do lado direito do navegador, selecionando _Mais ferramentas -> Ferramenta para desenvolvedores ou usando o atalho do teclado. Eu prefiro os atalhos.

![Abrindo o chrome](/images/opening_developer_tool.png)

Para abrir o console do Chrome usando o atalho do teclado.

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```

![Abrindo o console](/images/opening_chrome_console_shortcut.png)

Depois de você abrir o console do Google Chrome, tente explorar os botões marcados. Nós vamos passar a maior parte do tempo no Console. O Console é o lugar onde vai seu código de JavaScript. O Console do Google Chrome V8 engine muda seu codigo de JavaScript para código de máquina.
Vamos escrever códigos de JavaScript no Google Chome console: 

![Escrevendo codigo no console](/images/js_code_on_chrome_console.png)

#### Escrevendo Código no console do Navegador

Nós podemos escrever qualquer código de JavaScript no console do Google Chrome ou qualquer outro console de navegador, para este desafio, nós vamos focar no Console do Google Chrome. Abra o Console usando: 

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

##### Console.log

Para escrever nosso primeiro código em JavaScript, vamos usar uma função built-it  **console.log()**. Nós passamos um argumento como dados de input, e a função mostra o output. Nós passamos `'Olá, Mundo!'` como dados de input ou argumento na função console.log(). 

```js
console.log('Olá, Mundo!')
```

##### Console.log com Múltiplos Argumentos

A funçao **`console.log()`** pode receber múltiplos parâmetros separados por vírgulas. A sintaxe é similar ao seguinte modo:**`console.log(param1, param2, param3)`** 

![console.log com Múltiplos Argumentos](/images/console_log_multipl_arguments.png)

```js
console.log('Olá', 'Mundo', '!')
console.log('Feliz', 'Ano', 'Novo', 2020)
console.log('Bem vindo', 'aos', 30, 'Dias', 'de', 'JavaScript')
```

Como você pode ver pelo trecho de código acima,  _`console.log()`_ pode receber múltiplos argumentos.

Parabéns! Você escreveu seu primeiro código de JavaScript usando _`console.log()`_.

##### Comentários

Nós podemos adicionar comentários para nosso código. Comentários são importantes para facilitar a leitura do código e deixar observações. O JavaScript não executa as partes com comentário no nosso código. No JavaScript, qualquer linha de texto começando com // é um comentário, e tudo anexo como isto `//` tambem é um comentário.

**Exemplo: Comentário de linha única**

```js
// Este é o primeiro comentário  
// Este é o segundo comentário
// Eu sou um comentário de linha única
```

**Exemplo: Comentários Várias Linhas**

```js
/*
  Isto é um comentário de várias linhas  
  Várias linhas de comentários.
  JavaScript é a Linguagem da Web
 */
```
##### Sintaxe

Linguagens de programação são similares com a linguagem humana. Portugês ou qualquer outra linguagem usa palavras, frases, orações, períodos, e outras mais para criar uma mensagem com significado. A definição em Português de sintaxe é _ Estrutura essencial para que frases, orações e períodos façam sentido e sejam de fácil compreensão por parte do leitor_. A definição técnica é a estrutura de declarações em uma linguagem de computador. Linguagens de programação tem sintaxes. JavaScript é uma linguagem de programação como outras linguagens de programação tem sua própria sintaxe. Se nós nao escrevermos uma sintaxe que JavaScript entenda, diferentes tipos de errors aparecerá. Nós iremos explorar diferentes tipos de errors no JavaScript depois. Por enquanto, vamos ver sintaxes de errors.

![Error](/images/raising_syntax_error.png)

Eu fiz uma confusão proposital. Como resultado, criou vários errors. Na realidade, a sintaxe é muito informativa. Informa quais tipos de errors foi feito. lendo  as mensagens do feedback de error, nós podemos corrigir a sintaxe e resolver o problema. O processo de identificar e remover errors de um programa é chamado de Debugging. Vamos resolver os errors:

```js
console.log('Olá, Mundo!')
console.log('Olá, Mundo!')
```

Até agora, nós vimos como exibir texto usando o _`console.log()`_. Se estamos imprimindo texto ou string usando _`console.log()`_, o texto tem que estar dentro de uma aspa simples, aspas duplas, ou crase.

**Exemplo:**

```js
console.log('Olá, Mundo!')
console.log("Olá, Mundo!")
console.log(`Hello, World!`)
```

#### Aritimética

Agora, vamos praticar escrevendo mais códigos JavaScript usando _`console.log()`_ no console do Google Chrome para números e tipos de dados.
Em adição ao texto, nós podemos tamem fazer calculos matemáticos usando javaSCript. Vamos fazer calculos simples a seguir.
É possivel escrever códigos JavaScript no console do Google Chome diretamente sem o função **_`console.log()`_** Entretanto, está incluso nesta introdução porque maior parte deste desafio pode ocorrer no editor de texto onde o uso de funcões pode ser mantario. Você pode brincar diretamente com ins

![Arithmetic](/images/arithmetic.png)

```js
console.log(2 + 3) // Adição
console.log(3 - 2) // Subtração
console.log(2 * 3) // Muiltiplição
console.log(3 / 2) // Divisão
console.log(3 % 2) // Modulo - Resto da divisão
console.log(3 ** 2) // Exponenciação 3 ** 2 == 3 * 3
```

### Editor de Código

Nós podemos escrever nosso código no console do navegador. mas isso nao é usado para grandes projetos. No anbiente real de trabalho, desenvolvedores usam diferentes editores para escrever seus códigos. Neste desafio 30 dias de JavaScript, nós iremos utilizar o Visual Studio Code.

#### Instalando o Visual Studio Code

Visual Studio Code é editor de texto open-source muito popular. Eu poderia recomendar o [download Visual Studio Code](https://code.visualstudio.com/), mas se você está familiarizado com outro editor, sinta livre para seguir oque você tem.

![Vscode](/images/vscode.png)

Se você instalou o Visual Studio Code, Vamos começar usando-o.

#### Como Usar o Visual Studio Code

Abra o Visual Studio Code clicando duas vezes com o mouse no ícone. Quando abrir, você terá esta interface. Tente interagir com os ícones rotulados.

![Vscode ui](/images/vscode_ui.png)

![Vscode add project](/images/adding_project_to_vscode.png)

![Vscode open project](/images/opening_project_on_vscode.png)

![script file](/images/scripts_on_vscode.png)

![Installing Live Server](/images/vsc_live_server.png)

![running script](/images/running_script.png)

![coding running](/images/launched_on_new_tab.png)

## Adicionando JavaScript Para uma Página na Web 

JavaScript pode ser adicionado para uma página na internet em três diferentes maneiras:

- **_Script em linha_**
- **_Script Interno_**
- **_Script Externo_**
- **_Múltiplos Scripts Externos_**

As diferentes sessões mostra diferentes maneiras de adicionar códigos JavaScript para sua página na web.

### Inline Script

Crie uma pasta do projeto no seu desktop ou em qualquer localização, nomeie de 30DaysOfJS e crie um **_`index.html`_** documento na sua pasta do projeto.
Então copie os seguintes códigos e abra-o no navegador, por exemplo [Chrome](https://www.google.com/chrome/).


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript: Script em linha</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfScript!')">Clique</button>
  </body>
</html>
```
Agora, você escreveu seu primeiro script em linha. Nós podemos criar uma mensagem pop up usando o _`alert()`_ função built-it

### Script Interno

O script interno pode ser escrito no _`head`_ ou _`body`_, mas é preferível colocar no body do documento HTML.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript: Script Interno</title>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </head>
  <body></body>
</html>
```

Isto é como nós escrevemos scripts internos na maioria das vezes. Escrevemos o código de JavaScript na sessão body é a mais preferida opção. Abra o console do navegador e veja o output do `console.log()`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript: Internal Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click</button>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </body>
</html>
```

Abra o console do navegador e veja o output do `console.log()`.

![js code from vscode](/images/js_code_vscode.png)

### Script Externo

Similar com o script interno, o link do script externo pode estar no header ou body, mas é mais indicado colocar no body do documento.
Primeiro, nós podemos criar scripts externos de JavaScript com a .js extensão. Todos os arquivos terminados com a .js extensão são JavaScript documentos. Crie uma pasta nomeada Introdução.js dentro do diretório do projeto e escreva o seguinte código e copie o link do arquivo .js no bottom do body.

```js
console.log('Welcome to 30DaysOfJavaScript')
```

Scripts Externo no _head_:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfJavaScript: Script Externo</title>
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>
```

Scripts Externo no _body_:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfJavaScript: Scripts Externo</title>
  </head>
  <body>
    

    <!-- JavaScript link externo pode estar no header ou no body --> 
    <!-- Antes do fechamento da tag do body é o lugar recomendado para colocar o script do JavaScript externo --> 
    <script src="introduction.js"></script>
  </body>
</html>
```

Abra o console do navegador para ver o output do `console.log()`.

### Múltiplos Scripts Externos

Nós tambem podemos colocar o link de vários arquivos externos de JavaScript em uma página web.
Crie um `helloworld.js` documento dentro da pasta 30DaysOfJS e escreva o seguinte código.

```js
console.log('Olá, Mundo!')
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Múltiplos Scripts Externo</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>
```

_Seu arquivo main.js deve estar abaixo de todos os outros scripts_. E isto é muito importante de relembrar

![Multiple Script](/images/multiple_script.png)

## Introdução a tipo de Dados

Em JavaScript e tambem em outras linguagens de programação, existem vários tipos de dados. Os seguintes são tipos de dados primitivos do JavaScript: _String, Number, Boolean, undefined, Null_, and _Symbol_.

### Números

- Integers: Inteiros (Negativo, zero e positivos) números
Examplo:
  ... -3, -2, -1, 0, 1, 2, 3 ...
- Float-point numbers: Números decimais.
  ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### Strings

Uma coleção de um ou mais caracteres entre duas aspas simples, aspas duplas, ou crase.

**Examplo:**

```js
'a'
'Asabeneh'
"Asabeneh"
'Finland'
'JavaScript is a beautiful programming language'
'I love teaching'
'I hope you are enjoying the first day'
`We can also create a string using a backtick`
'A string could be just as small as one character or as big as many pages'
'Any data type under a single quote, double quote or backtick is a string'
```

### Booleans

Um valor boleano ou é verdadeiro ou falso. Qualquer comparação retorna um valor booleano, que pode ser entre verdadeiro ou falso.

Um tipo de dado boleanno é verdadeiro ou um valor falso

**Examplo:**

```js
true // if the light is on, the value is true
false // if the light is off, the value is false
```

### Undefined

Em JavaScript, se nós não atribuirmos um valor a uma variável, o valor é undefined. Em adição a isto, se uma funcção não está retornando nada, ela retorna undefined

```js
let firstName
console.log(firstName) // undefined, because it is not assigned to a value yet
```

### Null

Null em JavaScript significa um valor vazio.

```js
let valorVazio = null
```

## Verificando Tipos de Dados

Para verificar o tipo de dado de uma determinada variável, nós usamos o operador **typeof**. Veja o seguinte exemplo.  

```js
console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined
```

## Comentários novamente

Lembre que comentando no JavaScript é similar à outras linguagens de programação. Comentários são importantes em fazer mais fácil a leitura do seu código.
Existe dois modos de comentar:

- _Comentando em linha única_
- _Comentando em várias linhas_

```js
// Comentando o código com um único comentário
// let firstName = 'Asabeneh'; Comentando em linha única_
// let lastName = 'Yetayeh'; Comentando em linha única_
```

Comentando em várias linhas:

```js
/*
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  Isto é um comentário em linha única
*/
```

## Variáveis

Variáveis são _containers_ de dados. Variáveis são usadas para _armazenar_ dados na memória alocada. Quando variáveis são declaradas, uma memória alocada é reservada. Quando uma variável é atribuída para um valor (dados), espaço na memória irá ser preenchido com aqueles dados. Para declarar uma variável, nós usamos as palavras-chaves _var_, _let_, ou _const_. 

Para uma variável que muda com o tempo, nós usamos _let_. Se os dados não vão mudar, nós usamos _const_. Por exemplo, PI, nome de país, gravidade não muda, e nós podemos usar _const_. Nós não vamos usar var neste desafio e eu nao recomendo usa-lo. Nós vamos falar mais sobre var, let, e const em detalhes em outras sessões (scope). Por enquanto, a explicação acima é suficiente.

Um nome de variável em JavaScript apenas segue a seguinte regra:

- Um nome de variável não deverá começar com um número.
- Um nome de variável não pode permitir caracteres especiais exceto o sinal do dólar e underscore.
- Um nome de variável segue a convenção camelCase.
- Um nomede variável não deve ter espaços entre as palavras.

Os seguintes exemplos são de variáveis válidas em JavaScript.

```js
firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020
```

A primeira e a segunda variável na lista segue a convenção camelCase de declaração no JavaScript. Neste material, nós vamos usar variáveis em camelCase (camelWithOneHump). Nós usamos CamelCase (CamelWithTwoHump) para declarar classes, nós vamos discutir sobre classes e objetos em outras sessões.

Exemplo de variáveis invalidas:

```js
  first-name
  1_num
  num_#_1
```

Vamos declarar variáveis com diferentes tipos de dados. Para declarar uma variável, nós precisamos usar as palavras-chaves _let_ ou _const_ antes de um nome de variável. Após o nome da variável, nós escrevemos um sinal de igual (operador de atribuição), e um valor (dados atribuidos).

```js
// Sintaxe
let nameOfVariable = value
```

O nomeDaVariavel é o nome que armazena diferente tipos de dados. Veja abaixo exemplos para mais detalhes.

**Exemplos de variáveis declaradas**

```js
// Declarando diferentes variáveis de diferentes tipos de dados
let firstName = 'Asabeneh' // primeiro nome de uma pessoa
let lastName = 'Yetayeh' //  ultimo nome de uma pessoa
let country = 'Finland' // país
let city = 'Helsinki' // capital da cidade
let age = 100 // Idade
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)
```

```sh
Asabeneh Yetayeh Finland Helsinki 100 true
```

```js
// Declarando variáveis com o valor numérico
let age = 100 // idade
const gravity = 9.81 // gravidade na terra em m/s2
const boilingPoint = 100 // ponto de ebulição da água, temperatura em °C
const PI = 3.14 // constante geométrica
console.log(gravity, boilingPoint, PI)
```

```sh
9.81 100 3.14
```

```js
// Variáveis tambem podem ser declaradas em uma linha separadas por uma vírgula, entretanto eu recomento usar a separação por linha para facilitar a leitura do código
let name = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(name, job, live)
```

```sh
Asabeneh teacher Finland
```

Quando você executa o arquivo _index.html_ na pasta dia-1 você deve conseguir isto:

![Day one](/images/day_1.png)

🌕 Você é incrivel! Você acabou de completar o desafio do dia 1 e você está no seu caminho para o sucesso. Agora faça alguns exercícios para seu cérebro e músculos.

# 💻 Dia 1: Exercícios

1. Escreva um comentário de linha única que diga, _comentários faz seu código ser fácil de ler_
2. Escreva outro comentário de linha única que diga, _Welcome to 30DaysOfJavaScript_
3. Escreva um comentário de várias linhas que diga, _comentários faz seu código ser fácil de ler, fácil de reusar_ _e informátivo_
4. Crie um  arquivo variavel.js e declare variáveis e atribua uma string, boolean, undefined e null 
5. Crie um arquivo tiposdedados.js e use o JavaScript **_typeof_** operador para verificar diferentes tipos de dados. Verifique o tipo de dado de cada variável
6. Declare quatro variáveis sem atribuir valores
7. Declare quatro variáveis e atribuir valores 
8. Declare variáveis para armazenar seu primeiro nome, ultimo nome, estado civil, país e idade em multiplas linhas 
9. Declare variáveis para armazenar seu primeiro nome, ultimo nome, estado civil, país e idade em uma única linha
10. Declare duas variáveis _minhaIdade_ e _suaIdade_ e atribua valores iniciais e mostre no console do navegador.

```sh
I am 25 years old.
You are 30 years old.
```

🎉 PARABÉNS ! 🎉

[Dia 2 >>](./Dia_02_Tipos_Dados/dia_02_tipos_dados.md)
