// ********** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak **********

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir

let firstName="Lorem"

function greetings(firstName="", lastName="") { //default parametre alıyor
    //console.log(`Merhaba ${firstName ? firstName:""}`)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
}

console.log(firstName) // degisken bilgisi
greetings() // fonksiyona parametre göndermedik
greetings("parametre")

function greetings2(firstName, lastName) {
    let info=`Merhaba ${firstName} ${lastName}    `
    return info
}

greetings2("Ad","Soyad")

let greetingsInfo =greetings2("ad","soyad")
//console.log(info) ??
console.log(greetingsInfo)

function domIdWriteInfo(id, info) {
    let domObject= document.querySelector(`#${id}`)
    domObject.innerHTML= info
}

domIdWriteInfo("greeting",greetings2("ad","soyad"))