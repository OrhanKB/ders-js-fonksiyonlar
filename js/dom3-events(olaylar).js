/********************************** DOM - OLAYLAR(EVENTS) *******************************/

// yaygın eventler : onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload

 // const button = document.getElementById("btn")

/* button.addEventListener("event", function(e) { // bissürü event var.

}) */

//Click:



/* button.addEventListener("click", function(e) { // "tıklandığı durumunuda"
    console.log(e)
}) */



// eventller incline script olarak direkt html e de bağlanabilir: başına "on" getir

// <button id="btn" onclick="console.log("clicked!")">Button</button> //

// veya function ile yapılarbilir

/* function clickHandle() {
        console.log("butona tıkladın")
}

<button id="btn" onclick="clickHandle()">Button</button> */


// Doubleclick : dblclick

/* button.addEventListener("dblclick", function(e) {
    console.log("dblclick")
}) */





//mouse enter: fare üstüne geldiğipnde çalışır

/* button.addEventListener("mouseenter", function(e) { // mousemove ise üstünde bulunduğun sürece 
    console.log("mouse enter")
}) */

/* Yaygın eventler: 
click - when the element clicked
dblclick - when the element double clicked
mouseenter - when the mouse point enter to the element
mouseleave - when the mouse pointer leave the element
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout -when the mouse pointer out from the element
input -when value enter to input field
change -when value change on input field
blur -when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading a page
*/

//örnek:

/* 1) const img = document.querySelector("img")

img.addEventListener("load", function(e) {
    console.log("görsel yüklendi")
})

img.addEventListener("error", function(e) {
    e.target.src = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
console.log("görsel yüklenemedi") }) */

/* const input =document.getElementById("name")


input.addEventListener("input", function(e) { // klavyeye dokununca bilgi yazar ve bilginin tutulmasını isytiyorsanız value
    console.log("yazılıyor", e.target.value) //keyup keydown keypress ötnekleri de yazılablilir
})

input.addEventListener("blur", function(e) {
    if(e.target.value == "") {
        e.target.classList.add("error")
    }
})


const colorInput = document.getElementById("color-picker") // body rengi
colorInput.addEventListener("input", function(e) {
    document.body.style.backgroundColor = e.target.value
})


const saveButton = document.getElementById("save-btn") // kayıt butonu
const saveRulesCheckBox = document.getElementById("saverules")
const form = document.getElementById("form")

saveButton.addEventListener("click", function(e) {
    console.log(
        input.value,
        colorInput.value,
        saveRulesCheckBox.checked,
        form.elements.stack.value
    )
})
 */




/* const gender = document.getElementById("gender")

/* gender.addEventListener("change", function(e) { // select box un değiştiğini "change" metodu ile anlaşılır
    console.log(e.target.value)
}) */

//eğer çoklu seçenek varsa ise selectedOptions kullanılır :

/* gender.addEventListener("change", function(e) {
    console.log(
        [...e.target.selectedOptions].map(el => el.value)
    )
    
}) */



/************************ ÖRNEKLER ************************/
/* const mass = document.getElementById("mass")
const height = document.getElementById("height")
const button = document.querySelector("button")

let bmi

button.addEventListener("click", () => {
    bmi = parseFloat(mass.value) / parseFloat((height.value) **2)
    alert(`Your bmi is ${bmi.toFixed(2)}`)
    console.log(bmi)
}) */

/* BODY MASS :  const mass = document.querySelector("#mass");
const height = document.querySelector("#height");
const button = document.querySelector("button");

let bmi;
button.addEventListener("click", () => {
  const massValue = parseFloat(mass.value);
  console.log(massValue, "mass-value")
  const heightValue = parseFloat(height.value / 100);
  console.log(heightValue, "heigh-value")
    bmi = massValue / (heightValue ** 2) 
    console.log(height.value ** 2, "height sqaure")
    console.log(mass.value)


    alert(`your BMI is ${bmi.toFixed(2)}`)
    console.log(bmi)

}) */

/* INPUT-CHANGE :  const input = document.querySelector("input")
const p = document.querySelector("p")

input.addEventListener("input", (e) => {
    p.textContent = e.target.value
}) */

