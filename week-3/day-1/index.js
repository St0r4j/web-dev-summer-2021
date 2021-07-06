// object
// example 1
// object = {
//    property: value
// }
// example 2 - there is a nested object
// object = {
//    anotherProperty: anotherValue
// }

const userInputClear = function() {
    const userInput = document.getElementById('userInput');
    userInput.value = null;
}
const userInputPlusOrMinus = function() {
    const userInput = document.getElementById('userInput');
    userInput.value = userInput.value * -1;
}
const userInputPercent = function() {
    const userInput = document.getElementById('userInput');
    userInput.value = userInput.value * 100 + '%';
}
const addDivideOperator = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += '/';
}
const addMultiplyOperator = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += '*';
}
const addSubtractOperator = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += '-';
}
const addPlusOperator = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += '+';
}
const addEqualOperator = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += '=';
}
const userInputPoint = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += '.';
}
const userInputZero = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += 0;
}
const userInputOne = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += 1;
}
const userInputTwo = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += 2;
}
const userInputThree = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += 3;
}
const userInputFour = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += 4;
}
const userInputFive = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += 5;
}
const userInputSix = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += 6;
}
const userInputSeven = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += 7;
}
const userInputEight = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += 8;
}
const userInputNine = function() {
    const userInput = document.getElementById('userInput');
    userInput.value += 9;
}

const calculateResult = function() {
    // get string from user input
    const userInput = document.getElementById('userInput');


    // if string contains (+)
    if (userInput.value.includes('+')) {
        // get each number from string e.g. 7+7, 
        const numArray = userInput.value.split('+') // e.g. '7+7' => ['7', '+', '7']
        // define and set variable, firstNumber = 7
        const firstNumber = parseFloat(numArray[0])
        // define and set variable, SecondNumber = 7
        const secondNumber = parseFloat(numArray[1])

        userInput.value = firstNumber + secondNumber
    } else if (userInput.value.includes('-')) {
        const numArray = userInput.value.split('-') // e.g. '7+7' => ['7', '+', '7']
        // define and set variable, firstNumber = 7
        const firstNumber = parsF(numArray[0])
        // define and set variable, SecondNumber = 7
        const secondNumber = parseFloat(numArray[1])

        userInput.value = firstNumber - secondNumber
    } else if (userInput.value.includes('*')) {
        const numArray = userInput.value.split('*') // e.g. '7+7' => ['7', '+', '7']
        // define and set variable, firstNumber = 7
        const firstNumber = parseFloat(numArray[0])
        // define and set variable, SecondNumber = 7
        const secondNumber = parseFloat(numArray[1])

        userInput.value = firstNumber * secondNumber
    } else if (userInput.value.includes('/')) {
        const numArray = userInput.value.split('/') // e.g. '7+7' => ['7', '+', '7']
        // define and set variable, firstNumber = 7
        const firstNumber = parseFloat(numArray[0])
        // define and set variable, SecondNumber = 7
        const secondNumber = parseFloat(numArray[1])

        userInput.value = firstNumber / secondNumber
    }
        
    // determine the operation i.e. +, -, *, /
    // if string contains (+)
        // userInput = firstNumber + Second Number
    // if string contains (-)
        // userInput = firstNumber - Second Number
    // if string contains (*)
        // userInput = firstNumber * Second Number
    // if string contains (/)
        // userInput = firstNumber / Second Number
}