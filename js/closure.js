/****************************** CLOSURE ********************************/

// JS de fonksiyonlar iç içe yazılabilir. eğer fonksiyon içindey yazdığımız iç fonksiyon, dış fonksiyonun değişkenlerine
// erişip onu kullanıyorsa, buna CLOSURE denir

function outerFunction() {
    let count = 0;
    function innerFunction() { 
        count++
        return count
    }

    return innerFunction // closure döndürüyor
}
const innerFunc = outerFunction()

console.log(innerFunc())

/* function counter() {
    let count = 0
    function setCount() {
        count ++
        return count
    }
    return setCount
}

const deneme = counter()

console.log(deneme())
console.log(deneme())
console.log(deneme()) */

function counter () {
    let count = 0

    function up () {
        count ++
        return count
    }

    function down() {
        count --
        return count
    }

    return {
        up: up,
        down: down
    }

}

let count = counter()

console.log(count.up())
console.log(count.up())
console.log(count.up())
console.log(count.down())

