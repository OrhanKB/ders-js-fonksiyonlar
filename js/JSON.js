/************************************* JSON(JAVASCRIPT OBJECT NOTATION) ***********************************/
//hem depolama hem de iletme için veri formatı(faarklı dildeki programların ortak dili konuşması gibi bişey)
// object ile aynı yapıya sahip. tek farkı keylerin tırnak içinde olması ve string olması
// JSON lar "---.json" dosyasının içine yazılır !!

[
    {
        "name":"Orhan",
        "surname":"Kurtboğan",
        "skills":[]
    },
    {   
        "name":"Mustafa",
        "surname":"Zirzop"
    },
    {
        "name":"Ahmet",
        "surname":"Erbilen"
    }
] // geçerli bir json

// JSON u javascript objesine çevirmek: JSON.parse() ve stringify()

let sampleJSON = `[
    {
        "name":"Orhan",
        "surname":"Kurtboğan",
        "skills":[]
    },
    {   
        "name":"Mustafa",
        "surname":"Zirzop"
    },
    {
        "name":"Ahmet",
        "surname":"Erbilen"
    }
]` // backend den gelir

console.log(sampleJSON) // bunu javascript objesine çevirmek için parse() metodu kullanılır

let users = JSON.parse(sampleJSON, (key, value) => {
    return key === "name" ? value.toUpperCase() : value // Using a reviver function with JSON.parse()
} )

console.log(typeof users)

let categories = [
    {
        name:"css",
        count:5
    },
    {
        name:"javascript",
        count:16
    }
]

console.log(categories)

console.log(users)

// javascript objectini json a dönüştürmek için : stringify()

// let categoriesJSON = JSON.stringify(categories)
    
// console.log(categoriesJSON) // json a koyarsan hata vermez

let categoriesJSON = JSON.stringify(categories, ["count","name"], 4)

console.log(categoriesJSON)

console.log(categories)