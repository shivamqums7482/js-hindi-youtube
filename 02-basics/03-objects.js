// singleton
//Constructer method = Object.create


//+++++++++++++++object literals++++++++++++++
// const JsUser = {
//     name: "Hitesh",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email)  //output = hitesh@google.com
// console.log(JsUser["email"]);  //output = hitesh@google.com



// const mySym = Symbol("Key1")

// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhray",
//     [mySym]: "myKey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
// console.log(JsUser.email)  //output = hitesh@google.com
// console.log(JsUser["email"])  //output = hitesh@google.com
// console.log(JsUser["full name"])  //output = Hitesh Choudhray
// console.log(JsUser[mySym])  //output = myKey1




// const mySym = Symbol("Key1")

// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhray",
//     [mySym]: "myKey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  //after using freeze the next value will not be used
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

//output = {
//   name: 'Hitesh',
//   'full name': 'Hitesh Choudhray',
//   age: 18,
//   location: 'Jaipur',
//   email: 'hitesh@chatgpt.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(Key1)]: 'myKey1'
// }



// const mySym = Symbol("Key1")

// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhray",
//     [mySym]: "myKey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser) 
// JsUser.email = "hitesh@microsoft.com"

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }

// console.log(JsUser.greeting());  //output = Hello JS user
// console.log(JsUser.greeting);  //output = [Function (anonymous)]



const mySym = Symbol("Key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhray",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) 
JsUser.email = "hitesh@microsoft.com"

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());  //output = Hello JS user
console.log(JsUser.greetingTwo());  //output= Hello JS user, Hitesh



