const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumInput() {
	return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBefore, calcNum) {
	const calcDesc = `${currentResult} ${operator} ${calcNum}`;
	outputResult(currentResult, calcDesc);
}

function add() {
	const enteredNum = getUserNumInput();
	const initialResult = currentResult;
	currentResult += enteredNum;
	createAndWriteOutput('+', initialResult, enteredNum);
}

function subtract() {
	const enteredNum = getUserNumInput();
	const initialResult = currentResult;
	currentResult -= enteredNum;
	createAndWriteOutput('-', initialResult, enteredNum);
}

function multiply() {
	const enteredNum = getUserNumInput();
	const initialResult = currentResult;
	currentResult *= enteredNum;
	createAndWriteOutput('*', initialResult, enteredNum);
}

function divide() {
	const enteredNum = getUserNumInput();
	const initialResult = currentResult;
	currentResult /= enteredNum;
	createAndWriteOutput('/', initialResult, enteredNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
