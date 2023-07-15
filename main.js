console.log("main.js is operational!");

const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".delete");
const operator = document.querySelectorAll(".operator");
const number = document.querySelectorAll(".number");

let screenValue = "";

buttons.forEach(function (button) {
	button.addEventListener("click", handleClick);
});
