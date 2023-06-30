/**************************************** WRITING CLEAN CODE- TEMİZ KOD YAZMA *********************************/




// düzgün yazın.
// arraylara genelde çoğul isim verirli
// class larda ilk kelimenin baş harfi de büyük

console.log(
    new Date().toLocaleDateString()
)

for(let i = 1; i <= 10; i++) {
    console.log(i)
} //örnek

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
    isMarried: true
  }
  for(const key in person) {
      console.log(key)
  }

  /*
  let days = prompt("What day is it?")
  let answer = days.toLowerCase()

   switch(answer) {
    case "monday": 
    console.log("Today is monday")
    break
    case "wednesday":
        console.log("Today is wednesday")
        break
    case "thursday" : 
    console.log("Today is thursday")
    break
    case "friday": 
    console.log("Today is friday")
    break
    case "saturday": 
    console.log("today is saturday")
    break
    case "sunday" : 
    console.log("today is sunday")
    break
    default:
        alert("sg mq")
  } */