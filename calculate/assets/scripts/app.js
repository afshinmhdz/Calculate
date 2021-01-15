const defaultResult = 0;
let currentResult = defaultResult;
// Get input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
} 

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc}${operator}${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
}
addBtn.addEventListener("click", add);

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}
multiplyBtn.addEventListener("click", multiply);

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}
subtractBtn.addEventListener("click", subtract);

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}
divideBtn.addEventListener("click", divide);
