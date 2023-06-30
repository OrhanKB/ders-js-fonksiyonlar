/************ ARRAYS ***************/

/* let names = Array()
console.log(names)
                        //ikisi aynı işlev, tek fark Array()' de içindeki eleman sayısı önceden belirlenebiliyor.
let names2= ["Orhan", 2001, 21, "Kurtbogan"]
console.log(names2)

console.log(names2.length) // içinde kaç eleman olduğunu gösterir.

console.log("Orhan".split('')) // array oluşturur */

//elementi değiştirmek:

/* const numbers= [1,2,3,4,5]

numbers[0]=10       //sonradan değiştirilebiliyor
numbers[4]=20

console.log(numbers) */

/* let eightXvalues = Array(8).fill("X")
console.log(eightXvalues) */


/* // arrayleri birleştirme:
let firsList = [1,2,3]
let secondList = [4,5,6]
let thirdList=[7,8,9]
let fourthList= firsList.concat(secondList, thirdList)

console.log(fourthList) */

// bir elemanın dizide bulunup bulunmadığını öğrenmek:

/* let numbers = [1,2,3,4,5,6,7,5]

console.log(numbers.indexOf(5)) // 4. satıda olduğunu gösterir.
console.log(numbers[4]) // 4. satırda hangi elemanın olduğunu gösterir.
console.log(numbers.lastIndexOf(5)) // eğer bir arrayda aynı 2 şey varsa, sondan başlatıp onu gösterir = 7 */

/* //includes: elemanın o kümede olup olmadığını true false ile belirtir:
let numbers = [1,2,3,4,5]

console.log(numbers.includes(4)) // "true" */

/* // kümenin array olup olmadığını anlamak için :

let names = ["Orhan","Mehmet","Tayfun","Ahmet"]
let names2="tayfun".split('')

console.log(Array.isArray(names))
console.log(Array.isArray(names2)) */

/* //arrayi stringe çevirmek:

let names = ["Orhan","Mehmet","Tayfun","Ahmet"]

console.log(names.toString()) //çevrildi

// arraayları çeşitli birleştirmek:

console.log(names.join('# ')) // böyle çeşir çeşit */

 /* // slice= belli bir aralıkta birden fazla değeri kesmek ayırmak.

let names = ["Orhan","Mehmet","Tayfun","Ahmet"]

console.log(names.slice(1,3)) // sadece mehmet ve tayfun */

/* //splice = üç değer atarnır: başlama noktası, silinecek sayı miktarı, eklenecek sayılar

let names = ["Orhan","Mehmet","Tayfun","Ahmet"]

console.log(names.splice(2,2,3,4,5))
console.log(names ) */

/* // push kullanarak bir diziye veri eklemek:

let names = ["Orhan","Mehmet","Tayfun","Ahmet"]

console.log(names.push("new item")) //ittirildi (sondan)

console.log(names) */


/* // "pop" yazarak eklenen elemanı kaldırmak

let names = ["Orhan","Mehmet","Tayfun","Ahmet"]

names.pop()

console.log(names) //en sondan aldırdı.

// baş kısımdaki elemanı çıkarmak için :shift

names.shift()

console.log(names)

//baş kısımdan eleman eklemek için: unshift, sondan eklemek için push

names.unshift("İlk eleman")
console.log(names) */


/* //bir diziyi tersine çevirmek:"reverse"

let numbers= [1,2,3,4,5]

numbers.reverse()

console.log(numbers)

let names ="orhan"

 console.log(names.split('').reverse().join('')) */

 /* // dizi içerindeki elementleri küçükten büyüğe sıralama (sort)

 let numbers = [2,4,3,7,8,1,0]
numbers.sort()

console.log(numbers) // büyükten küçüğe dizildi

//array içinde array

const sayı = [4,10,1,[4,5,6],8]

console.log(sayı[3]) */

/* const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  console.log(countries.indexOf("Ethiopia"))


  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  webTechs.push("Sass")

  console.log(webTechs)

  console.log(webTechs.sort())


  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullstackVariable= frontEnd.concat(backEnd)

console.log(fullstackVariable)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()

console.log(ages.length)
let average = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / 10

console.log(average)

average */
/*********************************** KODLUORUZ LOOPS 1 **********************************/
/* let domain="kodluyoruz"
let isActive=false
let items =[1,2,3,domain,isActive]
console.log(items)



document.querySelector("#info").innerHTML=items.length

console.log(items.length)

console.log(items[0])

console.log(items[items.length-1])

console.log(Array.isArray(items))

console.log(items[Math.floor(items.length/2)]) */

/********************************* KODLUORUZ ARRAYS -2 *****************************/
/* let items = [10, 20, 30, 40]
console.log(`items ilk hali: ${items}`)

//array sona eklemek : push
items.push(50)

console.log(items)

//array sondan çıkarmak: pop


//baştan öğe eklemek: unshift
items.unshift(5)

console.log(items)

//baştan öğe çıkarmak : shift

items.shift()
console.log(items)


//array içindeki değeri değiştirmek:

//ilk eleman
items[0]=7
console.log(items)

//sonuncu:

items[length-1] = 98

console.log(items) */

/************************** KODLUYOURZ- ARRAYS -3 ***************/

// let items=[1,2,3,4,5]  //

//array içinde array:
/* let femaleUsers=["Ayşe","Hülya","Merve"]
let maleUsers=["Ahmet","Hasan","Mehmet"]

items.unshift(femaleUsers)
items.push(maleUsers)

console.log(items)
console.log(items.length)

console.log(items[0].length) //arayin içindeki arrayin uzunşluğu
items[0][0] */

//array içerisinden öğe ayırıp almak : splice

/* let newItems= items.splice(2,4)

console.log(newItems) */

//Array içerisindeki ögenin index bilgisini bulmak(ögeyi aramak): indexOf

/* items.unshift("lorem")
items.push("ipsum")

console.log(items)

console.log(items.indexOf("lorem")) */

//array kopyalamak: slice

/* let copyItems= items

copyItems.pop()
console.log(copyItems)
console.log(items) //yanlıhş yöntem!


copyItems = items.slice()
copyItems.pop()
console.log(copyItems)
console.log(items) */

// ikinci kopyalama yöntemi : es6 ...items

/* let es6Items = [...items]
console.log(es6Items)

let allUsers= [...femaleUsers, ...maleUsers] // ES6 Array yapısını birleştirmek:

console.log(allUsers) */


//arrray içindeki tüm değerleri stringe çevirmek: toString, join:

/* console.log(allUsers.toString())
console.log(allUsers.join(" --- ")) */

//istedeiğimiz index bilgisine göre öğe eklemek: splice(bulunan nokta, kaç tane silinecek, yerine getirilecek)

/* allUsers.splice(allUsers.length-1,0, "Melissa")
allUsers.splice(Math.floor(allUsers.length/2),0,"Lorem")

console.log(allUsers)


let dizi = [2,5,8,11,15,17]
let yeniDizi = dizi.filter()

console.log(yeniDizi) */


//******************************* ARRAT KOPYALAMA **********************************/

/*  let newArray = countries.map(countries=>countries.toUpperCase()) // YENİ ARRAY OLUŞTURUR .MAP

  console.log(newArray) */

  let newArray = countries.map(countries=>countries) // bu ARRAYİ KOPYALAAAAAAAAAAR
  console.log(countries)




let str = "ahceclwlxo"

for(let i = 1 ; i<str.length ; i+=2) {
  console.log(str[i])
}









