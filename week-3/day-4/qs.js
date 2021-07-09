/*
SELECTING DOM ELEMENTS

LEVEL 1
1. document.getElementByID  // single element
2. document.getElementsByClassName
3. document.getElementsByTagName

LEVEL 2
1. document.querySelector << SINGLE
2. document.querySelectorAll << PLURAL

both can accept any type of element selector (anything from level on could be used here)
*/

/*

SINGLE DOM ELEMENT
document.querySelector('#taskList')
document.querySelector('.task')
document.querySelector('div')

ARRAY OF DOM ELEMENTS
document.querySelectorAll('#taskList') - [ul]
document.querySelectorAll('.task') - [li, li]
document.querySelectorAll('div') - []

*/


function createNewTask() {
    var inputField = document.getElementById("taskInput");
    var inputValue = inputField.value;
    
    if (inputValue != "") {
        var newLi = document.createElement("li");
        newLi.innerText = inputValue;
        //newLi.innerHTML = `<span>${inputValue}</span><button class="something" onclick="completeTask()">Complete</button>`
        // Array-like
        newLi.classList.add("task");
        // newLi.classList.remove("task");

        var ulList = document.getElementById("taskList");
        ulList.appendChild(newLi);
        inputField.value = null;
        }
}

function completeTask() {

}