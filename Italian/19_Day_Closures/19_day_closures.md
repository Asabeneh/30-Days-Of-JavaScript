<div align="center">
  <h1> 30 Days Of JavaScript: Closures</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Autore:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Gennaio, 2020</small>
</sub>

</div>

[<< Day 18](../18_Day_Promises/18_day_promises.md) | [Day 20 >>](../20_Day_Writing_clean_codes/20_day_writing_clean_codes.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_19.png)
- [Day 19](#day-19)
	- [Closure](#closure)
	- [Esercizi](#exercises)
		- [Esercizi: Livello 1](#exercises-level-1)
		- [Esercizi: Livello 2](#exercises-level-2)
		- [Esercizi: Livello 3](#exercises-level-3)

# Day 19

## Closure

JavaScript consente di scrivere una funzione all'interno di una funzione esterna. Possiamo scrivere tutte le funzioni interne che vogliamo. Se la funzione interna accede alle variabili della funzione esterna, si parla di chiusura.

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

Vediamo altri esempi di funzioni interne

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

🌕 State facendo progressi. Mantenete lo slancio, continuate a lavorare bene.  Ora fate qualche esercizio per il cervello e per i muscoli.

## Esercizi

### Esercizi: Livello 1

1. Creare una chiusura che abbia una funzione interna

### Esercizi: Livello 2

1. Creare una chiusura con tre funzioni interne

### Esercizi: Livello 3

1. Creare una funzione esterna PersonAccount. Ha le variabili interne nome, cognome, reddito e spese. Ha le funzioni interne totalIncome, totalExpense, accountInfo, addIncome, addExpense e accountBalance. Entrate è un insieme di entrate e relativa descrizione e spese è un insieme di spese e relativa descrizione.

🎉 CONGRATULAZIONI ! 🎉

[<< Day 18](../18_Day_Promises/18_day_promises.md) | [Day 20 >>](../20_Day_Writing_clean_codes/20_day_writing_clean_codes.md)