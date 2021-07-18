let addButton = document.getElementById("addButton");
let todoList = document.getElementById("todoList");
let inputField = document.getElementById("inputField");

addButton.addEventListener("click", addItem);

//e stands for event//
function addItem(e, text) {
    let newItem = document.createElement("li");
    if (!text) {
        newItem.innerText = inputField.value;
        inputField.value="";
    }
    newItem.addEventListener("click", removeItem);
    todoList.appendChild(newItem);
}

function removeItem(event) {
    event.target.remove();
}


