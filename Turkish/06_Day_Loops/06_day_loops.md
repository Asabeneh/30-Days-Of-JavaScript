<div align="center">
  <h1> 30 Days Of JavaScript: Loops</h1>
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

[<< Gün 5](../05_Day_Arrays/05_day_arrays.md) | [Gün 7 >>](../07_Day_Functions/07_day_functions.md)

![Gün 5](../images/banners/day_1_6.png)

- [📔 Gün 6](#-day-6)
	- [Döngüler](#donguler)
		- [for Döngüsü](#for-dongusu)
		- [while Döngüsü](#while-dongusu)
		- [do while Döngüsü](#do-while-dongusu)
		- [for of Döngüsü](#for-of-dongusu)
		- [break](#break)x
		- [continue](#continue)
	- [💻 Egzersiz:Gün 6](#-egzersiz-gun-6)
		- [Egzersiz: Seviye 1](#egzersiz-seviye-1)
		- [Egzersiz: Seviye 2](#egzersiz-seviye-2)
		- [Egzersiz: Seviye 3](#egzersiz-seviye-3)

# 📔 Gün 6

## Döngüler

Hayatta yaptığımız aktivitelerin çoğu tekrarlarla doludur. console.log() kullanarak 0'dan 100'e çıktı almanızı istediğimi düşünün. Bu basit görevi uygulamak 2 ila 5 dakikanızı alabilir, bu tür sıkıcı ve tekrarlayan görevler döngü kullanılarak yapılabilir. Videoları izlemeyi tercih ederseniz, linke tıklayabilirsiniz (\*Yazarın önerisi). [Eğitim videosu](https://www.youtube.com/channel/UCM4xOopkYiPwJqyKsSqL9mw)

Programlama dillerinde tekrarlayan görevleri gerçekleştirmek için farklı türde döngüler kullanırız. Aşağıdaki örnekler, JavaScript ve diğer programlama dillerinde yaygın olarak kullanılan döngülerdir.

### for Döngüsü

```js
// For döngüsü yapısı
for(initialization, condition, increment/decrement){
  // code goes here
}
```

```js
for(let i = 0; i <= 5; i++){
  console.log(i)
}

// 0 1 2 3 4 5
```

```js
for(let i = 5; i >= 0; i--){
  console.log(i)
}

// 5 4 3 2 1 0
```

```js
for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}
```

```sh
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
```

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
```

Dizideki tüm öğeleri ekleme

```js
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // daha kısa yazmak istersek, sum += numbers[i]

}

console.log(sum)  // 15
```

Mevcut diziye dayalı yeni bir dizi oluşturma

```js
const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)

}

console.log(newArr)  // [1, 4, 9, 16, 25]
```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### while Döngüsü

```js
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5
```

### do while Döngüsü

```js
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// 0 1 2 3 4 5
```

### for of Döngüsü

Diziler için for of döngüsünü kullanırız. Dizideki her bir elemanın indeksiyle ilgilenmiyorsak eğer, bir diziyi yinelemenin en kolay yoludur.

```js
for (const element of arr) {
  // code goes here
}
```

```js

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

// dizideki tüm sayıları ekleyerek
let sum = 0
for (const num of numbers) {
  sum = sum + num  
	// daha kısa yazmak istersek, sum += num
  // bundan sonraki kodlarda daha kısa syntax kullanacağız(+=, -=, *=, /= etc)
}
console.log(sum) // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}

```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### break

Break bir döngüyü durdurmak için kullanılır.

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2
```

Yineleme işleminde 3 e eşit olduğunda döngüden çıkılır.

### continue

Belirli bir yineleme işlemini atlamak için kullanılır.

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5
```

🌕 Çok cesursun, buralara kadar geldin. Artık tekrarlayan ve sıkıcı görevleri döngü içerisinde yazma gücüne sahip oldunuz. 6. gün zorluklarını yeni tamamladınız ve mükemmelliğe giden yolda 6 adım öndesiniz. Şimdi beyniniz ve kasınız için bazı egzersizler yapın.

## 💻 Egzersiz:Gün 6

### Egzersiz: Seviye 1

  ```js
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  ```

1. for döngüsünü kullanarak 0'dan 10'a kadar yineleyin, while ve do while döngüsünü kullanarak aynısını yapın
2. for döngüsünü kullanarak 10'dan 0'a kadar yineleyin, while ve do while döngüsünü kullanarak aynısını yapın
3. for döngüsünü kullanarak 0'dan n'ye kadar yineleyin
4. console.log() kullanarak aşağıdaki kalıbı oluşturan bir döngü yazın:

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```

5. Aşağıdaki deseni yazdırmak için döngüyü kullanın:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```

6. Aşağıdaki deseni yazdırmak için döngüyü kullanın:

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```

7. 0'dan 100'e kadar yineleme yapmak ve yalnızca çift sayıları yazdırmak için for döngüsü kullanın
8. 0'dan 100'e kadar yineleme yapmak ve yalnızca tek sayıları yazdırmak için for döngüsü kullanın
9. 0'dan 100'e kadar yineleme yapmak ve yalnızca asal sayıları yazdırmak için for döngüsü kullanın
10. 0'dan 100'e kadar yineleme yapmak ve tüm sayıların toplamını yazdırmak için for döngüsünü kullanın.

    ```sh
    The sum of all numbers from 0 to 100 is 5050.
    ```

11. 0'dan 100'e kadar yineleme yapmak için for döngüsünü kullanın ve tüm çiftlerin toplamını ve tüm oranların toplamını yazdırın

    ```sh
    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
    ```

12. 0'dan 100'e kadar yineleme yapmak için for döngüsünü kullanın ve tüm çiftlerin toplamını ve tüm oranların toplamını yazdırın. Çiftlerin toplamını ve oranların toplamını dizi olarak yazdırın.

    ```sh
      [2550, 2500]
    ```

13. 5 rastgele sayı dizisi oluşturan küçük bir komut dosyası geliştirin
14. 5 rastgele sayı dizisi oluşturan küçük bir komut dosyası geliştirin ve sayılar benzersiz olmalıdır.
15. Altı karakterlik rastgele bir kimlik oluşturan küçük bir komut dosyası geliştirin

    ```sh
    5j2khz
    ```

### Egzersiz: Seviye 2

1. Herhangi bir sayıda rastgele karakter oluşturan küçük bir komut dosyası geliştirin

    ```sh
      fe3jo1gl124g
    ```

    ```sh
      xkqci4utda1lmbelpkm03rba
    ```

1. Rastgele bir onaltılık sayı üreten bir komut dosyası yazın.

    ```sh
    '#ee33df'
    ```

1. Rastgele bir RGB renk numarası üreten bir komut dosyası yazın.

    ```sh
    rgb(240,180,80)
    ```

1. Seviye 1 deki ülkeler dizisini kullanarak aşağıdaki yeni diziyi oluşturun.

    ```sh
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    ```

1. Seviye 1 deki ülkeler dizisini kullanarak, ülkeler uzunluğu için bir dizi oluşturun'.

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```

1. Aşağıdaki diziyi oluşturmak için country dizisini kullanın:

    ```sh
      [
      ['Albania', 'ALB', 7],
      ['Bolivia', 'BOL', 7],
      ['Canada', 'CAN', 6],
      ['Denmark', 'DEN', 7],
      ['Ethiopia', 'ETH', 8],
      ['Finland', 'FIN', 7],
      ['Germany', 'GER', 7],
      ['Hungary', 'HUN', 7],
      ['Ireland', 'IRE', 7],
      ['Iceland', 'ICE', 7],
      ['Japan', 'JAP', 5],
      ['Kenya', 'KEN', 5]
    ]
    ```

2. Yukarıdaki ülkeler dizisinde, 'land' kelimesini içeren bir ülke veya ülkeler olup olmadığını kontrol edin. 'land' içeren ülkeler varsa, onu dizi olarak yazdırın. 'land' kelimesini içeren bir ülke yoksa, 'All these countries are without land' yazdırın.

    ```sh
    ['Finland','Ireland', 'Iceland']
    ```

3. Yukarıdaki ülkeler dizisinde, 'ia' alt dizesiyle biten bir ülke veya ülkeler olup olmadığını kontrol edin. Sonu ile biten ülkeler varsa dizi olarak yazdırın. 'ai' kelimesini içeren bir ülke yoksa, 'These are countries ends without ia'' yazdırın.

    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```

4. Yukarıdaki ülkeler dizisini kullanarak en fazla karakter içeren ülkeyi bulun.

      ```sh
      Ethiopia
      ```

5. Yukarıdaki ülkeler dizisini kullanarak sadece 5 karakter içeren ülkeyi bulun.

    ```sh
    ['Japan', 'Kenya']
    ```

6. webTechs dizisindeki en uzun kelimeyi bulun
7. Aşağıdaki diziyi oluşturmak için webTechs dizisini kullanın

    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```

8. MongoDB, Express, React ve Node kullanılarak oluşturulan bir uygulamaya MERN yığın uygulaması denir. mernStack dizisini kullanarak MERN kısaltmasını oluşturun.
9. Bir for döngüsü veya for of döngüsü kullanarak ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] dizisini yineleyin.
10. Bu bir meyve dizisidir, ['banana', 'orange', 'mango', 'lemon'] ters bir yöntem kullanmadan döngü kullanarak sırayı tersine çeviriniz.
11. Dizinin tüm öğelerini aşağıda gösterildiği gibi yazdırın.

    ```js
      const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
    ````

    ```sh
      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB
    ```

### Egzersiz: Seviye 3

1. Ülkeler dizisini kopyala. (Mutasyondan kaçının)
1. Diziler değişkendir. Orijinali değiştirmeden dizinin bir kopyasını oluşturun. Kopyalanan diziyi sıralayın ve sortedCountries değişkeninde saklayın.
1. webTechs dizisini ve mernStack dizisini sıralayın.
1. [countries dizisindeki](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) en yüksek sayıda karakteri içeren ülkeyi bulun.
1. [countries dizisinden](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) 'land' kelimesini içeren tüm ülkeleri ayıklayın ve dizi olarak yazdırın.
1. [countries dizisinden](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) sadece dört karakter içeren tüm ülkeleri ayıklayın ve dizi olarak yazdırın.
1. [countries dizisinden](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) iki veya daha fazla kelime içeren tüm ülkeleri çıkartın ve dizi olarak yazdırın.
1. [countries dizisini](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) ters çevirin, her ülkeyi büyük harf yapın ve bir dizi olarak saklayın.

🎉 TEBRİKLER ! 🎉

[<< Gün 5](../05_Day_Arrays/05_day_arrays.md) | [Gün 7 >>](../07_Day_Functions/07_day_functions.md)
