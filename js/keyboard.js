/*************************** KEY PRESS  ***************************/


// HTML PART *******

const form = document.querySelector("form")
const keys = document.getElementById("keys")
const div = document.getElementById("key-div")
const keyCode = document.getElementById("key-code")
div.textContent = "Press any keyboard key"
div.style.fontFamily = "sans-serif"
div.style.marginTop = "300px"
div.style.fontSize = "60px"
form.style.justifyContent = "center"
form.style.textAlign = "center"
div.style.textAlign = "center"
div.style.justifyContent = "center"
div.style.marginLeft = "450px"
div.style.border = "1px solid black"
div.style.borderWidth = "1px"
div.style.boxShadow = "5px 10px #888888"



div.style.width = "600px"

keyCode.style.marginTop = "50px"
keyCode.style.fontSize = "60px"
keyCode.style.fontFamily = "sans-serif"
keyCode.style.color = "green"
keyCode.style.border = "1px solid black"
keyCode.style.boxShadow = "5px 10px #888888"
keyCode.style.width = "150px"
keyCode.style.height = "100px"
keyCode.style.textAlign = "center"
keyCode.style.marginLeft = "680px"
keyCode.style.paddingTop ="30px"

// HTML PART *****


keys.addEventListener("keydown", e => {
        
    div.textContent = `You Pressed  `
    

    const keySpan = document.createElement("span")
    keySpan.textContent = e.key
    keySpan.style.color = "green"
    div.appendChild(keySpan)

    keyCode.textContent = e.keyCode
    
   

    if(keyCode.textContent === "32") {
        keySpan.textContent = e.code
    }

    
    
})