const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumInput() {
	return parseInt(userInput.value);
}

function add() {
	const enteredNum = getUserNumInput();
	const calcDesc = `${currentResult} + ${enteredNum}`;
	currentResult = currentResult + enteredNum;
	outputResult(currentResult, calcDesc);
}

function subtract() {
	const enteredNum = getUserNumInput();
	const calcDesc = `${currentResult} - ${enteredNum}`;
	currentResult = currentResult - enteredNum;
	outputResult(currentResult, calcDesc);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
