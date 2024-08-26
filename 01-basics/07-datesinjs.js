//++++++DATES+++++++

// let myDate = new Date()
// console.log(myDate);  //output =2024-08-26T11:35:24.334Z

let myDate = new Date()
// console.log(myDate.toString());  //output = Mon Aug 26 2024 11:37:30 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  //output = Mon Aug 26 2024
// console.log(myDate.toLocaleString());  //output = 8/26/2024, 11:40:10 AM
// console.log(typeof myDate);  //output = object


// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate);  //output = 2023-01-23T00:00:00.000Z

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate. toDateString());  //output = Mon Jan 23 2023, where 23 is date and month start from 0 so its january

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());  //output = 1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());  //output = 1/14/2023, 12:00:00 AM

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())  //output = 1/14/2023, 12:00:00 AM


// let myCreatedDate = new Date("01-14-2023")
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)  //output = 1724673269749 
// console.log(myCreatedDate.getTime());  //output = 1673654400000


// let myCreatedDate = new Date("01-14-2023")
// let myTimeStamp = Date.now()
// console.log(Date.now()/1000);  //output = 1724673647.463


// let myCreatedDate = new Date("01-14-2023")
// let myTimeStamp = Date.now()
// console.log(Math.floor(Date.now()/1000));  //output = 1724673710


let newDate = new Date()
console.log(newDate);  //output = 2024-08-26T12:05:35.864Z
console.log(newDate.getMonth());  //output = 7
console.log(newDate.getDay());  //output = 1

//  `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: 'long',             //output = 7 & 1
})



