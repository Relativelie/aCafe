import { getFood, numberOfChoice } from './get_food.js';
import { getSelectedCategory } from './menu/fillings_menu/get_selected_category.js';
import { buildMenuFillings, buildMenuItems } from './menu/build_menu.js';
import { SelectedFood } from './selected_food.js';
import { Basket } from './basket/basket.js';
import { BasketItem } from './basket/basket_item.js';
import { onClickFilling } from './menu/fillings_menu/on_click_filling.js';

const foodData = getFood();

const selectedFood = new SelectedFood();
const basket = new Basket();

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
  selectedFood.setDish(selectedDish);

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
  console.log(1, category, dish, filling);

  const basketItem = convertToBasketItem(dish, filling[0]);
  basket.addItem(category, basketItem);
  updateBasketContent();
  // const selectedFoodArray =
  //   foodData[selectedFood.dish][numberOfChoice[selectedTypeOfFood]];
  // const eating = basket[selectedFood.dish];
  // if (!(selectedFoodArray[0] in eating)) {
  //   eating[selectedFoodArray[0]] = {};
  // }

  // const selectedFillings = document.querySelectorAll('.selectedFood');
  // for (let i = 0; i < selectedFillings.length; i++) {
  //   const fillingName =
  //     selectedFoodArray[
  //       numberOfChoice[selectedFillings[i].classList[0].replace(/['"]+/g, '')]
  //     ][0];
  //   if (!(fillingName in eating[selectedFoodArray[0]])) {
  //     eating[selectedFoodArray[0]][fillingName] = [
  //       1,
  //       selectedFoodArray[
  //         numberOfChoice[selectedFillings[i].classList[0].replace(/['"]+/g, '')]
  //       ][1],
  //     ];
  //   } else {
  //     eating[selectedFoodArray[0]][fillingName][0]++;
  //   }
  // }

  // addFoodOnTrolley(basket);

  // for (let item = 0; item < selectedFillings.length; item++) {
  //   selectedFillings[item].classList.remove('selectedFood');
  // }
}

function convertToBasketItem(dish, filling) {
  return new BasketItem({
    name: dish.name,
    price: dish.price,
    filling,
  });
}
// trolley
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
    document.querySelector('.menu__button img').src = 'images/close.png';
  } else {
    document.querySelector('.basket-container').classList.add('close-trolley');
    document.querySelector('.menu__button img').src = 'images/trolley.png';
  }
}

// let count = 0;
// let orderCost = 0;
function updateBasketContent() {
  const itemsCount = Object.keys(basket.items)
    .map((key) => basket.items[key].length)
    .filter(Boolean);
  if (!itemsCount.length) return;

  const basketSelector = document.querySelector('.basket');
  basketSelector.classList.remove('empty');
  document.querySelector('.empty-trolley').style.display = 'none';

  Object.keys(basket.items).map((category) => {
    basketSelector.innerHTML += `              <div class="basket__category basket-${category}">
    <h3 class="basket__category__header">${category}</h3>

    </div>`;
    const categorySelector = document.querySelector(`basket-${category}`);
    basket.items[category].map((item) => {
      console.log(item);
      categorySelector.innerHTML += `    <div class="basket__category__dish">
      <p>${item.name}</p>
      <p>${item.price}</p>
    </div>`;
      console.log(item);
      //       basketSelector.innerHTML += `
      //                 <div>
      //                                         <div class="foodName"><p><span class="foodNameOnBasket">${
      //                                           item.name
      //                                         }</span></p></div>
      //                                         <div class="changeCount changeCount">
      //                                         <div class="removeFood removeFood" onclick="addOrRemoveFoodFromBasket(this)"><p>-</p></div>
      //                                         <p class="foodCount foodCount">${1}</p>
      //                                         <div class="addFoodOnBasket addFoodOnBasket" onclick="addOrRemoveFoodFromBasket(this)"><p>+</p></div>
      //                                         </div>

      //                                         <div class="cost">
      //                                         <p>$${item.fillings[0].price}${
      //         item.fillings[0].name
      //       }</p></div></div>
      // `;
      // basketSelector.innerHTML += `<div>
      // <p>${item.name}</p>
      // <p>${item.price}</p>
      // <p>${item.fillings.map((filling) => filling.name).join(', ')}</p>
      // </div>`;
    });
  });

  // if (list.length !== 0) {
  //   // count = 0;
  //   // orderCost = 0;
  //   // const eatingNames = ['breakfast', 'lunch', 'dinner', 'drinks'];

  //   document.querySelector('.basket-container').classList.remove('empty');
  //   document.querySelector('.empty-trolley').style.display = 'none';
  //   const functionResult = [];
  //   for (let i = 0; i < eatingNames.length; i++) {
  //     if (Object.keys(list[eatingNames[i]]).length !== 0) {
  //       functionResult.push(
  //         addFoodOnHtml(list[eatingNames[i]], eatingNames[i]),
  //       );
  //     }
  //   }

  //   for (let number = 0; number < functionResult.length; number++) {
  //     count += functionResult[number][0];
  //     if (functionResult[number][0] === 0) {
  //       document.querySelector(
  //         `.${functionResult[number][1]}Trolley`,
  //       ).style.display = 'none';
  //     }
  //   }
  //   if (count === 0) {
  //     document.querySelector('.trolley-count').style.display = 'none';
  //     document.querySelector('.basket-container').classList.add('empty');
  //     document.querySelector('.empty-trolley').style.display = 'block';
  //     document.querySelector('.basket').style.display = 'none';
  //   }

  //   if (count !== 0) {
  //     document.querySelector('.trolley-count').style.display = 'flex';
  //     document.querySelector('.trolley-count').textContent = count;

  //     document.querySelector('.orderCosts p').textContent = `$${orderCost}`;
  //     document.querySelector('.costBasket').textContent = `$${orderCost}`;
  //   }
  // }
}

