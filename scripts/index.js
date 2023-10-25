import { getMenuData } from './data/menu_data.js';
import { numberOfChoice } from './data/number_of_choice.js';
import { getSelectedCategory } from './menu/get_selected_category.js';
import { buildMenuFillings, buildMenuItems } from './menu/build_menu.js';
import { SelectedFoodEntity } from './entities/selected_food.js';
import { BasketEntity } from './entities/basket.js';
import { BasketItemEntity } from './entities/basket_item.js';
import {
  onClickFilling,
  closeFillingsModal,
  closeFillingsModalEsc,
} from './menu/modal_toggle.js';
import { toCapitalize } from './utils/capitalize.js';
import {
  closeOrderModal,
  closeOrderModalEsc,
  closeLatestStepOfOrder,
  closeLatestStepOfOrderEsc,
  checkOnEmptyFields,
  openOrderModal,
} from './order/index.js';

const foodData = getMenuData();

const selectedFood = new SelectedFoodEntity();
const basket = new BasketEntity();

document
  .querySelector('.breakfastBtn')
  .addEventListener('click', buildMenuItems);
document.querySelector('.lunchBtn').addEventListener('click', buildMenuItems);
document.querySelector('.dinnerBtn').addEventListener('click', buildMenuItems);
document.querySelector('.drinksBtn').addEventListener('click', buildMenuItems);

// choose dish
document
  .querySelector('.fourthFood')
  .addEventListener('click', (e) => onClickChooseBtn(e));
document
  .querySelector('.firstFood')
  .addEventListener('click', (e) => onClickChooseBtn(e));
document
  .querySelector('.secondFood')
  .addEventListener('click', (e) => onClickChooseBtn(e));
document
  .querySelector('.thirdFood')
  .addEventListener('click', (e) => onClickChooseBtn(e));

function onClickChooseBtn(e) {
  const category = getSelectedCategory();
  selectedFood.setCategory(category);

  const selectedDishIndex = numberOfChoice[e.srcElement.classList[1]];
  const selectedDish = foodData[category][selectedDishIndex];
  selectedFood.setDish([selectedDishIndex, selectedDish]);

  buildMenuFillings(e, category);
}

// choose filling
document
  .querySelector('.fillingsAndCostOne')
  .addEventListener('click', (e) =>
    onClickFilling(e, selectedFood, numberOfChoice),
  );
document
  .querySelector('.fillingsAndCostTwo')
  .addEventListener('click', (e) =>
    onClickFilling(e, selectedFood, numberOfChoice),
  );
document
  .querySelector('.fillingsAndCostThree')
  .addEventListener('click', (e) =>
    onClickFilling(e, selectedFood, numberOfChoice),
  );
document
  .querySelector('.fillingsAndCostFour')
  .addEventListener('click', (e) =>
    onClickFilling(e, selectedFood, numberOfChoice),
  );

// add to basket
document
  .querySelector('.addFood')
  .addEventListener('click', onClickAddToBasket);

function onClickAddToBasket() {
  const { category, dish, filling } = selectedFood.getSelectedFood();
  const fillingItem = foodData[category][dish[0]].fillings[filling];
  const basketItem = convertToBasketItem(dish, fillingItem);

  basket.addItem(category, basketItem);
  selectedFood.clearSelectedFood();
  updateBasketContent();
}

function convertToBasketItem(dish, filling) {
  return new BasketItemEntity({
    name: dish[1].name,
    price: filling.price,
    filling: filling.name,
  });
}

document
  .querySelector('.menu__button img')
  .addEventListener('click', openTrolleyWindow);

function openTrolleyWindow() {
  if (
    document
      .querySelector('.basket-container')
      .classList.value.split(' ')
      .indexOf('close-trolley') !== -1
  ) {
    document
      .querySelector('.basket-container')
      .classList.remove('close-trolley');
    document.querySelector('.menu__button img').src = 'assets/png/close.png';
  } else {
    document.querySelector('.basket-container').classList.add('close-trolley');
    document.querySelector('.menu__button img').src = 'assets/png/trolley.png';
  }
}
// close menu modal
const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', () => closeFillingsModal(selectedFood));

document
  .querySelector('.addFood')
  .addEventListener('click', () => closeFillingsModal(selectedFood));
document.addEventListener('keyup', (e) =>
  closeFillingsModalEsc(e, selectedFood),
);

function updateBasketContent() {
  const itemsCount = Object.keys(basket.items)
    .map((key) => basket.items[key].length)
    .filter(Boolean);
  if (!itemsCount.length) return;

  const basketSelector = document.querySelector('.basket');

  basketSelector.classList.remove('empty');
  document.querySelector('.empty-trolley').style.display = 'none';
  basketSelector.innerHTML = '';
  Object.keys(basket.items).map((category) => {
    if (!basket.items[category].length) return;
    basketSelector.innerHTML += `<div class="basket__category basket-${category}">
    <h3 class="basket__category__header">${toCapitalize(category)}</h3>
    </div>`;
    const categorySelector = document.querySelector(`.basket-${category}`);

    basket.items[category].map((item) => {
      const { name, price, filling } = item;
      categorySelector.innerHTML += `    <div class="basket__category__dish">
      <p>${name} ${filling}</p>
      <p>$${price}</p>
    </div>`;
    });
  });
}

// ORDER MODAL
document
  .querySelector('.closeOrderBtn')
  .addEventListener('click', closeOrderModal);

document
  .querySelector('.orderModal')
  .addEventListener('click', closeOrderModalEsc);

document.querySelector('.orderBtn').addEventListener('click', openOrderModal);

document
  .querySelector('.successfullyModal button')
  .addEventListener('click', closeLatestStepOfOrder);
document
  .querySelector('.successfullyModal button')
  .addEventListener('click', closeLatestStepOfOrderEsc);

document
  .querySelector('.sendOrderBtn .btn')
  .addEventListener('click', checkOnEmptyFields);
