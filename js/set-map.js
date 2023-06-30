//  /******************** SET-MAP  **********************/
//  
//   //Set: öğeler bütünüdür. unique elemanlar içerir.
//  
//  
//  
//  // set tekrarlanabilen bir nesnedir
//  
//  const languages = [
//      'English',
//      'Finnish',
//      'English',
//      'French',
//      'Spanish',
//      'English',
//      'French',
//    ]
//  
//    const setOfLanguages = new Set(languages)
//  
//    for(language of setOfLanguages) {
//      console.log(language)
//    }
//  
//    //"hof" lar tarafından kullanılamaz. hof lar tarafından kullanılabilmesi için diziuye dönüştürülmesi gerekir.
//  
//    // [...names].map(name=> console.log(name))
//  
//    //"Set" e özel elementler:
//  
//    /* //set e yeni elemanlar eklemek :.add
//  
//  names.add("Tayfun")
//  names.add("Mehmet")
//  names.add("Ahmet") */
//  
//  const names =["Tayfun","Ahmet","Mehmet"]
//  const namesSet = new Set()
//  
//  for(let name of names) {
//      namesSet.add(name)
//  }
//  
//  console.log(namesSet)  //set in length ini : namesSet.size diye görebilirsiniz
//  
//  //eleman silme: 
//  
//  
//  namesSet.delete("Ahmet")
//  
//  console.log(namesSet)
//  
//  
//  //setin içindeki elemanı kontrol etmek:
//  
//  console.log(namesSet.has("Mehmet"))
//  
//  
//  //set i temizlemek
//  
//  namesSet.clear()
//  
//  // arrayi unique set e dönüştürmek:
//  
//  const isimler = ["tayfun","ahmet","ahmet","mehmet","ahmet","hakan","tayfun","mehmet"]
//  console.log(isimler)
//  
//  const unique = new Set(isimler) // artık benzer isimler tekrarlamıyor
//  
//  console.log([...unique])
//  
//  const diller = [
//      'English',
//    'Finnish',
//    'English',
//    'French',
//    'Spanish',
//    'English',
//    'French',
//  ]
//  
//  const düzenleme = new Set(diller)
//  
//  const count = []
//  const counts = {}
//  
//  for( let d of düzenleme) {
//      const filteredLanguages = diller.filter(dil => dil === d )
//      console.log(filteredLanguages)
//      count.push({lang: d, count: filteredLanguages.length})
//  }
//  
//  console.log(count)
//  
//  // setlerin birleşimi(küme birleşimi)
//  
//  let a = [1, 2, 3, 4, 5]
//  let b = [3, 4, 5, 6]
//  let c =[...a, ...b]
//  
//  let C = new Set(c)
//  
//  console.log(C)
//  console.log(c) 

// kümelerin kesişimi (intersection)

/* let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]


let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C) */

// kümelerin farkları:

/* let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let B = new Set(b)

 let C = new Set(a.filter(num => !B.has(num)))

 console.log(C) */

 // MAP: object de key olarak sadece symbol ya da string verebiliyorken map ile herhangi bir veri rürü verileriblir.
 
 const map = new Map()
 console.log(map)

 // map'e eleman ekleme:

 map.set(1, "tayfun") // key kısmı numeric bir değer olarak(1) tutuldu

 //map objectleri de bir key olarak alabilir:

 const user = {name:"Tayfun"}
 const user2 = {name:"Ahmet", surname:"Erbilen"}
 const userMap = new Map()

 userMap.set(user, 10)
 userMap.set(user2, 20)

console.log(userMap)

console.log(userMap.get(user))

//mapi döngüye sokmak:
user.surname = "Erbilen"

console.log(userMap.keys()) //keyleri döndürür

console.log(userMap.values()) // değerlerini döndürür.

console.log(userMap.entries()) // ikisini de döndürür.

for(let u of userMap.keys()) {
    console.log(u)
}

[...userMap].forEach(([key,val]) => console.log(val)) //foreach ile döndürme

// diziyi objecte dönüştürme:
const deneme = [
    ["name","tayfun"],
    ["surname","erbilen"]
]

console.log(Object.fromEntries(deneme))
console.log(deneme)







