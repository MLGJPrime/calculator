// Basic arithmetic functions
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => b === 0 ? "Nice try, but you can't divide by zero!" : a / b,
};

// Get the num and oper elements
const num = document.querySelector('.num');
const oper = document.querySelector('.oper');

let expression = '';
let opSwitch = false;

// Function to add a digit to the num
function addDigit(digit) {
  if (opSwitch) {
    num.textContent = '';
    opSwitch = false;
  }
  num.textContent += digit;
  expression += digit.toString();
}

// Function to add an operator to the num
function addOperator(op) {
  if (checkOperator()) {
    calculate();
    expression = num.textContent;
  }
  expression += op;
  oper.textContent = op;
  opSwitch = true;
}

function calculate() {
  const [firstNumber, operator, secondNumber] = expression.match(/(\d+)([\+\-\*\/])(\d+)/).slice(1);
  const result = operations[operator](parseFloat(firstNumber), parseFloat(secondNumber));
  num.textContent = result;
}

// Function to clear the num
function clearNum() {
  num.textContent = '';
  oper.textContent = '';
  expression = '';
}

function checkOperator() {
  return (['+', '-', '*', '/'].includes(oper.textContent));
}

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});

window.addEventListener('keydown', (event) => {
  if (event.key >= '0' && event.key <= '9') {
    addDigit(event.key);
  } else if (['+', '-', '*', '/'].includes(event.key)) {
    addOperator(event.key);
  } else if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Backspace') {
    clearNum();
  }
});