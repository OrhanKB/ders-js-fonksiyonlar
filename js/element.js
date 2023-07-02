/**************************** ELEMENT OBJECTS **************************/


// attributes : turns all the values belongs to elements itself. It is not an array, It is NamedNodeMap. So array methods
//cant be used

const h1 = document.querySelector("h1")

const attribute =  h1.attributes

for(attr of attribute) {
    console.log(attr.name, attr.value)
}

// childElementCount: returns how many child element has

const ul = document.querySelector("ul")
 const deleteButton = document.querySelectorAll(".delete-btn")
//    const deleteButton = ul.children
    console.log(deleteButton);
 
 /* [...deleteButton].forEach(btn => {
    btn.addEventListener("click", e => {
        e.target.remove()
        console.log(ul.childElementCount)
        if(ul.childElementCount == 0) {
            ul.innerHTML= "No data to display"
        }
    })
}) // in children, HOF's cant be used in HTMLCollection, so we spread it [...] */
 
// console.log(ul.childElementCount)


// children: returns children elements as "HTMLCollection" object

// const deleteButtons = ul.children (like this)


//clientHeight and clientWidth, returns the height and width of element respectively

const test = document.querySelector(".test")

console.log(test.clientHeight)
console.log(test.clientWidth)


//firstElementChild and lastElementChild : return last and first child of element

console.log(ul.firstElementChild)
console.log(ul.lastElementChild)


//nextElementSibling and previousElementSibling : returns the element that precede or afterward it

const title = document.querySelector(".title")

console.log(title.nextElementSibling)
console.log(title.previousElementSibling)


//scrollHeight and scrollWidth : returns width and height of elements(includes overflow)

const scrollContent = document.querySelector(".scroll-content")

console.log(scrollContent.clientHeight)

const scrollContent2 = document.querySelector(".scroll-content2")

console.log(scrollContent2.clientWidth)

//scrollLeft and scrollTop: used for setting distance 


 const scrollDownBtn = document.getElementById("scroll-down");

const scrollRightBtn = document.getElementById("scroll-right")
const scrollLeftBtn = document.getElementById("scroll-left")

scrollDownBtn.addEventListener("click", e => {
    console.log(scrollContent.scrollTop += 50)
})

scrollRightBtn.addEventListener("click", e => {
    console.log(scrollContent2.scrollLeft += 50)
})

scrollLeftBtn.addEventListener("click", e => {
    console.log(scrollContent2.scrollLeft -= 50)
})

scrollContent2.addEventListener("scroll", e => {
    if(scrollContent2.scrollWidth - scrollContent2.clientWidth === e.target.scrollLeft) {
        scrollRightBtn.setAttribute("disabled", "disabled")
    } else {
        scrollRightBtn.removeAttribute("disabled")
    }

    if(e.target.scrollLeft == 0 ) {
        scrollLeftBtn.setAttribute("disabled", "disabled")
    } else {
        scrollLeftBtn.removeAttribute("disabled")
    }
}) 

// tagName : returns tag name of element

console.log(scrollContent2.tagName)


/**** Methods *****/

// after() and before() : returns the element that precede or afterward it

const adana = document.getElementById("adana")

const h01 = document.createElement("h1")
h01.textContent = "Baslik"

adana.before(h01)


// closest() : returns the value closest to chosen value

deleteButton.forEach(btn => {
    btn.addEventListener("click", e => {
        console.log(e.target.closest("li").remove())
        if(ul.childElementCount == 0 ) {
            ul.innerHTML = "no data to display"
        }
    })
})

// getBoundingClientRec() : returns size and position infos of element

console.log(adana.getBoundingClientRect())

// hasAttribute() : returns whether element has attribute 

const aElements = document.querySelectorAll("a")

aElements.forEach(element => {
    if(element.hasAttribute("title")) {
        element.style.backgroundColor= "yellow"
    }
})

// hasAttributes() : returns whether element has ANY attribute or not


// matched() : controls whether element matched with stated selector

const buttons = document.querySelectorAll("button")

for(button of buttons) {
     if(button.matches("button[type=submit][disabled]")) {
        button.style.fontSize = "100px"
     }
}

// toggleAttribute() Allows the selected element to be removed if the specified attribute exists, otherwise it is added.