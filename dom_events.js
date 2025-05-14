// =============================================
// DOM EVENTS - Reacting to User Actions
// =============================================

// 1. Button click using onclick property
let btn = document.getElementById("clickBtn");
btn.onclick = function () {
  document.getElementById("title").textContent = "Button Clicked!";
  document.body.style.backgroundColor = "#f0f8ff"; // light blue
};

// 2. Input event using addEventListener
let input = document.getElementById("nameInput");
let greeting = document.getElementById("greeting");

input.addEventListener("input", function () {
  greeting.textContent = "Hello, " + input.value;
});

// 3. Mouseover and mouseout
btn.addEventListener("mouseover", function () {
  btn.style.backgroundColor = "lightgreen";
});

btn.addEventListener("mouseout", function () {
  btn.style.backgroundColor = ""; // resets to default
});

// 4. Double-click event
btn.addEventListener("dblclick", function () {
  alert("You double-clicked the button!");
});
