console.log("main.js is operational!");

const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".delete");
const operator = document.querySelectorAll(".operator");
const number = document.querySelectorAll(".number");

let screenValue = "";
let runningTotal = 0;
let previousOperator = null;

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

function handleMath(value) {
	if (screenValue === "0") {
		// do nothing
		return;
	}

	const intBuffer = parseInt(screenValue);
	if (runningTotal === 0) {
		runningTotal = intBuffer;
	} else {
		flushOperation(intBuffer);
	}

	previousOperator = value;
	screenValue = "0";
	console.log(runningTotal);
}

function flushOperation(intBuffer) {
	if (previousOperator === "+") {
		runningTotal += intBuffer;
	} else if (previousOperator === "-") {
		runningTotal -= intBuffer;
	} else if (previousOperator === "*") {
		runningTotal *= intBuffer;
	} else if (previousOperator === "/") {
		runningTotal /= intBuffer;
	}
}

function handleSymbol(symbol) {
	switch (symbol) {
		case "C":
			screenValue = "0";
			break;
		case "=":
			if (previousOperator === null) {
				// need two numbers to do math
				return;
			}
			flushOperation(parseInt(screenValue));
			previousOperator = null;
			screenValue = "" + runningTotal;
			runningTotal = 0;
			break;
		case "⬅":
			if (screenValue.length === 1) {
				screenValue = "0";
			} else {
				screenValue = screenValue.slice(0, -1);
			}
			break;
		case "+":
		case "-":
		case "*":
		case "/":
			handleMath(symbol);
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
