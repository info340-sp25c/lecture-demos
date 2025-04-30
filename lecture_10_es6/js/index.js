'use strict';

import { monsterArray } from './other.js'
console.log(monsterArray);

const sayHello = (name) => {
  return "Hello " + name;
}

console.log(sayHello("class!"))

const updateMonsters = monsterArray.map((monster) => {
 // debugger;
  return monster.name + ", my NEW friend!"
})

console.log(updateMonsters);

const myArray = [1, 2, 3]
const [x, y, za] = myArray

console.log(x, y, za)

const myObject = {a: 1, b: 2, c: 3}
const {a, b, d} = myObject

console.log(a, b, d)

const monsterCopy = {...monsterArray[0]}
console.log(monsterCopy)

const monster2Copy = {...monsterArray[0], Height: 75, alternateForm: "bat", age: 150}
console.log(monster2Copy, "this is another monster");