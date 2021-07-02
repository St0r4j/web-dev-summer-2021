// Object - create
// definition: a data structure that allows us to store data
// in a key value format

// Can be written in either this way
const obj = {key1: "value1", key2: "value2"};

// or this way

const obj = {
    key1: "value1",
    key2: "value2",
    random: 1,
    "string": "value here"
};

obj.name = 'Brett'; // this is allowed with const
obj = {} // this is not allowed because we used const

// what happens afterwards
const obj = {
    key1: "value1",
    key2: "value2",
    random: 1,
    "string": "value here"
    name: 'Brett'
};

const x = 3;

obj.random = x; // this works as well

// updating a key
obj.random = x;

const person = {
    firstName: 'Brett',
    lastName: 'Cunningham'
}

person['email'] = bwcunninghamii@gmail.com


// delete a key in an object
delete person['email'];

// removes the value from the key
person['email'] = '';
person['email'] = undefined;
person['email'] = null;


const myThing = document.getElementById(); // returns a single DOM element
const myThings = document.getElementsById(); // returns an array of DOM elements

/*

<div class="roger"> </div>

*/

/*
const arrayOfRogers = document.getElementsByClassName("roger");

console.log(arrayOfRogers); // ["<div class="roger">"]

arrayOfRogers[0].style.backgroundColor = 'lemonchiffon';
arrayOfRogers[1].style.fontSize = 'stronger';

let lightSwitch = "on"

let thisNumber = 1;

while (lightSwithc === "on") {
    console.log("SHINE BRIGHT");
    lightSwitch = "off";
}
*/

for (let i = 0; i < arrayOfRogers.length; i++) {
    console.log()
}