let itemNumber = 0;
function addFoodOnHtml(list, eatingName) {
  let countOfFood = 0;
  const allselectedFood = Object.keys(list);
  document.querySelector('.basket').style.display = 'flex';

  document.querySelector(`.${eatingName}Trolley`).style.display = 'block';
  document.querySelector(`.${eatingName}Trolley .eatingName`).style.display =
    'block';
  document.querySelector(`.${eatingName}Trolley .typeOfFoodItem`).innerHTML =
    '';

  for (let i = 0; i < allselectedFood.length; i++) {
    for (
      let item = 0;
      item < Object.keys(list[allselectedFood[i].replace(/['"]+/g, '')]).length;
      item++
    ) {
      const a = Object.keys(list[allselectedFood[i].replace(/['"]+/g, '')])[
        item
      ].replace(/['"]+/g, '');

      document.querySelector(
        `.${eatingName}Trolley .typeOfFoodItem`,
      ).innerHTML += `
                <div>
                                        <div class="foodName foodName${itemNumber}"><p><span class="foodNameOnBasket${itemNumber}">${
        allselectedFood[i]
      }</span> <span class="fillingOnBasket${itemNumber}">${
        Object.keys(list[allselectedFood[i].replace(/['"]+/g, '')])[item]
      }</span></p></div>
                                        <div class="changeCount changeCount${itemNumber}">
                                        <div class="removeFood removeFood${itemNumber}" onclick="addOrRemoveFoodFromBasket(this)"><p>-</p></div>
                                        <p class="foodCount foodCount${itemNumber}">${
        list[allselectedFood[i].replace(/['"]+/g, '')][a][0]
      }</p>
                                        <div class="addFoodOnBasket addFoodOnBasket${itemNumber}" onclick="addOrRemoveFoodFromBasket(this)"><p>+</p></div>
                                        </div>
                                        
                                        <div class="cost">
                                        <p>$${
                                          list[
                                            allselectedFood[i].replace(
                                              /['"]+/g,
                                              '',
                                            )
                                          ][a][1].substring(1) *
                                          list[
                                            allselectedFood[i].replace(
                                              /['"]+/g,
                                              '',
                                            )
                                          ][a][0]
                                        }</p></div></div>
`;
      countOfFood += list[allselectedFood[i].replace(/['"]+/g, '')][a][0];
      itemNumber++;
      orderCost +=
        list[allselectedFood[i].replace(/['"]+/g, '')][a][1].substring(1) *
        list[allselectedFood[i].replace(/['"]+/g, '')][a][0];
    }

    if (
      Object.keys(list[allselectedFood[i].replace(/['"]+/g, '')]).length === 0
    ) {
      countOfFood = 0;
    }
  }
  return [countOfFood, eatingName];
}

// order
document
  .querySelector('.closeOrderBtn')
  .addEventListener('click', closeOrderModal);

function closeOrderModal() {
  document.querySelector('.orderBlock').style.display = 'none';
}

function closeOrderModalEsc(e) {
  if (e.key === 'Escape') {
    document.querySelector('.orderBlock').style.display = 'none';
  }
}

document.querySelector('.orderBtn').addEventListener('click', openOrderModal);
function openOrderModal() {
  document.querySelector('.orderBlock').style.display = 'flex';
}

async function sendOrder() {
  const result = await fetch(
    'https://bankproject.free.beeceptor.com/personal_info',
  );
  const resultReceived = await result.json();
  document.querySelector('.orderBlock').style.display = 'none';
  if (resultReceived.status === 'ok') {
    document.querySelector('.successfullyModal h3').textContent =
      'Your order has been sent for processing';
    document.querySelector('.successfullyModal p').textContent =
      'We will call you back within 5min';
    document.querySelector('.successfullyModal button').textContent = 'Ok';
    document.querySelector('.successfullyOrder').style.display = 'flex';
  } else {
    document.querySelector('.successfullyModal h3').textContent =
      'Sorry, something is gone wrong';
    document.querySelector('.successfullyModal p').textContent =
      'You may either try to log on again after several minutes or contact us +000 000 000';
    document.querySelector('.successfullyModal button').textContent = 'Ok';
    document.querySelector('.successfullyOrder').style.display = 'flex';
  }
}

document
  .querySelector('.successfullyModal button')
  .addEventListener('click', closeLatestStepOfOrder);
document
  .querySelector('.successfullyModal button')
  .addEventListener('click', closeLatestStepOfOrderEsc);

function closeLatestStepOfOrder() {
  document.querySelector('.successfullyOrder').style.display = 'none';
  location.reload();
}

function closeLatestStepOfOrderEsc(e) {
  if (e.key === 'Escape') {
    document.querySelector('.fillings').style.display = 'none';
    location.reload();
  }
}

document
  .querySelector('.sendOrderBtn .btn')
  .addEventListener('click', checkOnEmptyFields);
const allModals = document.querySelectorAll('.orderModal input');

function checkOnEmptyFields() {
  const checkList = [];
  for (let i = 0; i < allModals.length; i++) {
    if (allModals[i].value === '') {
      allModals[i].classList.add('redBorder');
      checkList.push('false');
    } else {
      allModals[i].classList.remove('redBorder');
    }
  }
  if (checkList.length === 0) {
    sendOrder();
  }
}

function checkOnRedBorder() {
  for (let i = 0; i < allModals.length; i++) {
    if (allModals[i].classList.value === '') {
      allModals[i].classList.add('redBorder');
    }
  }
}

function addOrRemoveFoodFromBasket(e) {
  let numberOfElement;
  if (e.classList[0] === 'removeFood') {
    numberOfElement = e.classList[1].slice(10);
  } else {
    numberOfElement = e.classList[1].slice(15);
  }
  let eatingBasketName;
  let eatings;

  const foodNameOnBasket = document.querySelector(
    `.foodNameOnBasket${numberOfElement}`,
  ).textContent;
  const fillingNameOnBasket = document.querySelector(
    `.fillingOnBasket${numberOfElement}`,
  ).textContent;
  const eatingsName = ['breakfast', 'lunch', 'dinner', 'drinks'];
  for (let i = 0; i < eatingsName.length; i++) {
    if (foodNameOnBasket in basket[eatingsName[i]]) {
      if (fillingNameOnBasket in basket[eatingsName[i]][foodNameOnBasket]) {
        eatingBasketName =
          basket[eatingsName[i]][foodNameOnBasket][fillingNameOnBasket];
        eatings = eatingsName[i];
      }
    }
  }

  if (e.classList[0] === 'addFoodOnBasket') {
    eatingBasketName[0] += 1;
    document.querySelector(`.foodCount${numberOfElement}`).textContent =
      eatingBasketName[0];
  } else if (eatingBasketName[0] === 1) {
    delete basket[eatings][foodNameOnBasket][fillingNameOnBasket];
  } else {
    eatingBasketName[0] -= 1;
    document.querySelector(`.foodCount${numberOfElement}`).textContent =
      eatingBasketName[0];
  }
  updateBasketContent(basket);
}
