/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

document.querySelector('#addNumbers').addEventListener('click', function () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
});

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

document.querySelector('#multiplyNumbers').addEventListener('click', () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
});

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

document.querySelector('#divideNumbers').addEventListener('click', function () {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
});

/* Decision Structure */
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector('#year').innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray.join(', ');

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(function(number) {
    return number % 2 !== 0;
});
document.querySelector('#odds').innerHTML = oddNumbers.join(', ');

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(function(number) {
    return number % 2 === 0;
});
document.querySelector('#evens').innerHTML = evenNumbers.join(', ');

/* Output Sum of Org. Array */
let sumArray = numbersArray.reduce(function(sum, number) {
    return sum + number;
});
document.querySelector('#sumOfArray').innerHTML = sumArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(function(number) {
    return number * 2;
});
document.querySelector('#multiplied').innerHTML = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
let multipliedArray2 = numbersArray.map(function(number) {
    return number * 2;
});
let sumOfMultiplied = multipliedArray2.reduce(function(sum, number) {
    return sum + number;
});
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;