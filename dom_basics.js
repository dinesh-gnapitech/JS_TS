// =============================================
// DOM BASICS - JavaScript and the Web Page
// =============================================

// 1. Get element by ID
let heading = document.getElementById("main-heading");
console.log("Heading text:", heading.textContent); // Logs current text

// 2. Change text content
heading.textContent = "Updated by JavaScript!";

// 3. Get elements by class name
let paragraphs = document.getElementsByClassName("info");
console.log("First paragraph:", paragraphs[0].textContent);

// 4. Get elements by tag name
let allPs = document.getElementsByTagName("p");
console.log("Total paragraphs:", allPs.length);

// 5. querySelector (first match)
let firstPara = document.querySelector(".info");
firstPara.style.color = "blue"; // Change text color

// 6. querySelectorAll (all matches)
let allInfoParas = document.querySelectorAll(".info");
allInfoParas.forEach((para) => {
  para.style.fontWeight = "bold";
});

// 7. Create and append new paragraph
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added using JavaScript.";
document.body.appendChild(newPara);

// 8. Style changes
heading.style.backgroundColor = "lightyellow";
heading.style.padding = "10px";
