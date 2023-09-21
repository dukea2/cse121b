/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Ashley Bastian";
let currentYear = new Date().getFullYear();
let profilePicture = "images/profilepic.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#home picture img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
var favoriteFoods = ["Pizza", "Pasta", "Chocolate", "Ramen", "Rice"];
foodElement.textContent = favoriteFoods.join(", ");
var anotherFood = "Ice Cream";

favoriteFoods.push(anotherFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;