<div align="center">
  <h1> 30 Days Of JavaScript: Classes</h1>
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

[<< Gün 14](../14_Day_Error_handling/14_day_error_handling.md) | [Gün 16>>](../16_Day_JSON/16_day_json.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_15.png)

- [Gün 15](#gün-15)
	- [Sınıflar](#sınıflar)
		- [Sınıfın Tanımı ](#defining-a-classes)
		- [Sınıf Örneklemesi](#class-instantiation)
		- [Sınıf Oluşturucu](#class-constructor)
		- [Constructor ile varsayılan değerler](#default-values-with-constructor)
		- [Sınıf methodları](#class-methods)
		- [Başlangıç ​​değeri olan özellikler](#properties-with-initial-value)
		- [getter](#getter)
		- [setter](#setter)
		- [Statik method](#static-method)
	- [Inheritance](#inheritance)
		- [Overriding methods](#overriding-methods)
	- [Egzersizler](#egzersizler)
		- [Egzersiz Seviye 1](#egzersizler-seviye-1)
		- [Egzersiz Seviye 2](#egzersizler-seviye-2)
		- [Egzersiz Seviye 3](#egzersizler-seviye-3)

# Gün 15

## Sınıflar - Classes

JavaScript nesne tabanlı progralama dilidir. JavaScript'teki her şey, özellikleri ve yöntemleriyle bir nesnedir. Nesne oluşturmak için sınıf oluşturutuz. Sınıflar nesne oluşturucu (constructor) gibidir yada nesne oluşturmak için  taslak gibidir. Nesne oluşturmak için sınıf oluştururuz. Sınıf, nesnenin niteliklerini ve davranışını tanımlarken, nesne ise sınıfı temsil eder.

Bir sınıf oluşturduğumuzda, istediğimiz zaman ondan nesne oluşturabiliriz. Bir sınıftan nesne oluşturmaya class instantiation(sınıf başlatma) denir.

Nesne bölümünde, bir nesne değişmezinin nasıl oluşturulacağını gördük. Nesne değişmezi bir singleton'dur. Benzer bir nesne elde etmek istiyorsak, onu yazmalıyız. Ancak sınıf, birçok nesne oluşturmaya izin verir. Bu, kod miktarını ve kod tekrarını azaltmaya yardımcı olur.

### Sınıfın Tanımı ( Instantiation )

JavaScript'te bir sınıf tanımlamak için class anahtar kelimesine, **CamelCase**'de bir sınıfın adına ve blok koduna (iki küme parantez) ihtiyacımız var. Kişi adında bir sınıf oluşturalım.

```sh
// syntax
class ClassName {
    //  code goes here
}

```

**Örnek:**

```js
class Person {
  // code goes here
}
```

Person sınıfı oluşturduk fakat içine bir şey yazmadık.

### Sınıf Örneklemesi

Örnekleme sınıfı, bir sınıftan bir nesne oluşturmak anlamına gelir. _new_ anahtar kelimesine ihtiyacımız var ve sınıfın adını _new_ kelimesinden sonra çağırıyoruz.

Person sınıfımız içerisine dog nesnesi oluşturalım.

```js
class Person {
  // code goes here
}
const person = new Person()
console.log(person)
```

```sh
Person {}
```

Gördüğünüz gibi bir Person nesnesi oluşturduk. Sınıfın henüz herhangi bir özelliği olmadığı için nesne de boştur.

Sınıfta farklı özellikler iletmek için class constructor(sınıf yapıcısını) kullanalım.

### Sınıf Oluşturucu ( Constructor )

Constructor, nesnemiz için bir taslak oluşturmamıza izin veren yerleşik bir fonksiyondur. Constructor fonksiyonu, constructor anahtar sözcüğü ile başlar ve ardından bir parantez gelir. Parantez içinde nesnenin özelliklerini parametre olarak iletiyoruz. Bu anahtar sözcüğü, constructor parametrelerini sınıfa eklemek için kullanırız.

Aşağıdaki Person sınıfı oluşturucusu firstName ve lastName özelliği oluşturur. Bu özellikler, _this_ anahtar kelimesi kullanılarak Person sınıfına eklenir. _this_ sınıfın kendinisi ifade eder.

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person()

console.log(person)
```

```sh
Person {firstName: undefined, lastName:undefined}
```

Nesnenin tüm anahtarları tanımsızdır(undefined). Ne zaman somutlaştırsak, özelliklerin değerini geçmeliyiz. Sınıfı somutlaştırdığımızda şu anda değeri iletelim.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh')

console.log(person1)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
```

En başta da belirttiğimiz gibi bir sınıf oluşturduğumuzda, sınıfı kullanarak birçok nesne oluşturabiliriz. Şimdi, Person sınıfını kullanarak birden fazla kişi nesnesi oluşturalım.

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person1)
console.log(person2)
console.log(person3)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
Person {firstName: "Lidiya", lastName: "Tekle"}
Person {firstName: "Abraham", lastName: "Yetayeh"}
```

Person sınıfını kullanarak 3 kişi nesnesi oluşturduk. Gördüğünüz gibi sınıfımızda çok fazla özellik yok,hadi biraz daha sınıfımızın içerisine özellik ekleyelim.
```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(person1)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
```

### Constructor ile varsayılan değerler

Constructor fonksiyonun özellikleri,diğer normal fonksiyonlar gibi bir değere sahip olabilir.

```js
class Person {
  constructor(
    firstName = 'Asabeneh',
    lastName = 'Yetayeh',
    age = 250,
    country = 'Finland',
    city = 'Helsinki'
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person() // it will take the default values
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1)
console.log(person2)
```

```sh
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
Person {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Espoo"}
```

### Sınıf methodları

Bir sınıfın içindeki constructor, nesne için bir tasklak oluşturmamıza izin veren yerleşik bir fonksiyondur. Bir sınıfta sınıf methodları oluşturabiliriz. Methodlar, sınıf içindeki JavaScript fonksiyonlarıdır. Bazı sınıf methodları oluşturalım.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName())
console.log(person2.getFullName())
```

```sh
Asabeneh Yetayeh
test.js:19 Lidiya Tekle
```

### Başlangıç ​​değeri olan özellikler

Bazı özellikler için bir sınıf oluşturduğumuzda bir başlangıç değerine sahip olabiliriz. Örneğin bir oyun oynuyorsanız, başlama puanınız sıfır olacaktır. Yani, sıfır olan bir başlangıç puanımız veya herhangi bir puanımız olabilir. Diğer bir şekilde, bir başlangıç becerisine sahip olabiliriz ve bir süre sonra biraz beceri kazanacağız.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
```

```sh
0
0
[]
[]
```

Bir method regular , getter yada setter olabilir. getter ve setter yakından inceleyelim.

### getter

get yöntemi, nesneden değere erişmemizi sağlar. Get anahtar sözcüğünü ve ardından bir fonksiyon kullanarak bir get methodu yazıyoruz. Özelliklere doğrudan nesneden erişmek yerine değeri almak için getter kullanırız. Aşağıdaki örneğe bakalım

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getScore) // We do not need parenthesis to call a getter method
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
```

```sh
0
0
[]
[]
```

### setter

Setter yöntemi, belirli özelliklerin değerini değiştirmemize izin verir. _set_ anahtar kelimesini kullanarak bir fonksiyon kullanarak bir setter methodu yazıyoruz. Aşağıdaki örneğe bakalım.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
```

```sh
1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
```

Regular(normal) method ile getter arasındaki fark sizi şaşırtmasın. Normal bir method yapmayı biliyorsanız, iyisiniz. Person sınıfına getPersonInfo adlı normal method ekleyelim.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.getScore)
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
console.log(person3.getSkills)

console.log(person1.getPersonInfo())
console.log(person2.getPersonInfo())
console.log(person3.getPersonInfo())
```

```sh
1
1
["HTML", "CSS", "JavaScript"]
["Planning", "Managing", "Organizing"]
[]
Asabeneh Yetayeh is 250. He lives Helsinki, Finland. He knows HTML, CSS and JavaScript
Lidiya Tekle is 28. He lives Espoo, Finland. He knows Planning, Managing and Organizing
John Doe is 50. He lives Mars city, Mars.
```

### Statik method

Statik anahtar kelime, bir sınıf için statik bir yöntem tanımlar. Statik methodlar, sınıfın örneklerinde(instance) çağrılmaz. Bunun yerine, sınıfın kendisinde çağrılırlar. Bunlar genellikle nesneler oluşturma veya klonlama fonskiyonları gibi yardımcı fonksiyonlardır. Statik methoda bir örnek _Date.now()_'dur. _now_ yöntemi doğrudan sınıftan çağrılır.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

console.log(Person.favoriteSkill())
console.log(Person.showDateTime())
```

```sh
Node
15.1.2020 23:56
```

Statik methodlar, yardımcı fonksiyonlar olarak kullanılabilen yöntemlerdir.

## Inheritance (Kalıtım)

Inheritance kullanarak ana sınıfın tüm özelliklerine ve yöntemlerine erişebiliriz. Bu, kod tekrarını azaltır. Hatırlarsanız, bir Person ana sınıfımız var ve ondan alt sınıflar yaratacağız. Alt sınıfımız öğrenci, öğretmen vb. olabilir.

```js
// syntax
class ChildClassName extends {
 // code goes here
}
```

Person ebeveyn sınıfından bir Student alt sınıfı oluşturalım.


```js
class Student extends Person {
  saySomething() {
    console.log('I am a child of the person class')
  }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())
```

```sh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
I am a child of the person class
Asabeneh Yetayeh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
Asabeneh Yetayeh is Finland. He lives Helsinki, 250.
```

### Overriding method

Gördüğünüz gibi Person Class'taki tüm yöntemlere erişmeyi başardık ve Student alt sınıfında kullandık. Ana yöntemlerini özelleştirebiliriz, bir alt sınıfa ek özellikler ekleyebiliriz. Özelleştirmek istiyorsak, methodlar ve ekstra özellikler eklemek istiyorsak, alt sınıfa için constructor fonksiyonu kullanmamız gerekir. Constructor işlevinin içinde, üst sınıftan tüm özelliklere erişmek için super() işlevini çağırırız. Person sınıfının cinsiyeti yoktu ama şimdi öğrenci sınıfı için cinsiyet özelliğini verelim. Alt sınıfta aynı method adı kullanılıyorsa, üst yöntem geçersiz kılınır.

```js
class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const s1 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())
```

```sh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
I am a child of the person class
Asabeneh Yetayeh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
Asabeneh Yetayeh is 250. He lives in Helsinki, Finland. He knows HTML, CSS and JavaScript
I am a child of the person class
Lidiya Tekle
Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
Lidiya Tekle is 28. She lives in Helsinki, Finland. He knows Planning, Managing and Organizing
```

Şimdi, getPersonInfo methodu geçersiz kılındı ​​ve kişinin erkek mi yoksa kadın mı olduğunu tanımlar.

🌕 Sen mükemmelsin. Artık sınıf oluşturmayı biliyorsunuz ve her şeyi bir nesneye dönüştürme gücünüz var. Büyüklüğe giden yolun yarısına kadar geldin. Şimdi beyniniz ve kasınız için bazı egzersizler yapın.

## Egzersizler

### Egzersiz Seviye 1

1. Bir Animal sınıfı oluşturun. Sınıf, isim, yaş, renk, ayak sayısı özelliklerine sahip olacak ve farklı yöntemler oluşturacaktır
2. Animal sınıfına Dog ve Cat adı altında alt sınıflar oluşturun

### Egzersiz Seviye 2

1. Oluşturduğunuz Animal sınıfını override methoduyla yazın

### Egzersiz Seviye 3

1. Bir örneğin merkezi eğilim ölçüsünü (ortalama, medyan, mod) ve değişkenlik ölçüsünü (aralık, varyans, standart sapma) hesaplayan bir program geliştirmeye çalışalım. Bu ölçülere ek olarak, numunenin min, maks, sayım, yüzdelik ve frekans dağılımını bulun. İstatistikler adlı bir sınıf oluşturabilir ve İstatistik sınıfı için yöntem olarak istatistiksel hesaplamalar yapan tüm işlevleri oluşturabilirsiniz. Aşağıdaki çıktıyı kontrol edin.

```JS
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
```

```sh
// you output should look like this
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
```

1. PersonAccount adlı bir sınıf oluşturun. ad, soyad, gelirler, giderler özelliklerine sahip olan totalIncome, totalExpense, accountInfo,addIncome, addExpense ve accountBalance methodlarına sahip. 

🎉 TEBRİKLER ! 🎉

[<< Gün 14](../14_Day_Error_handling/14_day_error_handling.md) | [Gün 16>>](../16_Day_JSON/16_day_json.md)
