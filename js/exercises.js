//******************************************EXERCISES(hof)******************************************//

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
/* const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
] */
/* 3) total = ""
 console.log(countries.forEach(country => total = total + " " + country), )

console.log(total) */


// 4) names.forEach(name => console.log(name))

// 5) numbers.forEach(number => console.log(number))

// 6) countries.map(country => console.log(country.toUpperCase()))

// 7) countries.map(country => console.log(country.length))

/* 8) const changedNumbers = numbers.map(number => number**2)
console.log(changedNumbers) */

// 9) names.map(name => console.log(name.toUpperCase()))
 
/* 10) const prices =  products.map(product => product.price)

console.log(prices) */

// 11) console.log(countries.filter(country =>  country.includes("land") ))

// 12) console.log(countries.filter(country => country.length===6))

// 13)  console.log(countries.filter(country => country.length>=6))

// 14)  console.log(countries.filter(country => country.includes("E")))7

// 15)  console.log(products.filter(product => product.price>0))

/* 16) function getStringLists(arrays) {
  if( arrays.every( array => typeof array ==="string"  ) ) {
    console.log(arrays)
  } else {console.log("sadece string")}
  return arrays
}

getStringLists(numbers) */

// 17 ) console.log(numbers.reduce((numbers, number) => numbers = number + numbers ))

/* 18) const sentence = countries.reduce((acc, country, index)=>{    /// BURA SIKINTILI
  if(index === countries.length-1) {return acc + "and " + country}
  else {return acc + country + ', '}
}, "Estonia, ") 

console.log(sentence) */

// 20) console.log(names.some(name => name>7 ))

// 21) console.log(countries.every(country => country.includes("land")))

// 23) console.log(countries.find(country=> country.length===6))

// 24) console.log(countries.findIndex(country => country.length===6))

// 25) console.log(countries.findIndex(country => country.includes("Norway")))
// 26) console.log(countries.findIndex(country=> country.includes("Russia")))

// EXC - 2 *****************


/* 1)  products.map(product => {
    if(product.product=="potato" || product.product=="tea") {
      product.price=0
    }
  })

  const total = products.reduce((acc, product)=> acc + product.price, 0)
  console.log(total) */

/* 3) function categorizeArray() {
  const commonPattern = ['land', 'ia', 'island', 'stan'];
  const categorizedArray = countries.filter(country => commonPattern.some(pattern => country.includes(pattern)))

  return categorizedArray
}


console.log(categorizeArray()) */

//******************************************EXERCISES(hof)******************************************//

//****************************************** SET-MAP ******************************************//

/* const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway'] */

// 1) const numbersSet = new Set()

/* for(let i = 0 ; i<=10; i++) {
  numbersSet.add(i)
}

console.log(numbersSet) */

/* const emptySet = new Set()

let array = ["apple", "banana", "orange", "apple", "kiwi"];

let stringArray = new Set(array)

console.log(stringArray)


let countries = ["USA", "Canada", "Germany", "France", "Japan"];

let countriesMap = new Map(countries.map(country => [country, country.length]))

console.log(countriesMap)

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a, ...b]

const A = new Set(a)
const B = new Set(b)
const C = new Set(c)

console.log(C)

console.log(a.filter(num => B.has(num))) */

//****************************************** SET-MAP ******************************************//

//****************************************** DESTRUCTION-SPREAD ******************************************//

/*const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for( [country, city] of countries) {
  console.log(country, city)
} */

/* const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(const [first, second, third] of fullStack) {
  console.log(first, second, third)
} */

/* const rectangle = {
  width: 20,
  height: 10,
  area: 200
}

let {width:w, height:h, area:a} = rectangle

console.log(w, h ,a ) */

/* const numbers = [10, 10]

function multiply(numbers) {
  return numbers[0] * numbers[1]
}

console.log(multiply(numbers)) */

/* const user = {
  name:"tayfun",
  surname:"erbilen",
  age:29,
  pets:{
    cats: ["Asil"],
    dogs: ["Monti"],
  },
  skills: ["php","css","javascript"],
  hobbies:["bibcycle","reading"]
}

 function showUserInfo({name, surname, age, pets:{dogs, cats},skills:[skill1, ...otherSkills], ...others}) {
  console.log(otherSkills)
  return `merhaba ben ${name} ${surname}. ${age} yaşındayım ve ${cats.length} kedim ve  ${dogs.length} köpeğim var. `
}


console.log(showUserInfo(user)) */

/* const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
} */

/* const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
] */

