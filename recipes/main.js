import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}


function tagsTemplate(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}


function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating
            ? `<span aria-hidden="true" class="icon-star">⭐</span>`
            : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}


function recipeTemplate(recipe) {
    return `
    <section class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name} image" class="recipe-img">
        <section class="recipe-info">
            <div class="recipe-tags">
                ${tagsTemplate(recipe.tags)}
            </div>
            <h2 class="recipe-title">${recipe.name}</h2>
            ${ratingTemplate(recipe.rating)}
            <p class="recipe-description">
                ${recipe.description}
            </p>
        </section>
    </section>
    `;
}


function renderRecipes(recipeList) {
    const outputElement = document.querySelector('#recipes');
    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    outputElement.innerHTML = recipeHTML;
}


function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

document.addEventListener('DOMContentLoaded', init);

function filter(query) {
    return recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query))
    );
}
function searchHandler(e) {
	e.preventDefault()

	const searchInput = document.querySelector('.search-bar input[name="search"]');
	const query = searchInput.value.toLowerCase();

	const filteredRecipes = filter(query);

	renderRecipes(filteredRecipes);
}

document.querySelector('.search-bar').addEventListener('submit', searchHandler);
