// HIGH ORDER FONKSİYONLAR***********************
// parametre olarak function alan fonskiyonlar. 

const callback = (n) => { //bu fonksiyonu diğer fonksiyonun içine yazıyoruz.
    return n**2
}

function cube(callback, n) { // yazılan sayının kübünü alıyor
    return callback(n)*n
}

console.log(cube(callback, 3)) // yazım şekli


//returning function : value olarak geri döndüre de bilir.

const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3
        }
        return c
    }
    return b
}


console.log(a(5)(10)(15))

/* // forEach():

const numbers = [1, 4, 5, 7, 9]

let total = 0

numbers.forEach( number => total= total + number)

console.log(total) */

// zaman (interval, timeout) örnekleri: 

function sayHello() {
    console.log("Hello")
}

// setTimeout(sayHello, 5000) // 5 saniye sonra yazar.

// setInterval(sayHello, 2000) // 2 saniye ARALIKLARLA yazar.

//clearInterval/ clearTimeOut: setinterval/settimeout komutlarını durdurur:

//const interval = setInterval(sayHello, 1000)
//
//setTimeout(
//    ()=>{
//        clearInterval(interval)
//        console.log("interval kesildi")
//    }, 5000
//)

//Funcitonal programming: loop yerine daha farklı metdolar kullanacaz: map, filter, reduce, find, every, some ve sort.

// 1) forEach():

const numbers = [1, 4, 5, 7, 9]

let total = 0

numbers.forEach( number => total= total + number)

console.log(total)

// 2) map(): foreach ile benzer özellik ama burda modifiye edilebilior.

const numbers2= numbers.map(number=> number*2)

console.log(numbers2)

let users= [
    {
        id:2,
        name:"Tayfun",
        age:29,
        gender:1
    },
    {
        id:1,
        name:"Mehmet",
        age:30,
        gender:1
    },
    {
        id:4,
        name:"Zerafet",
        age:34,
        gender:2
    },
    {
        id:3,
        name:"Orhan",
        age:21,
        gender:1
    },
   

]

users = users.map(user => {
    if(user.id===2) {
        user.name="Hakan"
    }
    return user
})

console.log(users)



const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const namesToUpperCase = names.map(name => name.toUpperCase())

console.log(namesToUpperCase)
/*************************************************** */

// 3) filter() metodu: belli kriterlere göre filtrelememizi sağlıyor.

console.log(numbers.filter(number => number>3)) // 5, 7, 9
console.log(numbers.filter(number => number>3 && number<9)) // 4, 5, 7

const women = users.filter(user => user.gender===2)
const men = users.filter( user => user.gender ===1)

console.log(men)
/******************************************************************** */


// 4) reduce() metodu: öğeyi tek değere indirir

const numbers3= [1, 3, 5, 7, 9]

const toplam = numbers3.reduce( (acc, number) => acc + number, 0) // değişken atamammıza gerek kalmıyor foreachteki gibi.
console.log(toplam)
//************************************ */

// 5) every() mmetodu:bütün  elemanların, koşulu karşlıyaıp karşılamadığına bakıyor(boolean).

console.log(users.every( user => user.gender === 1)) //false

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const areAllStrings= names2.every( name => typeof name === 'string')
console.log(areAllStrings)

/*********************************** */

// 6)find: koşula ilk uyan elemanı bize döndürür:

console.log(numbers3.find(number => number> 3)) // ilk uyan 5 olduğu için 


const currentUser= users.find(user => user.id ===3,)
console.log(currentUser)

// 7) findIndex(): koşula ilk uyan DİZİNİN içindeki elemanı dönrürür:

const ages = [24, 22, 25, 32, 35, 18]

const age = ages.findIndex( age => age < 20)

console.log(age) // 5: 20 den küçük en büyük sayı dizide 18. ve 18 in bulunduğu yer ise 5. basamakta

/************************************* */

// 8) some(): every ile aynı çalışır. tek fark: elemanlardan herhangi birinin true olması yeterli.

console.log(users.some(user => user.gender === 2)) // true

//***************************************** */

// 9) sort() metodu: büyükten küçüğe(a-z) küçükten büyüğe(z-a) sıralama yapmak için kullanılır.
// sortlayacağı elemanları stringe çevirir. bu yüzden sayılarda işe yaramaz. kullanıldığında orijinal arrayı değiştirir.

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']

products.sort()

console.log(products) // sıralandı

const numaralar = [3, 6, 2 ,1, 10 ,9] // ynalış. bunun  için numeric values

 numaralar.sort()

 console.log(numaralar)

// sorting for numeric values:

numaralar.sort( (a, b) => a-b ) // doğru sıralandı.

console.log(numaralar)

// tersinden string sıralamak için (z-a):

console.log(users.sort((a, b) =>a.id -b.id )) // düzgün sıralandı
console.log(users.sort((a, b) => b.id - a.id )) // tersten sıralandı

// stringler için tersten ise : localCompare:

names.sort((a, b)=> a.localeCompare(b)) // düzden yazdı
names.sort((a,b)=> b.localeCompare(a)) // tersten dizdi

console.log(names)

//******************************************EXERCISES******************************************//




