console.log(countries)
//alert('Open the console and check if the countries has been loaded')

//Exercises 
//Definir una fucion que ordene un arreglo de strings basandose el el ultimo caracter de cada elemento
function sortStringByLastCaracter (array) {
    if (!Array.isArray(array)){
        throw TypeError ('Must be an array')
    }

    if (!array.every(e => typeof e === 'string'))
       throw TypeError('All elements in array must be a string')

       return array.sort((x, y) => x.charCodeAt(x.length - 1) - y.charCodeAt(y.length - 1))
}

let lenguajes = ['Albania', 'Pyton', 'JavaScript' , 'C#', 'PHP', 'Java', 'Html']

try {
    resultado = sortStringByLastCaracter(lenguajes)
    console.log(resultado)
} catch (error) {
    console.log(`Error: ${error.message}`)
}

//definir una funcion para implementar un algoritmo merge-sort
Array.prototype.mergeSort = function () {
    if(this.length <= 1){
        return this
    }
    let mitad = parseInt(this.length / 2);
    let izq = this.slice(0, mitad).mergeSort()
    let der = this.slice(mitad, this.length).mergeSort()
    let merge = function(izq, der) {
        let datos = [];

        while(izq.length > 0 && der.length > 0){
            datos.push(izq[0] <= der[0]? izq.shift() : der.shift())
        }
        return datos.concat(izq, der)
    }

    return merge(izq, der)
} 
let numeros = [11,7,19,3,2,5,29,23]
console.log(numeros.mergeSort())

// Definir una funcion para encontrar los elementos duplicados en un arreglo
function findDuplicatesData (data) {
    if(!Array.isArray(data)) {
        throw TypeError('Argument must be an array');
    }

    if (!data.length){
        return null
    }

    let duplicate = [];
    for (let i = 0; i < data.length; ++i) {
        
        let item = data[i];

        if(!duplicate.find(d => d == item) && data.slice(i + 1).find(d => d == item)){
           duplicate.push(item)
        }
    }
    return duplicate
}



let arr = [2,2,3,3,'hola', 'hola']

try {
    console.log(findDuplicatesData(arr))
} catch (error) {
    console.log(`Error: ${error.message}`)
}
