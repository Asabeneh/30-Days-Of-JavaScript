console.log(countries)
//alert('Open the console and check if the countries has been loaded'

//let aprobado = estudiantes.filter(estudiante => estudiante.nota >= 7.0);



const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
    }, 2000)
  }
  
  /*const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }*/
  
  
  //doSomething(callback)

  const callback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
  }

  const dopromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.includes('HTML')) {
            resolve(skills)
        } else {
            reject('Something wrong happened')
        }
        
    }, 2000)
  })
   console.log(dopromise)
dopromise.then(result => {
    console.log(result)
}).catch(err => console.log(err))

const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

  const square = async function (n) {
    return n * n
  }
  
  console.log(square(2))


  
  //Exercises
  /*const countriesAPI = 'https://restcountries.com/v2/all'
  

  //Exercises: Level 1

  //1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

  let countriesFetch = fetch(countriesAPI).then(response =>        
       response.json().then( data => { 
       
        for (const {name, capital, languages, population, area} of data){
         
            console.log(name, `Population:`, population, languages, area)
        }
    
    })).catch(error => console.error(error)) */
    
  //Exercises: Level 2

  //1. Print out all the cat names in to catNames variable.
  const catsAPI = 'https://api.thecatapi.com/v1/breeds'
  
  let catNames = []
  const fetchData = async () => {
    try {
      const response = await fetch(catsAPI)
      const cats = await response.json()
      for (const {name} of cats){    
        catNames.push(name)
    }
     console.log(catNames)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()


  //Exercises: Level 3

  //1. Read the cats api and find the average weight of cat in metric unit.
  let average = []
  const fetchCats = async () => {
    try {
      const response = await fetch(catsAPI)
      const cats = await response.json()
      for (const {weight} of cats){    
        console.log(weight.metric.slice(0,2))
        average.push(weight.metric.slice(0,2))
    }
     console.log(catNames)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchCats()
  console.log(average)

  //2.Read the countries api and find out the 10 largest countries

  //3.Read the countries api and count total number of languages in the world used as officials.
