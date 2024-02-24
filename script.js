function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Error: Division by zero");
  }
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
}

let firstNumber;
let secondNumber;
let operator;

// Get the display element
const display = document.querySelector('.display');

// Function to add a digit to the display
function addDigit(digit) {
  display.textContent += digit;
}

// Function to add an operator to the display
function addOperator(op) {
  display.textContent += op;
  operator = op;
}

function calculate() {
  let expression = display.textContent;
  let operatorIndex = expression.search(/[\+\-\*\/]/);
  firstNumber = parseFloat(expression.slice(0, operatorIndex));
  secondNumber = parseFloat(expression.slice(operatorIndex + 1));
  display.textContent = operate(firstNumber, secondNumber, operator);
}

// Function to clear the display
function clearDisplay() {
  display.textContent = '';
}