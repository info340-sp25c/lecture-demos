'use strict';

// console.log("hello world!!!!!")
// console.log("this executes second")

// let myVar = 'hello!'
// myVar = 35
// //myVar = true

// let noVal

// console.log(myVar, typeof(myVar))

// console.log('40' + 2)
// console.log(2 + '40')
// let myString = '42'

// console.log(myString, +myString);

// const lettersArr = ['a', 'b', 'c']
// lettersArr.push('newVal')

// console.log(lettersArr, lettersArr.length)

// const dinnerOptions = [
//     ['chicken', 'potatoes'],
//     ['steak', 'green beans'],
//     ['rice', 'beans', 'hotdogs']
// ]

// for(let i=0; i<dinnerOptions.length; i++){
//     const item = dinnerOptions[i];
//     console.log('here!!!', item);
// }

// console.log('these are our dinner choices!', dinnerOptions, dinnerOptions[0][1])

// let people = {
//     'sarah': {
//         'age':42,
//         'fav foods': [
//             'beans',
//             'potatoes'
//         ]
//     },
//     'amit': 35,
//     'zhang': 13
// }

// people['fred'] = 22
// console.log('object', people, people['sarah'], people.sarah["fav foods"])

// const people = [
//     {name: 'Ada', height: 64},
//     {name: 'Bob', height: 74},
//     {name: 'Chris', height: 69},
//     {name: 'Diya', height: 64},
//     {name: 'Emma', height: 78},
// ]

// console.log('people', people)

// for(const person of people) {
//     console.log("height", person.height);
// }

// function greet(greeting, name){
//     console.log("i am greeting someone!!!")
//     return greeting + ', ' + name
// }

// console.log(greet("hello", "Kristen"))

let userInput = document.getElementById("pretendUserInput");

let resultsDiv = document.getElementById("resultsDiv");
console.log('user input, results', userInput, resultsDiv);

document.getElementById("resultsDiv").innerText = "Hello World!"
document.getElementById("resultsDiv").style.backgroundColor = "red"

