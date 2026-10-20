// function myFun(...numbers){
//     let result=0;
//     for(i=0; i<numbers.length; i++){
//         result += numbers[i] * 2;
//     }
//     return result;
// }
// document.getElementById("calc").onclick= function(){
//     console.log(myFun(1,2,3,4,5));
// }
// console.log(myFun(1,2,3,4,5,6,7,8,9,10));

// let result = (num1, num2) => num1 + num2;

// console.log(result(5, 10));


// // .....................................
// let myNumbers = [10, 20, 30, 40, 50];
// let caculate = (num1, num2, ...nums) => num1 + num2 ;
// console.log(caculate(10, 20, 30, 40, 50));

//challenges
let swappingCasee="SHerIf";
let result = swappingCasee.split("").map((char)=>{
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
});

console.log(result.join(""));


// challenge 2
let myString = "Hello World";
let reversedString = myString.split("").reverse().join("");
console.log(reversedString);


let invertedNumbers = [1, 2, 3, 4, 5];

let invertedResult = invertedNumbers.map((num) => -num);
console.log(invertedResult);


//challenge 3
let ignoreNumbers = "Hello 123 World 456";
let filteredString = ignoreNumbers.split("").filter((char) => isNaN(char) || char === " ").join("");
console.log(filteredString);

//challenge 4
let mix="Hello 123 World 456";
let filteredMix = mix.split("").filter((char) => isNaN(parseInt(char)) || char === " ").join("");
console.log(filteredMix);