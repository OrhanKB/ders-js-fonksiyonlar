/********************************** DOM-2 ***********************************/

// element oluşturma: 

/* let h1 = document.createElement("h1")
h1.className ="test"
h1.style.backgroundColor = "blue"
h1.textContent = "javascript ile eklendi" */

// dökümanda yerini tanımalamadığımız için göremiyoruz.

//birden fazla element oluşturma:

 /* for (let i = 0 ; i <=10; i++) {
    let h1 = document.createElement("h1")
h1.className ="test"
h1.style.backgroundColor = "blue"
h1.textContent = "javascript ile eklendi" + i
document.body.append(h1)
 } */

// appending child to parent element(üst elemana çocuk öğeyi ekleme(sonuna)): dökümanda görebilmek için

// document.body.appendChild(h1) // bu sayede ekleyebiliyoruz (append edildiği için hep sonrasına eklenecektir). öncesi için prepend()


// removing a child element from a parent node(çocuk elemanını üst elemandan silme) remove()

/* for (let i = 0 ; i <=10; i++) {
    let h1 = document.createElement("h1")
h1.className ="test"
h1.style.backgroundColor = "blue"
h1.textContent = "javascript ile eklendi" + i
document.body.append(h1)
 }

 const allh1elements =document.querySelectorAll("h1")

 for(const h1 of allh1elements) {
    // h1.remove()
    //veya
    // document.body.removeChild(h1)
 } */



 /*******************************************ÖRNEKLER **************************/


 /*      SAYILAR OLAYI
 const container = document.createElement("div")
container.style.display="flex"
container.style.flexWrap ="wrap"
container.style.justifyContent ="center"
container.style.paddingLeft ="250px"
container.style.paddingRight ="250px"
document.body.appendChild(container)

function isPrime(num) {
    if(num < 2) {
        return false
    }

    for(let i = 2; i<num; i++) {
        if(num % i == 0 ) {
            return false
        }
    }
    return true
}


for(let i = 1; i<=100 ; i++) {
const elementDiv = document.createElement("span")
elementDiv.textContent = i
elementDiv.style.display="flex"
elementDiv.style.justifyContent ="center"
elementDiv.style.width ="165px"
elementDiv.style.height ="80px"
elementDiv.style.margin ="2px"
elementDiv.style.alignItems ="center"
elementDiv.style.color ="white"
elementDiv.style.fontSize ="40px"


if(i % 2 == 0) {
    elementDiv.style.backgroundColor = "green"
} else {
    elementDiv.style.backgroundColor ="yellow"
}

if(isPrime(i)) {
    elementDiv.style.backgroundColor = "red"
 }

container.appendChild(elementDiv) 

} 
*/

const countriesAPI = "https://restcountries.com/v3.1/all"

const fetchAPI = async () => {
    try {
    const res = await fetch(countriesAPI)
    const data = await res.json()

    const countries = data.map(country => country.name.common)

        console.log(countries.length)
    //HTML PART

    const div = document.createElement("div")
    div.style.display ="grid"
    div.style.gridTemplateColumns = "repeat(5, 1fr)"
    div.style.gridRowGap ="10px"



    
    for(let i = 0 ; i <= countries.length - 1; i++) {
        const span = document.createElement("span")
        
        span.textContent = countries[i]
        span.style.display ="flex"
        span.style.border = "1px solid rgba(128, 128, 128, 0.3)"
        span.style.borderRadius ="5px"
        span.style.padding ="5px"
        span.style.width ="100px"
        span.style.margin ="20px"
        span.style.fontFamily ="sans-serif"
        span.style.alignItems ="center"
        span.style.height ="90px"
        span.style.width ="100px"
        span.style.justifyContent ="center"
        div.appendChild(span)
  
        
    } 

    const body = document.querySelector("body")
    body.style.display ="flex"
    body.style.justifyContent ="center"
    body.appendChild(div)




    

    //HTML PART





    } catch(err) {
        console.log(err)
    }



}

fetchAPI()

