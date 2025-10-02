<div align="center">
  <h1> 30 Days Of JavaScript: Booleans (Boole Değerler), Operators (Operatörler), Date (Tarih Objesi)</h1>
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

[<< Gün 2](../02_Day_Data_types/02_day_data_types.md) | [Gün 4 >>](../04_Day_Conditionals/04_day_conditionals.md)

![30 Günde JavaScript](../../images/banners/day_1_3.png)

- [📔 Gün 3](#-gün-3)
	- [Boolean Değerleri](#boolean-degerleri)
		- [Doğru Değerleri](#doğru-değerleri)
		- [Yanlış Değerleri](#yanlış-değerleri)
	- [Tanımsız](#tanımsız)
	- [Boş](#boş)
	- [Operatörler](#operatörler)
		- [Atama Operatörleri](#atama-operatörleri)
		- [Aritmetik Operatörleri](#aritmetik-operatörleri)
		- [Karşılaştırma Operatörleri](#karşılaştırma-operatörleri)
		- [Mantıksal Operatörler](#mantıksal-operatörler)
		- [Arttırma Operatörü](#arttırma-operatörü)
		- [Azaltma Operatörü](#azaltma-operatörü)
		- [Koşul Operatörü](#koşul-operatörü)
		- [Operatör Önceliği](#operatör-önceliği)
	- [Window Metotları](#window-metotları)
		- [Window alert() metot](#window-alert-metot)
		- [Window prompt() metot](#window-prompt-metot)
		- [Window confirm() metot](#window-confirm-metot)
	- [Date Objesi](#date-objesi)
		- [Bir Zaman Objesi Oluşturma](#bir-zaman-objesi-oluşturma)
		- [Tam Yılı Almak](#tam-yılı-almak)
		- [Ayı Almak](#ayı-almak)
		- [Tarihi Almak](#tarihi-almak)
		- [Günü Almak](#günü-almak)
		- [Saati Almak](#saati-almak)
		- [Dakikayı Almak](#dakikayı-almak)
		- [Saniyeyi Almak](#saniyeyi-almak)
		- [Zamanı Almak](#zamanı-almak)
	- [💻 Gün 3: Egzersizleri](#-gün-3-egzersizleri)
		- [Egzersiz: Seviye 1](#egzersiz-seviye-1)
		- [Egzersiz: Seviye 2](#egzersiz-seviye-2)
		- [Egzersiz: Seviye 3](#egzersiz-seviye-3)

# 📔 Gün 3

## Boolean Değerleri

Boolean ver türü iki değerden birini temsil eder :_true_ yada _false_. Boolean değeri doğru veya yanlıştır. Karşılaştırma operatörlerini kullandığınızda sonuc netleşecektir. Herhangi bir karşılaştırma sonucu doğru veya yanlış olan bir boolean değeri döndürür.

**Örnek: Boolean Deperleri**

```js
let isLightOn = true // ışık açık doğru
let isRaining = false // yağıyor yanlış
let isHungry = false // aç yanlış
let isMarried = true // evli doğru
let truValue = 4 > 3    // true -- doğru
let falseValue = 4 < 3  // false -- yanlış
```

Boolean değerlerinin doğru yada yanlış olduğunu kabul etmiştik.

### Doğru Değerleri (true)

- Sıfır hariç tüm sayılar (pozitif ve negatif) doğrudur
- Boş bir dize ('') dışında tüm dizeler doğrudur
- Boole değeri doğru

### Yanlış Değerleri (false)

- 0
- 0n
- null
- undefined
- NaN
- the boolean false
- '', "", ``, empty string

Bu doğru ve yanlış değerleri hatırlamakta fayda var. Daha sonraki bölümde, onları karar vermek için koşullarla kullanacağız.

## Tanımsız (Undefined)

Bir değişken bildirirsek ve bir değer atamazsak, değer tanımsız olacaktır. Buna ek olarak, eğer bir fonksiyon değer döndürmüyorsa tanımsız olacaktır.


```js
let firstName
console.log(firstName) //tanımlanmamış, çünkü henüz bir değer atanmamış.
```

## Boş (Null)

```js
let empty = null
console.log(empty) // -> null(boş) , değer yok anlamına gelir
```

## Operatörler

### Atama Operatörleri

JavaScript'te eşittir işareti bir atama operatörüdür. Değişken atamak için kullanılır.

```js
let firstName = 'Asabeneh'
let country = 'Finland'
```

Atama Operatörleri

![Atama Operatörleri](../../images/assignment_operators.png)

### Aritmetik Operatörleri

Aritmetik operatörler matematiksel operatörlerdir.

- Toplama(+): a + b
- Çıkarma(-): a - b
- Çarpma(*): a * b
- Bölme(/): a / b
- Kalan(Bölmedeki kalan)(%): a % b
- (Örneğe Bak) Üstel Sayı (**): a ** b

```js
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo // toplama
let diff = numOne - numTwo // çıkarma
let mult = numOne * numTwo // çarpma
let div = numOne / numTwo // bölme
let remainder = numOne % numTwo // kalanı bulma (bölmedeki kalan oluyor bu Biraz matematik :D )
let powerOf = numOne ** numTwo // buda üstel sayı anlamına geliyor Örnek: 4 Üssü 3 Kaçtır? Biraz matematik 2 :D 

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64   ---- Sonuçları console.log'a tek tek yazıp deneyin

```

```js
const PI = 3.14
let radius = 100          // metre cinsinden uzunluk

// Bir dairenin alanını hesaplayalım
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // m/s2 cinsinden ( metre saniye cinsi )
let mass = 72             // kilogram cinsinden

// Bir cismin ağırlığını hesaplayalım
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // oC cinsinden sıcaklık, suyun kaynama noktası
const bodyTemp = 37       // oC cinsinden vücut ısısı


// Dize enterpolasyonu kullanarak dizeyi sayılarla birleştirme
/*
 The boiling point of water is 100 oC. // Suyun kaynama noktası 100 oC'dir.
 Human body temperature is 37 oC.  // İnsan vücut sıcaklığı 37 oC'dir.
 The gravity of earth is 9.81 m/s2. // Dünyanın yerçekimi 9.81 m/s2'dir.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)
```

### Karşılaştırma Operatörleri

Programlamada değerleri karşılaştırırız, iki değeri karşılaştırmak için karşılaştırma operatörlerini kullanırız. Bir değerin diğer değere eşit veya büyük olup olmadığını kontrol ederiz.

![Karşılaştırma Operatörleri](../../images/comparison_operators.png)
**Örnek: Karşılaştırma Operatörleri**

```js
console.log(3 > 2)              // true, çünkü 3 2 den büyüktür
console.log(3 >= 2)             // true, çünkü 3 2 den büyüktür
console.log(3 < 2)              // false,  çünkü 3 2 den büyüktür
console.log(2 < 3)              // true, çünkü 2 3 den küçüktür
console.log(2 <= 3)             // true, çünkü 2 3 den küçüktür
console.log(3 == 2)             // false, çünkü 3 2 ye eşit değildir
console.log(3 != 2)             // true, çünkü 3 2 ye eşit değildir
console.log(3 == '3')           // true, sadece değeri karşılaştırıyor
console.log(3 === '3')          // false, hem değeri hemde veri türünü karşılaştırıyor o yüzden yanlış. Birisi int değeri birisi string değerinden ( Bu denklik operatörü )
console.log(3 !== '3')          // true, hem değeri hemde veri türünü karşılaştırıyor o yüzden doğru. (Bu denk değil operatörü)
console.log(3 != 3)             // false, değeri karşılaştırıyor
console.log(3 !== 3)            // false, hem değeri hem de veri türünü karşılaştırıyor
console.log(0 == false)         // true, eşdeğer
console.log(0 === false)        // false, tam olarak aynı değil
console.log(0 == '')            // true, eşdeğer
console.log(0 == ' ')           // true, eşdeğer
console.log(0 === '')           // false, tam olarak aynı değil
console.log(1 == true)          // true, eşdeğer
console.log(1 === true)         // false, tam olarak aynı değil
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, eşit değil
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
```

Yukarıdaki karşılaştırmaları biraz mantıkla anlamaya çalışın. Herhangi bir mantık olmadan hatırlamak zor olabilir.
JavaScript bir şekilde kablolu bir programlama dilidir. JavaScript kodu çalışır ve size bir sonuç verir, ancak bunda iyi değilseniz, istenen sonuç olmayabilir.

Temel kural olarak, eğer bir değer == ile doğru değilse, === ile eşit olmayacaktır. === kullanmak, == kullanmaktan daha güvenlidir. Aşağıdaki [bağlantı](https://dorey.github.io/JavaScript-Equality-Table/) veri türlerinin kapsamlı bir karşılaştırma listesine sahiptir.

### Mantıksal Operatörler

Aşağıdaki semboller ortak mantıksal operatörlerdir:
&&(ve işareti) , || (boru -veya-) ve !(olumsuzlama).
&& operatörü, yalnızca iki işlenen doğruysa doğru olur.
|| operatör, işlenenlerden herhangi birinin doğru olması durumunda gerçekleşir.
! operatör true - false ve false - true değerini olumsuzlar.

```js
// &&   ve işareti operatörü örneği ( ampersand olarak anlandırılıyor)

const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false

// || boru veya operatör, örnek

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false

//! olumsuzlama örnekleri

let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true
```

### Arttırma Operatörü 

JavaScript'te, bir değişkende saklanan bir değeri artırmak için artırma operatörünü kullanırız. Artış, artış öncesi veya sonrası olabilir. Her birini görelim:

1. Öncesi Artış

```js
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
```

1. Sonrası Artış

```js
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
```

Artış sonrası zamanın çoğunu kullanırız. En azından artım sonrası operatörünü nasıl kullanacağınızı hatırlamalısınız.


### Azaltma Operatörü

JavaScript'te, bir değişkende saklanan bir değeri azaltmak için azaltma operatörünü kullanırız. Azaltma, eksiltme öncesi veya sonrası olabilir. Her birini görelim:

1. Öncesi Azaltma

```js
let count = 0
console.log(--count) // -1
console.log(count)  // -1
```

2. Sonrası Azaltma

```js
let count = 0
console.log(count--) // 0
console.log(count)   // -1
```

### Koşul Operatörü (Ternary - Üçlü )

Üçlü operatör bir koşul yazmaya izin verir.
Koşullar yazmanın başka bir yolu da üçlü operatörleri kullanmaktır. Aşağıdaki örneklere bakın:

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

```sh
You need a rain coat.
No need for a rain coat.
```

```js
let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
```

```sh
5 is a positive number
-5 is a negative number
```

### Operatör Önceliği

Bu [bağlantıdan](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) operatör önceliği hakkında okumanızı tavsiye ederim.

## Window Metotları

### Window alert() metot

En başta gördüğünüz gibi alert() metodu, belirtilen bir mesaj ve bir Tamam butonu ile bir uyarı kutusu görüntüler. Yerleşik bir yöntemdir ve argüman alır.

```js
alert(message)
```

```js
alert('Welcome to 30DaysOfJavaScript')
```

Yıkıcı ve sinir bozucu olduğu için çok fazla uyarı kullanmayın, sadece test etmek için kullanın.

### Window prompt() metot

Pencere yöntemleri, tarayıcınızda giriş değerlerini almak için bir giriş içeren bir bilgi istemi kutusu görüntüler ve giriş verileri bir değişkende saklanabilir. prompt() yöntemi iki argüman alır. İkinci argüman isteğe bağlıdır.

```js
prompt('required text', 'optional text')
```

```js
let number = prompt('Enter number', 'number goes here')
console.log(number)
```

### Window confirm() metot

confirm() yöntemi, bir Tamam ve İptal düğmesiyle birlikte belirli bir mesaj içeren bir iletişim kutusu görüntüler.
Bir onay kutusu genellikle bir kullanıcıdan bir şeyi yürütmek için izin istemek için kullanılır. Pencere confirm() argüman olarak bir dize alır.
Tamam'a tıklamak doğru değeri verir, İptal düğmesine tıklamak yanlış değeri verir.

```js
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
```

Bunların hepsi window yöntemleri değil, window yöntemlerine derinlemesine girmek için ayrı bir bölümümüz olacak.

## Date Objesi

Zaman önemli bir şeydir. Belirli bir faaliyetin veya olayın zamanını bilmek isteriz. JavaScript'te geçerli saat ve tarih, JavaScript Date Objesi kullanılarak oluşturulur. Date objesini kullanarak oluşturduğumuz nesne, tarih ve saat ile çalışmak için birçok yöntem sunar. Bir tarih nesnesi değerlerinden tarih ve saat bilgisi almak için kullandığımız yöntemler, bilgiyi sağladığı için _get_ kelimesi ile başlamaktadır.
_getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()_

 

![Date time objesi](../../images/date_time_object.png)

### Bir Zaman Objesi Oluşturma

Bir kez zaman objesi oluşturduğumuzda zaman objesi, zaman hakkında bilgi sağlayacaktır. Bir zaman objesi oluşturalım.

```js
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
```

Bir time objesi oluşturduk ve tablo üzerinde bahsettiğimiz get yöntemlerini kullanarak objeden herhangi bir tarih saat bilgisine ulaşabiliyoruz.

### Tam Yılı Almak

Bir zaman objesinden tam yılı çıkaralım veya alalım.

```js
const now = new Date()
console.log(now.getFullYear()) // 2020
```

### Ayı Almak

Bir zaman objesinden ayı çıkaralım veya alalım.

```js
const now = new Date()
console.log(now.getMonth()) // Bunu yazdığınızda muhtemelen bulunduğunuz aydan bir önceki ayın sayısını alıcaktır çünkü aylar 0-11 arasında oluşuyor. Ocak 1 değil 0. ay oluyor aralıkta 11. ay oluyor.
```

### Tarihi Almak

Bir zaman objesinden ayın tarihini çıkaralım veya alalım.

```js
const now = new Date()
console.log(now.getDate()) // yukardaki örnekte bulunan açıklamaya ek olarak geçen ayın gün sayısını verecektir.
```

### Günü Almak

Bir zaman objesinden haftanın gününü çıkaralım veya alalım.

```js
const now = new Date()
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
```

### Saati Almak

Bir zaman objesinden saatleri çıkaralım veya alalım.

```js
const now = new Date()
console.log(now.getHours())  
```

### Dakikayı Almak

Bir zaman objesinden dakikaları çıkaralım veya alalım.

```js
const now = new Date()
console.log(now.getMinutes())  
```

### Saniyeyi Almak

Bir zaman objesinden saniyeleri çıkaralım veya alalım.

```js
const now = new Date()
console.log(now.getSeconds()) 
```

### Zamanı Almak

Bu metot 1 Ocak 1970'den itibaren milisaniye cinsinden süre verir. Unix zamanı olarak da bilinir. Unix zamanını iki şekilde alabiliriz:

1.  _getTime()_ Kullanımı

```js
const now = new Date() //
console.log(now.getTime()) // çıktı farklı olacaktır , 1 Ocak 1970 den kullandığınız zaman arasındaki süreyi milisaniye cinsinden verecektir.
```

1.  _Date.now()_ Kullanımı

```js
const allSeconds = Date.now() //
console.log(allSeconds) // çıktı farklı olacaktır , 1 Ocak 1970 den kullandığınız zaman arasındaki süreyi milisaniye cinsinden verecektir.

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true
```

Bu değerleri insan tarafından okunabilir bir zaman biçimine biçimlendirelim.

**Örnek:**

```js
const now = new Date()
const year = now.getFullYear() // yılı döndürür
const month = now.getMonth() + 1 // ayı döndürür (0 - 11) olduğu için +1 ekliyor
const date = now.getDate() // günü döndürür (1 - 31)
const hours = now.getHours() // sayıyı döndürür (0 - 23)
const minutes = now.getMinutes() // sayıyı döndürür (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // çıktı farklı olacaktır
```

🌕  Sınırsız bir enerjiniz var. 3. gün zorluklarını yeni tamamladınız ve mükemmelliğe giden yolda üç adım öndesiniz. Şimdi beyniniz ve kasınız için bazı egzersizler yapın.

## 💻 Gün 3: Egzersizleri

### Egzersiz: Seviye 1

1. firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturun ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.
2. '10' türünün 10'a eşit olup olmadığını kontrol edin
3. parseInt('9.8') 10'a eşit olup olmadığını kontrol edin
4. Boolean değeri, doğru veya yanlıştır.
   1. Doğruluk değeri sağlayan üç JavaScript ifadesi yazın.
   2. Yanlış değer sağlayan üç JavaScript ifadesi yazın.

5. console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
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
   12. Python ve jargonun uzunluğunu bulun ve yanlış bir karşılaştırma ifadesi yapın.

6. console.log() kullanmadan önce aşağıdaki ifadelerin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
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
   11. Hem dragon hem de python'da 'on' yoktur.

7. Aşağıdaki etkinlikleri yapmak için Date nesnesini kullanın.
   1. Bugün yıl nedir?
   2. Bugünün ayı rakam olarak nedir?
   3. Bugünün tarihi nedir?
   4. Bugün sayı olarak gün nedir?
   5. Şimdi saat kaç?
   6. Dakika kaç şimdi?
   7. 1 Ocak 1970'den bugüne kadar geçen saniye sayısını bulun.

### Egzersiz: Seviye 2

1. Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ```

1. Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın (çevre = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```

1. Komut istemini kullanarak uzunluk ve genişliği alın ve bir dikdörtgenin alanını hesaplayın (alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik))
1. Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14.
1. y = 2x -2'nin eğimini, x kesme noktasını ve y kesme noktasını hesaplayın
1. Eğim m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun
1. Yukarıdaki iki sorunun eğimini karşılaştırın.
1. y'nin değerini hesaplayın (y = x<sup>2</sup> + 6x + 9). Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun.
1. Kullanıcıdan saat ve saat başına oran girmesini isteyen bir komut dosyası yazın. Kişinin ücretini hesapla?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```

1. Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.
1. Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```

1. İki değişken _myAge_ ve _yourAge_ bildirin ve bunlara başlangıç değerleri ile myAge ve yourAge atayın.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```

1. İstemi kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.
    ```sh

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```

1. Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   ```

1. Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm

### Egzersiz: Seviye 3

1. Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun. Saat ve dakika her zaman iki basamaklı olmalıdır (7 saat 07 ve 5 dakika 05 olmalıdır)
   1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05

[<< Gün 2](../02_Day_Data_types/02_day_data_types.md) | [Gün 4 >>](../04_Day_Conditionals/04_day_conditionals.md)
