'use strict';

const monsterArray = [
  {name: 'Dracula', type: 'vampire', height: 64},
  {name: 'Frankenstein', type: 'zombie', height: 74},
  {name: 'Mr. Hyde', type: 'mad scientist', height: 69},
  {name: 'Mummy', type: 'mummy', height: 69},
  {name: 'Creature from the Black Lagoon', type: 'fish', height: 71}
]
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
console.log(monster2Copy);