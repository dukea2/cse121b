const recipeElement = document.getElementById('recipe');
const recipeInfo = [];

const displayRecipe = (meals) => {
    meals.forEach((meal) => {
        const h2 = document.createElement('h2');
        h2.textContent = meal.strMeal;

        const img = document.createElement('img');
        img.src = meal.strMealThumb;
        img.alt = meal.strMeal;
        
        const div = document.createElement('div');
        div.id = "info";

        const ingredientTitle = document.createElement('h3');
        ingredientTitle.textContent = "Ingredients";
        
        const ul = document.createElement('ul');
        
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== '') {
              const li = document.createElement('li');
              li.textContent = `${measure} ${ingredient}`;
              ul.appendChild(li);
            }};
        
        const instructionTitle = document.createElement('h3');
        instructionTitle.textContent = "Instructions";

        const p = document.createElement('p');
        p.textContent = meal.strInstructions;

        recipeElement.appendChild(h2);
        recipeElement.appendChild(img);
        recipeElement.appendChild(div);
        div.appendChild(ingredientTitle);
        div.appendChild(ul);
        div.appendChild(instructionTitle);
        div.appendChild(p);
    });
};

const getRecipe = async () => {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        recipeInfo.push(...data.meals);
        displayRecipe(recipeInfo);
    } catch (error) {
        console.error("Error fetching or displaying recipe:", error);
    }
};

getRecipe();

const generateRecipe = document.getElementById('generate');

generateRecipe.addEventListener('click', () => {
    location.reload();
});
