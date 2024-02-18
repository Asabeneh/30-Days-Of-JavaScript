<div align="center">
  <h1> 30 Dias de JavaScript: Booleanos, Operadores e Data</h1>
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

[<< Dia 2](../Dia_02_Tipos_Dados/dia_02_tipos_dados.md) | [Dia 4 >>](../Dia_04_Condicionais/Dia_04_condicionais.md)

![Trinta Dias De JavaScript](../../images/banners/day_1_3.png)

- [📔 Dia 3](#-dia-3)
  - [Booleanos](#booleanos)
    - [Valores Verdadeiros](#valores-verdadeiros)
    - [Valores Falsos](#valores-falsos)
  - [Indefinido](#indefinido)
  - [Nulo](#nulo)
  - [Operadores](#operadores)
    - [Operadores de Atribuição](#operadores-de-atribuição)
    - [Operadores Aritméticos](#operadores-aritméticos)
    - [Operadores de Comparação](#operadores-de-comparação)
    - [Operadores Lógicos](#operadores-lógicos)
    - [Operador de Incremento](#operador-de-incremento)
    - [Operador de Decremento](#operador-de-decremento)
    - [Operadores Ternários](#operadores-ternários)
    - [Precedência de Operadores](#precedência-de-operadores)
  - [Métodos da Janela](#métodos-da-janela)
    - [Método alert() da Janela](#método-alert-da-janela)
    - [Método prompt() da Janela](#método-prompt-da-janela)
    - [Método confirm() da Janela](#método-confirm-da-janela)
  - [Objeto Data](#objeto-data)
    - [Criando um objeto de tempo](#criando-um-objeto-de-tempo)
    - [Obtendo o ano completo](#obtendo-o-ano-completo)
    - [Obtendo o mês](#obtendo-o-mês)
    - [Obtendo a data](#obtendo-a-data)
    - [Obtendo o dia](#obtendo-o-dia)
    - [Obtendo as horas](#obtendo-as-horas)
    - [Obtendo os minutos](#obtendo-os-minutos)
    - [Obtendo os segundos](#obtendo-os-segundos)
    - [Obtendo o tempo](#obtendo-o-tempo)
  - [💻 Dia 3: Exercícios](#-dia-3-exercícios)
    - [Exercícios: Nível 1](#exercícios-nível-1)
    - [Exercícios: Nível 2](#exercícios-nível-2)
    - [Exercícios: Nível 3](#exercícios-nível-3)

# 📔 Dia 3

## Booleanos

O tipo de dado booleano representa um de dois valores: _true_ ou _false_. O valor booleano é verdadeiro ou falso. O uso desses tipos de dados ficará claro quando você começar com o operador de comparação. Qualquer comparação retorna um valor booleano que é verdadeiro ou falso.

**Exemplo: Valores Booleanos**

```js
let luzAcessa = true;
let estaChovendo = false;
let estaComFome = false;
let estaCasado = true;
let valorVerdadeiro = 4 > 3; // true
let valorFalso = 4 < 3; // false
```

Concordamos que os valores booleanos são verdadeiros ou falsos.

### Valores Verdadeiros

- Todos os números (positivos e negativos) são verdadeiros exceto zero
- Todas as strings são verdadeiras exceto uma string vazia ('')
- O booleano true

### Valores Falsos

- 0
- 0n
- null
- indefinido
- NaN
- o booleano false
- '', "", ``, string vazia

É bom lembrar esses valores verdadeiros e falsos. Na próxima seção, usaremos eles com condições para tomar decisões.

## Undefined (Indefinido)

Se declararmos uma variável e não atribuirmos um valor, o valor será Undefined (indefinido). Além disso, se uma função não estiver retornando o valor, será Undefined (indefinido).

```js
let primeiroNome;
console.log(primeiroNome); // não definido, porque ainda não foi atribuído um valor
```

## Null (Nulo)

```js
let vazio = null;
console.log(vazio); // -> null, significa sem valor
```

## Operadores

### Operadores de Atribuição

Um sinal de igual em JavaScript é um operador de atribuição. É usado para atribuir uma variável.

```js
let primeiroNome = 'Asabeneh';
let pais = 'Finlândia';
```

Operadores de Atribuição

![Operadores de Atribuição](../../images/assignment_operators.png)

### Operadores Aritméticos

Operadores aritméticos são operadores matemáticos.

- Adição(+): a + b
- Subtração(-): a - b
- Multiplicação(_): a _ b
- Divisão(/): a / b
- Módulo(%): a % b
- Exponencial(**): a ** b

```js
let numUm = 4;
let numDois = 3;
let soma = numUm + numDois;
let dif = numUm - numDois;
let mult = numUm * numDois;
let div = numUm / numDois;
let resto = numUm % numDois;
let potencia = numUm ** numDois;

console.log(soma, dif, mult, div, resto, potencia); // 7,1,12,1.33,1, 64
```

```js
const PI = 3.14;
let raio = 100; // comprimento em metros

//Vamos calcular a área de um círculo
const areaDoCirculo = PI * raio * raio;
console.log(areaDoCirculo); //  314 m

const gravidade = 9.81; // em m/s2
let massa = 72; // em Quilogramas

// Vamos calcular o peso de um objeto
const peso = massa * gravidade;
console.log(peso); // 706.32 N (Newton)

const pontoDeEbulicao = 100; // temperatura em oC, ponto de ebulição da água
const tempCorporal = 37; // temperatura corporal em oC

// Concatenando string com números usando interpolação de string
/*
 O ponto de ebulição da água é 100 oC.
 A temperatura corporal humana é 37 oC.
 A gravidade da terra é 9.81 m/s2.
 */
console.log(
  `O ponto de ebulição da água é ${pontoDeEbulicao} oC.\nA temperatura corporal humana é ${tempCorporal} oC.\nA gravidade da terra é ${gravidade} m/s2.`
);
```

### Operadores de Comparação

Na programação, comparamos valores; usamos operadores de comparação para comparar dois valores. Verificamos se um valor é maior, menor ou igual a outro valor.

![Operadores de Comparação](../../images/comparison_operators.png)
**Exemplo: Operadores de Comparação**

```js
console.log(3 > 2); // true, porque 3 é maior que 2
console.log(3 >= 2); // true, porque 3 é maior que 2
console.log(3 < 2); // false, porque 3 é maior que 2
console.log(2 < 3); // true, porque 2 é menor que 3
console.log(2 <= 3); // true, porque 2 é menor que 3
console.log(3 == 2); // false, porque 3 não é igual a 2
console.log(3 != 2); // true, porque 3 não é igual a 2
console.log(3 == '3'); // true, compara apenas o valor
console.log(3 === '3'); // false, compara tanto o valor quanto o tipo de dado
console.log(3 !== '3'); // true, compara tanto o valor quanto o tipo de dado
console.log(3 != 3); // false, compara apenas o valor
console.log(3 !== 3); // false, compara tanto o valor quanto o tipo de dado
console.log(0 == false); // true, equivalente
console.log(0 === false); // false, não exatamente o mesmo
console.log(0 == ''); // true, equivalente
console.log(0 == ' '); // true, equivalente
console.log(0 === ''); // false, não exatamente o mesmo
console.log(1 == true); // true, equivalente
console.log(1 === true); // false, não exatamente o mesmo
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, não é igual
console.log(NaN === NaN); // false
console.log(typeof NaN); // número

console.log('mango'.length == 'avocado'.length); // false
console.log('mango'.length != 'avocado'.length); // true
console.log('mango'.length < 'avocado'.length); // true
console.log('milk'.length == 'meat'.length); // true
console.log('milk'.length != 'meat'.length); // false
console.log('tomato'.length == 'potato'.length); // true
console.log('python'.length > 'dragon'.length); // false
```

Tente entender as comparações acima com alguma lógica. Lembrar sem qualquer lógica pode ser difícil.
JavaScript é de certa forma um tipo peculiar de linguagem de programação. O código JavaScript é executado e fornece um resultado, mas a menos que você seja bom nisso, pode não ser o resultado desejado.

Como regra geral, se um valor não é verdadeiro com ==, ele não será igual com ===. Usar === é mais seguro do que usar ==. O seguinte [link](https://dorey.github.io/JavaScript-Equality-Table/) possui uma lista exaustiva de comparação de tipos de dados.

### Operadores Lógicos

Os seguintes símbolos são os operadores lógicos comuns:
&&(e), ||(ou) e !(negação).
O operador && obtém verdadeiro apenas se os dois operandos forem verdadeiros.
O operador || obtém verdadeiro se qualquer um dos operandos for verdadeiro.
O operador ! nega verdadeiro para falso e falso para verdadeiro.

```js
// Exemplo do operador &&

const verificacao = 4 > 3 && 10 > 5; // true && true -> true
const verificacao = 4 > 3 && 10 < 5; // true && false -> false
const verificacao = 4 < 3 && 10 < 5; // false && false -> false

// Exemplo do operador ||

const verificacao = 4 > 3 || 10 > 5; // true || true -> true
const verificacao = 4 > 3 || 10 < 5; // true || false -> true
const verificacao = 4 < 3 || 10 < 5; // false || false -> false

// Exemplos de negação

let verificacao = 4 > 3; // true
let verificacao = !(4 > 3); // false
let luzAcesa = true;
let luzApagada = !luzAcesa; // false
let estaCasado = !false; // true
```

### Operador de Incremento

No JavaScript, usamos o operador de incremento para aumentar o valor armazenado em uma variável. O incremento pode ser pré ou pós-incremento. Vamos ver cada um deles:

1. Pré-incremento

```js
let contador = 0;
console.log(++contador); // 1
console.log(contador); // 1
```

2. Pós-incremento

```js
let contador = 0;
console.log(contador++); // 0
console.log(contador); // 1
```

Geralmente, usamos mais o pós-incremento. Pelo menos, você deve se lembrar de como usar o operador de pós-incremento.

### Operador de Decremento

No JavaScript, usamos o operador de decremento para diminuir o valor armazenado em uma variável. O decremento pode ser pré ou pós-decremento. Vamos ver cada um deles:

1. Pré-decremento

```js
let contador = 0;
console.log(--contador); // -1
console.log(contador); // -1
```

2. Pós-decremento

```js
let contador = 0;
console.log(contador--); // 0
console.log(contador); // -1
```

### Operadores Ternários

O operador ternário permite escrever uma condição.
Outra maneira de escrever condicionais é usando operadores ternários. Veja os seguintes exemplos:

```js
let estaChovendo = true;
estaChovendo
  ? console.log('Você precisa de um casaco de chuva.')
  : console.log('Não precisa de casaco de chuva.');
estaChovendo = false;

estaChovendo
  ? console.log('Você precisa de um casaco de chuva.')
  : console.log('Não precisa de casaco de chuva.');
```

```sh
Você precisa de um casaco de chuva.
Não precisa de casaco de chuva.
```

```js
let numero = 5;
numero > 0
  ? console.log(`${numero} é um número positivo`)
  : console.log(`${numero} é um número negativo`);
numero = -5;

numero > 0
  ? console.log(`${numero} é um número positivo`)
  : console.log(`${numero} é um número negativo`);
```

```sh
5 é um número positivo
-5 é um número negativo
```

### Precedência de Operadores

Eu gostaria de recomendar que você leia sobre a precedência de operadores neste [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Métodos da Janela

### Método alert() da Janela

Como você viu no início, o método alert() exibe uma caixa de alerta com uma mensagem especificada e um botão OK. É um método embutido e aceita um argumento.

```js
alert(mensagem);
```

```js
alert('Bem-vindo ao 30DiasDeJavaScript');
```

Não use alerta demais porque é destrutivo e irritante, use apenas para testar.

### Método prompt() da Janela

Os métodos prompt da janela exibem uma caixa de prompt com uma entrada no seu navegador para receber valores de entrada e os dados de entrada podem ser armazenados em uma variável. O método prompt() aceita dois argumentos. O segundo argumento é opcional.

```js
prompt('texto obrigatório', 'texto opcional');
```

```js
let numero = prompt('Digite um número', 'o número vai aqui');
console.log(numero);
```

### Método confirm() da Janela

O método confirm() exibe uma caixa de diálogo com uma mensagem especificada, junto com um botão OK e um botão Cancelar.
Uma caixa de confirmação é frequentemente usada para pedir permissão de um usuário para executar algo. O Window confirm() aceita uma string como argumento.
Clicar em OK resulta em valor verdadeiro, enquanto clicar no botão Cancelar resulta em valor falso.

```js
const concorda = confirm('Você tem certeza que gostaria de deletar? ');
console.log(concorda); // o resultado será verdadeiro ou falso baseado no que você clicar na caixa de diálogo
```

Estes não são todos os métodos da janela, teremos uma seção separada para aprofundar nos métodos da janela.

## Objeto Data

O tempo é uma coisa importante. Gostamos de saber o tempo de uma certa atividade ou evento. No JavaScript, o tempo e a data atual são criados usando o Objeto Data do JavaScript. O objeto que criamos usando o Objeto Data fornece muitos métodos para trabalhar com data e hora. Os métodos que usamos para obter informações de data e hora de um objeto de data começam com a palavra _get_ porque fornecem a informação.
_getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getTime(), getDay()_

![Objeto Data e Hora](../../images/date_time_object.png)

### Criando um objeto de tempo

Uma vez que criamos um objeto de tempo. O objeto de tempo fornecerá informações sobre o tempo. Vamos criar um objeto de tempo

```js
const agora = new Date();
console.log(agora); // Sat Jan 04 2020 00:56:41 GMT+0200 (Horário Padrão do Leste Europeu)
```

Criamos um objeto de tempo e podemos acessar qualquer informação de data e hora do objeto usando os métodos get que mencionamos na tabela.

### Obtendo o ano completo

Vamos extrair ou obter o ano completo de um objeto de tempo.

```js
const agora = new Date();
console.log(agora.getFullYear()); // 2020
```

### Obtendo o mês

Vamos extrair ou obter o mês de um objeto de tempo.

```js
const agora = new Date();
console.log(agora.getMonth()); // 0, porque o mês é Janeiro, mês(0-11)
```

### Obtendo a data

Vamos extrair ou obter a data do mês de um objeto de tempo.

```js
const agora = new Date();
console.log(agora.getDate()); // 4, porque o dia do mês é 4, dia(1-31)
```

### Obtendo o dia

Vamos extrair ou obter o dia da semana de um objeto de tempo.

```js
const agora = new Date();
console.log(agora.getDay()); // 6, porque o dia é Sábado, que é o 7º dia
// Domingo é 0, Segunda é 1 e Sábado é 6
// Obtendo o dia da semana como um número (0-6)
```

### Obtendo as horas

Vamos extrair ou obter as horas de um objeto de tempo.

```js
const agora = new Date();
console.log(agora.getHours()); // 0, porque a hora é 00:56:41
```

### Obtendo os minutos

Vamos extrair ou obter os minutos de um objeto de tempo.

```js
const agora = new Date();
console.log(agora.getMinutes()); // 56, porque a hora é 00:56:41
```

### Obtendo os segundos

Vamos extrair ou obter os segundos de um objeto de tempo.

```js
const agora = new Date();
console.log(agora.getSeconds()); // 41, porque a hora é 00:56:41
```

### Obtendo o tempo

Este método fornece o tempo em milissegundos a partir de 1º de janeiro de 1970. Também é conhecido como tempo Unix. Podemos obter o tempo Unix de duas maneiras:

1. Usando _getTime()_

```js
const agora = new Date();
console.log(agora.getTime()); // 1578092201341, este é o número de segundos passados de 1º de janeiro de 1970 até 4 de janeiro de 2020 00:56:41
```

2. Usando _Date.now()_

```js
const todosOsSegundos = Date.now();
console.log(todosOsSegundos); // 1578092201341, este é o número de segundos passados de 1º de janeiro de 1970 até 4 de janeiro de 2020 00:56:41

const tempoEmSegundos = new Date().getTime();
console.log(todosOsSegundos == tempoEmSegundos); // true
```

Vamos formatar esses valores para um formato de tempo legível por humanos.
**Exemplo:**

```js
const agora = new Date();
const ano = agora.getFullYear(); // retorna o ano
const mes = agora.getMonth() + 1; // retorna o mês(0 - 11)
const data = agora.getDate(); // retorna a data (1 - 31)
const horas = agora.getHours(); // retorna número (0 - 23)
const minutos = agora.getMinutes(); // retorna número (0 -59)

console.log(`${data}/${mes}/${ano} ${horas}:${minutos}`); // 4/1/2020 0:56
```

🌕 Você tem energia sem limites. Você acabou de concluir os desafios do dia 3 e está três passos à frente no seu caminho para a grandeza. Agora faça alguns exercícios para o seu cérebro e para o seu músculo.

## 💻 Exercícios do Dia 3

### Exercícios: Nível 1

1. Declare as variáveis firstName, lastName, country, city, age, isMarried, year e atribua valores a elas e utilize o operador typeof para verificar os diferentes tipos de dados.
2. Verifique se o tipo de '10' é igual a 10.
3. Verifique se parseInt('9.8') é igual a 10.
4. O valor booleano é verdadeiro ou falso.

   1. Escreva três declarações JavaScript que forneçam valor verdadeiro.
   2. Escreva três declarações JavaScript que forneçam valor falso.

5. Descubra o resultado das seguintes expressões de comparação primeiro sem usar console.log(). Após decidir o resultado, confirme-o usando console.log():

   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Encontre o comprimento de python e jargon e faça uma declaração falsa de comparação.

6. Descubra o resultado das seguintes expressões primeiro sem usar console.log(). Após decidir o resultado, confirme-o usando console.log():

   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. Não há 'on' em ambos dragon e python

7. Use o objeto Date para realizar as seguintes atividades:
   1. Qual é o ano atual?
   2. Qual é o mês atual como um número?
   3. Qual é a data de hoje?
   4. Qual é o dia atual como um número?
   5. Qual é a hora atual?
   6. Quantos minutos estão agora?
   7. Descubra o número de segundos que se passaram desde 1º de janeiro de 1970 até agora.

### Exercícios: Nível 2

1. Escreva um script que peça ao usuário para inserir a base e a altura do triângulo e calcule a área de um triângulo (área = 0,5 x b x h).

   ```sh
   Insira a base: 20
   Insira a altura: 10
   A área do triângulo é 100
   ```

1. Escreva um script que solicite ao usuário para inserir os lados a, b e c do triângulo e calcule o perímetro do triângulo (perímetro = a + b + c)

   ```sh
   Insira o lado a: 5
   Insira o lado b: 4
   Insira o lado c: 3
   O perímetro do triângulo é 12
   ```

1. Obtenha o comprimento e a largura usando prompt e calcule a área de um retângulo (área = comprimento x largura) e o perímetro do retângulo (perímetro = 2 x (comprimento + largura))
1. Obtenha o raio usando prompt e calcule a área de um círculo (área = pi x r x r) e a circunferência de um círculo (c = 2 x pi x r) onde pi = 3.14.
1. Calcule a inclinação, interseção x e interseção y de y = 2x -2
1. A inclinação é m = (y2-y1)/(x2-x1). Encontre a inclinação entre o ponto (2, 2) e o ponto (6,10)
1. Compare a inclinação das duas questões acima.
1. Calcule o valor de y (y = x^2 + 6x + 9). Tente usar diferentes valores de x e descubra em que valor de x y é 0.
1. Escreva um script que solicite ao usuário para inserir horas e taxa por hora. Calcule o pagamento da pessoa?

   ```sh
   Insira horas: 40
   Insira a taxa por hora: 28
   Seu ganho semanal é 1120
   ```

1. Se o comprimento do seu nome for maior que 7, diga que seu nome é longo, caso contrário, diga que seu nome é curto.
1. Compare o comprimento do seu primeiro nome e do seu sobrenome e você deve obter este resultado:

```js
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
```

```sh
Seu primeiro nome, Asabeneh, é maior que seu sobrenome, Yetayeh
```

11. Declare duas variáveis myAge e yourAge e atribua valores iniciais a elas e myAge e yourAge.

```js
let myAge = 250;
let yourAge = 25;
```

```sh
Eu sou 225 anos mais velho que você.
```

12. Usando prompt, obtenha o ano de nascimento do usuário e, se o usuário tiver 18 anos ou mais, permita que o usuário dirija, se não, diga ao usuário para esperar uma certa quantidade de anos.

```sh
Insira o ano de nascimento: 1995
Você tem 25 anos. Você é velho o suficiente para dirigir

Insira o ano de nascimento: 2005
Você tem 15 anos. Você será permitido dirigir após 3 anos.
```

13. Escreva um script que solicite ao usuário para inserir o número de anos. Calcule o número de segundos que uma pessoa pode viver. Suponha que alguém viva apenas cem anos

```sh
Insira o número de anos que você vive: 100
Você viveu 3153600000 segundos.
```

14. Crie um formato de tempo legível por humanos usando o objeto Date
1. YYYY-MM-DD HH:mm
1. DD-MM-YYYY HH:mm
1. DD/MM/YYYY HH:mm

### Exercícios: Nível 3

1. Crie um formato de tempo legível por humanos usando o objeto Date. A hora e o minuto devem ser sempre dois dígitos (7 horas deve ser 07 e 5 minutos deve ser 05)
   1. YYYY-MM-DD HH:mm ex. 2020-01-02 07:05

[<< Dia 2](../Dia_02_Tipos_Dados/dia_02_tipos_dados.md) | [Dia 4 >>](../Dia_04_Condicionais/Dia_04_condicionais.md)
