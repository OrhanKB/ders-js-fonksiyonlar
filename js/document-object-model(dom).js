/*************************************** DOCUMENT OBJECT MODEL(DOM) *****************************************/

// tag ismiyle element çağırma:
 
//  const h1  = document.getElementsByTagName("h1") = 1. yöntem
// const h1 = document.getElementsByClassName("title-1") // class ismine göre alır
// const title = document.getElementById("title") // tek bir eleman depolar 


/* h1.forEach(element => { // bu bir html kodu olduğu için arraay olmadığı için foeach çalışmaz
    console.log(element)
}) */


/*
console.log(h1.length)


for(let i = 0; i < h1.length ; i++) {
console.log(h1[i])
} */

// querrySelector : 

    //console.log(document.querySelector(".title-1 + #title"))

    /* const deneme = document.querySelectorAll(".title-1") // array metodlarıyla kullanılabilir
    deneme.forEach(element => {
        console.log(element)
    }) */
    
// özellik ekleme :

// const title = document.getElementById("title")

/* title.style.color = "blue" // özellik
title.style.backgroundColor = "yellow"
title.title = "test-baslik"
title.className = "adana" */

// setAttribute() metodu da kullanılabilir: 

// title.setAttribute("style","color: blue ; background-color: yellow")
// title.setAttribute("title", "test baslik")
// title.setAttribute("class", "adana") // js de yazıların class komutları html dekini domine eder ama; 
// title.classList.add("adanaa") // yazılırsa üstüne ekler classı

// elemente yazı text ekleme:

// title.textContent = 'yeni değer' //
// düz yazı ise text kontent. diğer türlü innerhtml
// innerhtml var olanı değiştirdiziğimizde veya yeni bir eleman ekleyeceğimizde kullanılır

/* document.querySelectorAll("h1").forEach((h1, index) =>{
    if(index %2 == 0) {
        h1.style.color = "green"
    } else {
        h1.style.color = "yellow"
    }
}) */


/******************************** ÖRNEKLER ******************************/

/* const h1 = document.querySelector("h1") // bu selector ilk gelen nesneyi verir
console.log(h1) */
 
/* const h1 = document.querySelectorAll("#title-1") // title ı ile çağırılacaksa # ile çağğırılır
console.log(h1) */

/* const h1 = document.querySelectorAll("h1")

h1.forEach(element => {
    console.log(element)
}) */


/* let h1 = document.querySelectorAll("h1")

h1[0].setAttribute("id","first")
h1[1].setAttribute("id","second")
h1[2].setAttribute("id","third")
h1[3].setAttribute("id","fourth")
h1[0].classList = "deneme"
h1[1].classList ="deneme2"
h1[2].setAttribute("class","deneme3")
h1[3].setAttribute("class","deneme4") */



/* h1[0].style.color = "red"
h1[1].setAttribute("style","color:yellow")
h1[2].setAttribute("style","color:green")
h1[3].style.color = "purple"
h1[0].style.fontFamily ="sans-serif" */


/* h1.forEach((element, index) => {
    if(index % 2 == 0 ) {
        element.style.color = "red"
    } else {
        element.style.color ="yellow"
    }
}) */


// doc part
const color = document.getElementById("color")
const h1 = document.querySelector("h1")
const li =  document.querySelectorAll("li")
let timer = document.getElementById("timer")
const body = document.querySelector("body")
const h2 = document.querySelector("h2")
h2.style.display ="flex"
h2.style.justifyContent = "center"
body.style.display="flex"
body.style.alignItems ="center"
body.style.justifyContent="center"
timer.style.display ="flex"
timer.style.justifyContent ="center"
h2.style.fontFamily ="Helvetica Neue, Helvetica, Arial, sans-serif"
h2.style.fontSize ="20px"
h2.style.textDecoration ="underline"
color.style.fontSize = "50px"
// doc part



setInterval(() => {
    color.style.color = randomColor()
}, 1000);






  
const updateDate = setInterval(() => {
    const date = new Date();
    
    const formattedDate = date.toLocaleDateString("tr-TR", {
        year:"numeric",
        month:"long",
        weekday:"long",
        day:"numeric",
        hour:"numeric",
        minute:"numeric",
        second:"numeric"
    })
 
    timer.textContent = formattedDate;
 }, 1000);

 function randomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0 ; i<=5 ; i++) {
        color += letters[Math.floor(Math.random() * 16)]     
    }
   return color
 }

 setInterval(() => {
    let color = randomColor()
    timer.style.backgroundColor = color
 }, 1000);

 





li.forEach((element, index) => {
    const searchText = "Coming"
    const textContent = element.textContent
    if(textContent.includes(searchText)) {
        element.style.backgroundColor = "red"
    } else if (textContent.includes("Ongoing")) {
        element.style.backgroundColor = "yellow"
    } else { element.style.backgroundColor ="green"}


})

li.forEach(element => {
    element.style.margin="10px"
    element.style.padding="10px"
})










