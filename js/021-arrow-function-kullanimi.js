// Arrow function Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function hello(name) {
    console.log(`Merhaba, ${name}`)
}

hello("memed")

const helloFunct = (firstName) => {console.log(`Merhaba, ${firstName}`)}

helloFunct("ahmet")

const helloFunctV2 = firstName => console.log(`Merhaba, ${firstName}`) // tek parametre ve tek command ise parantez
                                                                        //kullanmaya gerek yok

const helloFunctV3 = (firstName, lastName) => { //returnlü hali
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}


helloFunctV3("Ahmet","Mhmet")


const seriesList = list => {
    
}



for(let i = 0 ; i<=10 ; i++) {

    
}

/* ÖNEMLİ */
/* let num = 0
while(num<=100) {
    let count = 0
    for(let i = 0; i<=num; i++) {
        if(num%i==0) {
            count++
        }
    }
    if(count <3)
    {
        document.write(num+'<br>')
    }
    num = num+1
} */


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]



 /*  let newArray = countries.map(countries=>countries.toUpperCase()) // YENİ ARRAY OLUŞTURUR .MAP

  console.log(newArray) */

  let newArray = countries.map(countries=>countries.toUpperCase()) // bu ARRAYİ KOPYALAAAAAAAAAAR
  console.log(newArray)



let word = ""

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  for(let i = 0; i<=webTechs.length ; i++) {
    
  }






