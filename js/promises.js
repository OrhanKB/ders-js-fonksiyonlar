/************************************ Promise, Fetch, Async/Await ***********************************************/
// promise in 3 durumu var : pending, fulfilled, rejected
// fuldfilled olumlu çıkarsa değeri almak için then() olumsuz sonucu için catch()


//Callbacks : promiseleri anlamak için önce callbackleri anlamak lazım. callback 2 parametre alır. ilk parametre error
// ikincisi result. fonksiyona verilen parametreleri çalıştırır

/* const test = anan => { // herhangi bişey yazılabilir
    setTimeout(() => {
        anan("hata oluştu", []) // herhangi bişeyin buraya da yazılması lazım
    } 
    , 2000
    )

}


test((err, data) => {
    if(err) {
        console.log("hata:", err)
    } else {
        console.log("data:", data)
    }

} )
 */ 
//Promise constructor: iki parametresi var resolve: başarılı, reject: başarısız

/* const promise = new Promise((resolve ,reject) => { // ikisi de yazlımazsa pending
    setTimeout(() => {
         reject("işlem başarrılı")
    }, 1500)
    //  resolve("işlem başarrılı")
    //reject("işlem başarısız")
} )

promise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
}) */

// Fetch API: HTTP istekleri atmamızı sağlar 

 const API_URL = "https://jsonplaceholder.typicode.com/posts"

// fetch(API_URL) // url yi alır . promise döndürür


/* fetch(API_URL)
.then((data) => data.json() )
.then((data) => console.log(data))
.catch((err) => console.log(err)) */

// Async ve Await: bir fonksiyonun başına async konduğunda o fonksiyon promise e dönüşür

/* function getPosts() {
    fetch(API_URL).then(data => data.json()).then(data => console.log(data))   

}
getPosts() */

//daha kolay yolu : 
async function getPosts() {
    try {
        const response = await fetch(API_URL) // await işlemi dönene kadar konsol çalışmayacak
    const data = await response.json()
    console.log(data)
    } catch(err) {
        console.error(err)
    }

}

getPosts()



/* // async and await ile bir örnek
 const link = 'https://restcountries.com/v2/all'

const fetchData = async () => {
    try {
        const response =  await fetch(link)
    const countries =  await response.json()
    console.log(countries)
    } catch (err) {
        console.log(err)
    }
}

fetchData() */

/* // promise ile örnek:

const link = 'https://restcountries.com/v2/all'

fetch(link).then(res => res.json()).then(res=>console.log(res)).catch(error => console.log(error)) */







