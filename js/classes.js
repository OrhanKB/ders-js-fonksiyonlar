/******************************* CLASSES -SINIFLAR *******************************/
// tek tek obje açmak yerine temel bir taslak oluşturur ve bunun üzerinden işlem yapar

// sınıf(class) oluşturma:

/* class Person {

} */

// class instantiation: bir sınıftan obje üretmek

/* const person = new Person()
 */

// class constructor: bazı değerlerin geçirilmesini sağlar

/* class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName // first name in ne olduğunu gösterir
        this.lastName = lastName
        this.age= age
        this.country = country
        this.city = city
    }
}

const person = new Person("orhan","kurtboğan",21,"TÜRKİYE","batman")
const person2 = new Person("ahmet","osman",29,"TÜRKİYE","istanbul")
const person3 = new Person("gökhan","hundemir",30,"TÜRKİYE","çamlıhemşin") */

// console.log(person, person2, person3)

// class metodları: fonksiyon


/* class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName // first name in ne olduğunu gösterir
        this.lastName = lastName
        this.age= age
        this.country = country
        this.city = city
    }

    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }

}

const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')

console.log(person1.getFullName())
console.log(person2.getFullName()) */


// properties with initial value: 

// getter : nesneden değere erişilmesini sağlar 

/* class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName // first name in ne olduğunu gösterir
        this.lastName = lastName
        this.age= age
        this.country = country
        this.city = city
        this.skills = [] // bu kısım
    }

    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }

    get getSkills() { // bu kısım
        this.skills
    }

}

const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')

console.log(person1.getSkills) */

// setter: belirli bir özelliğin değerini düzenlemek için kullanılır

/* class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName // first name in ne olduğunu gösterir
        this.lastName = lastName
        this.age= age
        this.country = country
        this.city = city
        this.skills = [] // bu kısım
    }

    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }

    get getSkills() { // bu kısım
        this.skills
    }

    set setSkills(skill) {
        this.skills.push(skill) // bu
    }

    //appendSkill(skill) {
    //    this.skills.push(skill) // ayriyeten böyle get set kullanılmadan da yapılabilir
    //}

}

const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')

person1.setSkills = "Javascript" // değişiklikler böyle atanır
person1.setSkills = "React"
person1.appendSkill("HTML") // normal function

console.log(person1.skills) */

// regualar method bilindiği sürece get set kafa karışması çok önemli dğeil



/* class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName // first name in ne olduğunu gösterir
        this.lastName = lastName
        this.age= age
        this.country = country
        this.city = city
        this.skills = [] // bu kısım
    }

    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }

    get getSkills() { // bu kısım
        this.skills
    }

    set setSkills(skill) {
        this.skills.push(skill) // bu
    }

    appendSkill(skill) {
        this.skills.push(skill) // ayriyeten böyle get set kullanılmadan da yapılabilir
    }

    getPersonInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length>0 ? `Yeteneklerim ise şunlar: ${this.skills.join(", ")}` : ''

        let info = `${fullName} is ${this.age} years old. He lives ${this.city}, ${this.country}. ${skills}`
        return info
    }

}

const person1 = new Person('Asabeneh', 'Yetayeh', 25, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person1.setSkills = "Javascript" // değişiklikler böyle atanır
person1.setSkills = "React"
person1.appendSkill("HTML") // normal function

console.log(person1.getPersonInfo()) */

// statik metod: statik metodlar oluşturulur 

class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName // first name in ne olduğunu gösterir
        this.lastName = lastName
        this.age= age
        this.country = country
        this.city = city
        this.skills = [] // bu kısım
    }

    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }

    get getSkills() { // bu kısım
        this.skills
    }

    set setSkills(skill) {
        this.skills.push(skill) // bu
    }

    appendSkill(skill) {
        this.skills.push(skill) // ayriyeten böyle get set kullanılmadan da yapılabilir
    }

    getPersonInfo() {
        let fullName = this.getFullName()
        let skills = this.skills.length>0 ? `Yeteneklerim ise şunlar: ${this.skills.join(", ")}` : ''

        let info = `${fullName} is ${this.age} years old. He lives ${this.city}, ${this.country}. ${skills}`
        return info
    }

    static getTimeStamp() {
        return +(new Date())
    }

}

const person1 = new Person('Asabeneh', 'Yetayeh', 25, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')



person1.setSkills = "Javascript" // değişiklikler böyle atanır
person1.setSkills = "React"
person1.appendSkill("HTML") // normal function

console.log(Person.getTimeStamp())

// Inheritance : başka bir classten özellik miras alma. extends

// class Tayfun extends Person {} // person un içindeki bütün bilgiler de alındı

class Teacher extends Person{
teach() {
    return `matematik dersi öğretiliyor...`
}
}

class Student extends Person{
    learn() {
        return `ders dinleniliyor....` 
    }
}

const teacher1 = new Teacher("Orhan","Kurtboğan", 21, "Türkiye", "Adana", 1)

const student1 = new Student("Mehmet","Zerafet",29,"Türkiye","Eskişehir", 2)
 

console.log(teacher1.teach())

console.log(student1.learn())

// overriding methods: bir sınıfı özelleştirmek(modify) istersek(örn: city den sonra gender olsun ama sadece student)
//super methoduyla extend aldığımız constructura iletiyoruz

const person1 = new Person("mert","basol",30,"Türkiye","Tokat")

class Teacher extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age ,country, city)
        this.gender=gender
    }

    getGender() {
        return this.gender == 1 ? "Erkek" : "Kadın"
    }
}

console.log(teacher1.getGender()) // cinsiyet yazıldı



