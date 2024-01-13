<div align="center">
  <h1> 30 Days Of JavaScript: Writing Clean Codes</h1>
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

[<< Gün 19](../19_Day_Closures/19_day_closures.md) | [Gün 21 >>](../21_Day_DOM/21_day_dom.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_20.png)
- [Gün 20](#gun-20)
	- [Temiz Kod Yazmak](#temiz-kod-yazmak)
		- [JavaScript Stil Kılavuzu](#javaScript-stil-kılavuzu)
		- [Neden stil kılavuzuna ihtiyacımız var?](#neden-stil-kılavuzuna-ihtiyacımız-var)
			- [Airbnb JavaScript Style Guide](#airbnb-javascript-style-guide)
			- [Standard JavaScript Style Guide](#standard-javascript-style-guide)
			- [Google JavaScript Style Guide](#google-javascript-style-guide)
		- [JavaScript Kodlama Kuralları](#javaScript-kodlama-kuralları)
			- [30DaysOfJavaScript'te kullanılan kurallar](#30DaysOfJavaScript-kullanılan-kurallar)
			- [Değişkenler](#Degiskenler)
			- [Arrays(Diziler)](#arrays)
			- [Fonksiyonlar](#fonksiyonlar)
			- [Döngüler](#donguler)
			- [Nesneler](#nesneler)
			- [Koşullar](#kosullar)
			- [Sınıflar](#sınıflar)

# Gün 20

## Temiz Kod Yazmak

### JavaScript Stil Kılavuzu

JavaScript stil kılavuzu, JavaScript kodunun nasıl yazılması ve düzenlenmesi gerektiğini söyleyen bir dizi standarttır. Bu bölümde JavaScript rehberlerinden ve temiz kod nasıl yazılırdan bahsedeceğiz.

JavaScript bir programlama dilidir ve insan dili gibi syntax(sözdizimi) yapısına sahiptir. JavaScript'in sözdizimi, kolaylık ve basitlik adına belirli bir stil yönergesini izleyerek yazılmalıdır.

### Neden stil kılavuzuna ihtiyacımız var?

Çok uzun zamandır tek başına kodlama yapıyorsun ama şimdi bir ekip halinde çalışıyorsun gibi düşünelim. Tek çalıştığın sürece nasıl kod yazdığınız bu kadar önemli değil, ancak 10 veya 20 veya daha fazla geliştirici ekibinde bir projede ve aynı kod tabanı üzerinde çalıştığınızda, kod dağınık ve yönetilmesi zor olacaktır. İzlenecek herhangi bir yönerge yoktur.

Kendi yönergelerinizi ve sözleşmelerinizi geliştirebilir veya iyi geliştirilmiş yönergeleri de uyarlayabilirsiniz. Bize en yaygın bilinen yönergeleri bildirin.
En yaygın JavaScript Stil Kılavuzları

- Airbnb JavaScript Style Guide
- JavaScript Standard Style Guide
- Google JavaScript Style Guide

#### Airbnb JavaScript Style Guide

Airbnb, internetteki en popüler JavaScript stil kılavuzlarından birine sahiptir. JavaScript'in neredeyse her yönünü de kapsar ve birçok geliştirici ve şirket tarafından benimsenmiştir. [Airbnb stil rehberine](https://github.com/airbnb/javascript) göz atabilirsiniz. ben de denemenizi tavsiye ederim. Stillerinin kullanımı çok kolay ve anlaşılması kolaydır.

#### Standard JavaScript Style Guide

Bu kılavuz Airbnb kadar popüler değil ama bakmaya değer. [Stil kılavuzlarında](https://standardjs.com/) noktalı virgülü kaldırdılar.

#### Google JavaScript Style Guide

Google'ın yönergesi hakkında pek bir şey söylemiyorum ve kullanmadım, bunun yerine şu [link'e](https://google.github.io/styleguide/jsguide.html) bir göz atmanızı öneririm.

### JavaScript Kodlama Kuralları

Bu görevde ayrıca genel JavaScript kodlama yazım kurallarını ve kılavuzlarını kullandık. Kodlama kuralları, bir kişi, bir ekip veya bir şirket tarafından geliştirilen programlama için stil yönergeleridir.

Kodlama kuralları aşağıdakilere yardımcı olur:

- temiz kod yazmak
- kod okunabilirliğini geliştirmek
- kodun yeniden kullanılabilirliğini ve sürdürülebilirliğini geliştirmek için

Kodlama kuralları şunları içerir:

- Değişkenler için adlandırma ve bildirim kuralları
- Fonksiyonlar için adlandırma ve bildirim kuralları
- Boşluk, girinti ve yorumların kullanımına ilişkin kurallar
- Programlama uygulamaları ve ilkeleri

#### 30DaysOfJavaScript'te kullanılan kurallar

Bu meydan okumada normal JavaScript kuralını takip ediyoruz, ancak yazma tercihimi de ekledim.

- Değişkenler ve fonksiyonlar için camelCase kullandık.
- Tüm değişken isimleri bir harfle başlar.
- Sabitler, diziler, nesneler ve işlevler için *const* kullanmayı seçtik. Çift alıntı yerine tek tırnak veya ters tik kullanmayı tercih ettik. Tek alıntı moda oluyor.
- Kodumuzdan noktalı virgülleri de kaldırdık ama bu kişisel tercih meselesidir.
- Aritmetik operatörler, atama operatörleri ve virgülden sonra boşluk
- Fonksiyon bildirimi yerine arrow function
- Fonksiyon bir satır ise, implicit return yerine explicit return
- Bir nesnenin son değerinin sonunda virgül yok
- Daha uzun versiyon yerine +=, -=, *= /=, **= bunu tercih ediyoruz
- console.log()'u kullandığımızda, konsolun nereden geldiğini belirlemek için bir etiket dizgisi ile yazdırmak iyidir.

#### Değişkenler

```js
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
const PI = Math.PI
const gravity = 9.81
```

#### Arrays(Diziler)

Dizi isimlerini çoğul yapmayı seçtik

- names
- numbers
- countries
- languages
- skills
- fruits
- vegetables

```js
// arrays
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
```

#### Fonksiyonlar

Şimdiye kadar çok tanıdık fonksiyon declaration, expression fonksiyon, arrow fonksiyon ve anonymous fonksiyon sahipsiniz. Bu zorlukta, diğer fonksiyonlar yerine arrow fonksiyonunu kullanma eğilimindeyiz. Arrow fonksiyonu, diğer fonksiyonların yerine geçmez. Ayrıca arrow fonksiyon ve fonksiyon declaration tam olarak aynı değildir. Bu yüzden ne zaman kullanacağınızı ve ne zaman kullanmayacağınızı bilmelisiniz. Farkı diğer bölümlerde ayrıntılı olarak ele alacağım. Fonksiyon bir satır ise, implicit return yerine explicit return kullanacağız.

```js
// bir kişinin tam adını döndüren fonksiyon
const printFullName = (firstName, lastName) => firstName + ' ' + lastName
// bir sayının karesini döndüren fonksiyon
const square = (n) => n * n
// rastgele hexa renkleri oluşturan fonksiyon
const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return hexa
}
// tarih ve saati gösteren bir fonskiyon
const showDateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  const dateMonthYear = date + '.' + month + '.' + year
  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  return fullTime
}
```

`new Dat().toLocaleString()` geçerli tarih ve saati görüntülemek için de kullanılabilir. `toLocaleString()` yöntemleri farklı argümanlar alır. Bu [bağlantıdan](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) tarih ve saat hakkında daha fazla bilgi edinebilirsiniz.

#### Döngüler

Bu zorluklarda birçok döngü türünü ele alıyoruz. Normal for döngüsü, while döngüsü, do while döngüsü, for of döngüsü, forEach döngüsü ve for in döngüsü.
Bunları nasıl kullandığımızı görelim:

```js
for (let i = 0; i < n; i++){
    console.log()
}
// dizi değişkenlerini tanımlıyoruz
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// normal for döngüsü kullanarak bir diziyi yineleme
let len = names.length;
for(let i = 0; i < len; i++){
    console.log(names[i].toUpperCase())
}
// for of kullanarak bir diziyi yinelemek
for( const name of names) {
    console.log(name.toUpperCase())
}
// forEach kullanarak bir diziyi yineleme 
names.forEach((name) => name.toUpperCase())
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}
for(const key in person) {
    console.log(key)
}
```

#### Nesneler

Nesne değişmezini *const* ile tanımlarız.

```js
// nesne değişmezi tanımlama
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','TypeScript', 'React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}
// nesne anahtarları aracılığıyla yineleme
for(const key in person) {
    console.log(key, person[key])
}
```

#### Koşullar

 Önceki zorluklarda if, if else, if else if else, switch ve üçlü operatörleri bahsetmiştik.

 ```js
 // syntax(sözdimi)
if (condition) {
  // kodun bu kısmı doğru koşul için çalıştırılır
} else {
  // kodun bu kısmı yanlış koşul için çalıştırılır
}
 ```

 ```js
 // if else
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number
 ```

 ```js
 // if else if else if else
let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
 ```

 ```js
 // Daha fazla switch kullanımı
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()
switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
 ```

 ```js
 // ternary (Üçlü)
 let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
 ```

#### Sınıflar

Sınıfı büyük harfle başlayan CamelCase ile tanımlıyoruz

```js
// syntax
class ClassName {
    // code goes here
}
```

```js
// sınıfımızı oluşturuyoruz
class Person {
  constructor(firstName, lastName) {
    console.log(this) // buradan çıktı alıyoruz
    this.firstName = firstName
    this.lastName = lastName
  }
}
```

Takip ettiğiniz stil kılavuzu ne olursa olsun tutarlı olun. Bazı programlama paradigmalarını ve tasarım modellerini takip edin. Unutmayın, kodunuzu belirli bir düzende veya şekilde yazmazsanız, kodunuzu okumak zor olacaktır. Bu nedenle, okunabilir kod yazarak kendiniz veya kodunuzu okuyacak biri için bir iyilik yapın.

🌕 Düzenlisin. Artık temiz kod yazmayı biliyorsun, böylece İngilizce bilen herkes kodunuzu anlayabilir. Her zaman ilerliyorsunuz ve mükemmelliğe giden yolda 20 adım öndesiniz.

🎉 TEBRİKLER ! 🎉

[<< Gün 19](../19_Day_Closures/19_day_closures.md) | [Gün 21 >>](../21_Day_DOM/21_day_dom.md)