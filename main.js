console.log("main.js is operational!");

const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".delete");
const operator = document.querySelectorAll(".operator");
const number = document.querySelectorAll(".number");

let screenValue = "";

function buttonClick(value) {
	if (isNaN(parseInt(value))) {
		handleSymbol(value);
	} else {
		handleNumber(value);
	}
	rerender();
}

function handleNumber(number) {
	if (screenValue === "0") {
		screenValue = number;
	} else {
		screenValue += number;
	}
	console.log(screenValue);
}

function handleSymbol(symbol) {
	switch (symbol) {
		case "C":
			screenValue = "0";
			break;
		case "=":
			console.log("equals");
			break;
		case "⬅":
			console.log("backspace");
			break;
		case "+":
		case "-":
		case "*":
		case "/":
			console.log("operator");
			break;
	}
}

function init() {
	buttons.forEach((button) => {
		button.addEventListener("click", (e) => {
			buttonClick(e.target.innerText);
		});
	});
}

function rerender() {
	screen.innerText = screenValue;
}

init();
