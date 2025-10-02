<div align="center">
  <h1> 30 Günde JavaScript: Veri Türleri</h1>
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
</div>

[<< Gün 1](../readMe.md) | [Gün 3 >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)

![JavaScript'in 30 Günü](../../images/banners/day_1_2.png)

- [📔 Gün 2](#-gun-2)
	- [Veri Türleri](#veri-turleri)
		- [İlkel Veri Türleri](#ilkel-veri-türleri)
		- [İlkel Olmayan Veri Türleri](#ilkel-olmayan-veri-türleri)
	- [Sayılar](#sayilar)
		- [Sayı Veri Türlerini Bildirme](#sayı-veri-türleri-bildirme)
		- [Math Nesnesi](#math-nesnesi)
			- [Rastgele Sayı Üretme](#rastgele-sayı-üretme)
	- [Stringler](#stringler)
		- [String Birleştirme](#string-birleştirme)
			- [Toplama Operatörünü Kullanarak Birleştirme](#toplama-operatörü-kullanarak-birleştirme)
			- [Uzun Değişmez String'ler](#uzun-değişmez-stringler)
			- [String'lerdeki Kaçış Dizileri](#strringlerdeki-kaçış-dizileri)
			- [Şablon Değişmezleri](#şablon-değişmezleri)
		- [String Metotları](#string-metotları)
	- [Veri Türlerini Kontrol Etme ve Döküm](#veri-türlerini-kontrol-etme-ve-döküm)
		- [Veri Türlerini Kontrol Etme](#veri-türlerini-kontrol-etme)
		- [Veri Türünü Değiştirme (Döküm)](#veri-türünü-değiştirme-döküm)
			- [String to Int](#string-to-int)
			- [String to Float](#string-to-float)
			- [Float to Int](#float-to-int)
	- [💻 Gün 2: Egzersizler](#-gün-2-egzersizler)
		- [Egzersiz: Seviye 1](#egzersiz-seviye-1)
		- [Egzersiz: Seviye 2](#egzersiz-seviye-2)
		- [Egzersiz: Seviye 3](#egzersiz-seviye-3)

# 📔 Gün 2

( type çeviri olarak "tür - tip " olarak kullanılabilir. ) 
Bölüm çevirisini yaparken bazı kelimeleri çevirmedim zira bunları ingilizce halleriyle bilmenizde fayda var.
Örn:
 String vb..

## Veri Türleri

Bir Önceki bölümde, veri türlerinden biraz bahsettik. Veri veya değerlerin (veri) türleri vardır.
Veri türleri, verilerin özelliklerini tanımlar. Veri türleri ikiye ayrılabilir:

1. İlkel veri türleri
2. İlkel olmayan veri türleri (Nesne Referansları)

### İlkel Veri Türleri

JavaScript'teki ilkel veri türleri şunları içerir:

 1. Numbers - Tamsayılar - Ondalık sayılar
 2. Strings - Tek tırnak, çift tırnak veya ters tırnak içerisindeki tüm veriler..
 3. Booleans - true yada false (true = 1 false = 0 bu iki terimi bu şekilde öğrenin. Çevirilerine çok girmeyin kısaca var yada yok )
 4. Null - Boş değer yada değeri yok
 5. Undefined - Bir değer verilmeyen değişken. ( Örn:  let variables; )
 6. Symbol - Sembol yapıcısı tarafından oluşturulabilen benzersiz bir değer

JavaScript'teki ilkel olmayan veri türleri şunları içerir:

1. Objects ( Nesneler )
2. Arrays  ( Diziler )


Şimdi ilkel ve ilkel olmayan veri türlerinin tam olarak ne anlama geldiğini görelim.
*İlkel* veri türleri değişmez (değiştirilemez) veri türleridir. İlkel bir veri türü oluşturulduktan sonra onu değiştiremeyiz.

**Örnek:**

```js
let word = 'JavaScript'
```

*word* değişkeninde saklanan dizeyi değiştirmeye çalışırsak JavaScript bir hata vermelidir. Tek, çift veya ters tırnak arasındaki herhangi bir veri türü, dize veri türüdür.
  
```js
word[0] = 'Y'
```

Bu ifade *word* değişkeninde saklanan dizeyi değiştirmez. Yani,  string'lerin değiştirilemez ya da başka bir deyişle değişmez olduğunu söyleyebiliriz.
İlkel veri türleri değerlerine göre karşılaştırılır. Farklı veri değerlerini karşılaştıralım. Aşağıdaki örneğe bakın:

```js
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true ( Burada iki değişkende 3 e eşit olduğu için birbirine eşit olduğu sonucu çıkıyor )

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false  ( Burada iki değişkende farklı olduğu ve eşitlenemedikleri için false yani 0 değeri dönüyor )

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff)  //false  ( Yukarıdaki örnek gibi eeşit olmadıkları için false yani 0 değeri dönüyor )
```

### İlkel Olmayan Veri Türleri

*İlkel olmayan* veri türleri düzenlenebilir veya değiştirilebilir. İlkel olmayan veri türlerinin değerini, oluşturulduktan sonra değiştirebiliriz.
Bir dizi oluşturarak görelim. Dizi, köşeli parantez içindeki veri değerlerinin bir listesidir.Diziler aynı veya farklı veri türlerini içerebilir. Dizi değerleri dizin indekslerine ( dizinine ) göre referans alınır. JavaScript'te dizilerin indeksi sıfırdan başlar. Yani bir dizinin ilk elemanı sıfır indeksinde, ikinci elemanı bir indeksinde, üçüncü elemanı iki indeksinde bulunur.
( Orjinal anlatıma bağlı kalmak istiyorum lakin bazen anlamsız olabiliyor. Kısaca diziler okunurken 0-1-2-3 .... şeklinde indekslenir. Bir dizinin ilk elemanına erişmek istiyorsanız indeks numarasına 0 yazmalısınız. Aşağıdaki örneği incelerseniz bu karmaşıklığı çözmüş olacaksınız. )

```js
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3] ( nums değişkeninin ilk elemanı yada 0. indeksinin değerini 10 yapmış oldu )
```

Gördüğünüz gibi "DİZİ" ilkel olmayan bir veri türü değişkenidir. İlkel olmayan veri türleri değere göre karşılaştırılamaz. İlkel olmayan veri türleri aynı özelliklere ve değerlere sahip olsa bile, kesinlikle eşit değildirler.

```js
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false
```

Temel kural, ilkel olmayan veri türlerini karşılaştıramıyoruz. Dizileri (arrays), fonksiyonları (functions) veya nesneleri (objects) karşılaştırmayın.
İlkel olmayan değerler, değer yerine referansla karşılaştırıldıkları için referans türleri olarak adlandırılır. İki nesne, yalnızca aynı temel nesneye atıfta bulunuyorlarsa kesinlikle eşittir.

```js
let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true ( değişken oluştururken numbers'ın değerini nums'a eşitlediği için bunun sonucu true dönmektedir.)

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true ( yukarıdaki ile aynı )
```

İlkel veri türleri  ile ilkel olmayan veri türleri arasındaki farkı anlamakta zorluk çekiyorsan, bunu yaşayan tek kişi değilsin. Sakin ol ve bir sonraki bölüme geç ve bir süre sonra geri gelip burayı tekrar incele. Şimdi sayı türlerine göre veri türlerine başlayalım.

## Sayılar

Sayılar, tüm aritmetik işlemleri yapabilen tam sayılar ve ondalık değerlerdir. 
Hadi sayılar ile ilgili bazı örnekler görelim.

### Sayı Veri Türlerini Bildirme

```js
let age = 35
const gravity = 9.81  // yer çekimi kuvvet değeri bu değer haliyle değişmeyeceği için const olarak tanımlanıyor. Değişmez değişkenleri const ile tanımlarsınız. Bunu unutmayın.
let mass = 72         // kilogram cinsinden kütle
const PI = 3.14       // pi sayısı matematikte sabit bir sayı olduğu için const ile oluşturulmuş. ( küsüratı almamış )

// daha fazla örnek
const boilingPoint = 100 // derece cinsinden sıcaklık, suyun sabit olan kaynama noktası ( derecesi )
const bodyTemp = 37      // derece. İnsan vücudun sabit olan ortalama sıcaklığı

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
```

### Matematik Nesnesi - Objesi ( Math Object )

JavaScript'te Math Objesi, sayılar ile çalışmanız için birçok yöntem sağlar.

```js
const PI = Math.PI // Buraya kısa bir açıklama getirelim. Math objesi sayesinde PI sayısının değerini otomatik alıyoruz.

console.log(PI)                            // 3.141592653589793

// En yakın sayıya yuvarlama
// Eğer .5'in altındaysa aşağıya üstündeyse yukarıya yuvarlar. Örn: 3.14 ise 3 yapar 3.51 ise 4 yapar.

console.log(Math.round(PI))                // 3.14 olduğu için 3 e yuvarlama yapıyor

console.log(Math.round(9.81))              // Ondası 0.5 üstünde olduğu için 10 yapar

console.log(Math.floor(PI))                // floor aşağı yuvarlar Bu 3 olur

console.log(Math.ceil(PI))                 // ceil yukarı yuvarlar Bu 4 olur

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // En küçük sayıyı bulmaya yaradığı için sonuç -5 döner

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // En büyük sayıyı bulmaya yaradığı için sonuç 20 döner

const randNum = Math.random() // 0 ile 0.999999 arasında rastgele bir sayı üretir.
console.log(randNum)

// 0 ile 10 arasında rastgele bir sayı oluşturalım.

const num = Math.floor(Math.random () * 11) // 0 ile 10 arasında rastgele sayı oluşturur
console.log(num)

//Mutlak değer
console.log(Math.abs(-10))      // 10

//Kare kök
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Üs
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logaritma
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Sırasıyla 2 ve 10'un doğal logaritmasını döndürür
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometri
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
```

#### Rastgele Sayı Üretme

JavaScript'te Math nesnesi random() methodu 0 ile 0,999999999 arasında bir sayı üretir

```js
let randomNum = Math.random() // 0 ile 0.999999999 arasında bir sayı üretir
```

Şimdi 0 ile 10 arasında rastgele bir sayı üretmek için random() methodu'nu nasıl kullanabileceğimizi görelim:

```js
let randomNum = Math.random()         // 0 ile 0.999 arasında oluşturur
let numBtnZeroAndTen = randomNum * 11 

console.log(numBtnZeroAndTen)         // Sonuç : minimum  0 ve maksimum 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen) // yuvarlama yapıyor
console.log(randomNumRoundToFloor)    // Sonuç 0 ile  10 arasında çıkar
```

## Strings 

Dizeler **_tek_**, **_çift_** ve **_ters tırnak_** arasındaki metinlerdir.
Bir dize bildirmek için değişken adına, atama operatörüne, tek tırnak, çift tırnak veya ters tırnak içerisinde bir değere ihtiyacımız var. 
Bazı dize örnekleri görelim:

```js
let space = ' '           // boş alan string tek tırnaklı
let firstName = 'Asabeneh' // tek tırnaklı string
let lastName = 'Yetayeh' // tek tırnaklı string
let country = 'Finland' // tek tırnaklı string
let city = 'Helsinki' // tek tırnaklı string
let language = 'JavaScript' // tk tırnaklı string
let job = 'teacher' // tek tırnaklı string
let quote = "The saying,'Seeing is Believing' is not correct in 2020." // çift tırnaklı string
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.` // ters tırnaklı string (bu karakteri genellikle klavyenizdeki noktalı virgülü kullanarak yaparsınız. Benim klavyemde alt gr + noktalı virgül ve iki kere tıklanınca çıkıyor)
```

### String Birleştirme

İki veya daha fazla string'i birbirine bağlama işlemine birleştirme denir.
Yukarda bulunan string  örneklerini kullanarak:

```js
let fullName = firstName + space + lastName; // birleştirme, iki string'i bir araya getirme.
console.log(fullName);
```

```sh
Asabeneh Yetayeh 
```

String'leri farklı şekildede birleştirebiliriz.

#### Toplama Operatörünü Kullanarak Birleştirme

Ekleme operatörü kullanarak birleştirme eski bir yöntemdir. Bu birleştirme yöntemi sıkıcı ve hataya açıktır. Bu şekilde nasıl birleştirileceğini bilmek iyidir, ancak ES6 şablon dizelerini kullanmanızı şiddetle tavsiye ederim (daha sonra açıklanacaktır).

```js
// Farklı veri türlerini oluşturma
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 toplama operatörü ile değişkenleri birleştiriyor

console.log(personInfoOne)
```

```sh
Asabeneh Yetayeh. I am 250. I live in Finland 
```

#### Uzun Değişmez Stringler

Stringler tek bir karakter, paragraf yada sayfa olabilir. String uzunluğu çok büyükse tek bir satıra sığmayabilir. String'in bir sonraki satırda devam edeceğini belirtmek için her satırın sonunda ters eğik çizgi karakterini (\\) kullanabiliriz.  
**Örnek:**

```js
// burada kendinden bahseden bir paragraf yazmış. Bunuda çevirmeyelim :D
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)
```

#### String'lerdeki Kaçış Dizileri
JavaScript ve diğer programlama dillerinde \ (ters eğik çizgi ) ardından bazı karakterler kaçış dizisidir. En yaygın kaçış karakterlerini görelim: 

- \n: yeni satır
- \t: Tab, 8 boşluk anlamına gelir ( klavyedeki tab tuşunu temsil eder )
- \\\\: Ters eğik çizgi
- \\': Tek Tırnak (')
- \\": Çift Tırnak (")
  
```js
// kodları console kısmına yazarak denerseniz daha iyi anlarsınız.
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') //  Buradakı \n satır sonu anlamına gelir sonrası aşağı iner
console.log('Days\tTopics\tExercises') // Burada her kelimeden sonra bir tab (\t) tuşuna basılmış etkisi verir
console.log('Day 1\t3\t5') // \t bir başka örnek
console.log('Day 2\t3\t5') // \t bir başka örnek
console.log('Day 3\t3\t5') // \t bir başka örnek
console.log('Day 4\t3\t5') // \t bir başka örnek
console.log('This is a backslash  symbol (\\)') // Ters eğik çizgi yazmak için \\ kullanılıyor
console.log('In every programming language it starts with \"Hello, World!\"') // Hello World'ü çift tırnak içine almak için \" Hello World \" kullanılıyor.
console.log("In every programming language it starts with \'Hello, World!\'") // Hello World'ü tek tırnak içine almak için \' Hello World \' kullanılıyor.
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020') // Bu kısımdada alıntıları kullanmak için \ kullanımı gösterilmiş.
```

Konsol çıktıları :

```sh
I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020
```

#### Şablon Değişmezleri (Şablon String'ler)

Şablon string'leri oluşturmak için iki ters tırnak kullanıyoruz. Verileri bir şablon string'i  içine ifade olarak ekleme yapabiliriz. Verileri eklemek için, ifadeyi $ (dolar) işareti ile başlayan bir küme parantezinin "{}" içine alırız. Aşağıdaki sözdizimine bakın.

```js
//Syntax
`String literal text`
`String literal text ${expression}`
```

**Örnek : 1**

```js
console.log(`The sum of 2 and 3 is 5`)              // statik bir veri
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // verileri dinamik olarak ekleme
```

**Örnek :2**

```js

// Bu kısımda yazar + kullanarak ekleme yapmanın diğer yöntemi olan ES6 ekleme yöntemini gösteriyor. Bu daha stabil çalışıyor.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - dize ekleme yöntemi ( ES5 yukarda gösterilmişti )
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)
```

```sh
I am Asabeneh Yetayeh. I am 250. I live in Finland.
I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.
```

Bir string şablonu veya interpolasyon ( matematiksel bir terim ) yöntemi kullanarak, bir değer olabilecek ifadeler veya bazı işlemler ekleyebiliriz.(karşılaştırma, aritmetik işlemler, üçlü işlem)

```js
let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`) // a b den büyüktür yazıyor ve  interpolasyon metodu bunun yanlış olduğunu söylecek
```

```sh
2 is greater than 3: false
```

### String Metotları

JavaScript'teki her şey bir nesnedir. Bir string ilkel veri türüyse bunu değiştiremeyiz. String bir nesnenin, birçok string metodu vardır. Birçok string metodu bulunmaktadır, bunlar string'ler ile çalışmamıza yardımcı olurlar. ( stringlerin özelliklerini vb bulma metodları bunlar Örneğe bakın)

1. *length*: String içerisindeki karakterlerin sayısını belirtir. Boşluklar dahildir. 

**Örnek :**

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8
```

2. *String'deki karakterlere erişim*: String içerisinde bulunan her karaktere indeks numarasıyla erişebiliriz. Programlamada sayma 0 dan başlar. String'in ilk dizini 0, son dizini ise toplam uzunluğun -1'dir. ( Kısaca 10 karakter varsa sıralama 0-9 arasında yapılıyor. Resme bakın daha iyi anlayacaksınız.)

  ![Dizine göre dizine erişme](../../images/string_indexes.png)
  
'JavaScript' string'indeki  farklı karakterlere erişelim.

```js
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t
```

3. *toUpperCase()*: bu metot string verisini büyük harflere dönüştürür.

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Asabeneh'

console.log(firstName.toUpperCase())  // ASABENEH

let country = 'Finland'

console.log(country.toUpperCase())    // FINLAND
```

4. *toLowerCase()*: bu metot string verisini küçük harflere dönüştürür.

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'Asabeneh'

console.log(firstName.toLowerCase())  // asabeneh

let country = 'Finland'

console.log(country.toLowerCase())   // finland
```

5. *substr()*: İki arrgüman alır, başlangıç indeksi ve silenecek karakter sayısı.

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land
```

6. *substring()*: Başlangıç indeksi ve durma indeksi olmak üzere iki argüman almaktadır.

```js
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let country = 'Finland'

console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land
```

7. *split()*: Bu metot bir stringi belirtilen yerden bölmeye yarar. ( array oluşturuyor )

```js
let string = '30 Days Of JavaScript'

console.log(string.split())     // bu kısımda birşey belirtmediğin için 1 elementli array oluştu -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // bu kısımda boşluktan böl dediğimiz için 4 elementli array oluştu -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // - > ["Asabeneh"]
console.log(firstName.split(''))  // burada sadece tek tırnak kullandığımız için string'in içindeki tüm karakterleri array haline getirdi  ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // Dikkat edin sadece virgül ile ayırıyor. İknci elementin solunda boşluk oluşuyor.  ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) // Dikkat edin burayada. ', ' virgül ve boşluk bulunmakta bu yüzden elementleri virgülden ayırıp boşluklsuz arrray oluşturuyor.  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
```

8. *trim()*: String'in başında ve sonundaki boşlukları silmeye yarar.

```js
let string = '   30 Days Of JavaScript   '

console.log(string)
console.log(string.trim(' '))

let firstName = ' Asabeneh '

console.log(firstName)
console.log(firstName.trim())  // içinde tırnak kullanmasanız dahi boşlukları siler
```

```sh
   30 Days Of JavasCript   
30 Days Of JavasCript
  Asabeneh 
Asabeneh
```

9. *includes()*: Bu metot string içerisinde varlık kontrolü yapmaya yarar. Eğer bulursa true, bulamazsa false döner. ( birebir arama yapar )

```js
let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - birebir arama yapar!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false
```

10. *replace()*: Bu metot string içerisinde değiştirme yapmamızı sağlar. Eski ve Yeni olmak üzere iki argüman alır.

```js
string.replace(oldsubstring, newsubstring)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland
```

11. *charAt()*: Stringdeki indeksi belirttiğinizde o indeksin değerini yazdırır. 

```js
string.charAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3 (0. indeksin değerini döndürdü)

let lastIndex = string.length - 1 // bu kısımda yukardaki değişkenin karakter sayısını alıyor (21) sonra bu sonucu 1 ile çıkartıyor sonuç 20. aşağı bak
console.log(string.charAt(lastIndex)) // pogramlamada sayma 0 dan başladığı için -1 yapıyor yukarıda console.log da çıkan sonuç "t" olacaktır. Buda 20. karakterdir. İnanmazsan say =) ama sıfırdan başlamayı unutma
```

12. *charCodeAt()*: String'teki vermiş olduğunuz index değerinin ASCII numarasını döndürür.

```js
string.charCodeAt(index)
```

```js
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII 68

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII  116

```

13.  *indexOf()*: Bu metot belirtilen değerin indeksini verir. Değer bulunamazsa -1 sonucunu döndürür. ( Birebir arama yapar örneğe bakın )

```js
string.indexOf(substring)
```

```js
let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1
```

14.  *lastIndexOf()*: Bu metot belirtilen değerin son değer indeksini verir. Değer bulunamazsa -1 sonucunu döndürür. ( Birebir arama yapar örneğe bakın )


```js
//syntax
string.lastIndexOf(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38
```

15. *concat()*: Bu metot birleştirme işlemini sağlar, birden fazla değer alabilir

```js
string.concat(substring, substring, substring)
```

```js
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland
```

16. *startsWith*: String'in belirtilen değer ile başlayıp başlamadığını kontrol eder. true yada false döndürür.

```js
//syntax
string.startsWith(substring)
```

```js
let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false
console.log(string.startsWith('world'))  // false

let country = 'Finland'

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false
```

17. *endsWith*: String'in belirtilen değer ile bitip bitmediğini kontrol eder. true yada false döndürür.

```js
string.endsWith(substring)
```

```js
let string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in the world')) // true

let country = 'Finland'

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false
```

18. *search*: Argüman olarak bir alt dize alır ve ilk eşleşmenin dizinini döndürür. Arama değeri bir dize veya normal ifade kalıbı olabilir.

```js
string.search(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7 buradaki gi açıklaması bir alt örnekte var
```

19. *match*: Argüman olarak bir alt dize veya normal ifade kalıbı alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür. Normal bir ifade kalıbının nasıl göründüğünü görelim. / işareti ile başlar ve / işareti ile biter.

```js
let string = 'love'
let patternOne = /love/     // koşulsuz
let patternTwo = /love/gi   // g-bütün metinde ara, i - büyük küçük harf duyarsız
```

Match syntax

```js
// syntax
string.match(substring)
```

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
```

```sh
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
```

```js
let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]
```

Normal bir ifade kullanarak metinden sayıları çıkaralım. Burası normal ifade bölümü değil, panik yapmayın! Düzenli ifadeleri daha sonra ele alacağız.

```js
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// kaçış karakterli d, d'nin normal olmadığı anlamına gelir, d bunun yerine bir rakam gibi davranır
// + bir veya daha fazla basamaklı sayı anlamına gelir,
// ondan sonra g varsa global demektir, her yerde ara.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
```

20. *repeat()*: bağımsız değişken olarak bir sayı alır ve stringi sayı kadar döndürür.

```js
string.repeat(n)
```

```js
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
```

## Veri Türlerini Kontrol Etme ve Döküm

### Veri Türlerini Kontrol Etme

Belirli bir değişkenin veri türünü kontrol etmek için _typeof_ yöntemini kullanırız.

**Örnek:**

```js
// Farklı javascript veri türleri
// Farklı veri tipleri tanımlayalım

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number,  benim gerçek yaşım değil merak etme
let job                         // undefined, çünkü bir değer atanmamış

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object
```

### Veri Türünü Değiştirme (Döküm)

- Döküm: Bir veri tipini başka bir veri tipine dönüştürme. Kullandıklarımız _parseInt()_, _parseFloat()_, _Number()_, _+ sign_, _str()_
  Aritmetik işlemler yapmadan önce string sayıları önce integer yada float türüne dönüştürmeliyiz yoksa hata alırız.

#### String to Int


String bir numarayı sayıya dönüştürebiliriz. Alıntı içerisindeki herhangi bir sayı string numarasıdır. Bir string numarası örneği: '10', '5', vb.
Aşağıdaki metotları kullanarak string'i sayıya dönüştürebiliriz:

- parseInt()
- Number()
- Plus sign(+) // artı işareti demek

```js
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
```

```js
let num = '10'
let numInt = Number(num)

console.log(numInt) // 10
```

```js
let num = '10'
let numInt = +num

console.log(numInt) // 10
```

#### String to Float

String içindeki ondalık numarayı sayıya çevirebiliriz. Tırnak içerisindeki ondalık sayı string ondalık sayıdır. Bir string ondalık numarası örneği: '9.81', '3.14', '1.44' vb. 
Aşağıdaki metotları kullanarak ondalık stringi sayıya dönüştürebiliriz:

- parseFloat()
- Number()
- Plus sign(+)

```js
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = +num

console.log(numFloat) // 9.81
```

#### Float to Int

Ondalık sayıları tam sayılara çevirebiliriz. (Int) ( bu aşağıya yuvarlıyor )
Float'ı int'e dönüştürmek için aşağıdaki metodu kullanıyoruz:

- parseInt()
  
```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```

🌕  Harikasın. 2. gün zorluklarını yeni tamamladınız ve mükemmelliğe giden yolda iki adım öndesiniz. Şimdi beyniniz ve kasınız için bazı egzersizler yapın.

## 💻 Gün 2: Egzersizleri

### Exercise: Seviye 1

1. Challenge adında bir değişken tanımlayın ve  **'30 Days Of JavaScript'** başlangıç ​​değerine atayın.
2. __console.log()__ kullanarak tarayıcı konsolunda değişkeni yazdırın,
3. _console.log()_ kullanarak tarayıcı konsolunda dizenin __length__ değerini yazdırın,
4. __toUpperCase()__ yöntemini kullanarak tüm dize karakterlerini büyük harflerle değiştirin,
5. __toLowerCase()__ yöntemini kullanarak tüm dize karakterlerini küçük harflerle değiştirin,
6. __substr()__ veya __substring()__ yöntemini kullanarak string'in ilk kelimesini kesin-silin (dilimleyin)
7. *Days Of JavaScript* ifadesini *30 Days Of JavaScript*'ten ayırın.
8. __includes()__ yöntemini kullanarak string'in __Script__ kelimesini içerip içermediğini kontrol edin
9. __split()__ yöntemini kullanarak __string__ öğesini bir __array__'ye bölün
10. 30 Days Of JavaScript dizesini __split()__ yöntemini kullanarak boşlukta bölün
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dizeyi virgülden __split__ ve bir dizi olarak değiştirin.
12. __replace()__ yöntemini kullanarak 30 Days of JavaScript'i 30 Days of Python olarak değiştirin.
13. 'JavaScript'in 30 Günü' dizesinde dizin 15'teki karakter nedir? __charAt()__ yöntemini kullanın.
14. __charCodeAt()__ kullanan 'JavaScript'in 30 Günü' dizesindeki J karakter kodu nedir?
15. 30 Days of JavaScript'te __a__ öğesinin ilk oluşumunun konumunu belirlemek için __indexOf__ kullanın
16. 30 Days of JavaScript'te __a__ öğesinin son oluşumunun konumunu belirlemek için __lastIndexOf__ kullanın.
17. Aşağıdaki cümlede __çünkü__ kelimesinin ilk geçtiği yeri bulmak için __indexOf__ kullanın:
__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__
18. Aşağıdaki cümlede __çünkü__ kelimesinin son geçtiği yeri bulmak için __lastIndexOf__ kullanın:
__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__
19. Aşağıdaki cümlede __çünkü__ kelimesinin ilk geçtiği yeri bulmak için __search__ kullanın:
__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__
20. Bir dizgenin başındaki ve sonundaki boşlukları kaldırmak için __trim()__ kullanın. Örneğin '30 Days Of JavaScript'.
21. *30 Days Of JavaScript* dizesiyle __startsWith()__ yöntemini kullanın ve sonucu doğru yapın
22. *30 Days Of JavaScript* dizesiyle __endsWith()__ yöntemini kullanın ve sonucu doğru yapın
23. JavaScript'in 30 Günü'ndeki tüm __a__'leri bulmak için __match()__ yöntemini kullanın
24. __concat()__ kullanın ve '30 Days of' ve 'JavaScript'i tek bir dize olan '30 Days of JavaScript' ile birleştirin
25. 30 Gün JavaScript'i 2 kez yazdırmak için __repeat()__ yöntemini kullanın
 

### Egzersiz: Seviye 2

1. console.log() kullanarak aşağıdaki ifadeyi yazdırın:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```

2. console.log()'u kullanarak Rahibe Teresa'nın aşağıdaki alıntısını yazdırın:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```

3. '10' tipinin tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın.
4. parseFloat('9.8') 10'a tam olarak eşit değilse, 10'a eşit olup olmadığını kontrol edin.
5. Hem python hem de jargonda 'on' ifadesinin bulunup bulunmadığını kontrol edin
6. _Umarım bu kurs jargonla dolu değildir_. Cümlede _jargon_ olup olmadığını kontrol edin.
7. 0 ile 100 arasında rastgele bir sayı üretin.
8. 50 ile 100 arasında rastgele bir sayı üretin.
9. Dahil olmak üzere 0 ile 255 arasında rastgele bir sayı oluşturun.
10. Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin.
11. Aşağıdaki kalıbı yazdırmak için console.log() ve kaçış karakterlerini kullanın.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12. __substr__ kullanarak __çünkü çünkü__ ifadesini aşağıdaki cümleden ayırın:__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__

### Egzersiz: Seviye 3

1. 'Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.' Bu cümledeki __love__ kelimesini sayın.
2. Aşağıdaki cümledeki tüm __çünkü__ sayısını saymak için __match()__ kullanın:__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__
3. Aşağıdaki metni temizleyin ve en sık kullanılan kelimeyi bulun (ipucu, değiştirme ve normal ifadeleri kullanın).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```

4. Aşağıdaki metinden sayıları çıkararak kişinin yıllık toplam gelirini hesaplayın. 

'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.'

🎉 TEBRİKLER ! 🎉

[<< Gün 1](../readMe.md) | [Gün 3 >>](../03_Day_Booleans_operators_date/03_booleans_operators_date.md)