/* const [e, pi , gravity, humanBodyTemp, waterBoilingTemp] = constants

const [fin, est, sw, den, nor] = countries

const {width:w, height:h, area:a, perimeter:p} = rectangle

for(const {name, scores, skills, age} of users) {
  console.log(name, scores, skills, age) 
}


for(const{name, scores, skills, age} of users) {
  const lessTwo=[];
  if(skills.length<2) {
    console.log( lessTwo.push(name, scores, skills, age))
  }
console.log(lessTwo)
} */

/* countries2 = [
  {
    name:"Finland",
    capital:"Helsinki",
    population: 5.541 ,
    languages:["Finnish","Swedish"],
  },
  {
    name:"Estonia",
    capital:"Tallin",
    population:1.331,
    languages:"Estonian",
  },
  {
    name:"Sweden",
    capital:"Stockholm",
    population:10.42,
    languages:"Swedish",
  },
  {
    name:"Denmark",
    capital:"Kopenhag",
    population:5.857,
    languages:"Danish",
  },
  {
    name:"Holland",
    capital:"Amsterdam",
    population:17.53,
    languages:"Dutch",
    } ,

]

const [name, capital, population, languages, ] = countries2 */

// for (const {name, capital, population, languages} of countries2){
//  console.log(name, capital, population, languages)
//}

/* const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  
const [name, skills, scoreArray ] = student

console.log(scoreArray) */


/* const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(students) {
  convertedObject = students.map(([name, skills, points]) =>{
    return {
      name,
      skills:{...skills},
      points:[...points],
    }
  })
  return convertedObject

}

console.log(convertArrayToObject(students)) */

/* const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudent= {...student}

console.log(newStudent)

newStudent.skills.frontEnd.push({skill:"Bootstrap", level:8})
newStudent.skills.backEnd.push({skill:"Express",level:9})
newStudent.skills.dataBase.push({skill:"SQL",level:8})
newStudent.skills.dataScience.push("SQL")

console.log(newStudent) */

//****************************************** DESTRUCTION-SPREAD ******************************************/

/******************************************** REGULAR EXPRESSIONS ******************************************/

/* const str = "I love Javascript." // true false TEST

const regEx = /love/ig

console.log(regEx.test(str)) */


/* const str = "I love Javascript and I love css" // değerin kendisini döndürür. MATCH

console.log(str.match(/love/ig)) */

/* const str = 'I love JavaScript'

const pattern = /love/ig

console.log(str.search(pattern)) // indexini verir SEARCH */

/* const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

const replaced = txt.replace(/Python/ig, "Javascript") // replace : yer dğeiştirme.

console.log(replaced) */

 /* const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '

const pattern = /[Aa]pple/

console.log(txt.match(pattern)) */

/* const txt = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."

const regex = /\d+/ig

const income = txt.match(regex)

console.log(income)

console.log(income.reduce((acc, income) => acc + Number(income), 0)) //Number() sayıya çevirir */

 /* const positions = [-12, -4, -3, -1, 0, 4, 8]

firstNum = positions[0]
lastNum = positions[positions.length-1]

const filteredPositions = positions.filter(number => {return number <=firstNum || number>= lastNum})

console.log(filteredPositions) */



/****************************************** CONSOLE-METHODS **********************************************/

/* 1) const ülkeler = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']

]

console.table(ülkeler) */


/* 2) const ülkeler = {
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
} */


/* const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group("Names")
users.forEach(user => console.log(user.name))
console.groupEnd() */

// console.assert(10> 2 * 10 , "yanlış ")

// console.warn("BU BİR UYARIDIR")

// console.error("BU BİR HATADIR!")

/* console.time("speed-test")
new Array(10).fill().forEach((number, index) => console.log(number, index))
console.timeEnd("speed-test") */

/****************************************** CONSOLE-METHODS **********************************************/


/****************************************** CLASSES -SINIFLAR ************************************/

 
/* class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs

  }

  fullInfo() {
    return `this is ${this.name}. She is ${this.age} years old. Her color is ${this.color}. She has ${this.legs} legs.`
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, type) {
    super(name, age, color, legs)
    this.type = type
  }
  fullInfo() {
    return `this is ${this.name}. She is ${this.age} years old. Her color is ${this.color}. She has ${this.legs} legs. She is a ${this.type}`
  }
  sound() {
    return `cat meows`
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, type) {
    super(name, age, color, legs)
    this.type = type
  }
  fullInfo() {
    return `this is ${this.name}. She is ${this.age} years old. Her color is ${this.color}. She has ${this.legs} legs. She is a ${this.type}`
  }

  sound() {
    return `dog barks`
  }
}

const dogs = new Dog("zirzop",4,"white",4,"dog")
const cats = new Cat("panda",3,"black-white",4,"cat")

console.log(dogs.name)
console.log(dogs.sound())
console.log(dogs.fullInfo())

console.log(cats.fullInfo()) */

/* ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const sorted = ages.sort()
const median =  Math.floor(sorted.length/2) 
console.log(sorted[median])

console.log(ages.length)

 class Statistics {
  constructor(array) {
    this.array = array

  }

  count() {
    return this.array.length
  }

  sum() {
    return this.array.reduce((acc, num) => acc + num )
  }

  min() {
    return this.array.sort()[0]
  }

   max() {
     const sorted =  this.array.sort()
      const lastIndex = sorted.length - 1
      return sorted[lastIndex]
  }

   

  range() {
    return this.max() - this.min()
    
  }

  mean() {
      const sum = this.array.reduce((acc, num) => acc + num , 0 )
      const mean = sum / this.array.length
      const result = Math.round(mean)
      return result
  }

  median() {
    const sorted = this.array.sort()
    const median = Math.floor(sorted.length/2)
    return sorted[median]
  }

  mode() {
    const frequency = {}
    this.array.forEach(value => {
      if(frequency[value]) {
        frequency[value]++
      } else {frequency[value] = 1}
    })

    let mode;
    let maxFrequency = 0;
    for (const value in frequency) {
      if (frequency[value] > maxFrequency) {
        mode = value
        maxFrequency = frequency[value];
      }
    }
    return mode
 }
 
  } 





const statistics = new Statistics(ages)

console.log(statistics.mode()) */



/* class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
      this.firstName = firstName
      this.lastName = lastName
      this.incomes = []
      this.expenses = []
  }

  totalIncome() {
    return this.incomes.reduce((acc, value) => acc + value)
  }

  totalExpense() {
    return this.expenses.reduce((acc, value) => acc + value)
  }

  accountInfo() {
    return `Account information for ${this.firstName} ${this.lastName}: Total Income : ${this.totalIncome()}. Total expense : ${this.totalExpense()}. Account Balance: ${this.accountBalance()}`

  }

  addIncome(description, amount) {
     this.incomes.push( amount);
  }

  addExpenses(description, amount) {

     this.expenses.push(amount)
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense()
  }

}


const person = new PersonAccount("John","Doe")

person.addIncome("Salary", 5000)
person.addIncome("Bonus", 1000)
person.addExpenses("Rent", 200)
person.addExpenses("Groceries", 500)

console.log(person.accountInfo()) */


/****************************************** CLASSES -SINIFLAR ************************************/

/******************************************* JSON ******************************************/

/* const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = {
    Alex: {
        email: "alex@alex.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: "asab@asab.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: "daniel@daniel.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: "daniel@alex.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: "john@john.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: "thomas@thomas.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: "paul@paul.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}


console.log(JSON.stringify(skills))
console.log(JSON.stringify(age))
console.log(JSON.stringify(isMarried))

console.log(JSON.stringify(student))


console.log(JSON.stringify(student, ["firstName", "lastName", "skills"], 4))

// const normal =  JSON.parse(txt) //oke

// console.log(normal)

let maxPoint = 0 
let maxUser = []

for(user in txt) {
    const skillsCount = txt[user].skills.length;
    if(skillsCount>maxPoint) {
      maxPoint = skillsCount
      maxUser = user
    }
  
}

console.log(maxUser) */



/******************************************* JSON ******************************************/

/************************************ Promise, Fetch, Async/Await ***********************************************/
 /* const countriesAPI = 'https://restcountries.com/v2/all'


const fetchData = async () => {
  try{
    const res = await fetch(countriesAPI)
    const countries = await res.json()
    console.log(countries)
   countries.forEach( country => {
    country.name, country.capital, country.population, country.languages, country.area;

    console.log("Country:", country.name)
    console.log("Capital:",country.capital)
    console.log("Population:",country.population)
    console.log("Languages:",country.languages.map(language => language.name))
    console.log("Area:",country.area)
    console.log("--------------------")
    
   })

  } catch(err) {
    console.log(err)
  }

}

fetchData() */

  /* const catsAPI = 'https://api.thecatapi.com/v1/breeds'

  const fetchData= async() => {
  try{
    const res = await fetch(catsAPI)
    const data = await res.json()

    const totalWeight = data.reduce((acc, cat) => {
      if(cat.weight.metric) {
        const weight = parseFloat(cat.weight.metric.split("-")[0])
        return acc + weight
      }
      return acc   
    }, 0)

    const catCount = data.reduce((acc,cat) => {
      if(cat.weight.metric) {
        return acc +1
      }
      return acc
    },0)

    const average = totalWeight / catCount
    console.log(`Average cat weights ${average.toFixed(2)} kilograms`)
  } catch(err) {
    console.log(err)
  }


}

  fetchData() */

  /* const countriesAPI = 'https://restcountries.com/v2/all';

const fetchData = async () => {
  try {
    const res = await fetch(countriesAPI)
    const data = await res.json()

    const area = data.filter(country => country.area !== null)
    const sortedCountries = area.sort((a, b) => a - b).slice(0,10)
    const largestNames = sortedCountries.map(country => country.name)

    console.log(sortedCountries)
    



  } catch(err) {
    console.log(err)
  }
}

fetchData() */
  
 // const countriesAPI = 'https://restcountries.com/v2/all';
