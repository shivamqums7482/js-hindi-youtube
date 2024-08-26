// Primitive type

//7 types = 1.String 2.Number 3.Union 4.Null 5.Boolean 6.Undefined 7.Symbol
//8.BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail; //output = undefined value

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);  //output = false

// const bigNumber = 4357233752526526162n


//Reference type (Non-primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }
// console.log(typeof bigNumber);  //output = undefined

// console.log(typeof outsideTemp);  //output = object

// console.log(typeof scoreValue);  //output = number

// console.log(typeof myFunction);  //output = function

// console.log(typeof anotherId);  //output = symbol



//+++++++++++MEMORY+++++++++++++

//2 type of memory = stack memory and heap memory

//stack memory is used in primitve type and heap is used in non-primitive type

// let myYoutubename = "hiteshchoudharydotcom"
// let anothername = myYoutubename

// console.log(anothername);  //output = hiteshchoudharydotcom


let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);  //output = hiteshchoudharydorcom
console.log(anothername);  //output = chaiaurcode


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);  //output = hitesh@google.com
console.log(userTwo.email);  //output = hitesh@google.com









