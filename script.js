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


const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

context.fillStyle = "orange";
context.fillRect(20, 20, 200, 60);

context.fillStyle = "black";
context.font = "20px sans-serif";
context.fillText("Your Signature", 20, 105);

let drawing = false;

function mousePosition(event) {
    const rect = canvas.getBoundingClientRect();

    const x = (event.clientX - rect.left) * canvas.width / rect.width;
    const y = (event.clientY - rect.top) * canvas.height / rect.height;

    return { x, y };
}

canvas.addEventListener("mousedown", function(event) {
    drawing = true;

    const pos = mousePosition(event);
    context.beginPath();
    context.moveTo(pos.x, pos.y);
});

canvas.addEventListener("mousemove", function(event) {
    if (drawing) {
        const pos = mousePosition(event);

        context.lineTo(pos.x, pos.y);
        context.stroke();
    }
});

window.addEventListener("mouseup", function() {
    drawing = false;
});

context.strokeStyle = "darkblue";
context.lineWidth = 2;
context.lineCap = "round";