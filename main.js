// BUTTONS ON THE PAGE
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

// TODO make references to all the proper HTML elements you'll be using to display elements to the user
let firstNumberEl = document.querySelector("first-number");
let operatorEl = document.querySelector("operator");
let secondNumberEl = document.querySelector("second-number");
let resultEl = document.querySelector("result");

// TODO make variables to keep track of the 1st number, operator, 2nd number, and the result of the math.

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

for(let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', clickNumber);
}
for(let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', clickOperator);
}
equalButton.addEventListener('click', clickEqualButton);
clearButton.addEventListener('click', clickClearButton);

function clickNumber(event) {
  // CODE GOES HERE
  if (operator == '') {
    firstNumber += event.target.value;
      console.log(firstNumber);
      document.getElementById('first-number').innerHTML = firstNumber;
  } else if (operator !== '') {
    secondNumber += event.target.value;
    console.log(secondNumber);
    document.getElementById('second-number').innerHTML = secondNumber;
  }
}



function clickOperator(event) {
  // console.log(event.target.value);
  // CODE GOES HERE
  if (firstNumber !== '') {
    operator = event.target.value;
      console.log(operator);
      document.getElementById('operator').innerHTML = operator;
  }
} 

function clickEqualButton() {
  // CODE GOES HERE
  if (secondNumber !== '' && operator == 'plus') {
    result = (Number(firstNumber) + Number(secondNumber));
      console.log(result);
  }
  if (secondNumber !== '' && operator == 'minus') {
    result = (Number(firstNumber) - Number(secondNumber));
      console.log(result);
  }
  if (secondNumber !== '' && operator == 'times') {
    result = (Number(firstNumber) * Number(secondNumber));
      console.log(result);
  }
  if (secondNumber !== '' && operator == 'power') {
    result = (Number(firstNumber) ** Number(secondNumber));
      console.log(result);
  }
  if (secondNumber !== '' && operator == 'divide') {
    result = (Number(firstNumber) / Number(secondNumber));
      console.log(result);
  }
  document.getElementById('result').innerHTML = result;
}

function clickClearButton() {
  // CODE GOES HERE
  if (firstNumber !== '') {
    firstNumber = '';
    console.log(firstNumber);
    document.getElementById('first-number').innerHTML = firstNumber;
  }
  if (secondNumber !== '') {
    secondNumber = '';
    document.getElementById('second-number').innerHTML = secondNumber;
  }
  if (operator !== '') {
    operator = '';
    document.getElementById('operator').innerHTML = operator;;
  }
  if (result !== '') {
    result = '';
    document.getElementById('result').innerHTML = result;
  }
}
