import { getFood, numberOfChoice } from '../get_food.js';

const foodData = getFood();

function buildMenuItems(e) {
  const mealtime = e.srcElement.parentElement.classList[0]
    .split('Btn')
    .join('');

  document.querySelector('.selected').classList.remove('selected');
  document
    .querySelector(`.${e.srcElement.parentElement.classList[0]}`)
    .classList.add('selected');

  const headerSelectors = document.querySelectorAll('.foodElementText h2');
  const descriptionSelectors = document.querySelectorAll('.foodElementText p');
  const priceSelectors = document.querySelectorAll('.price h3');
  const imageSelectors = document.querySelectorAll('.foodImage');

  const categories = foodData[mealtime];

  categories.forEach((category, index) => {
    headerSelectors[index].textContent = category.name;
    descriptionSelectors[index].textContent = category.description;
    imageSelectors[index].style.backgroundImage = getImagePath(
      category.images[0],
    );
    priceSelectors[index].textContent = category.price;
  });
}

function buildMenuFillings(e, mealtime) {
  const imageSelectors = document.querySelectorAll('.fillingsItem');
  const headerSelectors = document.querySelectorAll('.fillingsAndCost h4');
  const costSelectors = document.querySelectorAll('.fillingsAndCost p');

  const category = foodData[mealtime];

  const selectedItemIndex = numberOfChoice[e.srcElement.classList[1]];

  const fillingsData = category[selectedItemIndex].fillings;

  fillingsData.forEach((filling, index) => {
    imageSelectors[index].style.backgroundImage = getImagePath(
      category[selectedItemIndex].images[index + 1],
    );
    headerSelectors[index].textContent = filling.name;
    costSelectors[index].textContent = filling.price;
  });
}

function getImagePath(imageName) {
  return `url("../images/${imageName}")`;
}

export { buildMenuItems, buildMenuFillings };
