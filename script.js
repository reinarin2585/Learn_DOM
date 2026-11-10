document.querySelector("div").textContent = "Hello from JavaScript!";


const myList = document.getElementById("myList");
myList.style.color = "red";

myList.style.listStyleType = "square";


const newItem = document.createElement("li");
newItem.textContent = "Item 4";
myList.appendChild(newItem);

const button = document.getElementById("submitBtn");
button.textContent = "Click here";
button.style.color = "blue";

const myDiv = document.querySelector("div");
myDiv.style.backgroundColor = "lightblue";
myDiv.style.padding = "20px";

const nameInput = document.getElementById("name");
nameInput.placeholder = "Enter your name";
nameInput.style.backgroundColor = "lightyellow";

const myForm = document.getElementById("myForm");
myForm.style.backgroundColor = "lightpink";
myForm.style.padding = "15px";


const myTable = document.getElementById("myTable");

const newRow = myTable.insertRow();
newRow.insertCell().textContent = "Sarah";
newRow.insertCell().textContent = "31";


const colorSelect = document.getElementById("color");

const newOption = document.createElement("option");
newOption.value = "Sage";
newOption.textContent = "Sage";

colorSelect.add(newOption);