<div align="center">
  <h1> 30 Days Of JavaScript: JSON</h1>
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

[<< Gün 15](../15_Day_Classes/15_day_classes.md) | [Gün 17 >>](../17_Day_Web_storages/17_day_web_storages.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_16.png)

- [Gün 16](#day-16)
	- [JSON](#json)
		- [JSON'u JavaScript Nesnesine Dönüştürme](#converting-json-to-javascript-object)
			- [JSON.parse()](#jsonparse)
		- [JSON.parse() ile bir reviver fonksiyonu kullanma](#using-a-reviver-function-with-jsonparse)
		- [Nesneyi JSON'a Dönüştürme](#converting-object-to-json)
		- [JSON.stringify ile Filtre Dizisi Kullanma](#using-a-filter-array-with-jsonstringify)
	- [Egzersizler](#exercises)
		- [Egzersiz Seviye 1](#exercises-level-1)
		- [Egzersiz Seviye 2](#exercises-level-2)
		- [Egzersiz Seviye 3](#exercises-level-3)

# Gün 16

## JSON

JSON, javascript nesne kavramı anlamına gelir. JSON syntaxı(sözdizim), JavaScript nesne gösterimi sözdiziminden türetilmiştir, ancak JSON biçimi yalnızca metin veya dizedir. JSON, depolama ve taşıma için hafif bir veri formatıdır. JSON, çoğunlukla bir sunucudan bir istemciye veri gönderildiğinde kullanılır. JSON, XML'e göre kullanımı daha kolay bir alternatiftir.

**Örnek:**

```js
{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}
```

Yukarıdaki JSON örneği, normal bir nesneden çok farklı değildir. O zaman, fark nedir? Aradaki fark, bir JSON nesnesinin anahtarının çift tırnaklı olması veya bir dize olması gerektiğidir. JavaScript Object ve JSON, JSON'u Object ve Object'i JSON olarak değiştirebileceğimize çok benzer.

Yukarıdaki örneği daha detaylı görelim, küme paranteziyle başlıyor. Kıvrımlı parantez içinde bir değer dizisine sahip "users" anahtarı vardır. Dizinin içinde farklı nesnelerimiz var ve her nesnenin anahtarı var, her anahtarın çift tırnak işareti olması gerekiyor. Örneğin, sadece firstName yerine "firstNaMe" kullanıyoruz, ancak nesnede anahtarları çift tırnak işaretleri olmadan kullanıyoruz. Bu, bir nesne ile bir JSON arasındaki en büyük farktır. JSON hakkında daha fazla örnek görelim.

**Örnek:**

```js
{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
```

### JSON'u JavaScript Nesnesine Dönüştürme

Çoğunlukla JSON verilerini HTTP yanıtından veya bir dosyadan alırız, ancak JSON'u bir dize olarak saklayabiliriz ve gösterim amacıyla Object olarak değiştirebiliriz. JavaScript'te _JSON_ anahtar sözcüğü _parse()_ ve _stringify()_ yöntemlerine sahiptir. JSON'u bir nesneye dönüştürmek istediğimizde, _JSON.parse()_ kullanarak JSON'u ayrıştırırız. Nesneyi JSON olarak değiştirmek istediğimizde _JSON.stringify()_ kullanırız.

#### JSON.parse()

```js
JSON.parse(json[, reviver])
// json or text , the data
// reviver opsiyonel callback fonksiyonudur
/* JSON.parse(json, (key, value) => {

})
*/
```

```js
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, undefined, 4)
console.log(usersObj)
```

### JSON.parse() ile bir reviver fonksiyonu kullanma

Reviver fonksiyonunu formatlayıcı olarak kullanmak için isim ve soyadı değerini formatlamak istediğimiz tuşları koyuyoruz. Diyelim ki, JSON verilerinin ad ve soyadını biçimlendirmekle ilgileniyoruz.

```js
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj)
```

_JSON.parse()_ kullanımı çok kullanışlıdır. İsteğe bağlı parametreyi geçmenize gerek yok, sadece gerekli parametre ile kullanabilirsiniz ve çok şey başaracaksınız.

### Nesneyi JSON'a Dönüştürme

Nesneyi JSON olarak değiştirmek istediğimizde _JSON.stringify()_ kullanırız. stringify yöntemi, bir gerekli parametre ve iki isteğe bağlı parametre alır. Değiştirici filtre olarak kullanılır ve boşluk bir girintidir. Nesnedeki anahtarlardan herhangi birini filtrelemek istemiyorsak, tanımsız olarak geçebiliriz.

```js
JSON.stringify(obj, replacer, space)
// json or text , the data
// reviver opsiyonel callback fonksiyonudur
```

Aşağıdaki nesneyi bir string değere dönüştürelim. İlk önce tüm anahtarları kullanalım ve ayrıca 4 boşluk girintisine sahip olalım.

```js
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt) // text, JSON- anlamına gelir, çünkü json bir nesnenin string biçimidir.
```

```sh
{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
```

### JSON.stringify ile Filtre Dizisi Kullanma

Şimdi, replacerı filtre olarak kullanalım. Kullanıcı nesnesinin uzun bir anahtar listesi var ama biz sadece birkaçıyla ilgileniyoruz. Örnekte gösterildiği gibi dizide tutmak istediğimiz anahtarları koyuyoruz ve replacer yerine kullanıyoruz.

```js
const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30
}

const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
console.log(txt)
```

```sh
{
    "firstName": "Asabeneh",
    "lastName": "Yetayeh",
    "country": "Finland",
    "city": "Helsinki",
    "age": 250
}
```

🌕 Sen olağanüstüsün. Artık verileri depolamak veya bir HTTP sunucusu göndermek için kullanabileceğiniz hafif bir veri formatı biliyorsunuz. Büyüklüğe giden yolda 16 adım öndesin. Şimdi beyniniz ve kasınız için bazı egzersizler yapın.

## Egzersizler

```js
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
```

### Egzersiz Seviye 1

1. JSON.stringify() kullanarak skills dizisini JSON olarak değiştirin
1. age değerini stringify et
1. isMarried değerini stringify et
1. student nesnesini stringify et

### Egzersiz Seviye 2

1. Öğrenciler nesnesini yalnızca firstName, lastName ve skills özellikleriyle stringify edin

### Egzersiz Seviye 3

1. *txt* JSON'u nesneye ayrıştırın.
2. *txt* içinde saklanan değişkenden birçok skills'e sahip olan kullanıcıyı bulun.

🎉 TEBRİKLER ! 🎉

[<< Gün 15](../15_Day_Classes/15_day_classes.md) | [Gün 17 >>](../17_Day_Web_storages/17_day_web_storages.md)
