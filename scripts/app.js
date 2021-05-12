const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator}${calcNumber}`;
  console.log(calcDescription);
  outputResult(currentResult, calcDescription);
}

function writeToLog(operator, prevResult, Number, newResult) {
  const logEntry = {
    operation: operator,
    prevResult: prevResult,
    number: Number,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calcType) {
  /*if (
    calcType === "add" ||
    calcType === "subtract" ||
    calcType === "multiply" ||
    calcType === "divide"
  ) {
  }*/

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calcType === "add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calcType === "subtract") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calcType === "multiply") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calcType === "divide") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  if (
    calcType !== "add" &&
    calcType !== "subtract" &&
    calcType !== "multiply" &&
    calcType !== "divide"
  ) {
    return;
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calcType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("add");
}

function subtract() {
  calculateResult("subtract");
}
function multiply() {
  calculateResult("multiply");
}
function divide() {
  calculateResult("divide");
}

/*
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
*/

addBtn.addEventListener("click", calculateResult.bind(this, "add"));
subtractBtn.addEventListener("click", calculateResult.bind(this, "subtract"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "multiply"));
divideBtn.addEventListener("click", calculateResult.bind(this, "divide"));

/*
 const calcResult = (operation)=>{
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let Operator;
  if (operation === "add") {
    currentResult += enteredNumber;
    Operator = "+";
  } else if (operation === "subtract") {
    currentResult -= enteredNumber;
    Operator = "-";
  } else if (operation === "multiply") {
    currentResult *= enteredNumber;
    Operator = "*";
  } else if (operation === "divide") {
    currentResult /= enteredNumber;
    Operator = "/";
  
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calcType, initialResult, enteredNumber, currentResult);

 }
*/
