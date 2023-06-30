/*********  örnek array **************/
 /*let domain = "kodluyoruz" 
let isActive = false
let number = 44.5
let items = [1,2,3,isActive,domain]

let emptyArray = []

console.log(items.length)

console.log(items[0])

console.log(items.length-1)

console.log(typeof(number))

console.log(Array.isArray(items)) */


/*let items = [10, 20, 30, 40,]
console.log("items- ilk hali :", items)

items.push(50)

console.log(items)

items.unshift(5)

console.log(items)

let lastItem = items.pop()

console.log(items)

console.log(lastItem)


let firstItem = items.shift()

console.log(items)

console.log(firstItem)

items[items.length-1] = 70

console.log(items) */

/* let items = [1,2,3,4,5]
let femaleUsers=["Ayşe", "Hulya", "Merve"]
let maleUsers= ["Ahmet","Hasan","Mehmet"]

items.unshift(femaleUsers)

console.log(items)

items.push(maleUsers)
console.log(items)

let newItems = items.splice(1,5)
console.log("new items:",newItems)
console.log("items:",items)

items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"))

// let copyItems = items.slice() // ARRAYİ KOPYALAAAR. //


let copyItems = [...items]

console.log(copyItems)

// let allUsers= [...femaleUsers, ... maleUsers] // bu yapıyla birden fazla aray yapısını birleştirebiliyon. //
let allUsers = femaleUsers.concat(maleUsers)

console.log(allUsers)

console.log(allUsers.toString()) //stringe çevirir
console.log(allUsers.join("---")) // böyle araya şekil şukul koymanı sağlar.

allUsers.splice(allUsers.length-1,0,"Melisa")
allUsers.splice(Math.floor(allUsers.length/2),0,"lorem")

console.log(allUsers) */

/* function helloWorld() {
    console.log("salam dunya")
}

function hello () {
    console.log("salam")
    helloWorld()
}

hello() */

//let firstName= "Lorem" // DIŞARIYA BAĞIMILILK

function greetings(firstName="") {
    console.log(`merhaba ${firstName}`)
    // console.log(`merhaba ${firstName ? firstName : ""}`) 
}

greetings("daşşo")


function greetings2(firstName, lastName) {
     let info = `Merhaba, ${firstName} ${lastName}`
        return info

}

let greetingsInfo = greetings2("Ad","Soyad")

console.log(greetingsInfo)

function domIdWriteInfo (id, info) {
    let domObj = document.querySelector("#info")
    domObj.innerHTML=info

}

let htmlInfo = `<span style="color:red">color red </span>`

domIdWriteInfo("info",htmlInfo)