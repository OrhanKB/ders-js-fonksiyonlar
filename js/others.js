/********* *******/

//preventDefault(): In order to prevent default act, we use preventdefault

const aTags = document.querySelectorAll("a")

aTags.forEach(tag => {
    tag.addEventListener("click", e => {
        const href = e.target.getAttribute("href")
        if(href.includes("http") && !confirm("Dış bir bağlantıya gidiyorsun")) {
            
            e.preventDefault()
        }
    })
})

// stopPropagation() : method is used to prevent the propagation of an event through the event's bubbling phase.
// stopImmediatePropagation() : prevents any further event handlers from being executed on the same element.

const test1 = document.querySelector(".test-1")
const test2 = document.querySelector(".test-2")
const test3 = document.querySelector(".test-3")

test1.addEventListener("click", e => {
    console.log("test1")
})

test2.addEventListener("click", e => {
    console.log("test2")
})

test3.addEventListener("click", e => {
    e.stopPropagation()
    console.log("test3")
})



const todos = document.getElementById("todos")

todos.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", e => {
        console.log("completed worked ")
        e.target.classList.toggle("completed")
    })
})


todos.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        e.stopPropagation()
        e.target.closest("li").remove()
    })
})


/****** CSSStyleDeclaration *******/

// setProperty() : sets property to chosen element

const h1 = document.querySelector("h1")

h1.style.setProperty("color","red")

// removeProperty(): removes property

// In order to do it in CSS : document.styleSheets
console.log(document.styleSheets[0].cssRules[1].style.removeProperty("background-color"))

// getPropertyValue() : returns the value of chosen property

console.log(h1.style.getPropertyValue("color"))

/********** MediaQueryList ****************/ 
// interface that represents a CSS media query and provides a way to programmatically track changes to the matched state of the media query.

// window.matchMedia():

const isMobile = window.matchMedia("(max-width:480px)")

function mobileDetectHandle() {
    if(isMobile.matches) {
        document.body.classList.add("mobile")
    } else {
        document.body.classList.remove("mobile")
    }
}

isMobile.addEventListener("change", mobileDetectHandle
)

// designMode: allows you to enable or disable the ability to edit the content of an HTML document directly within browser


// selectionStart - selectionEnd :  used to retrieve or set the starting and ending positions of the selected text within the input or textarea.

const input = document.querySelector("input")

input.addEventListener("select", e => {
    console.log(
        e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
        )
})

// setRangeText: changes the chosen value that selected with first and last index

const textArea = document.querySelector("textarea")
const preview = document.getElementById("preview")
const actionButtons = document.querySelectorAll(".action-btn")

actionButtons.forEach(btn => {
    btn.addEventListener("click", e=> {
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd)

        switch(e.target.dataset.type) {
            case "bold": 
            selectedText = `<b>${selectedText}</b>`
            break
            case "italic":
                selectedText = `<i>${selectedText}</i>`
            break
            case "uppercase" : 
            selectedText = selectedText.toUpperCase("TR")
        }

        textArea.setRangeText(
            selectedText,
            textArea.selectionStart, 
            textArea.selectionEnd,
            "select" // points the cursor accorgin to this
        )
        textArea.focus()
        preview.innerHTML = textArea.value
        console.log(e.target.dataset.type)
    })
})

// selectionRange() : enables to choose  first and last index value in input or textarea


// stepUp() and stepDown() methods : in input tag, it decreases or increases the values of all tags "number, time, date, range, month, week"

const inputs = document.querySelectorAll("input.test")
const increment = document.getElementById("increment")
const decrement = document.getElementById("decrement")

increment.addEventListener("click", e => {
    inputs.forEach(input => {
        input.stepUp()
    })
})

decrement.addEventListener("click", e => {
    inputs.forEach(input => {
        input.stepDown()
    })
})

// showPicker() : used for opening dialogue boxes of different type of inputs

const pickerBtn = document.getElementById("picker-btn")
const timeInput = document.querySelector(".time")
const dateInput = document.querySelector(".date")
const fileInput = document.querySelector(".file") 

pickerBtn.addEventListener("click", e => {
    timeInput.showPicker()
})






