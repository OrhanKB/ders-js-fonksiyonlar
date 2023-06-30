/*************************************** WEB STORAGE *****************************************/
// session storage ve localstorage cookies e kıyasla daha iyi bir API
//locale ile session arasındakki fark : locale storage da tanımladığımız verilerin expiration date yok.sessipon 
//storage aktif otourum sonlandırılırsa direkt gidiyor
// anahtarlar ve değerler her zaman string olmak zorunda !!!

/* Use case of Web Storages
Some use case of Web Storages are

store data temporarily
saving products that the user places in his shopping cart
data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
can be used offline completely using localStorage
Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings using Base64 encoding.
can be used for user authentication method */
  
// localStorage() :

console.log(localStorage) // hiçbişey yok

// localStorage.clear // localdeki her şeyi silmek için
// localStorage.setItem // localde data tutmak için. iki parametre alır
// localStorage.getItem // localde tutulan dataları göstermek için. sadece key alır
// localStorage.removeItem : verilen değeri siler tek parametre
// localStorage.key : depolanan bilgiyi gösterir. parametre olarak index girilir

localStorage.setItem("name", "Tayfun") // sildikten sonra da silinmez çünkü localstorage
console.log(localStorage.getItem("name")) //getitem
console.log(localStorage.removeItem("name:")) // silindi
console.log(localStorage.key(0)) // 0. 


const names = ["tayfun","ahmet","mert"]
const user = {
    name:"Orhan",
    surname:"Kurtboğan"
}

// console.log(localStorage.setItem("names", names)) // bunlar yanlış
// console.log(localStorage.setItem("user", user)) //bunlar yanlış

console.log(localStorage)

localStorage.setItem("user", JSON.stringify(user)) // böyle içine konaiblir. düzeltmek için parse()
localStorage.setItem("names", JSON.stringify(names))

console.log(localStorage)

localStorage.removeItem("basket")

let basket = JSON.parse(localStorage.getItem("basket")) || [
     
]

const products = [
    {
        id:1,
        title:"MacBook Pro 2021",
        price:40000
    },
    {
        id:2,
        title:"Keychron K6",
        price:100,
    },
    {
        id:3,
        title:"NuPhy Halo 65",
        price:140
    }
]

function saveToStorage() {
    localStorage.setItem("basket", JSON.stringify(basket))
}

function addBasket(producId) {
    const basketIndex = basket.findIndex(i => i.producId == producId)
    if(basketIndex > -1) {
        basket[basketIndex] = {
            ...basket[basketIndex],
            amount: basket[basketIndex].amount+1
        }
    } else {
    basket.push({
        producId,
        amount: 1
    })
}
    saveToStorage()
}

function removeBasket(productId) {
    const item = basket.find(p => p.productId == productId);
    
    if (item) { // Check if item exists
        if (item.amount == 1) {
            basket = basket.filter(p => p.productId != productId);
        } else {
            basket = basket.map(i => {
                if (i.productId == productId) {
                    i.amount -= 1;
                }
                return i;
            });
        }
        saveToStorage();
    }
}



function totalPrice() {
    return basket.reduce((prev, basket) => {
        const product = products.find(p => p.id === basket.producId)
        return prev += (product.price * basket.amount )
    }, 0 )
}


console.log(basket)
removeBasket(3)
console.log(basket)

addBasket(1)
addBasket(2)    

localStorage.clear()

addBasket(1)
addBasket(1)
addBasket(1)

console.log(totalPrice())


removeBasket(1)

console.log(totalPrice())