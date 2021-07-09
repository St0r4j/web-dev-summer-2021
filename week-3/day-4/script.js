console.log("Hello JS World");
/*

EVENT: when the submit button is clicked
*validation*
1. grab the value of the input field
2. create a DOM element
    2a. a li element
3. make it display
    3a. assign the input to a variable
    3b. put it between the body
    3c. add to the ul; as it is the parent element
*clear the input field*

*/

/*
SELECTING DOM ELEMENTS

1. getElementByID  // single element
2. getElementsByClassName
3. getElementsByTagName

*/

function createNewTask() {
    console.log("the button has been clicked");
    
    // grab the value of the input field and assign
    // it to a variable we can reference later
    var inputField = document.getElementById("taskInput");
    var inputValue = inputField.value;
    
    // Input validation
    if (inputValue != "") {

    // var inputValue = inputElement.nodeValue;
    console.log(inputValue);

    // create a DOM element (li) and assign it to a variable we can reference later
    var newLi = document.createElement("li");

    // 3a. assign the text of the li to be the input value
    newLi.innerText = inputValue;

    // 3b. add to the ul; as it is the parent element
    var ulList = document.getElementById("taskList");
    ulList.appendChild(newLi);

    //clear the input field
    inputField.value = null;
    }
}