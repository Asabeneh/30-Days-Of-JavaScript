<div align="center">
  <h1> 30 Günde JavaScript: Destructuring ve Spreading</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>Author:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
      <sub>Çevirmen:
  <a href="https://github.com/guvenkarabulut" target="_blank">Güven Karabulut</a><br>
  <small> Aralık, 2022</small>
  </sub>
  </sub>

</div>

[<< Day 10](../10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md) | [Day 12>>](../12_Day_Regular_expressions/12_day_regular_expressions.md)

![Day 11](/images/banners/day_1_11.png)

- [Day 11](#day-11)
  - [Destructing ve Spread](#destructing-ve-spread)
    - [Destructing Dizilerde Kullanımı](#destructing-dizilerde-kullanımı)
    - [Iterasyon sırasında Destructuring](#iterasyon-sırasında-destructuring)
    - [Objeye Destructuring işlemi yapma](#objeye-destructuring-işlemi-yapma)
    - [Yapılandırma sırasında yeniden adlandırma](#yapılandırma-sırasında-yeniden-adlandırma)
    - [Destructuring olmadan obje parametresi](#destructuring-olmadan-obje-parametresi)
    - [Object parameter with destructuring](#object-parameter-with-destructuring)
    - [Iterasyon sırasında objeye destructuring işlemi uygulamak](#iterasyon-sırasında-objeye-destructuring-işlemi-uygulamak)
    - [Spread veya Rest Operatörleri](#spread-veya-rest-operatörleri)
    - [Dizi ogelerinin geri kalanını almak için spread operatörü](#dizi-ogelerinin-geri-kalanını-almak-için-spread-operatörü)
    - [Diziyi kopyalamak için spread operatörü](#diziyi-kopyalamak-için-spread-operatörü)
    - [Nesneyi kopyalamak için spread operatörü](#nesneyi-kopyalamak-için-spread-operatörü)
      - [Ok fonksiyonu ve spread operatörü](#ok-fonksiyonu-ve-spread-operatörü)
  - [Egzersiz](#egzersiz)
    - [Egzersiz: Seviye 1](#egzersiz-seviye-1)
    - [Egzersiz: Seviye 2](#egzersiz-seviye-2)
    - [Egzersiz: Seviye 3](#egzersiz-seviye-3)

# Day 11

## Destructing ve Spread

Destructer, dizileri ve nesneleri açmanın ve farklı değişkenlere atamanın bir yoludur

### Destructing Dizilerde Kullanımı

```js
  const numbers = [1, 2, 3]
  let [numOne, numTwo, numThree] = numbers

  console.log(numOne, numTwo, numThree)
```

```sh
  1 2 3
```

```js
  const names = ['Asabeneh', 'Brook', 'David', 'John']
  let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

  console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)
```

```sh
Asabeneh Brook David John
```

```js
  const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
  let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

  console.log(e,pi,gravity, bodyTemp, boilingTemp)
```

```sh
2.72 3.14 9.81 37 100
```

```js
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)
```

```sh
["HTML", "CSS", "JS", "React"]
["Node", "Express", "MongoDB"]
```

Eğer dizideki değerleri atlanması isteniyorsa virgül(,) işareti kullanmak gerekir. Virgül söz konusu indisteki değeri atlamaya yardımcı olur.

```js
  const numbers = [1, 2, 3]
  let [numOne, , numThree] = numbers //2 atlandı

  console.log(numOne, numThree)
```

```sh
1 3
```

```js
  const names = ['Asabeneh', 'Brook', 'David', 'John']
  let [, secondPerson, , fourthPerson] = names // birinci ve üçüncü değer atlandı

  console.log(secondPerson, fourthPerson)
```

```sh
Brook John
```

Bu index için dizinin değeri tanımsız olduğunda varsayılan değeri kullanabiliriz.

```js
const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  
```

```sh
Asabeneh Brook David John
```

Dizideki tüm elemanlara değişken atanmayabilir. İlkinin birkaçını yok edip ve kalanını spread operatörünü (...) kullanarak dizi olarak alabiliriz.

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)
```

```sh
1 2 3
[4, 5, 6, 7, 8, 9, 10]
```

### Iterasyon sırasında Destructuring

```js
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}
```

```sh
Finland Helsinki
Sweden Stockholm
Norway Oslo
```

```js
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(const [first, second, third] of fullStack) {
console.log(first, second, third)
}
```

```sh
HTML CSS JS
Node Express MongoDB
```

### Objeye Destructuring işlemi yapma

Destruct işleminde kullandığımız değişkenin adı, nesnenin anahtarı veya özelliği ile tamamen aynı olmalıdır. Aşağıdaki örneğe bakınız.

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)
```

```sh
20 10 200 undefined
```

### Yapılandırma sırasında yeniden adlandırma

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p)
```

```sh
20 10 200 undefined
```

Eğer anahtar nesnede bulunmazsa, değişken tanımsız olarak atanır. Anahtar nesnede olmadığında bildirim sırasında varsayılan bir değer verilebilir. Aşağıdaki örneğe bakınız.

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter = 60 } = rectangle

console.log(width, height, area, perimeter) //20 10 200 60
//Nesneyi değiştirelim:width=30 ve perimeter=80
```

```js
const rectangle = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80
}
let { width, height, area, perimeter = 60 } = rectangle
console.log(width, height, area, perimeter) //30 10 200 80
```

Anahtarları bir fonksiyon parametresi olarak destructuring işlemi uygulama. Bir dikdörtgen nesnesi alan ve bir dikdörtgenin çevresini döndüren bir fonksiyon oluşturalım.

### Destructuring olmadan obje parametresi

```js
// Destructuring yok
const rect = {
  width: 20,
  height: 10
}
const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60
//Destructuring var
```

```js
//Başka örnek
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// person nesnesi hakkında destructuring kullanmayarak bilgi veren bir fonksiyon oluşturalım

const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person))
```

### Object parameter with destructuring

```js

const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height)
}

console.log(calculatePerimeter(rect)) // 60
```

```js
// person nesnesi hakkında destructuring kullanarak bilgi veren bir fonksiyon oluşturalım
const getPersonInfo = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages
}) => {
  const formattedSkills = skills.slice(0, -1).join(', ')
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}
console.log(getPersonInfo(person))
/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/
```

### Iterasyon sırasında objeye destructuring işlemi uygulamak

```js
const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
}
```

```sh
Prepare JS Test 4/1/2020 8:30 true
Give JS Test 4/1/2020 10:00 false
Assess Test Result 4/1/2020 1:00 false
```

### Spread veya Rest Operatörleri

Bir diziye destructuring işlemi uygulandığında, kalan elemanları dizi olarak almak için yayılma operatörünü (...) kullanırız.Buna ek olarak, dizi öğelerini başka bir diziye yaymak için spread operatörünü kullanırız.

### Dizi ogelerinin geri kalanını almak için spread operatörü

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
​
console.log(num1, num2, num3)
console.log(rest)
```

```sh
1 2 3
[4, 5, 6, 7, 8, 9, 10]
```

```js
const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries

console.log(gem)
console.log(fra)
console.log(nordicCountries)
```

```sh
Germany
France
["Finland", "Sweden", "Norway", "Denmark", "Iceland"]
```

### Diziyi kopyalamak için spread operatörü

```js
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)


```

```sh
[0, 2, 4, 6, 8, 10]
[1, 3, 5, 7, 9]
[0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
```

```js
const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack)
```

```sh
["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]
```

### Nesneyi kopyalamak için spread operatörü

Bir objeyi kopyalamk için spread operatörünü kullanabiliriz.

```js
const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user}
console.log(copiedUser)
```

```sh
{name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}
```

Kopyalama sırasında nesneyi nitelendirme veya değiştirme

```js
const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user, title:'instructor'}
console.log(copiedUser)
```

```sh
{name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}
```

#### Ok fonksiyonu ve spread operatörü

Sınırsız sayıda argüman alan bir ok fonksiyonu yazmak istersek, bir yayılma spread kullanırız. Parametre olarak bir spread işleci kullanırsak, bir işlevi çağırdığımızda iletilen bağımsız değişken bir diziye dönüşecektir.

```js

const sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3, 4, 5)

```

```sh
[1, 2, 3, 4, 5]

```

```js

const sumAllNums = (...args) => {
  let sum = 0
  for (const num of args){
    sum += num
  }
  return sum
  
}

console.log(sumAllNums(1, 2, 3, 4, 5))
```

```sh
15

```

  🌕 Büyük bir ilerleme kateddiniz, durdurulamazsınız. Devam edin! 11.gün zorluklarını yeni tamamladınız ve mükemmeliğe giden yolda 10 adım öndesiniz. Şimdi beyniniz ve kaslarınız için bazı egzersizler yapın.

## Egzersiz

### Egzersiz: Seviye 1

```js
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
```

1. E, pi, yerçekimi, humanBodyTemp, waterBoilingTemp sabitleri dizisinin öğelerini destructuring işlemi uygulayın ve atayın.
2. fin, est, sw, den veya nor olarak ülkeler dizisinin öğelerini destructuring işlemi uygulayın ve atayın.
3. Dikdörtgen nesnesini özelliklerine veya anahtarlarına göre destructuring işlemi uygulayın.

### Egzersiz: Seviye 2

1. Kullanıcılar dizisini Iterator ve destructuring kullanarak nesnenin tüm anahtarlarını alın.
2. İkiden az beceriye sahip kişileri bulun.

### Egzersiz: Seviye 3

1. Tüm ülkelerin adını, sermayesini, nüfusunu ve dillerini yazdıran ülkeler nesnesine destructuring işlemi uygulayın
2. Küçük bir geliştirici, öğrenci adını, becerilerini ve puanını okunması kolay olmayabilecek diziler halinde yapılandırır.Aşağıdaki dizi adını ada, beceriler dizisini becerilere, puan dizisini puanlara, JavaScript puanını jsScore'a ve React puanını React  değişkenine tek bir satırda destructuring işlemi uygulayın.

  ```js
    const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    console.log(name, skills, jsScore, reactScore)
  ```

  ```sh
  David (4) ["HTM", "CSS", "JS", "React"] 90 95
  ```

3. Diziyi bir structure nesnesine dönüştürebilen convertArrayToObject adlı bir fonksiyon yazın.

  ```js
      const students = [
          ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
          ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
        ]

      console.log(convertArrayToObject(students))
      [
        {
          name: 'David',
          skills: ['HTM','CSS','JS','React'],
          scores: [98,85,90,95]
        },
        {
          name: 'John',
          skills: ['HTM','CSS','JS','React'],
          scores: [85, 80,85,80]
        }
      ]
  ```

4. Öğrenci nesnesini orijinal nesneyi değiştirmeden newStudent'e kopyalayın.Yeni nesnede aşağıdakini ekleyin?

- frontEnd beceri setlerine seviye 8 ile Bootstrap ekleyin
- backEnd beceri setlerine 9. seviye Express'i ekleyin
- dataBase beceri setlerine seviye 8 ile SQL ekleyin
- dataScience beceri setlerine seviye olmadan SQL ekleyin

```js
    const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }
  ```

 Kopyalanan nesne çıktısı şöyle görünmelidir:

```js
    {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        {skill: 'HTML',level: 10},
        {skill: 'CSS',level: 8},
        {skill: 'JS',level: 8},
        {skill: 'React',level: 9},
        {skill: 'BootStrap',level: 8}
      ],
      backEnd: [
        {skill: 'Node',level: 7},
        {skill: 'GraphQL',level: 8},
        {skill: 'Express',level: 9}
      ],
      dataBase: [
        { skill: 'MongoDB',level: 7.5},
        { skill: 'SQL',level: 8}
      ],
      dataScience: ['Python','R','D3.js','SQL']
    }
  }

```

🎉 Tebrikler ! 🎉

[<< Day 10](../10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md) | [Day 12 >>](../12_Day_Regular_expressions/12_day_regular_expressions.md)
