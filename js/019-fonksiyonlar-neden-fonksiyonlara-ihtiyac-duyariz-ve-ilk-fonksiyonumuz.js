// ** Ilk Fonksiyonumuzu Tanimlamak:
let firstName="lorem"

function greetings(firstName="", lastName="") {
    
    console.log("Merhaba", firstName, lastName)
} //default parametre alıyor



console.log(firstName) //bu değişken
greetings()// fonksiyon, parametre göndermediks
greetings("Ahmet")//fonksion, parametre gönderilmiş hali


function greetings2(firstName, lastName) {
    let info=`Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo= greetings2("ad","soyad")
console.log(greetingsInfo)



function domIdWriteInfo(id, info) {
    let domObject= document.querySelector(`#${id}`)
    domObject.innerHTML= info

}

let htmlInfo=`<span style="color:red"> COLOR REDD </span>`

domIdWriteInfo("greeting",htmlInfo)
domIdWriteInfo("info", greetings2("Lorem,","Ipsum"))



// hata alabiliriz
//*function userCheck() {
    //if (userName && age >= 18) {
       // info.innerHTML = "ehliyet alabilirsiniz"
   // } else if (!userName) {
       // info.innerHTML = "Kullanici Adiniz Yok"
    //} else if ( !(age >= 18) ) {
       //   info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
   // }
//}
 // () = çalıştır


 function question(hobby) {
    switch(hobby) {
        case "car":
            return function(name) {
            console.log(name + "do you have car?");
            };
            break;
        case "book":
            return function(name) {
            console.log(name + "what is your favorite author?");
                };
            break;
        case "software":
            return function(name,type) {
            console.log(name + "are you interested in " + type + "?");
            };
            break;
            return function (name) {
                console.log(name +",how are you ?")
            };
            break;
    }
 }

 let softwareQuestion= question("software");
 softwareQuestion("orhan","nodejs")

 function topla() {

 }

 
