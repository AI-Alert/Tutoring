/**
 * ----- 1) IsIsogram()
 * */
// function isIsogram(str){
//     const countUniqueChars = string => new Set(string).size;
//     return countUniqueChars(str.toLowerCase()) === str.toLowerCase().length;
// }
//
// console.log(isIsogram("ab"))



/**
 * ----- 2) Validate code with simple regex
 * */


// function validateCode (code) {
//     const res = Array.from(code.toString())[0]
//     return (res === '3') || (res === "2") || (res === "1");
// }
//
// console.log(validateCode(321))


/**
 * ----- 3) Which triangle is that?
 * */


// var typeOfTriangle = function (sideA, sideB, sideC) {
//
//     if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) ){
//         return "Not a valid triangle"
//     } else {
//         const set = new Set([sideA, sideB, sideC])
//         switch (set.size){
//             case 1:
//                 return "Equilateral"
//             case 2:
//                 return "Isosceles"
//             case 3:
//                 return "Scalene"
//         }
//     }
// }
//
// console.log(typeOfTriangle(3, 5, 82))



/**
 * ----- 4) Get the Middle Character
 * */

// //Odd - четное количество символов
//
// function getMiddle(s)
// {
//     function isOdd(str){
//         return str.length % 2 === 0
//     }
//     if (isOdd(s)){
//         const x = s.length/2
//         return s.split("")[x-1] + s.split("")[x]
//     }
//     else {
//         const x = Math.floor(s.length/2)
//         return s.split("")[x]
//     }
// }
//
// console.log(getMiddle("sds"))



/**
 * ----- 5) Jaden Casing Strings
 * */
