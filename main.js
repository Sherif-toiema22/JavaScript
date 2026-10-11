function myFun(...numbers){
    let result=0;
    for(i=0; i<numbers.length; i++){
        result += numbers[i] * 2;
    }
    return result;
}
document.getElementById("calc").onclick= function(){
    console.log(myFun(1,2,3,4,5));
}
console.log(myFun(1,2,3,4,5,6,7,8,9,10));

let result = (num1, num2) => num1 + num2;

console.log(result(5, 10));