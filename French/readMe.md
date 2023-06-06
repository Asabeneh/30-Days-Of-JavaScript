# 30 jours de JavaScript

| # Jours |                                                                       Tables des matières                                                                        |
| ----- | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| 01    |                                                             [Introduction](./readMe.md)                                                             |
| 02    |                                               [Les types de données](./02_Day_Data_types/02_day_data_types.md)                                                |
| 03    |                             [Booléens, Opérateurs, Date](./03_Day_Booleans_operators_date/03_booleans_operators_date.md)                             |
| 04    |                                            [Les conditions](./04_Day_Conditionals/04_day_conditionals.md)                                             |
| 05    |                                                     [Les tableaux (Arrays)](./05_Day_Arrays/05_day_arrays.md)                                                      |
| 06    |                                                       [Les boucles](./06_Day_Loops/06_day_loops.md)                                                       |
| 07    |                                                 [Les fonctions](./07_Day_Functions/07_day_functions.md)                                                 |
| 08    |                                                    [Les objets](./08_Day_Objects/08_day_objects.md)                                                    |
| 09    |                             [Les fonctions d'ordre supérieur](./09_Day_Higher_order_functions/09_day_higher_order_functions.md)                              |
| 10    |                                           [Set et Map](./10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)                                           |
| 11    |                      [La déstructuration et propagation](./11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)                      |
| 12    |                                  [Les expressions régulières](./12_Day_Regular_expressions/12_day_regular_expressions.md)                                  |
| 13    |                             [Les méthodes de objet console. ](./13_Day_Console_object_methods/13_day_console_object_methods.md)                              |
| 14    |                                         [Gestion des erreurs](./14_Day_Error_handling/14_day_error_handling.md)                                          |
| 15    |                                                    [Les classes](./15_Day_Classes/15_day_classes.md)                                                    |
| 16    |                                                        [JSON](./16_Day_JSON/16_day_json.md)                                                         |
| 17    |                                            [Stockages Web](./17_Day_Web_storages/17_day_web_storages.md)                                             |
| 18    |                                                  [Les promesses](./18_Day_Promises/18_day_promises.md)                                                   |
| 19    |                                                   [Fermeture (Closure)](./19_Day_Closures/19_day_closures.md)                                                   |
| 20    |                                  [Écrire un code propre](./20_Day_Writing_clean_codes/20_day_writing_clean_codes.md)                                   |
| 21    |                                                          [DOM](./21_Day_DOM/21_day_dom.md)                                                          |
| 22    |                            [Manipulation de l'objet DOM](./22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md)                            |
| 23    |                                        [Écouteurs d'événements](./23_Day_Event_listeners/23_day_event_listeners.md)                                        |
| 24    |                             [Mini projet : Système solaire](./24_Day_Project_solar_system/24_day_project_solar_system.md)                              |
| 25    | [Mini projet : Visualisation des données sur les pays du monde 1](./25_Day_World_countries_data_visualization_1/25_day_world_countries_data_visualization_1.md) |
| 26    | [Mini projet : Visualisation des données sur les pays du monde 2](./26_Day_World_countries_data_visualization_2/26_day_world_countries_data_visualization_2.md) |
| 27    |                             [Mini Projet: Portfolio](./27_Day_Mini_project_portfolio/27_day_mini_project_portfolio.md)                             |
| 28    |                          [Mini Projet: Tableau de bord](./28_Day_Mini_project_leaderboard/28_day_mini_project_leaderboard.md)                          |
| 29    |             [Mini Projet: Animation des caractère ](./29_Day_Mini_project_animating_characters/29_day_mini_project_animating_characters.md)             |
| 30    |                                     [Les projets finals](./30_Day_Mini_project_final/30_day_mini_project_final.md)                                      |

🧡🧡🧡 BON CODAGE 🧡🧡🧡

<div>
<small>Soutenir <strong>l'auteur </strong> pour qu'il crée davantage de supports pédagogiques</small> <br />  
<a href = "https://www.paypal.me/asabeneh"><img src='./images/paypal_lg.png' alt='Paypal Logo' style="width:10%"/></a>
</div>

<div align="center">
  <h1> 30 jours de JavaScript: Introduction</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Auteur:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Janvier, 2020</small>
</sub>

<div>

🇬🇧 [English](./readMe.md)
🇫🇷 [French](./French/readMe.md)
🇪🇸 [Spanish](./Spanish/readme.md)
🇮🇹 [Italian](./Italian/readMe.md)Setup
🇷🇺 [Russian](./RU/README.md)
🇹🇷 [Turkish](./Turkish/readMe.md)
🇦🇿 [Azerbaijan](./Azerbaijani/readMe.md)
🇰🇷 [Korean](./Korea/README.md)
🇻🇳 [Vietnamese](./Vietnamese/README.md)
🇵🇱 [Polish](./Polish/readMe.md)
🇧🇷 [Portuguese](./Portuguese/readMe.md)


</div>

</div>
</div>

[Jour 2 >>](./02_Day_Data_types/02_day_data_types.md)

![Thirty Days Of JavaScript](./images/day_1_1.png)

- [30 jours de JavaScript](#30-jours-de-javascript)
- [📔 Jour 1](#-jour-1)
  - [Introduction](#introduction)
  - [Les éxigences](#les-éxigences)
  - [Configuration](#configuration)
    - [Installation de  Node.js](#installation-de--nodejs)
    - [Navigateur](#navigateur)
      - [Installation de  Google Chrome](#installation-de--google-chrome)
      - [Ouverture de la console Google Chrome](#ouverture-de-la-console-google-chrome)
      - [Écrire du code sur la console du navigateur](#écrire-du-code-sur-la-console-du-navigateur)
        - [Console.log](#consolelog)
        - [Console.log avec plusieurs arguments](#consolelog-avec-plusieurs-arguments)
        - [Comments](#comments)
        - [Syntaxe](#syntaxe)
      - [AArithmétique](#aarithmétique)
    - [Editeur de code](#editeur-de-code)
      - [Installation de  Visual Studio Code](#installation-de--visual-studio-code)
      - [Comment utiliser Visual Studio Code](#comment-utiliser-visual-studio-code)
  - [Ajout de JavaScript à une page Web](#ajout-de-javascript-à-une-page-web)
    - [Script en ligne](#script-en-ligne)
    - [Script interne](#script-interne)
    - [Script externe](#script-externe)
    - [Multiple External Scripts](#multiple-external-scripts)
  - [Introduction aux types de données](#introduction-aux-types-de-données)
    - [Les nombres](#les-nombres)
    - [Les chaîne de caractère](#les-chaîne-de-caractère)
    - [Booléens](#booléens)
    - [Indéfini(Undefined)](#indéfiniundefined)
    - [Null](#null)
  - [Vérification des types de données](#vérification-des-types-de-données)
  - [Encore des commentaires](#encore-des-commentaires)
  - [Variables](#variables)
- [💻 Day 1: Exercises](#-day-1-exercises)

# 📔 Jour 1

## Introduction

**Félicitations** en décidant de participer au défi des 30 jours de programmation JavaScript. Dans ce défi, vous apprendrez tout ce dont vous avez besoin pour être un programmeur JavaScript, et en général, tout le concept de la programmation. À la fin du défi, vous recevrez un certificat d'achèvement du défi de programmation 30DaysOfJavaScript. Si vous avez besoin d'aide ou si vous souhaitez aider d'autres personnes, vous pouvez rejoindre le groupe de discussion dédié. [groupe telegram ](https://t.me/ThirtyDaysOfJavaScript). 

**30 jours de JavaScript** challenge est un guide pour les débutants et les développeurs avancés en JavaScript. Bienvenue à JavaScript. JavaScript est le langage du web. J'aime utiliser et enseigner JavaScript et j'espère que vous en ferez autant.

Dans ce défi JavaScript pas à pas, vous apprendrez JavaScript, le langage de programmation le plus populaire de l'histoire de l'humanité. JavaScript est utilisé **_pour ajouter de l'interactivité aux sites web, pour développer des applications mobiles, des applications de bureau, des jeux, etc._** et aujourd'hui, JavaScript peut être utilisé pour **la programmation côté serveur**,  **_l'apprentissage automatique_** and **_l'intelligence artificielle _**.

**_JavaScript (JS)_** a gagné en popularité au cours des dernières années et est le langage de programmation le plus utilisé dans le monde.
depuis dix ans et est le langage de programmation le plus utilisé sur GitHub.

Ce défi est facile à lire, écrit dans un français facile, engageant, motivant et en même temps, il est très exigeant. Vous devez consacrer beaucoup de temps à la réalisation de ce défi. Si vous êtes un apprenant visuel, vous pouvez obtenir la leçon vidéo sur <a href="https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw"> Washera</a> Chaîne YouTube. Abonnez-vous à la chaîne, commentez et posez des questions sur les vidéos YouTube et soyez proactif, l'auteur finira par vous remarquer. 

L'auteur aimerait connaître votre opinion sur le défi, partager l'auteur en exprimant vos pensées sur le défi 30 jours de JavaScript. Vous pouvez laisser votre témoignage sur cette page [link](https://testimonial-vdzd.onrender.com//)

## Les éxigences

No prior knowledge of programming is required to follow this challenge. You need only:

1. La motivation
2. Un ordinateur
3. La connexion internet
4. Un navigateur
5. Un editeur de code

## Configuration

I believe you have the motivation and a strong desire to be a developer, a computer and Internet. If you have those, then you have everything to get started.

### Installation de  Node.js

Vous n'avez peut-être pas besoin de Node.js pour l'instant, mais vous pourriez en avoir besoin plus tard. Installer [node.js](https://nodejs.org/en/).

![Node download](images/download_node.png)

Après le téléchargement, double-cliquez et installez

![Install node](images/install_node.png)

Nous pouvons vérifier si le nœud est installé sur notre machine locale en ouvrant le terminal de notre appareil ou l'invite de commande.

```sh
asabeneh $ node -v
v12.14.0
```

Lors de la création de ce didacticiel, j'utilisais Node version 12.14.0, mais maintenant la version recommandée de Node.js pour le téléchargement est v14.17.6, au moment où vous utilisez ce matériel, vous pouvez avoir une version Node.js supérieure.
### Navigateur

Il existe de nombreux navigateurs. Cependant, je recommande fortement Google Chrome.

#### Installation de  Google Chrome

Installer [Google Chrome](https://www.google.com/chrome/) si vous n'en avez pas encore. Nous pouvons écrire du petit code JavaScript sur la console du navigateur, mais nous n'utilisons pas la console du navigateur pour développer des applications.

![Google Chrome](images/google_chrome.png)

#### Ouverture de la console Google Chrome

Vous pouvez ouvrir la console Google Chrome en cliquant sur trois points dans le coin supérieur droit du navigateur, en sélectionnant Plus d'outils -> Outils de développement ou en utilisant un raccourci clavier. Je préfère utiliser des raccourcis.
![Opening chrome](images/opening_developer_tool.png)

Pour ouvrir la console Chrome à l'aide d'un raccourci clavier.

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```

![Opening console](images/opening_chrome_console_shortcut.png)

Après avoir ouvert la console Google Chrome, essayez d'explorer les boutons marqués. Nous passerons la plupart du temps sur la console. La console est l'endroit où va votre code JavaScript. Le moteur Google Console V8 transforme votre code JavaScript en code machine. Écrivons un code JavaScript sur la console Google Chrome :

![write code on console](./images/js_code_on_chrome_console.png)

#### Écrire du code sur la console du navigateur

Nous pouvons écrire n'importe quel code JavaScript sur la console Google ou sur n'importe quelle console de navigateur. Cependant, pour ce défi, nous nous concentrons uniquement sur la console Google Chrome. Ouvrez la console en utilisant :

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

##### Console.log

Pour écrire notre premier code JavaScript, nous avons utilisé une fonction intégrée **console.log()**. Nous avons passé un argument en tant que données d'entrée et la fonction affiche la sortie. Nous avons passé `'Hello, World'` acomme données d'entrée ou argument dans la fonction console.log().

```js
console.log('Hello, World!')
```

##### Console.log avec plusieurs arguments

La fonction  **`console.log()`** peut prendre plusieurs paramètres séparés par des virgules. La syntaxe ressemble à ceci:**`console.log(param1, param2, param3)`**

![console log multiple arguments](./images/console_log_multipl_arguments.png)

```js
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')
```

Comme vous pouvez le voir dans l'extrait de code ci-dessus, _`console.log()`_ peut prendre plusieurs arguments..

Toutes nos félicitations! Vous avez écrit votre premier code JavaScript en utilisant _`console.log()`_.

##### Comments

Nous pouvons ajouter des commentaires à notre code. Les commentaires sont très importants pour rendre le code plus lisible et pour laisser des remarques dans notre code. JavaScript n'exécute pas la partie commentaire de notre code. En JavaScript, toute ligne de texte commençant par // en JavaScript est un commentaire, et tout ce qui est inclus comme cec `//` est également un commentaire.


**Example: Commentaire sur une seule lignet**

```js
// Ceci est le premier commentaire  
// Voici le deuxième commentaire  
// Je suis un commentaire d'une seule ligne
```

**Example: Commentaire multiligne**

```js
/*
Il s'agit d'un commentaire multiligne  
 Les commentaires multilignes peuvent prendre plusieurs lignes  
 JavaScript est le langage du web  
 */
```

##### Syntaxe

Les langages de programmation sont similaires aux langages humains. L'anglais ou d'autres langues utilisent des mots, des expressions, des phrases, des phrases composées et bien d'autres choses encore pour transmettre un message significatif. En anglais, le terme syntaxe signifie _la disposition des mots et des phrases pour créer des phrases bien formées dans une langue_. La définition technique de la syntaxe est la structure des énoncés dans un langage informatique. Les langages de programmation ont une syntaxe. JavaScript est un langage de programmation et, comme les autres langages de programmation, il possède sa propre syntaxe. Si nous n'écrivons pas une syntaxe que JavaScript comprend, il produira différents types d'erreurs. Nous étudierons les différents types d'erreurs JavaScript plus tard. Pour l'instant, voyons les erreurs de syntaxe.

![Error](images/raising_syntax_error.png)

J'ai fait une erreur délibérée. En conséquence, la console signale des erreurs de syntaxe. En fait, la syntaxe est très informative. Elle indique le type d'erreur commise. En lisant le guide de retour d'erreur, nous pouvons corriger la syntaxe et résoudre le problème. Le processus d'identification et de suppression des erreurs d'un programme s'appelle le débogage. Corrigeons les erreurs :

```js
console.log('Hello, World!')
console.log('Hello, World!')
```

Jusqu'à présent, nous avons vu comment afficher du texte à l'aide de l'extension _`console.log()`_. Si nous imprimons du texte ou une chaîne en utilisant _`console.log()`_,  texte doit être à l'intérieur des guillemets simples, des guillemets doubles ou d'un backtick.
**Example:**

```js
console.log('Hello, World!')
console.log("Hello, World!")
console.log(`Hello, World!`)
```

#### AArithmétique

Maintenant, pratiquons davantage l'écriture de codes JavaScript à l'aide _`console.log()`_ ode la console Google Chrome pour les types de données numériques. En plus du texte, nous pouvons également effectuer des calculs mathématiques en utilisant JavaScript. Faisons les calculs simples suivants. Il est possible d'écrire du code JavaScript sur la console Google Chrome directement sans la fonction. **_`console.log()`_** Cependant, il est inclus dans cette introduction car la majeure partie de ce défi se déroulerait dans un éditeur de texte où l'utilisation de la fonction serait obligatoire. Vous pouvez jouer directement avec les instructions sur la console.
![Arithmetic](images/arithmetic.png)

```js
console.log(2 + 3) // Addition
console.log(3 - 2) // Soustraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulo - trouver le reste
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3
```

### Editeur de code 

Nous pouvons écrire nos codes sur la console du navigateur, mais ce ne sera pas pour des projets plus importants. Dans un environnement de travail réel, les développeurs utilisent différents éditeurs de code pour écrire leurs codes. Dans ce défi des 30 jours de JavaScript, nous utiliserons Visual Studio Code.

#### Installation de  Visual Studio Code

Visual Studio Code est un éditeur de texte open-source très populaire. Je recommande [download Visual Studio Code](https://code.visualstudio.com/), mais si vous êtes en faveur d'autres éditeurs, n'hésitez pas à suivre avec ce que vous avez.

![Vscode](images/vscode.png)

Si vous avez installé Visual Studio Code, commençons à l'utiliser.

#### Comment utiliser Visual Studio Code

Ouvrez Visual Studio Code en double-cliquant sur son icône. Lorsque vous l'ouvrez, vous obtenez ce type d'interface. Essayez d'interagir avec les icônes étiquetées.

![Vscode ui](./images/vscode_ui.png)

![Vscode add project](./images/adding_project_to_vscode.png)

![Vscode open project](./images/opening_project_on_vscode.png)

![script file](images/scripts_on_vscode.png)

![Installing Live Server](images/vsc_live_server.png)

![running script](./images/running_script.png)

![coding running](./images/launched_on_new_tab.png)

## Ajout de JavaScript à une page Web

JavaScript can be added to a web page in three different ways:

- **_Script en ligne_**
- **_Script interne_**
- **_Script externe_**
- **_Multiples scripts externes_**

Les sections suivantes présentent différentes manières d'ajouter du code JavaScript à votre page web.

### Script en ligne

Créez un dossier de projet sur votre bureau ou à n'importe quel endroit, nommez-le 30DaysOfJS et créez un fichier **_`index.html`_** dans le dossier du projet. Collez ensuite le code suivant et ouvrez-le dans un navigateur, par exemple[Chrome](https://www.google.com/chrome/).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30 Jour de javascript:Script en ligne</title>
  </head>
  <body>
    <button onclick="alert('Bienvenue dans  30 jours de JavaScript!')">Click Moi</button>
  </body>
</html>
```

Vous venez d'écrire votre premier script en ligne. Nous pouvons créer un message d'alerte contextuel à l'aide de la fonction _`alert()`_ fonction intégrée.

### Script interne

Le script interne peut être écrit dans le fichier_`head`_ ou dans le  _`body`_, mais il est préférable de le placer dans le corps du document HTML.
Commençons par écrire dans l'en-tête de la page.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30 Jour de javascript:Script en ligne</title>
    <script>
      console.log('Bienvenue dans  30 jours de JavaScript!')
    </script>
  </head>
  <body></body>
</html>
```

C'est ainsi que nous écrivons un script interne la plupart du temps. L'écriture du code JavaScript dans le corps du texte est la meilleure option. Ouvrez la console du navigateur pour voir la sortie du code JavaScript. `console.log()`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30 Jour de javascript:Script en ligne</title>
  </head>
  <body>
    <button onclick="alert('Bienvenue dans  30 jours de JavaScript!');">Click Moi</button>
    <script>
      console.log('Bienvenue dans  30 jours de JavaScript!')
    </script>
  </body>
</html>
```

Ouvrez la console du navigateur pour voir le résultat de l'opération. `console.log()`.

![js code from vscode](./images/js_code_vscode.png)

### Script externe

Comme pour le script interne, le lien vers le script externe peut être placé dans l'en-tête ou dans le corps du texte, mais il est préférable de le placer dans le corps du texte.
Tout d'abord, nous devons créer un fichier JavaScript externe avec l'extension .js. Tous les fichiers se terminant par l'extension .js sont des fichiers JavaScript. Créez un fichier nommé introduction.js dans le répertoire de votre projet, écrivez le code suivant et liez ce fichier .js au bas du corps du texte.

```js
console.log('Bienvenue dans  30 jours de JavaScript!')
```

Les scripts externes dans le _head_:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30 Jour de javascript:Script externe</title>
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>
```

Les scripts externes dans le _body_:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30 Jour de javascript:Script externe/title>
  </head>
  <body>
    <!-- Le lien externe JavaScript peut être placé dans l'en-tête ou dans le corps du texte --> 
    <!-- 
		Avant la balise de fermeture du corps de texte, c'est l'endroit recommandé pour placer le script JavaScript externe.
 -->
    <script src="introduction.js"></script>
  </body>
</html>
```



Ouvrez la console du navigateur pour voir le résultat de la commande`console.log()`.

### Multiple External Scripts

Nous pouvons également lier plusieurs fichiers JavaScript externes à une page web.
Créer un fichier `helloworld.js` dans le dossier 30DaysOfJS et écrivez le code suivant.

```js
console.log('Hello, World!')
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Multiple External Scripts</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>
```

_Votre fichier main.js doit être placé en dessous de tous les autres fichiers scripts_. Il est très important de s'en souvenir.

![Multiple Script](./images/multiple_script.png)

## Introduction aux types de données

En JavaScript et dans d'autres langages de programmation, il existe différents types de données. Voici les types de données primitives en JavaScript: _Chaine de caractère, Nombre, Booleen, undefined, Null_, et _Symbol_.

### Les nombres

- Nombres entiers : Nombres entiers (négatifs, nuls et positifs)
  Exemple 
  ... -3, -2, -1, 0, 1, 2, 3 ...
- Nombres à virgule flottante : Nombre décimal
  Exemple
  ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### Les chaîne de caractère

Ensemble d'un ou plusieurs caractères compris entre deux guillemets simples, deux guillemets doubles ou deux barres obliques.

**Exemple:**

```js
'a'
'Asabeneh'
"Asabeneh"
'Finland'
'JavaScript est un beau langage de programmation'
'J\'aime enseigner'
'J\'espère que vous appréciez ce premier jour'
`Nous pouvons également créer une chaîne de caractères à l'aide d'un backtick`
'Une chaîne de caractères peut être aussi petite qu\'un seul caractère ou aussi grande que plusieurs pages.'
'Tout type de données placé sous un guillemet simple, un guillemet double ou une coche est une chaîne de caractères.'
```

### Booléens

Une valeur booléenne est soit vraie, soit fausse. Toute comparaison renvoie une valeur booléenne, qui est soit vraie, soit fausse.
Un type de données booléen est soit une valeur vraie, soit une valeur fausse.

**Exemple:**

```js
true // si la lumière est allumée, la valeur est vraie
false // si la lumière est éteinte, la valeur est fausse
```

### Indéfini(Undefined) 

En JavaScript, si nous n'attribuons pas de valeur à une variable, cette valeur est indéfinie. En outre, si une fonction ne renvoie rien, elle renvoie une valeur indéfinie.

```js
let firstName
console.log(firstName) // indéfini, car il n'est pas encore affecté à une valeur
```

### Null

Null en JavaScript signifie une valeur vide.

```js
let emptyValue = null
```

## Vérification des types de données

Pour vérifier le type de données d'une certaine variable, nous utilisons la fonction **typeof** de l'opérateur. Voir l'exemple suivant.

```js
console.log(typeof 'Asabeneh') // chaîne de caractère
console.log(typeof 5) // nombre
console.log(typeof true) // booléen
console.log(typeof null) // type object 
console.log(typeof undefined) // undefini
```

## Encore des commentaires

Rappelez-vous que les commentaires en JavaScript sont similaires à ceux des autres langages de programmation. Les commentaires sont importants pour rendre votre code plus lisible.
Il existe deux façons de commenter :

- _Commentaire sur une seule ligne_
- _Commentaires multilignes_

```js
// commenter le code lui-même avec un seul commentaire
// let firstName = 'Asabeneh'; commentaire sur une seule ligne
// let lastName = 'Yetayeh'; commentaire sur une seule ligne
```

Commentaires en plusieurs lignes :

```js
/*
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  Il s'agit d'un commentaire de plusieurs lignes
*/
```

## Variables

Les variables sont des  _conteneurs_ of data.  Les variables sont utilisées pour _stocker_ des données dans un emplacement de mémoire. Lorsqu'une variable est déclarée, un emplacement mémoire est réservé. Lorsqu'une variable est affectée à une valeur (données), l'espace mémoire sera rempli avec ces données. Pour déclarer une variable, on utilise_var_, _let_, or _const_ keywords.

Pour une variable qui change à un autre moment, nous utilisons_let_.  _const_. Si les données ne changent pas du tout, nous utilisons l'exemple suivant, PI, nom de pays, ne changent pas, et nous pouvons utiliser _const_. 

Nous n'utiliserons pas _var_ dans ce défi et je ne vous recommande pas de l'utiliser. C'est une façon de déclarer une variable qui peut être source d'erreurs et qui comporte de nombreuses fuites. Nous parlerons plus en détail de var, let et const dans d'autres sections (scope). Pour l'instant, l'explication ci-dessus est suffisante.

Un nom de variable JavaScript valide doit respecter les règles suivantes :

- Le nom d'une variable JavaScript ne doit pas commencer par un chiffre.
- Le nom d'une variable JavaScript n'autorise pas les caractères spéciaux, à l'exception du signe du dollar et du trait de soulignement.
- Le nom d'une variable JavaScript suit la convention camelCase.
- Le nom d'une variable JavaScript ne doit pas comporter d'espace entre les mots.

Voici des exemples de variables JavaScript valides.

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

La première et la deuxième variables de la liste suivent la convention camelCase de déclaration en JavaScript. Dans ce document, nous utiliserons des variables en camelCase (camelWithOneHump). Nous utilisons la camelCase (camelWithTwoHump) pour déclarer les classes, nous discuterons des classes et des objets dans d'autres sections.

Exemple de variables non valides :

```js
  first-name
  1_num
  num_#_1
```

Déclarons des variables avec différents types de données. Pour déclarer une variable, nous devons utiliser _let_ or _const_ avant le nom de la variable. Après le nom de la variable, on écrit un signe égal (opérateur d'affectation), et une valeur (donnée affectée).

```js
// Syntax
let nameOfVariable = value
```

Le nom de l'objet est le nom qui stocke les différentes données de la valeur. Voir ci-dessous pour des exemples détaillés.

**Exemples de variables déclarées**

```js
// Déclarer différentes variables de différents types de données
let firstName = 'Asabeneh' // prénom d'une personne
let lastName = 'Yetayeh' // nom de famille d'une personne
let country = 'Finland' // pays
let city = 'Helsinki' // capitale
let age = 100 // age 
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)
```

```sh
Asabeneh Yetayeh Finland Helsinki 100 true
```

```js
// Declaring variables with number values
let age = 100 // age in years
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)
```

```sh
9.81 100 3.14
```

```js
// Les variables peuvent également être déclarées sur une seule ligne séparée par une virgule, mais je recommande d'utiliser une ligne séparée pour rendre le code plus lisible.
let name = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(name, job, live)
```

```sh
Asabeneh teacher Finland
```

Lorsque vous exécutez _index.html_ dans le fichier 01-Jour vous devriez obtenir ceci:

![Day one](./images/day_1.png)

🌕 Vous êtes extraordinaire ! Vous venez de relever le défi du premier jour et vous êtes sur la voie de la grandeur. Maintenant, fais quelques exercices pour ton cerveau et tes muscles.

# 💻 Day 1: Exercises

1. Rédigez un commentaire d'une seule ligne qui dit, _les commentaires rendent le code plus lisible_
2. Rédigez un autre commentaire unique qui dit, _Bienvenue dans 30 jours de JavaScript_
3. Rédigez un commentaire de plusieurs lignes qui dit, _les commentaires peuvent rendre le code lisible et facile à réutiliser_
   _et informatif_

4. Créez un fichier variable.js, déclarez des variables et attribuez des types de données string, boolean, undefined et null.
5.Créer le fichier datatypes.js et utiliser le JavaScript **_typeof_** pour vérifier les différents types de données. Vérifier le type de données de chaque variable
6. Déclarer quatre variables sans leur attribuer de valeur
7. Déclarer quatre variables avec des valeurs assignées
8. Déclarez des variables pour stocker votre prénom, votre nom de famille, votre état civil, votre pays et votre âge sur plusieurs lignes.
9. Déclarez des variables pour stocker votre prénom, votre nom, votre état civil, votre pays et votre âge sur une seule ligne.
10. Déclarer deux variables _myAge_ and _yourAge_ et leur assigner des valeurs initiales et se connecter à la console du navigateur.

```sh
I am 25 years old.
You are 30 years old.
```

🎉 FÉLICITATIONS ! 🎉

[Jour 2 >>](./02_Jour_les_types_des_donnee/02_Jour_les_types_des_donnee.md)
