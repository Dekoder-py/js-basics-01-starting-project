const defaultResult = 0;
let currentResult = defaultResult;

function add() {
	const enteredNum = parseInt(userInput.value);
	const calcDesc = `${currentResult} + ${enteredNum}`;
	currentResult = currentResult + enteredNum;
	outputResult(currentResult, calcDesc);
}

addBtn.addEventListener('click', add);
