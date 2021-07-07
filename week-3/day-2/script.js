/*
var arr = [1,2,3,4];

// retrieve a user's name

arr.push(5);
arr.push("5","3",2,4,5);

console.log(arr); [1,2,3,4,5,'5','3',2,4,5]

// ARRAY METHOD: POP

arr.pop();

console.log(arr); [1,2,3,4,5,'5','3',2,4,5]

var lastRemovedItem = arr.pop();
*/
// JS DATA TYPES

/*
- String
- Number
- Boolean
- Array
- Object
*/

/*
BOOLEANS ARE EITHER TRUE OR FALSE
*/
/*
var isTheLightOn = false;

if (isTheLightOn == true) {
    // I can see
    // perform the logic
} else {
    isTheLightOn = true;
}

var age = 21;

if (age >= 21) {
    // allow into bar
} else {
    // kick him out
}
*/

// MODULUS % -- REMAINDER OF A DIVISION
// 5%2 = 1
// 6%2 = 0

/*
function isEven(num) {
    return num%2 == 0
}

var num = 10;

if (num % 2 == 0) {
    console.log("ITS EVEN");
} else {
    console.log("ITS ODD");
}

ITS EVEN
*/

// = ASSIGNMENT -- var something = [];
// == LOOSE EQUALS -- compares the values, but not the data type
// === STRICT EQUALS -- compares both values and type

//falsy and truthy


// IF STATEMENTS
/*
if (evaluation/comparison) {
    // perfomr logic
} else if (in sequence, next comparison) {
    // perfomr logic
} else if (in sequence, next comparison) {
    // perfomr logic
} else {
    // whan all else fails, do this.
}
*/


// Write a chained if/else if statement to fullfill the following conditions:
/*
var size = 13;

if (size < 5){
    console.log("Xtra Small");
} else if (size < 10){
    console.log("Small");
} else if (size < 15){
    console.log("Medium");
} else if (size < 20){
    console.log("Large");
} else if (size >= 20){
    console.log("Xtra-Large");
}
*/
/*
var par = 1;
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go home!"];

if (par <= 1) {
    console.log(names[0]);
} else if (par <= 2) {
    console.log(names[1]);
}
*/


// LOOPS

// It runs while a specified condition is met/true and stops once that condition is no longer true.
/*
var counter = 5;

while(counter) {
    console.log (counter);
    counter--;
}
*/

var shirtSizeArray = [3, 4, 11, 21, 16, 9];
var i = 0;

while (i < shirtSizeArray.length) {
    var size = shirtSizeArray[i];

    if (size < 5) {
        console.log("Xtra Small");
    } else if (size < 10) {
        console.log("Small");
    } else if (size < 15) {
        console.log("Medium");
    } else if (size < 20) {
        console.log("Large");
    } else if (size >= 20) {
        console.log("Xtra Large");
    } else {
        console.log('You have to type a number.')
    }
    i++
}


// FOR LOOPS

for (var i = 0; i < shirtSizeArray.length; i++) {
    // perform logic
}





var myArray = [];

for (var i = 0; i < 10; i++) {
    if (i%2 !== 0){
        myArray.push(i);
    }
}
for (var i = 0; i < 10; i++) {
    if (i%2 == 1){
        myArray.push(i);
    }
}
for (var i = 1; i < 10; i+2) {
    myArray.push(i);
}
