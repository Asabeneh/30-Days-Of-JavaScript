<div align="center">
  <h1> 30 Days Of JavaScript: Promises</h1>
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

[<< Gün 17](../17_Day_Web_storages/17_day_web_storages.md) | [Gün 19>>](../19_Day_Closures/19_day_closures.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_18.png)

- [Gün 18](#day-18)
	- [Promise](#promise)
	- [Callbacks](#callbacks)
		- [Promise yapıcısı](#promise-constructor)
	- [Fetch API](#fetch-api)
	- [Async ve Await](#async-and-await)
	- [Egzersizler](#exercises)
		- [Egzersiz: Seviye 1](#exercises-level-1)
		- [Egzersiz: Seviye 2](#exercises-level-2)
		- [Egzersiz: Seviye 3](#exercises-level-3)

# Gün 18

## Promise

Biz insanlar, belirli bir zamanda bir faaliyette bulunma sözü veririz veya alırız. Sözümüzü tutarsak başkalarını mutlu ederiz, ama sözümüzü tutmazsak hoşnutsuzluklara yol açabilir. JavaScript'te promise(söz) vermenin yukarıdaki örneklerle ortak bir yanı vardır.

Bir promise, JavaScript'te asynchronous işlemleri işlemenin bir yoludur. Asynchronous bir eylemin nihai başarı değeri veya başarısızlık nedeni ile işleyicilere izin verir. Bu, asynchronous yöntemlerin synchronous yöntemler gibi değerler döndürmesine olanak tanır: asynchronous yöntem, nihai değeri hemen döndürmek yerine, gelecekte bir noktada değeri sağlama sözü verir.

Bir Promise şu durumlardan birindedir:

- pending: başlangıç ​​durumunda, ne tamamlandı ne de reddedildi.
- fulfilled: işlemin başarıyla tamamlandığı anlamına gelir.
- rejected: işlemin başarısız olduğu anlamına gelir.

Bekleyen bir promise ya bir değerle yerine getirilebilir(fulfilled) ya da bir sebeple (error) rejected olabilir. Bu seçeneklerden herhangi biri gerçekleştiğinde, bir sözün o zaman yöntemiyle sıraya alınan ilişkili işleyiciler çağrılır. (Karşılık gelen bir işleyici(handler) eklendiğinde promise zaten fulfilled veya rejected ise, işleyici(handler) çağrılır, bu nedenle asynchronous bir işlemin tamamlanması ile işleyicilerinin eklenmesi arasında bir yarış koşulu yoktur.)

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

## Callbacks

Promise çok iyi anlamak için önce callback mantığını anlayalım. Aşağıdaki callback örneklerini görelim. Aşağıdaki kod bloklarında, callback ve promise arasındaki farkları fark edeceksiniz.

- callback
  Let us see a callback function which can take two parameters. The first parameter is err and the second is result. If the err parameter is false, there will not be error other wise it will return an error.

In this case the err has a value and it will return the err block.

```js
//Callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback)
```

```sh
// 2 saniye sonra yazdırıcak
It did not go well
```

Bu durumda hata yanlıştır ve sonuç olan else bloğunu döndürür.

```js
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(false, skills)
  }, 2000)
}

doSomething((err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
})
```

```sh
// 2 saniye sonra yazdırıcak
["HTML", "CSS", "JS"]
```

### Promise yapıcısı

Promise yapıcısını kullanarak bir promise oluşturabiliriz. `new` anahtar kelimesini, ardından `Promise` kelimesini ve ardından bir parantez kullanarak yeni bir promise oluşturabiliriz. Parantez içinde bir `callback` işlevi alır. Promise callback fonksiyonu, `resolve` ve `reject` fonksiyonları olmak üzere iki parametreye sahiptir.

```js
// syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
```

```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))
```

```sh
["HTML", "CSS", "JS"]
```

Yukarıdaki promise kararlılıkla yerine getirilmiştir. Promise'ın reject ile kararlaştırıldığı başka bir örnek verelim.

```js
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.includes('Node')) {
      resolve('fullstack developer')
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error(error))
```

```sh
Something wrong has happened
```

## Fetch API

Fetch API'si, kaynakları (ağ genelindekiler dahil) almak için bir interface sağlar. XMLHttpRequest kullanan herkese tanıdık gelecektir, ancak yeni API daha güçlü ve esnek bir özellik seti sağlar. Bu görevde, url ve APIS istemek için fetch kullanacağız. Buna ek olarak, fetch API'sini kullanarak ağ kaynaklarına erişimde promise kullanım durumunu gösterelim.

```js
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // API verilerine JSON olarak erişme
  .then(data => {
    // verileri almak
    console.log(data)
  })
  .catch(error => console.error(error)) // yanlış bir şey olursa işleme hatası
```

## Async ve Await

Async ve Await, promise yerine getirmenin zarif bir yoludur. Anlaşılması kolay ve yazması temiz.

```js
const square = async function (n) {
  return n * n
}

square(2)
```

```sh
Promise {<resolved>: 4}
```

Bir fonksiyonun önündeki async kelimesi, fonksiyonun bir promise vereceği anlamına gelir. Yukarıdaki kare fonksiyonu bir değer yerine bir promise verir.

Promise gelen değere nasıl erişiriz? Promise verilen değere erişmek için, wait anahtar sözcüğünü kullanacağız.

```js
const square = async function (n) {
  return n * n
}
const value = await square(2)
console.log(value)
```

```sh
4
```

Şimdi, yukarıdaki örnekte de görebileceğiniz gibi, bir fonksiyonun önüne async yazarak bir promise oluşturun ve bir promise değer almak için bekliyoruz. Async ve await birlikte çalışır, biri olmadan diğeri olamaz.

API verilerini hem promise yöntemini kullanarak hem de async ve await yöntemini kullanarak getirelim.

- promise

```js
const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
```

- async ve await

```js
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()
```

🌕 Sen gerçeksin ve sözünü tuttun ve 18. güne ulaştın. Sözünü tut ve azimle meydan oku. Büyüklüğe giden yolda 18 adım öndesin. Şimdi beyniniz ve kaslarınız için bazı egzersizler yapın

## Egzersizler

```js
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
```

### Egzersiz: Seviye 1

1. Fetch kullanarak countriesAPI'sini okuyun ve country, capital, languages, population ve area adını yazdırın.

### Egzersiz: Seviye 2

1. Tüm kedi adlarını catNames değişkenine yazdırın.

### Egzersiz: Seviye 3

1. catsAPI'sini okuyun ve kedinin ortalama ağırlığını metrik birimde bulun.
2. countriesAPI'sini okuyun ve en büyük(largest) 10 ülkeyi bulun.
3. countriesAPI'sini okuyun ve dünyada resmi olarak kullanılan toplam dil sayısını bulun.

🎉 TEBRİKLER ! 🎉

[<< Gün 17](../17_Day_Web_storages/17_day_web_storages.md) | [Gün 19>>](../19_Day_Closures/19_day_closures.md)
