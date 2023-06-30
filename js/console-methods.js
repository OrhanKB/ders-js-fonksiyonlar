/**************************** CONSOLE METHODDS ***********************/
// tarayıcı konsoluna çıktı yazmak için kullanılır
//document.write() çıktıyı döküman kısmına yazdırır

// 1) console.log(): outputu gösterir.

console.log(30)

console.log(["orhan","kurtboğan","javascript"])

console.log(
    {
        name:"tayfun",
        surname:"orhan"
    }
)

// substitution:

console.log("ben %d yaşındayım ve %d yılında doğdum", 30, 1993) // d = digit

// 2) CSS : style kısmı burda da çalışıyor.

console.log("%cDur!, %cNaber?", "font-size:50px; font-family:Arial; color:red;", "") // %c = CSS

// 3) console.warn(): uyarı vermek için kullanılır.

console.warn("uyarı mesajı")

// 4) console.error(): error göstermek için.

console.error("naptın gardash")

// 5) console.table() konsolda bir tablo gibi gösterir

let names = ["orhan","mert","gökhan"]

console.table(names)

console.table({
    name:"tayfun",
    surname:"orhan"
})

// 6) console.time(): zamanlayıcı başlatır. ne kadar sürdüğünü hesaplayaibiliyorsunuz.

console.time("calculate 1m array")

console.log(new Array(10e5).fill().map((value,index)=>index))

console.timeEnd("calculate 1m array")

// 7) console.info() : konsol logdan farkı yok

// 8) console.assert(): koşul sğalar(boolean) true ise bişey olmaz. false olursa false değeri verir

console.assert( 3> 4, "yanlış yaptın")

// 9) console.group(): birden fazla log grubunu birleştirir

const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

// 10) console.count(): kaç kere çağıırldığını yazar

const test = () => {
    console.count("test called")
}

test()
test()
test()

// 11) console.clear(): konsolu temizler.

console.clear()