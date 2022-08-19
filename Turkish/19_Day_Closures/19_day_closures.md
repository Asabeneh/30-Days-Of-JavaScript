<div align="center">
  <h1> 30 Days Of JavaScript: Closures</h1>
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

[<< Gün 18](../18_Day_Promises/18_day_promises.md) | [Gün 20 >>](../20_Day_Writing_clean_codes/20_Day_writing_clean_codes.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_19.png)
- [Gün 19](#gün-19)
	- [Closure](#closure)
	- [Egzersizler](#egzersizler)
		- [Egzersiz: Seviye 1](#egzersiz-seviye-1)
		- [Egzersiz: Seviye 2](#egzersiz-seviye-2)
		- [Egzersiz: Seviye 3](#egzersiz-seviye-3)

# Gün 19

## Closure

JavaScript, bir outer(dış) fonksiyonu içine yazma fonksiyonu izni verir. İstediğimiz kadar inner(iç) fonksiyon yazabiliriz. Inner fonksiyon, outer fonksiyonun değişkenlerine erişiyorsa, buna closure(kapatma) denir.

```js
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
```

```sh
1
2
3
```

Inner(iç) fonksiyonlara daha fazla örnek vermek gerekirse

```js
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
```

```sh
1
0
```

🌕 İlerleme kaydediyorsun. Hızınızı koruyun, iyi işlere devam edin. Şimdi beyniniz ve kasınız için bazı egzersizler yapın.

## Egzersizler

### Egzersiz: Seviye 1

1. Bir inner(iç) fonksiyonu olan closure yapısı oluşturun.

### Egzersiz: Seviye 2

1. Üç tane inner(iç) fonksiyonu olan closure yapısı oluşturun.

### Egzersiz: Seviye 3

1. Bir personAccount outer(dış) fonksiyonu oluşturun. Ad, soyad, gelir ve gider inner(iç) değişkenleridir. totalIncome, totalExpense, accountInfo,addIncome, addExpense ve accountBalance inner fonksiyonlara sahiptir.

🎉 TEBRİKLER ! 🎉

[<< Gün 18](../18_Day_Promises/18_day_promises.md) | [Gün 20 >>](../20_Day_Writing_clean_codes/20_Day_writing_clean_codes.md)