/*********************** Destructuring, Spread, Rest *****************************/
//dizilerde ve objectlerde kullanılır

//destruction array : akıl karışmaması için arrayı isimlendirip dışarıya aktarır.

/* const numbers = [10, 12, 14]

const [number1, number2] = numbers // number1 ilk değer, number2 ikinci değer.

console.log(number1)
console.log(number2)

console.log(numbers) */


const stack = [
    ["HTML","CSS","JAVASCRIPT"],
    ["PHP","MYSQL","NODEJS"]
]

const [frontend, backend] = stack

console.log(frontend[0])

// bir değeri es geçmek istersek "," kullanırız.

 // const [,,number3] = stack

 //eğer arrayın içindeki değerlerden biri undefined ise:
 const names = [undefined, "Brook","David"]

 const [num1 ="Mehmet", num2, num3] = names

 console.log(names)

 // rest operatörü: ilk bikaç tanesini isimlendirdikten sonra gerisini yazdırır

 const isimler = ["Tayfun","Ahmet","Mehmet","Zerafet","Gökhan","Orhan","Hakan"]

 const [myName, myWifeName, myFriendName, ...otherNames] = isimler

console.log(otherNames)

// destruction iteration:

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo'], ["Türkiye", "Ankara"]]

for(const [country, capital] of countries) {// döngülerde de bunu kullabliriz
    console.log(`Ülke: ${country} - Başkent: ${capital}`)
}

// OBJECT DESTRUCT: key neyse onun aynısnı yazmak gerek

/* const user = {
    name:"Tayfun",
    surname:"Erbilen",
    age:29,
    pets:{
        cats:["Asil"],
        dogs:["Monti"]
    },
    skills:["PHP","CSS","JAVASCRIPT"],
    hobbies:["bicyle","reading"],
} */

const {surname} = user

console.log(surname)

// yeniden isimlendirme :

const{surname: soyad} = user

console.log(soyad)

const {adana="ADANA"} = user // eğer istenilen değer yoksa böyle yazılabilir


//function multiply(num1, num2) {
//    return num1 * num2
//}
//
//
//console.log(multiply(10, 5))

function multiply([num1, num2]) { // array için gerekli
    return num1 * num2
}

const numaralar = [10, 10]

console.log(multiply(numaralar))


const {pets:{cats, dogs}} =user

function showUserInfo({name, surname, age, pets:{cats, dogs}, skills:[skill1, ...otherSkills], ...others} ) { // object hali
    console.log("othersills:", skill1)
    return  `Merhaba ben ${name} ${surname}. ${age} yaşındayım ve ${cats.length}kedim ve ${dogs.length} köpeğim var`
}

console.log(showUserInfo(user))

// spread or rest oprtator:

//spread operatör kopyalama:

const numbers = [1, 3, 5]

// const numbers2  = numbers // orijinali değiştirir bu yüzden:
    

    const numbers2= [...numbers]
    numbers2.push(10)
    console.log(numbers2) // değişti
    console.log(numbers) //değişmedi

    const user = {
        name:"Orhan",
        surname:"Kurtboğan",
    }

    const user2 = {...user}

    user2.name="Zerafet"