/*
const fetchData = async () => {
  try {
    const res = await fetch(countriesAPI)
    const data = await res.json()

    const sortedCountries = data.sort((a,b) => b.area - a.area)
    const firstTen = sortedCountries.splice(0,10)

    firstTen.forEach(country => {
      const name = country.name
      const area = country.area

      console.log(`Name: ${name}, Area: ${area}km2`)
    })


  } catch(err) {
    console.log(err)
  }
}

fetchData() */

/* const fetchLanguages = async () => {
  try {
    const res = await fetch(countriesAPI)
    const data = await  res.json()

    const languages = data.map(country => country.languages)

    console.log(languages)

    let total = 0

    languages.forEach(country => {
      total = country.length + total
    })

    console.log(`There are ${total} languages in world.`)
   

    
  } catch(err) {
    console.log(err)
  }
}

fetchLanguages() */


/* const countOfficialLanguages = async () => {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();

    let totalLanguages = [];

    data.forEach((country) => {
      if (country.languages && country.languages.length > 0) {
        country.languages.forEach((language) => {
          if (!totalLanguages.includes(language.name)) {
            totalLanguages.push(language.name);
          }
        });
      }
    });

    console.log(`Total number of official languages in the world: ${totalLanguages.length}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

countOfficialLanguages(); */







/************************************ Promise, Fetch, Async/Await ***********************************************/

/***************************************** CLOSURES ****************************************/



/* function outerFunction() {
  let count = 0

  function innerFunc() {
    count ++
    return count
  }

  return innerFunc


}

const numfuc = outerFunction()

console.log(numfuc())
console.log(numfuc())
console.log(numfuc()) */




  /* function personAccount(firstName, lastName) {

  let incomes = []
  let expenses = []



function totalIncome() {
  const income = incomes.reduce((acc, income) => acc + income)
  return income

}

function totalExpense() {
 const expense =   expenses.reduce((acc, expense) => acc + expense)
 return expense
}

function accountInfo() {
console.log("Account information:")
console.log(`Name: ${firstName}  ${lastName}`)
console.log(`Total Income: ${totalIncome()}`)
console.log(`Total expenses: ${totalExpense()}`)
console.log(`Account Balance : ${accountBalance()}`)
}

function addIncome(description, amount) {
  incomes.push(amount)
}

function addExpense(description, amount) {
  expenses.push(amount)
}

function accountBalance() {
 return totalIncome() - totalExpense()
}

return {
  accountInfo : accountInfo,
  addIncome: addIncome,
  addExpense : addExpense,
  
}

}


const myAccount = personAccount("john","doe") 

myAccount.addIncome("Salary",Number(5000))
myAccount.addIncome("Freelancer",1000)
myAccount.addExpense("Rent",1000)
myAccount.addExpense("Utilities", 900)
myAccount.accountInfo() */



/***************************************** CLOSURES ****************************************/



/*************************************** DOCUMENT OBJECT MODEL(DOM) *****************************************/

//örnek dom un içinde

/*************************************** DOCUMENT OBJECT MODEL(DOM) *****************************************/


/************************************* EVENT LISTENERS ************************************/

const button = document.querySelector("button")
const search = document.getElementById("search")
const image = document.getElementById("image")
const seachButton = document.getElementById("search-button")

/* button.addEventListener("click", function(e) {
  console.log("e gives the listener object", e)
  console.log("e.target gives the selected element", e.target)
  console.log("e.target.textContent gives content of selected element",
    e.target.textContent)
}) */

/* const clickMe = () => {
  alert("we can attach event on HTML element")
} */

/* button.addEventListener("dblclick", e => {
  console.log("e gives the listener object", e)
  console.log("e.target gives the selected element", e.target)
  console.log("e.target.textContent gives content of selected element",
    e.target.textContent)
}) */

 /* button.addEventListener("keyup", e => { //mouseover
  console.log("maus üstüne")
}) 

search.addEventListener("keypress", e => {
  console.log("typing")
}) */

/* image.addEventListener("load", e => {
  console.log("görsel yüklendi")
})
image.addEventListener("error", e => {
  console.log("görsel yüklenemedi")
}) */

/* search.addEventListener("keydown", e => {
  console.log(e.target.textContent)
}) */


/************************************* EVENT LISTENERS ************************************/










