/* const input = document.querySelector("input")
const p = document.querySelector("p")

input.addEventListener("blur", e => {
    p.textContent = "Field is required"
    p.style.color = "red"
}) */

 // document.body.style.justifyContent = "center"

/* const button = document.querySelector("button")
const input = document.querySelector("input")
const span = document.createElement("span")
const div = document.querySelector("div")
div.appendChild(span)

button.addEventListener("input", e => {
    const number = input.value
    const spanText = span.textContent
    number = spanText 
}) */


// HTML PART **********************
const h1 = document.querySelector("h1")
const form = document.querySelector("form")
const button = document.querySelector("button");
const input = document.getElementById("text");
const div = document.querySelector("div");
form.style.marginBottom = "20px"
form.style.alignItems = "center"
form.style.display  ="flex"
form.style.justifyContent="center"
h1.style.display="flex"
h1.style.justifyContent = "center"
h1.style.alignItems = "center"
input.style.marginRight = "5px"
h1.style.color = "green"
//button
button.style.color = "white"
button.style.backgroundColor = "green"
button.style.height = "40px"
//button
input.style.width = "400px"
input.style.height = "35px"
input.style.borderColor = "green"
document.body.style.fontFamily = "sans-serif"
//div
/* div.style.display = "inline-block"
div.style.justifyContent = "center"
div.style.alignItems = "center"
div.style.marginTop = "20px"
div.style.margin = "10px"
div.style.padding = "10px"
div.style.maxWidth = "600px"
div.style.textAlign = "center" */
div.style.display = "block"
div.style.justifyContent = "center"
div.style.alignItems = "center"
div.style.marginTop = "10px"
div.style.marginRight = "auto"
div.style.marginLeft = "auto"
div.style.padding = "10px"
div.style.maxWidth = "600px"
div.style.textAlign = "center"
//div




// HTML PART *******************


button.addEventListener("click", e => {
    div.innerHTML = " "
    
    inputNumber = parseInt(input.value)
    e.preventDefault()

    if (isNaN(inputNumber)) {
        const alertMessage = document.createElement("span");
        alertMessage.textContent = "Please enter a valid number.";
        alertMessage.style.color = "red";
        alertMessage.style.marginBottom = "10px";
        div.prepend(alertMessage)
        return;
    }
    
    for(let i = 1; i < inputNumber; i++) {
        const elementNum = document.createElement("span")
        elementNum.textContent = i + " "
        div.appendChild(elementNum)
        if(i % 2 == 0) {
            elementNum.style.backgroundColor = "green"
        }
        if(i % 2 == 1) {
            elementNum.style.backgroundColor = "yellow"
        }
        if(isPrime(i)) {
            elementNum.style.backgroundColor = "red"
        }

        function isPrime(num) {
            if(num < 2) {
                return false
            }
            for(let i = 2 ; i<num; i++) {
                if(num % i == 0) {
                    return false
                }
            }
            return true
        }
       
        
        elementNum.style.marginTop = "20px"
        elementNum.style.margin = "10px"
        elementNum.style.padding = "10px"
        elementNum.style.justifyContent = "center"
        elementNum.style.display = "inline-flex"
        elementNum.style.alignItems = "center"
        elementNum.style.width = "40px"
        elementNum.style.textAlign = "center"
 
        
    }
    
})


/* CHATGPT OLAN :  const button = document.querySelector("button");
const input = document.querySelector("#text");
const div = document.querySelector("div");
const span = document.createElement("span");
div.appendChild(span);

button.addEventListener("click", e => {
  e.preventDefault();

  const inputNumber = parseInt(input.value);
  span.innerHTML = ''; // Clear previous content

  for (let i = 1; i <= inputNumber; i++) {
    const numberElement = document.createElement("span");
    numberElement.textContent = i;
    span.appendChild(numberElement);

    if (i % 2 === 0) {
      numberElement.style.backgroundColor = "green";
    } else {
      numberElement.style.backgroundColor = "yellow";
    }

    if (isPrime(i)) {
      numberElement.style.backgroundColor = "red";
    }
  }
});

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
} */


/************************ ÖRNEKLER ************************/



