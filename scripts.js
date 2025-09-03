let a = 10;
let b = 20;
let c = a + b;
console.log(c);

let age = 20;

// Conditional statement
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are underage.");
}

let temprature = 30;

if (temprature > 25) {
  console.log("It's a hot day.");
} else {
  console.log("It's a cool day.");
}


// For loop
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

// While loop
let count = 1;
while (count <= 5) {
  console.log("Count: " + count);
  count++;
}
// Function to add two numbers
function addition(x, y) {
    return x + y;
}
console.log(addition(4, 8));

//DOM Manipulation
let heading = document.querySelector('.title');
heading.textContent = "Welcome to the Updated Week 5 of JavaScript";
heading.style.color = "blue";


let button = document.querySelector('.btn');
button.addEventListener('click', function() {
    alert('Button clicked! The sum is: ' + c);
});