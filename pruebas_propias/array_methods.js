
//filtar con ciclo for del array los numeros menores que 100
let nums= [1, 120, 23, 45, 102]
       function filtrarMenoresQue100(numeros){
            let menoresQue100 = [];
            for(let i = 0; i< numeros.length; i++){
                 if(numeros[i] < 100){
                     menoresQue100.push(numeros[i])
                 }
            }
            return menoresQue100;
          }
       
     console.log(filtrarMenoresQue100(nums).slice(0,2))

     function createGodzilla(color, weight = 200, sound, powers){

     }

    // desestructuracion

     createGodzilla('blue', undefined, ['lighting'])

    let godzillaParams = {
            color: 'blue',
            weight: 200,
            sound: 'GROOARR',
            powers: ['lighting', 'nuclear bomb']
        }    

        createGodzilla(godzillaParams)

        const adversario = 'Lobezno'

        const lokiDisfraces = {
            'iron Man': 'Magneto',
            Thor: () => 'Odin',
            Hulk: 'Thanos',
            Lobezno: 'Magneto'
        }

        const lokiDefaultDisfraz = 'Loki'

        const loki = lokiDisfraces[adversario] || lokiDefaultDisfraz
        console.log(loki)


        let numeros = [1,2,3,4,]

        numeros.reduce((a,b)=> a + b)
        console.log(numeros) //10

    //filter items which have more than one 'o'
        for (let i = 0; i < itCompanies.length; i++) {
            let myStr = itCompanies[i];
            let count = 0;
            let position = myStr.indexOf("o");
            while ( position != -1 ) {
           count++;
           position = myStr.indexOf("o", position + 1);
            }
            if (count >= 2) {
                console.log(itCompanies[i]);
            }
        }

//filter items 
        let lenguaje =['javascript', 'php', 'pyton', 'java', 'C++' ]
        console.log(lenguaje.indexOf('c'))
        let arr = []
let filtrado = lenguaje.filter(function(element) {

     if( element.indexOf('p') != -1 ){
     arr.push(element)
     };
} )

// filter whit reduce

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

const filteredArray = (arr, elem) => arr.reduce((acc, cur) => (cur.includes(elem) && acc.push(cur),acc), []);

console.log(filteredArray(itCompanies, 'i' ))
