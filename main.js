let firstOperand = '';
let secondOperand = '';
let currentOperator = null;

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
        return 'Error';
    } else {
        return a / b;
    }
}

function setOperator(operator) {
    if (firstOperand === '') return;
    if (currentOperator !== null) calculate();
    currentOperator = operator;
    secondOperand = firstOperand;
    firstOperand = '';
}

function calculate() {
    if (currentOperator === null || firstOperand === '') return;
    output = roundResult(currentOperator(parseFloat(secondOperand), parseFloat(firstOperand)));
    firstOperand = output;
    document.getElementById('display').innerText = output;
    currentOperator = null;
}

function appendNumber(number) {
    if (document.getElementById('display').innerText === '0' || document.getElementById('display').innerText === 'Error') {
        clearDisplay();
    }
    firstOperand += number;
    document.getElementById('display').innerText = firstOperand;
}

function clearDisplay() {
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
    document.getElementById('display').innerText = '0';
}

function roundResult(number) {
    return Math.round(number * 100000) / 100000;
}