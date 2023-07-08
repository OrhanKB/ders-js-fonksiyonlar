/********* *******/

// elements: gets all the elements of a form with "elements"

// const form1 = document.getElementById("form1")

// console.log(form1.elements)

// document.forms : returns all element in doc

// console.log(document.forms.form1)

//submit : submits form programatically

/* const submitBtn = document.getElementById("submit-btn")
submitBtn.addEventListener("click", e => {
    document.forms.form1.submit()
}) */

// reset : resets form programatically

/* const submitBtn = document.getElementById("submit-btn")
submitBtn.addEventListener("click", e => {
    document.forms.form1.reset()
}) */

// Validation

// validity : returns validation cases in form element

// type of validations : badInput, patternMismatch, rangeUnderflow, rangeOverflow, stepMismatch, tooLong, tooShort, typeMismatch
// valueMissing   

/* const submitBtn = document.getElementById("submit-btn")
submitBtn.addEventListener("click",  e=> {
    [...document.forms.form1.elements].forEach(element => {
        console.log(element.validationMessage)
        console.log(element.validity)
    })
}) */

// validationMessage : returns validation message. 

/* const submitBtn = document.getElementById("submit-btn")
submitBtn.addEventListener("click",  e=> {
    [...document.forms.form1.elements].forEach(element => {
        console.log(element.validationMessage)
    })
}) */

// setCustomValidity() - reportValidity() : enables to give special validation messages - controls whether element is valid


function checkValidity(element) {
    if (element.validity.badInput) {
        element.setCustomValidity('Geçersiz bir değer girdiniz')
    } else if (element.validity.patternMismatch) {
        element.setCustomValidity('Geçersiz bir format girdiniz')
    } else if (element.validity.rangeUnderflow) {
        element.setCustomValidity('Minimum değerden daha az')
    } else if (element.validity.rangeOverflow) {
        element.setCustomValidity('Minimum değerden daha fazla')
    } else if (element.validity.stepMismatch) {
        element.setCustomValidity('Adımda bir sıkıntı var')
    } else if (element.validity.tooLong) {
        element.setCustomValidity('Çok uzun be gardaş')
    } else if (element.validity.tooShort) {
        element.setCustomValidity('Bu da çok kısa kaldı')
    } else if (element.validity.typeMismatch) {
        element.setCustomValidity('Tipsiz misin biraz?')
    } else if (element.validity.valueMissing) {
        element.setCustomValidity('Buralar hep dutluk!')
    } else {
        element.setCustomValidity('')
    }
    element.reportValidity()
}




const resetBtn = document.getElementById("reset-btn")

 document.forms.form1.addEventListener("submit",  e=> {
     e.preventDefault();
    [...document.forms.form1.elements].forEach(element => {
        checkValidity(element)
        element.addEventListener("input", e => {
            checkValidity(e.target)
        })
        })
        if(e.target.checkValidity()) {
            e.target.submit()
        }
    })

// checkValidity() : returns whether form is valid or not (at 92th line)

// Event() - dispatchEvent() :  methods are used to create and dispatch custom events respectively.

const testBtn = document.getElementById("test")

testBtn.addEventListener("click", e => {
    if(e.isTrusted) {
        console.log("button clicked")
    }   else {
        console.log("test")
    }
})

testBtn.dispatchEvent(new Event("click"))

// customEvent(): 

const tab = document.querySelector(".tab")
const buttons = tab.querySelectorAll("nav button ")
const contents = tab.querySelectorAll(".contents section")

buttons[0].classList.add("active");

// hiding elements except of first one
console.log([...contents].slice(1).forEach(content => content.style.display = "none"))

// change the tab 


buttons.forEach((button, index) => button.addEventListener("click", e => {
    buttons.forEach(btn => btn.classList.remove("active"))
    e.target.classList.add("active")
    contents.forEach(content => content.style.display ="none")
    contents[index].style.display = "block"

    tab.dispatchEvent(new CustomEvent("tabChanged"))

}))


tab.addEventListener("tabChanged", e => {
    console.log(e)
})







