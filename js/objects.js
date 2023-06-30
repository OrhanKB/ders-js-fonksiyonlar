/****** OBJECTS ********/


 const person = {} //object böyle
console.log(person)

const user = {
    name:"orhan",
    surname:"kurtboğan",
    age:29,
    isMarried:false,
    skills:["CSS","HTML","javascript","bootstrap"],
    test:{
        deneme:"Deneme text"
    },
    sibling:[
        {
            name:"Meltem",
            surName:"Tayfun"
        }
    ],
    "phone number": "+905427956861",
    getFullName: function() {
        return `${this.name} ${this.surname}`
    },
      
    getFullName2: () => `${user.name} ${user.surname}`,

    country:"Türkiye"

}

console.log(user)

//objectten değerlere erişmek: eğer çağıracağın key tek kelimeyse = noktadan sonra direkt keyin ismi / birden fazla veya özel keyse = []

console.log(user.isMarriedv ? "Evli" : "Bekar")

console.log(user.test.deneme)
console.log(user["phone number"])// özel isimli


let keyName= "surname"

console.log(user[keyName])

//object içinde function çağırma:

console.log(user.getFullName2())
console.log(user.getFullName())

//yeni object atama veya değiştirme:

user.name="Memed" //dışardayken "=" kullanılır
console.log(user.name)

console.log(user) // değiştir

user.skills.push("C#")
user.title="student"

user.getUserInfo= function() {

   let skillsWithoutLastSkill = this.skills.splice(0,this.skills.length-1,0)
   let lastSkill = this.skills.splice(this.skills.length-1)[0]

   let skills = `${skillsWithoutLastSkill} and ${lastSkill}`
   let fullName= `${this.getFullName()}`
   let statement = `${fullName} is a ${this.title}. he  lives in ${this.country}. he learns ${skills}` // bunun kısayolu : Intl.listformat()
   return statement

}
console.log(user)

console.log(user.getUserInfo())

//object methods:

//Object.assign :  orijinal objeyi bozmadan kopyalar

/* let newUser = user

newUser.name="Murat"

console.log(newUser)

console.log(user) */ // bu şekilde kopayalarsak orijinal da dğeişir.

let newUser= Object.assign({},user)

newUser.name="Murat"

console.log(user)
console.log(newUser)


//Object.keys() ile object keylerini almak.

console.log(Object.keys(user))

console.log(Object.values(user)) // bu da value döndürür

console.log(Object.entries(user)) // bu her ikisini de döndürür 