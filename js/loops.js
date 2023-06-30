/************** LOOPS *************/

//döngüler için loop kullanırız.

////////////////////////////////// "for" loopu://///////////////////////////

// for(let i= 0 ;i<=5 ; i++) {console.log(`${i}* ${i} = ${i*i} `)} //

/* //örnek:

const names= ["Tayfun","Orhan","Ahmet","Bozo","Memed"]

for(let i = 0 ; i<=4 ; i++) {
    console.log(names[i])
} */


 /* //////////////////////////////////////// loop ile toplama /////////////////////////
let numbers= [5,10,15,20]
sum=0

for (let i =0; i<numbers.length ; i++) {
    sum = sum + numbers[i]
} 

console.log(sum) */

 /* ////////////////////////////////Var olan bir arrayden yeni bir array oluşturmak://///////////////////////////

let contries = ["Turkey","Cycprus","Egypt","Afghanistan","Pakistan","Syria","ISIS"]
let newCountries=[]

for(let i=0 ; i<contries.length ; i++ ) {
    newCountries.push(contries[i].toUpperCase())  //eğer i büyyüünce de i kalmasını istiyorsanız = .toLocaleUpperCase("TR")
}

console.log(newCountries) */

/////////////////////////////////////////// while , do-while loop://////////////////////////////////

/* let names = ["Tayfun","Orhan","Ahmet","Bozo","Memed"]
let i = 7

while(i<names.length) {
    console.log(names[i])
    i++
}

do { console.log(names[i]) // while ile arassındaki fark, koşul "false" olarak dönse bile komutu test için çalıştırır
                            //sonuç: undefined (if i=7) 
    i++}
while (i<names.length) */

///////////////////////////////////////////// for of loop ////////////////////////////////

/* let names = ["Tayfun","Orhan","Ahmet","Bozo","Memed"]

for(name of names) {
    console.log(name) //indexlerele uğraştırmaz
}

let numbers =[1,2,3,4,5]

for(num of numbers) {
    console.log(num*num)
}

let countries =["Turkey","Cycprus","Egypt","Afghanistan","Pakistan","Syria","ISIS"]
let newcount = []

for (let country of countries) {
    newcount.push(country)
    
}

console.log(newcount) */

////////////////////////////// break komutu//////////////////////
//komutu belli bi yerden sonra keser

/* or(let i=0 ; i<=5 ; i++) {
    if(i===3){break}
    console.log(i)

}

let names = ["Tayfun","Orhan","Ahmet","Bozo","Memed"]

for(let name of names) {
    if(name ==="Bozo") {
        console.log(`${name} bulundu`)
        break
    }
    console.log(name)
} */


////////////////////////////////// continue komutu ///////////////////////////////////////
// belli değerleri geçmesi için

/* for(let i = 0 ; i<=5 ; i++) {
    if(i==3){continue}
    console.log(i)
} // "3" numarasını es geçti

let names = ["Tayfun","Orhan","Ahmet","Bozo","Memed"]

for (let name of names) {
    if(name=="Bozo")
    {  
      continue
    }
    console.log(name)
} */


let countries = [
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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  

