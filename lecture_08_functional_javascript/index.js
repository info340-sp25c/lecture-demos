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

// function buttonOne() {
//     console.log("logging button one function")

//     let randomNumber = getRandomNumber();

//     console.log("random", randomNumber);
//     document.getElementById("resultsDiv").innerText = randomNumber
// }

// function buttonTwo(){
//     let randomNumber = getRandomNumber()
//     alert(randomNumber)
// }

// function getRandomNumber() {
//     let randomNumber = Math.floor(Math.random() * 100);
//     console.log(randomNumber)
//     return randomNumber
// }

// let userInput = document.getElementById("pretendUserInput");

// let resultsDiv = document.getElementById("resultsDiv");
// console.log('user input, results', userInput, resultsDiv);

// document.getElementById("resultsDiv").innerText = "Hello World!"
// document.getElementById("resultsDiv").style.backgroundColor = "red"

// function sayHello(name) {
//     console.log("hello ", name)
// }

// console.log("type", typeof(sayHello))
// const other = sayHello

// // other("everyone")

// // console.log("1", sayHello)
// // console.log("2", sayHello("name"))

// function numberOne(){
//     console.log("one!")
// }

// function numberTwo(){
//     console.log("two!")
// }

// function callTwoFunctions(one, two){
//     one()
//     two()
// }

// callTwoFunctions(numberOne, numberTwo)

// const arr = ["a", "b", "c"]
// arr.forEach(function(item){
//     console.log("item", item)
// })

function square(n) {
    return n*n
}

const numbers = [1, 2, 3, 4, 5]

const squares = []

for (let i=0; i<numbers.length; i++){
    const transformed = square(numbers[i])
    squares.push(transformed)
}
console.log(squares)

const squaresFromMap = numbers.map(square)
console.log(squaresFromMap)

const greaterThanThree = numbers.filter(function(n){
    return n > 3
})

console.log("greater than three", greaterThanThree)

const phoneDigits = [8, 6, 7, 5, 3, 0, 9]

const largestDigit = phoneDigits.reduce(function(one, two){
    return one > two
})

console.log(largestDigit)