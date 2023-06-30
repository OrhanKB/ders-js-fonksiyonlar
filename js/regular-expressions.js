/*************************** REGULAR EXPRESSIONS *********************************/
//datanın içindeki patternerlin bulunmasına yardımcı olur. iki parametresi var: searh pattern ve optional flag

//flags: flagler optional parameterdır. aramanın tipini belirler

// g: global bir flag. desenin bütün texte bakmasını sağlar.
// i : duyarsız flag(upper lower case)
//m: multiline(çoklu satır)

// 1- RegExp

let pattern = "love"
let flag = "ig"
let RegEx = new RegExp(pattern, flag)

// ikinci yol:

let regex = /love/gi

// regexp object methods:

// test(): içindeki değerin olup olmadığını gösterir --regexlearn.com!!
/* let word = /salak/ig
let comment= prompt("yorum yazın")

if(word.test(comment)) {
    alert("hakaret kullanmayınız plz")
} else {alert("helal lan sövmeden konuşabiliyon ;););")}

// match(): eşleşenlerle array döndürür. */

/* let str ="I Love JavaScript and I love css."

console.log(str.match(/love/ig))

// search(): bulursa indexini döndürür. bulamazsı -1 

console.log(str.search(/love/ig)) // indexini verdi */

// altmetin(substring) değiştirme : replace(). belli kelimeleri değiştirir

/* const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/python/ig, "Javascript") // değitşirdi
console.log(matchReplaced)


const text = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

deleting = text.replace(/%/ig, '') // düzeltildi. hepsi için replaceAll da kullanılabilir 

console.log(deleting) */


// [] karakterleri:
// [0-9] 0 dan 9 a
// [a-z] a dan z ye


let str = "ben 21 yaşındayım ve 2001 de doğdum."

console.log(str.match(/[0-9]/g))

// \(ters slash): özel karakterlerden kaçış için kullanılır
// \d : (digit) sadece sayıları iiçerir

console.log(str.match(/\d/g)) // bütün sayıları buldu

// \D : içinde syı olmayan öğeler

console.log(str.match(/\D/g)) // sayı hariç bütün elemanları aldı

// ^: başlamak anlamına gelir(başlangıç). $: son anlamında gelir . .(nokta) : new line character hariç hepsi
// + : en az bir tane ya da daha fazlasını temsil eder

let firstName = "1tayfun"

console.log(/^[a-z0-9 ]+$/.test(firstName))


console.log(str.match(/\d+/g)) // düzgün yazdı +

let name = "tayfun"

console.log(/un$/.test(name))
