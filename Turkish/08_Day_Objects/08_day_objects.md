<div align="center">
  <h1> 30 Günde Javascript: Objects - Nesneler</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>Author:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<sub>Çevirmen:
  <a href="https://github.com/hsynalv" target="_blank">Hasan Hüseyin Alav</a><br>
  <small> Temmuz 2022</small>
  </sub>
</div>

[<< 7. Gün](../07_Day_Functions/07_day_functions.md) | [9. Gün >>](../09_Day_Higher_order_functions/09_day_higher_order_functions.md)

![Thirty Days Of JavaScript](/images/banners/day_1_8.png)

- [📔 8. Gün](#-day-8)
	- [Scope - Kapsam Alanları](#scope---kapsam-alanları)
		- [Window Global Object](#window-global-object)
		- [Global Scope](#global-scope)
		- [Local Scope](#local-scope)
	- [📔 Object - Nesne](#📔-object---nesne)
		- [Boş Nesne Oluşturmak](#boş-nesne-oluşturmak)
		- [Değerlerle Birlikte Bir Nesne Oluşturmak](#değerle-birlikte-nesne-oluşturmak)
		- [Nesneden Değerleri Alabilmek](#nesneden-değerleri-alabilmek)
		- [Object - Nesne Methodu Oluşturma](#object-methodları-oluşturma)
		- [Object İçin Yeni Bir key Oluşturma](#object-için-yeni-bir-anahtar-değer-key-oluşturma)
		- [Object Methodları](#object-methodları)
			- [Object.keys() Metodu](#objectkeys-methodu)
			- [Object.values() Methodu](#objectvalues-methodu)
			- [Object.entries() Methodu](#objectentries-methodus)
			- [hasOwnProperty() Methodu](#hasownproperty-methodu)
	- [💻 Exercises](#-exercises)
		- [Exercises: Level 1](#exercises-level-1)
		- [Exercises: Level 2](#exercises-level-2)
		- [Exercises: Level 3](#exercises-level-3)

# 📔 8. Gün

## Scope - Kapsam Alanları

Bu konu değişken tanımlamanın temel kısmını oluşturur. Farklı veri türlerini depolamak için değişken tanımlarız. Bir değişkeni tanımlamak için `var`, `let` veya `const` anahtar sözcüklerini kullanırız. Bir değişken farklı kapsam alanlarında tanımlanabilir. Bu bölümde, `var` veya `let` kullandığımızda kapsam değişkenlerinin kodumuzu nasıl etkilediğini göreceğiz.

Değişken scope'ları şu şekilde olabilir.

- Global
- Local

> `var`, `let` veya `const` olmadan tanımlanan her değişken global scope olarak geçerlidir.

Scope.js adında bir dosyanızın olduğunu düşünelim.

### Window Global Object

Geçerli dosya içerisinde global scope da diyebiliriz bu duruma

Console.log() metodunu kullanmadan tarayıcınızı açın ve kontrol edin; tarayıcıya a veya b yazarsanız a ve b değerlerini görebilirsiniz. Bu durum a ve b değişkenlerinin zaten hali hazırda mevcut olduğu anlamına gelir.

```js
//scope.js dosyası içerisi

a = 'JavaScript' // bir değişkeni let veya const anahtar kelimeleri olamadan tanımlamako değişkeni global hale getirir ve geçerli dosya içerisinde her yerden erişilebilir.

b = 10 // bu gloabl scope olarak tanımlanmıştır ve dosya içerisinde her yerden erişilebilir.
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // erişilebilir
```

### Global scope

Aynı dosyanın her yerinde global olarak tanımlanan bir değişkene erişilebilir. Global olma durumu iki şekilde olabilir Dosyanın direkt kendisinde global olabilir veya bazı kod bloklarına göre global olabilir.

```js
//scope.js
let a = 'JavaScript' // bu dosyanın herhangi bir yerinde erişilebilecek global bir kapsamdır
let b = 10 // bu da dosyanın herhangi bir yerinde erişilebilecek global bir kapsamdır
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, erişilebilir
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, erişilebilir
```

### Local scope

Yerel olarak tanımlanan bir değişkene yalnızca belirli kod bloğunda erişilebilir.

- Block Scope
- Function Scope

```js
//scope.js dosyasının içerisi

let a = 'JavaScript' // bu dosyanın herhangi bir yerinde erişilebilecek global bir kapsamdır.
let b = 10 // bu dosyanın herhangi bir yerinde erişilebilecek global bir kapsamdır.

// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, erişilebilir
  let value = false
// block scope
  if (true) {
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  //c değişkenine erişemiyoruz çünkü c değişkeni sadec if bloğunda geçerli bir değişkendir
  console.log(a, b, c, value) // JavaScript 10 undefined true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, erişilebilir
```

Artık scope'lar hakkında bir şeyler öğrendik. `var` anahtar kelimesi ile tanımlanan bir değişken fonksiyon scope'u içerisinde geçerlidir. Ancak `let` veya `const` anahtar kelimeleri ile tanımlanan değişkenler block scope'unda geçerlidir. (fonksiyon, if veya diğer dönggü blokları). Block kapsamını biraz daha netleştirmek gerekirse Javascript ve diğer çoğu yazılım dili için süslü parantezler arası demek olur. `{  }`


```js
//scope.js
function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined
// yukarıdaki çıktı konsol ekranında alacağımız hatanın çıktısıdır. 

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for(var i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // 3

```



```js
//scope.js
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  const  gravity = 9.81
  console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for(let i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined

```

`let` ve `const` anahtar kelimeleri ile tanımlanan değişkenlerin kapsam alanlarının aynı olduğunu ifade ettik. Peki aralarındaki fark ne? Basitçe açıklamak gerekirse `const` ile tanımlanan bir değişkenin değerini daha sonraki satırlarda değiştiremeyiz ancak `let` ile tanımlanan değişkenin değerini değiştirebiliriz. Ben `let` ve `const` kullanarak temiz kod yazmanızı ve hata ayıklamanın zor olmasını önlemek için `let` ve `const` 'ı kullanmanızı tavsiye ederim. Temel kural olarak, herhangi bir sabit değer için `let` ve dizi, nesne, ok fonksiyonu ve işlev ifadesi için `const` özelliğini kullanabilirsiniz.


## 📔 Object - Nesne


Her şey bir nesne olabilir ve nesnelerin özellikleri ve özelliklerinin değerleri vardır, bu nedenle bir nesne bir anahtar değer çiftidir.
Bir nesneyi tam anlamıyla oluşturmak için iki köşeli parantez kullanırız.

### Boş nesne oluşturmak

Boş bir nesne 

```js
const person = {}
```

### Değerle birlikte nesne oluşturmak


Şimdi oluşturacağımız person nesnesinin firstName, lastName, age, country, city ve skills gibi bazı özellikleri olacak şekilde oluşturalım. 

```
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person)
```

### Nesneden değerleri alabilmek

Nesnenin değerlerine iki yöntem kullanarak erişebiliriz:

- `.` operatörünü kullanarak erişebiliriz
- köşeli parantez kullanarak erişebiliriz

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545'
}

// "." operatörü kullanarak
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// kçşeli parantez kullanarak
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// örneğin, telefon numarasına erişmek için yalnızca köşeli parantez yöntemini kullanırız
console.log(person['phone number'])
```

### Object methodları oluşturma

Şimdi, kişi nesnesinin getFullName özellikleri vardır. getFullName, kişi nesnesinin içindeki işlevdir ve biz ona nesne yöntemi diyoruz. _this_ anahtar sözcüğü, nesnenin kendisine atıfta bulunur. Nesnenin farklı özelliklerinin değerlerine erişmek için _this_ kelimesini kullanabiliriz. Bir arrow funtionu nesne yöntemi olarak kullanamayız çünkü bu sözcüğü nesnenin kendisi yerine bir arrow funtionun içindeki pencereyi ifade eder. Örnek olarak:

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName())
// Asabeneh Yetayeh
```

### Object için yeni bir anahtar değer (key) oluşturma

Nesne, eşlenebilen bir veri yapısıdır ve oluşturulduktan sonra nesnenin içeriğini değiştirebiliriz.

nesne de yeni key'ler oluşturabilme

```js
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())
```

```sh
Asabeneh Yetayeh is a teacher.
He lives in Finland.
He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.
```

### Object methodları

Bir nesneyi manipüle etmek için farklı yöntemler vardır. Mevcut yöntemlerden bazılarını görelim.

_Object.assign_:Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır

```js
const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
```

#### Object.keys() methodu

_Object.keys_: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır

```js
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']
```

#### Object.values() methodu

_Object.values_: Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır

```js
const values = Object.values(copyPerson)
console.log(values)
```

#### Object.entries() methodu

_Object.entries_: Bir dizideki key ve value değerlerini almak için kullanılır

```js
const entries = Object.entries(copyPerson)
console.log(entries)
```

#### hasOwnProperty() methodu

_hasOwnProperty_: Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır

```js
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
```

🌕 Tebrikler 8. günü de başarıyla tamamladın. 9. günde görüşmek üzere

## 💻 Exercises

### Exercises: Level 1

1. Create an empty object called dog
1. Print the the dog object on the console
1. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_
1. Get name, legs, color, age and bark value from the dog object
1. Set new properties the dog object: breed, getDogInfo

### Exercises: Level 2

1. Find the person who has many skills in the users object.
1. Count logged in users, count users having greater than equal to 50 points from the following object.

   ````js
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
       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
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
       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
       age: 20,
       isLoggedIn: false,
       points: 40
     }
   }```

1. Find people who are MERN stack developer from the users object
1. Set your name in the users object without modifying the original users object
1. Get all keys or properties of users object
1. Get all the values of users object
1. Use the countries object to print a country name, capital, populations and languages.

### Exercises: Level 3

1. Create an object literal called _personAccount_. It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

  ```js
      const users = [
      {
          _id: 'ab12ex',
          username: 'Alex',
          email: 'alex@alex.com',
          password: '123123',
          createdAt:'08/01/2020 9:00 AM',
          isLoggedIn: false
      },
      {
          _id: 'fg12cy',
          username: 'Asab',
          email: 'asab@asab.com',
          password: '123456',
          createdAt:'08/01/2020 9:30 AM',
          isLoggedIn: true
      },
      {
          _id: 'zwf8md',
          username: 'Brook',
          email: 'brook@brook.com',
          password: '123111',
          createdAt:'08/01/2020 9:45 AM',
          isLoggedIn: true
      },
      {
          _id: 'eefamr',
          username: 'Martha',
          email: 'martha@martha.com',
          password: '123222',
          createdAt:'08/01/2020 9:50 AM',
          isLoggedIn: false
      },
      {
          _id: 'ghderc',
          username: 'Thomas',
          email: 'thomas@thomas.com',
          password: '123333',
          createdAt:'08/01/2020 10:00 AM',
          isLoggedIn: false
      }
      ];

      const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
  ```

  Imagine you are getting the above users collection from a MongoDB database.
    a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.  
    b. Create a function called signIn which allows user to sign in to the application  

3. The products array has three elements and each of them has six properties.
    a. Create a function called rateProduct which rates the product
    b. Create a function called averageRating which calculate the average rating of a product  

4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.


🎉 CONGRATULATIONS ! 🎉

[<< Day 7](../07_Day_Functions/07_day_functions.md) | [Day 9 >>](../09_Day_Higher_order_functions/09_day_higher_order_functions.md)
