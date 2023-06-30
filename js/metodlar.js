// reduce() metodu: dizideki tüm öğeleri işlemden geçirir, tek bi değere  indirir. toplamını alır
// 2 zorunlu parametre alır : 1) accumulator[toplayıcı], total değeri tutan. 2)o an işlem yaptığımız öğe.

const numbers = [1, 2, 3, 5]

const sayılar =  numbers.reduce(
(sayıToplam, sayı)=> sayıToplam + sayı ,0
)

console.log(sayılar)




/* //foreach() metodu:

let total = 0 // dışardan bi kaynak gerekli.

numbers.forEach(number => total += number)

console.log(total) */

// basket örneği:

const basket = [

    {
        name:"iPhone",
        price:7000,
    },
    {
        name:"Macbook",
        price:14000
    },
    {
        name:"Harman/Kardon",
        price:2500
    },
    
]

const toplamFiyat = basket.reduce(
    (urunler, urun)=> urunler + urun.price, 0
)

console.log(toplamFiyat)

//isim örndeği:

const names = ["Tayfun","Mehmet","Ahmet","Gökhan","Tayfun"]

const isimSayac = names.reduce(
    (isimler, isim)=> {
        if(isim in isimler) {
            isimler[isim]++
        }
        else isimler[isim] = 1
        return isimler
    }
, {})

console.log(isimSayac) // her markanın ürün sayısını hesaplar


//ürünler örneği:

const products = [

    {
        name:"NT-1 a Condenser Mikrofon",
        brand:"Rode",
    },
    {
        name:"iPhone XS",
        brand:"Apple",
    },
    {
        name:"Smartlav Plus+ Yaka Mikrofonu",
        brand:"Rode",
    },
    {
        name:"M-AUDIO Keystation 61",
        brand:"M-Audio",
    },
    {
        name:"macbook- pro",
        brand:"Apple"
    }
]

let group = "brand"

let groupedProduct = products.reduce(
    (urunler, urun)=> {
        let key = urun[group]
        if(!urunler[key]) {
            urunler[key]= []
        }
        urunler[key].push(urun)
        return urunler
    }, {}
)

console.log(groupedProduct) // her markanın ürünlerini bir diziye gruplar.

//post örnekleri:

const posts = [
     {
        title:"post 1",
        tags:["php","css"],
     },
     {title:"post 2",
      tags:["js","html5"],
    },
     {
        title:"post 3",
        tags:["html5","json"],
     },

]
 

const allTags = posts.reduce((acc, post)=>[...acc, ...post.tags], [])

console.log(allTags)

//tekrarlanan değerleri silmek için : 

const array2 = ["a", "b", "b", "c", "a", "d", "e", "d", "e"]

const result = allTags.reduce(
    (acc, num)=> {
        if(!acc.includes(num)) {
            acc.push(num)
        }
        return acc
    }, []
)


console.log(result)
