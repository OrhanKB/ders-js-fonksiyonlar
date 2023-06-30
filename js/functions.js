/******************** FUNCTION ******************/


// 
//  function merhaba() {
//     let msg = "hello"
//     console.log(msg)
//     return msg            ///// fonksiyonu bir değişkene atamak istiyorsak döndürecez = return
//    
// }
// 
// let slm = merhaba()
// 
// console.log(slm)
// 
// 
// function muliptlation(firstInt, secondInt) {
//     let mult = firstInt * secondInt
//     console.log(mult)
//     return mult
// }
// 
// let carpma = muliptlation(7 , 8)
// 
// 
// function multiply(num1, num2) {
//     return num1 * num2 
// 
// }
// 
// 
// let multip = multiply( 2 ,6)
// 
// console.log(multip)
// 
// 
// 
// 
// 
// /*
// function sumArrayValues(arr) {
// let sum = 0
// for(let i = 0 ; i<arr.length ; i++) {
//     sum = sum + arr[i]
// }
// return
// }
// 
// const numbers = [2,4,6,8,10]
// 
// console.log(sumArrayValues(numbers))
// 
// 
// 
// 
/* function sumArrayValues(arr) {
//    let sum = 0;
//    for (let i = 0; i < arr.length; i++) {
//      sum = sum + arr[i];
//    }
//    return sum;
//  }
//  const numbers = [1, 2, 3, 4, 5];
//      //calling a function
//  console.log(sumArrayValues(numbers)); */
//
//  function functionTopla() {
//    let sum= 0
//    for(let i = 0 ; i<arguments.length; i++) {
//        sum += arguments[i]
//    }
//
  //  return sum
//
  //}
//
  // console.log(functionTopla(2,5,7,9,10))
//
//
//
////
//////
  // const sayHello = function(name) {
  //  console.log(`hello, ${name}`)
  //  }



  /*  console.log(sayHello("tayfun")); */


/*   (function(n) { //kendi kendini çağıran 'invoke' fonksiyon :
//    console.log(n**n)
//
//   })(14) */
//
//
//   let helo = (function(n) {
//    console.log(n*n)
//   }) (4)
//
//
//   console.log(helo)
//
//
//   /******** ARROW FUNCTIONS ********/
//
//   //normal fonksiyon
//
//   function hello(name) {
//        return `hello ${name}`
//   }
//
//
//   // ok fonksiyon
//
//   const hello2 = name => `hello ${name}` // return almasına gerek yok, parametre tek  olursa paranteze gerek yok.  
//
//   console.log(hello2("ahmet altan"))
//
//
//
//
//   const toplama = (... numbers) => { // bu da rest operatörü hepsini alıor falan
//    console.log(numbers)
//   }
//
//   toplama(2,5,7,9,11)
//
//
//
//
//   /**** function with default parameters ****/
//
//   function multiply(num1, num2 = 2) { // eğer num 2 yi koymayı unutursam 2 ile çarpacak otomarik olarak
//             return num1 * num2
//
//   }
//
//   console.log(multiply(10,))   




   function fullname (firsName, lastName) {
    let space = ' '
    let fullname = firsName + space +lastName
    console.log(fullname)
    return fullname

   }

   let tamisim = fullname("orhan","kurtbogan")


   function addNumbers (num1, num2) {
    
    return console.log(num1 + num2) 

   }

  let sum = addNumbers(9 , 11)



  function areaOfRectangle(length, width) {
            return console.log(`the area of rectangle is : ${length * width}`)

  }

  let ucgen = areaOfRectangle( 7, 5)

  const perimeterOfRectangle = (length, width) => { console.log(2*(length + width))}

  perimeterOfRectangle(8,4)



  const volumeOfRectPrism = (length, width, height) => {
    console.log(length*width*height)
  }

  volumeOfRectPrism( 8, 9 ,10)


  const areaOfCircle = ( r ) => {
    console.log(3.14 * r * r)
  }

  areaOfCircle( 6)

  const circumOfCircle = (r) => {
    console.log(2*3,14*r)

  }


  circumOfCircle(20)




  const speed = (distance, time) => {
    console.log(distance/time)

  }


  speed(100, 4)







  const convertCelsiusToFahrenheit = (oC) => {
    console.log(`oF: ${(oC * (9/5)) +32}`)

  }

  /* convertCelsiusToFahrenheit(50)


   const BMI = (weight,height,) => { 
    let bmi = weight/(height*height)
    console.log(bmi)
    if (bmi<18.5) {console.log("underweight")}
    else if(bmi<24.9) {console.log("normal weight")}
    else if(bmi<29.9) {console.log("overweight")}
    else if(bmi>=29.9) {console.log("obese")}
    return  bmi


  }


  BMI(800000 , 186) */

  const checkSeason = (month) => {

    if(month == "December" || month == "January" || month=="February") {
      console.log("Winter")
    }
    else if (month == "March" || month == "April" || month=="May") {
      console.log("Spring")
    }
    else if (month == "June" || month == "July" || month=="August") {
      console.log("Summer")
    }
    else if (month == "September" || month == "October" || month=="November") {
      console.log("Autumn")

    }
    
  }

       checkSeason("September")


const mathMax = (num1, num2, num3) => {
  console.log(Math.max(num1, num2, num3))

}


mathMax(11,10,5)


function linearEquation() {
  
}



function dateTime() {
  const date = new Date();
console.log(date);

}


const swapValues = (x,y) => {
  
  console.log(y =  y,x)

}


swapValues(31,13)




function reverseArray(array) {

  console.log(array.reverse())

}


reverseArray(["A","B","C","D","E","F","G"])





function capitalizeArray(array) {

  const uppercased = array.map(name => name.toUpperCase())
  console.log(uppercased)

  return uppercased



}


  let kapitalize= capitalizeArray(["sakjdfhds","alsdha","askjdash","asdakjs",])






  function addItem (array) {

      const remove = array.map(name => name.push())
    
  }


  function sumAll(nums) {
    let sum = 0
    for(i = 0; i <nums.length; i++) {

      if(nums[i]%2==0) {sum = sum + nums[i]}

    

    }

    return sum 
  }



  let sums = sumAll([1,2,3,4,5,6,7,8,9,10])


  console.log(sums)





  


  function evensAndOdds(num) {
    
    for(i= 0; i<=num; i++) {
      if(i%2==0) {console.log(i.length)
    } 
  }
  


  }


  evensAndOdds(100)


  function toplama(nums) {
      let sum = 0

    for(i=0; i<=nums; i++) {
      console.log(sum = sum + i )
    }
    return sum 
  }
  


function randomUserIp() {
  var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
console.log(ip)

}


randomUserIp()





function genMAC(){
  var hexDigits = "0123456789ABCDEF";
  var macAddress = "";
  for (var i = 0; i < 6; i++) {
      macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
      macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
      if (i != 5) macAddress += ":";
  }

  return macAddress;
}



let adres = genMAC()


console.log(adres)



function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
  
let ıd = guidGenerator()


console.log(ıd)





 function modifyArray(array) {
    return  array[4].toUpperCase()
          

}




let dizi = modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'])


console.log(dizi) 




function sevenRandomNumbers() {
   console.log((Math.random()))
    let sum = 0
   for(i=0; i<=7;i++) {
  sum=  Math.random(i) *  10
   }
   return sum
}
 


let sayı= sevenRandomNumbers()

console.log(sayı)





   
