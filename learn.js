let user={
    name:"Sherif",
    age:25,
    country:"Egypt",
    sayHello:function(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old from ${this.country}`);
    }
}

let user2={
    name:"Ahmed",
    age:30,
    country:"Egypt",
    skills:["JavaScript", "HTML", "CSS"],
    addresses:{
        city:"Cairo",
        street:"123 Main St",
        zipCode:"12345",
        egypt:{
            governorate:"Cairo",
            area:"Nasr City"
        }
    },
    sayHello:function(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old from ${this.country}`);
    }   
};
let newObject = Object.assign({}, user, user2);
console.log(newObject);


let myIdElementById=document.getElementById("my-div");
let myIdElementByClassName=document.getElementsByClassName("paragraph");
let myQuerySelector=document.querySelector("#my-div");
let myQuerySelectorAll=document.querySelectorAll(".paragraph");

console.log(myIdElementById);
console.log(myIdElementByClassName[1]);
console.log(myQuerySelector);
console.log(myQuerySelectorAll);