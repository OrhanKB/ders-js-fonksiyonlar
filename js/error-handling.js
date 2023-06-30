/********************************* ERROR HANDLING- HATA YÖNETİMİ *********************************/
// js de tanımladığımız değerin tipinin ne olduğunu belirtemiyoruz
// runtime da oluşan hataları yakaylayabilmemiz için  try-catch-finally blok mekanizması var

// try{}: hata verme ihtimali olan kodları try ın içine yazılır.
// catch{}: hata meydana geldiğinde kod yazmanı sağlayacak blok. parametre albilir
// finally{} her iki durumda da çalışması gereken kodu yazar

/* try {
    let firstName = "Orhan"
    lastName = "Kurtboğan"
    let fullName = firstName + " " + lastName
    throw "öylesine bi hata"
} catch (e) {console.log(e.name)
            console.table(e)
        } */
 // 

//throw(): custom bir hata mesajı yollar.

/* let age = prompt("Kaç yaşındasın?")

try{
    if(age > 29)
     throw new Error("28 den büyüksün")
} catch (e) {
    alert(e.message)
} //{alert("Yaşınız yanlış")} // veya */

/******** Hata tipleri:  **********/

// ReferenceError: hatalı bir referans işlemi varsa.

/* let firstName = 'Orhan'
let fullName = firstName + ' ' + lastName
console.log(fullName) */

// SyntaxError: yazım diline aykırı bir kullanım olursa.

// console.log( 5 x 5) //yanlış

// TypeError: değişkenin tuttuğu tip ile uygulamaya çalıştığınız işlem birbirinden farklı ise

let num = 5

console.log(num.toUpperCase()) //yanlış

