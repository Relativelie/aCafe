const foodDict = {
    "breakfast": [
        ["Croissants", "Classic French croissant", "from $1", ["with trout", "$5"], ["with bacon", "$3"], ["with jam", "$2"], ["with without filling", "$1"], "croissant.jpg", "salmon.jpg", "bacon.jpg", "jamTwo.jpg", ""],
        ["Benedicts", "Grilled vegetables, fried peppers and toast", "from $8", ["Large portion(400g)", "$20"], ["Medium portion(350g)", "$15"], ["Small portion(250g)", "$12"], ["eXtra small portion(100g)", "$8"], "benedicts.jpg", "benedictOne.jpg", "benedictTwo.jpg", "benedictThree.jpg", "benedicts.jpg"],
        ["Porridge", "A steaming, creamy bowl of Porridge is something magical", "from $1", ["with trout", "$5"], ["with bacon", "$3"], ["with jam", "$2"], ["with without filling", "$1"], "porridge.jpg", "salmon.jpg", "bacon.jpg", "jamTwo.jpg", ""],
        ["Pancakes", "Classic fluffy American pancakes", "from $1", ["with pineapple", "$5"], ["with peach", "$3"], ["with berries", "$2"], ["without filling", "$1"], "pancakes.jpg", "pineapple.jpg", "peach.jpg", "berries.jpg", ""]
    ],
    "lunch": [
        ["Salad", "Healthy and low calorie food", "from $4", ["Caesar", "$4"], ["Leafy Green", "$5"], ["Greek", "$4"], ["Fattoush", "$5"], "salad.jpg", "caesar.jpg", "leafyGreen.jpg", "greek.jpg", "fattoush.jpg"],
        ["Appetizers", "Healthy and low calorie food", "from $2", ["Vegetable and Fruit", "$3"], ["Meal and Cheese", "$6"], ["Hot Appetizers", "$5"], ["Dips", "$2"], "appetizers.jpg", "fruit.jpg", "cheese.jpg", "hot.jpg", "dips.jpg"],
        ["Soup", "Healthy and low calorie food", "from $1", ["Chicken Noodle", "$1"], ["Tortilla", "$5"], ["Cream", "$3"], ["Chowder", "$2"], "soup.jpg", "soupOne.jpg", "soupTwo.jpg", "soupThree.jpg", "soupFour.jpg"],
        ["Sandwiches", "Low calorie food", "from $2", ["with bacon", "$5"], ["with beef", "$6"], ["Cheese", "$3"], ["with chicken", "$2"], "sandwiches.jpg", "bacon.jpg", "beef.jpg", "cheese.jpg", "chicken.jpg"]
    ],
    "dinner": [
        ["Pasta", "Our appetizers should be big on flavour, small on size and price", "from $2", ["with bacon", "$5"], ["with beef", "$6"], ["with cheese", "$3"], ["with chicken", "$2"], "pasta.jpg", "bacon.jpg", "beef.jpg", "cheese.jpg", "chicken.jpg"],
        ["Seafood", "Always a great choice", "from $12", ["shrimp", "$15"], ["oysters", "$12"], ["crayfish", "$16"], ["salmon", "$25"], "seafood.jpg", "shrimp.jpg", "oysters.jpg", "crayfish.jpg", "salmon.jpg"],
        ["Meat", "Always a great choice", "from $10", ["Half roasted lemon chicken", "$10"], ["Lightly smoked & grilled pork chop", "$13"], ["Half roasted veal osso bucco", "$14"], ["Grilled tuscan rubbed filet mignon", "$15"], "meat.jpg", "lemonChicken.jpg", "porkChop.jpg", "meatThree.jpg", "filetMignon.jpg"],
        ["Wraps", "Always a great choice", "from $2", ["Spicy Fish", "$5"], ["Malibu Melt", "$6"], ["Vegetarian", "$3"], ["Roast Beef", "$2"], "wraps.jpg", "salmon.jpg", "wrapsTwo.jpg", "wrapsThree.jpg", "wrapsFour.jpg"]
    ],
    "drinks": [
        ["Cocktails", "We offer a great variety of the very best cocktails you’ll find", "from $2", ["Old Fashioned", "$2"], ["Negroni", "$3"], ["Whiskey Sour", "$5"], ["Dry Martini", "$6"], "cocktails.jpg", "oldFashioned.jpg", "negroni.jpg", "whiskeySour.jpg", "dryMartini.jpg"],
        ["Wine", "Each wine listed below also includes alternative varieties that taste similar", "from $18", ["Chardonnay", "$20"], ["Pinot Grigio", "$25"], ["Cabernet Sauvignon", "$22"], ["Merlot", "$18"], "wine.jpg", "chardonnay.jpg", "pinotGrigio.jpg", "cabernetSauvignon.jpg", "merlot.jpg"],
        ["Coffee&Tea", "Healthy and low calorie", "from $1", ["Latte", "$2"], ["Cappuccino", "$3"], ["Green/black tea", "$1"], ["Robusta", "$3"], "coffee.jpg", "latte.jpg", "cappuccino.jpg", "tea.jpg", "robusta.jpg"],
        ["Beer", "Always a great choice", "from $3", ["Ale", "$3"], ["Porter", "$5"], ["Blonde/brown ale", "$3"], ["Stout", "$3"], "beer.jpg", "ale.jpg", "beerOne.jpg", "beerTwo.jpg", "beerThree.jpg"]
    ]
}

const numberOfChoice = {
    "firstFood": 0,
    "secondFood": 1,
    "thirdFood": 2,
    "fourthFood": 3,
    "fillingOne": 3,
    "fillingTwo": 4,
    "fillingThree": 5,
    "fillingFour": 6
}


// FOOD VARIATION
const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", closeFillingsModal);
document.querySelector(".addFood").addEventListener("click", closeFillingsModal);
document.addEventListener("keyup", closeFillingsModalEsc);



function closeFillingsModal() {
    document.querySelector(".fillings").style.display = "none";
}

function closeFillingsModalEsc(e) {
    if (e.key === "Escape") {
        document.querySelector(".fillings").style.display = "none";
    }
}

document.querySelector(".fourthFood").addEventListener("click", buildingVariation);
document.querySelector(".firstFood").addEventListener("click", buildingVariation);
document.querySelector(".secondFood").addEventListener("click", buildingVariation);
document.querySelector(".thirdFood").addEventListener("click", buildingVariation);


let selectedEating;
let selectedTypeOfFood;

function buildingVariation(e) {
    document.querySelector(".fillings").style.display = "flex"
    let eating = document.querySelector(".selected").classList[0].split("Btn").join("");
    selectedEating = document.querySelector(".selected").classList[0].split("Btn").join("");
    selectedTypeOfFood = e.srcElement.classList[1];


    const variationsImage = document.querySelectorAll(".fillingsItem");
    const variationsHeaders = document.querySelectorAll(".fillingsAndCost h4");
    const variationsCosts = document.querySelectorAll(".fillingsAndCost p");

    let variation = 3;
    let variationImage = 8;
    for (let i = 0; i < variationsHeaders.length; i++) {
        variationsImage[i].style.backgroundImage = `url("images/${foodDict[eating][numberOfChoice[e.srcElement.classList[1]]][variationImage]}")`;
        variationsHeaders[i].textContent = foodDict[eating][numberOfChoice[e.srcElement.classList[1]]][variation][0];
        variationsCosts[i].textContent = foodDict[eating][numberOfChoice[e.srcElement.classList[1]]][variation][1];
        variationImage++
        variation++
    }
}


// MENU
document.querySelector(".breakfastBtn").addEventListener("click", buildingMenu);
document.querySelector(".lunchBtn").addEventListener("click", buildingMenu);
document.querySelector(".dinnerBtn").addEventListener("click", buildingMenu);
document.querySelector(".drinksBtn").addEventListener("click", buildingMenu);


function buildingMenu(e) {

    let eating = e.srcElement.parentElement.classList[0].split("Btn").join("");

    document.querySelector(".selected").classList.remove('selected');
    document.querySelector(`.${e.srcElement.parentElement.classList[0]}`).classList.add('selected');

    const foodHeaders = document.querySelectorAll(".foodElementText h2");
    const foodAdditionalText = document.querySelectorAll(".foodElementText p");
    const foodPrice = document.querySelectorAll(".price h3");
    const foodImage = document.querySelectorAll(".foodImage");


    for (let i = 0; i < foodHeaders.length; i++) {
        foodHeaders[i].textContent = foodDict[eating][i][0];
        foodAdditionalText[i].textContent = foodDict[eating][i][1];
        foodImage[i].style.backgroundImage = `url("images/${foodDict[eating][i][7]}")`;
        foodPrice[i].textContent = foodDict[eating][i][2];
    }
}


// choose food
document.querySelector(".fillingOne").addEventListener("click", chooseFood);
document.querySelector(".fillingTwo").addEventListener("click", chooseFood);
document.querySelector(".fillingThree").addEventListener("click", chooseFood);
document.querySelector(".fillingFour").addEventListener("click", chooseFood);

function chooseFood(e) {
    if (e.srcElement.classList.value.split(" ").indexOf("selectedFood") != -1) {
        document.querySelector(`.${e.srcElement.classList[0]}`).classList.remove("selectedFood");
    }

    else {
        document.querySelector(`.${e.srcElement.classList[0]}`).classList.add("selectedFood");
    }
}



document.querySelector(".addFood").addEventListener("click", addOnTrolley);


let basket = {
    "breakfast": {},
    "lunch": {},
    "dinner": {},
    "drinks": {}
};

let allselected = [];
function addOnTrolley() {


    let selectedFoodArray = foodDict[(selectedEating.replace(/['"]+/g, ''))][numberOfChoice[selectedTypeOfFood]];
    let eating = basket[selectedEating];
    if (!(selectedFoodArray[0] in eating)) {
        eating[selectedFoodArray[0]] = {};
    }

    let selectedFillings = document.querySelectorAll(".selectedFood");
    for (let i = 0; i < selectedFillings.length; i++) {
        let fillingName = selectedFoodArray[numberOfChoice[selectedFillings[i].classList[0].replace(/['"]+/g, '')]][0];
        if (!(fillingName in eating[selectedFoodArray[0]])) {
            eating[selectedFoodArray[0]][fillingName] = [1, selectedFoodArray[numberOfChoice[selectedFillings[i].classList[0].replace(/['"]+/g, '')]][1]];
        }
        else {
            eating[selectedFoodArray[0]][fillingName][0]++;
        }
    }


    addFoodOnTrolley(basket);

    for (let item = 0; item < selectedFillings.length; item++) {
        selectedFillings[item].classList.remove("selectedFood");
    }
}


// trolley
document.querySelector(".menuImage img").addEventListener("click", openTrolleyWindow);

function openTrolleyWindow() {
    if (document.querySelector(".trolleyMenu").classList.value.split(" ").indexOf("closeTrolley") != -1) {
        document.querySelector(".trolleyMenu").classList.remove("closeTrolley");
        document.querySelector(".menuImage img").src = "images/close.png";
    }

    else {
        document.querySelector(".trolleyMenu").classList.add("closeTrolley");
        document.querySelector(".menuImage img").src = "images/trolley.png";
    }
}

let count = 0;
let orderCost = 0;
function addFoodOnTrolley(list) {
    if (list.length != 0) {
        count = 0;
        orderCost = 0;
        let eatingNames = ["breakfast", "lunch", "dinner", "drinks"];
        document.querySelector(".trolleyMenu").classList.remove("empty");
        document.querySelector(".emptyText").style.display = "none";
        let functionResult = [];
        for (let i = 0; i < eatingNames.length; i++) {
            if (Object.keys(list[eatingNames[i]]).length != 0) {
                functionResult.push(addFoodOnHtml(list[eatingNames[i]], eatingNames[i]));
            }
        }

        for (let number = 0; number < functionResult.length; number++) {
            count += functionResult[number][0];
            if (functionResult[number][0] === 0) {
                document.querySelector(`.${functionResult[number][1]}Trolley`).style.display = "none";
            }
        }
        if (count === 0) {
            document.querySelector(".trolleyCount").style.display = "none";
            document.querySelector(".trolleyMenu").classList.add("empty");
            document.querySelector(".emptyText").style.display = "block";
            document.querySelector(`.notEmptyTrolley`).style.display = "none";
        }

        if (count != 0) {
            document.querySelector(".trolleyCount").style.display = "flex";
            document.querySelector(".trolleyCount").textContent = count;

            document.querySelector(".orderCosts p").textContent = `$${orderCost}`;
            document.querySelector(".costBasket").textContent = `$${orderCost}`;
        }
    }
}

let itemNumber = 0
function addFoodOnHtml(list, eatingName) {

    let countOfFood = 0;
    let allselectedFood = Object.keys(list);
    document.querySelector(".notEmptyTrolley").style.display = "flex";

    document.querySelector(`.${eatingName}Trolley`).style.display = "block";
    document.querySelector(`.${eatingName}Trolley .eatingName`).style.display = "block";
    document.querySelector(`.${eatingName}Trolley .typeOfFoodItem`).innerHTML = "";

    for (let i = 0; i < allselectedFood.length; i++) {
        for (let item = 0; item < Object.keys(list[allselectedFood[i].replace(/['"]+/g, '')]).length; item++) {

            let a = Object.keys(list[allselectedFood[i].replace(/['"]+/g, '')])[item].replace(/['"]+/g, '')


            document.querySelector(`.${eatingName}Trolley .typeOfFoodItem`).innerHTML += `
                <div>
                                        <div class="foodName foodName${itemNumber}"><p><span class="foodNameOnBasket${itemNumber}">${allselectedFood[i]}</span> <span class="fillingOnBasket${itemNumber}">${Object.keys(list[allselectedFood[i].replace(/['"]+/g, '')])[item]}</span></p></div>
                                        <div class="changeCount changeCount${itemNumber}">
                                        <div class="removeFood removeFood${itemNumber}" onclick="addOrRemoveFoodFromBasket(this)"><p>-</p></div>
                                        <p class="foodCount foodCount${itemNumber}">${list[allselectedFood[i].replace(/['"]+/g, '')][a][0]}</p>
                                        <div class="addFoodOnBasket addFoodOnBasket${itemNumber}" onclick="addOrRemoveFoodFromBasket(this)"><p>+</p></div>
                                        </div>
                                        
                                        <div class="cost">
                                        <p>$${list[allselectedFood[i].replace(/['"]+/g, '')][a][1].substring(1) * list[allselectedFood[i].replace(/['"]+/g, '')][a][0]}</p></div></div>
`;
            countOfFood += list[allselectedFood[i].replace(/['"]+/g, '')][a][0];
            itemNumber++
            orderCost += list[allselectedFood[i].replace(/['"]+/g, '')][a][1].substring(1) * list[allselectedFood[i].replace(/['"]+/g, '')][a][0];
        }

        if (Object.keys(list[allselectedFood[i].replace(/['"]+/g, '')]).length === 0) {
            countOfFood = 0
        }
    }
    return [countOfFood, eatingName]
}

// order
document.querySelector(".closeOrderBtn").addEventListener("click", closeOrderModal)

function closeOrderModal() {
    document.querySelector(".orderBlock").style.display = "none";
}

function closeOrderModalEsc(e) {
    if (e.key === "Escape") {
        document.querySelector(".orderBlock").style.display = "none";
    }
}

document.querySelector(".orderBtn").addEventListener("click", openOrderModal);
function openOrderModal() {
    document.querySelector(".orderBlock").style.display = "flex";
}

async function sendOrder() {
    const result = await fetch(`https://bankproject.free.beeceptor.com/personal_info`);
    const resultReceived = await result.json();
    document.querySelector(".orderBlock").style.display = "none";
    if (resultReceived.status === "ok") {
        document.querySelector(".successfullyModal h3").textContent = "Your order has been sent for processing";
        document.querySelector(".successfullyModal p").textContent = "We will call you back within 5min";
        document.querySelector(".successfullyModal button").textContent = "Ok"
        document.querySelector(".successfullyOrder").style.display = "flex";
    }
    else {
        document.querySelector(".successfullyModal h3").textContent = "Sorry, something is gone wrong";
        document.querySelector(".successfullyModal p").textContent = "You may either try to log on again after several minutes or contact us +000 000 000";
        document.querySelector(".successfullyModal button").textContent = "Ok"
        document.querySelector(".successfullyOrder").style.display = "flex";
    }
}


document.querySelector(".successfullyModal button").addEventListener("click", closeLatestStepOfOrder);
document.querySelector(".successfullyModal button").addEventListener("click", closeLatestStepOfOrderEsc);

function closeLatestStepOfOrder() {
    document.querySelector(".successfullyOrder").style.display = "none";
    location.reload()
}

function closeLatestStepOfOrderEsc(e) {
    if (e.key === "Escape") {
        document.querySelector(".fillings").style.display = "none";
        location.reload()
    }
}



document.querySelector(".sendOrderBtn .btn").addEventListener("click", checkOnEmptyFields);
const allModals = document.querySelectorAll(".orderModal input");

function checkOnEmptyFields() {
    let checkList = [];
    for (let i = 0; i < allModals.length; i++) {
        if (allModals[i].value === "") {
            allModals[i].classList.add("redBorder");
            checkList.push("false");
        }

        else {
            allModals[i].classList.remove("redBorder");
        }
    }
    if (checkList.length === 0) {
        sendOrder()
    }
}

function checkOnRedBorder() {
    for (let i = 0; i < allModals.length; i++) {
        if (allModals[i].classList.value === "") {
            allModals[i].classList.add("redBorder");
        }
    }
}




function addOrRemoveFoodFromBasket(e) {
    let numberOfElement
    if (e.classList[0] === "removeFood") {
        numberOfElement = e.classList[1].slice(10);
    }
    else {
        numberOfElement = e.classList[1].slice(15);
    }
    let eatingBasketName;
    let eatings

    let foodNameOnBasket = document.querySelector(`.foodNameOnBasket${numberOfElement}`).textContent;
    let fillingNameOnBasket = document.querySelector(`.fillingOnBasket${numberOfElement}`).textContent
    let eatingsName = ["breakfast", "lunch", "dinner", "drinks"];
    for (let i = 0; i < eatingsName.length; i++) {
        if (foodNameOnBasket in basket[eatingsName[i]]) {
            if (fillingNameOnBasket in basket[eatingsName[i]][foodNameOnBasket]) {
                eatingBasketName = basket[eatingsName[i]][foodNameOnBasket][fillingNameOnBasket];
                eatings = eatingsName[i];
            }
        }
    }



    if (e.classList[0] === "addFoodOnBasket") {
        eatingBasketName[0] += 1;
        document.querySelector(`.foodCount${numberOfElement}`).textContent = eatingBasketName[0];

    }

    else {
        if (eatingBasketName[0] === 1) {
            delete basket[eatings][foodNameOnBasket][fillingNameOnBasket];
        }

        else {
            eatingBasketName[0] -= 1;
            document.querySelector(`.foodCount${numberOfElement}`).textContent = eatingBasketName[0];
        }
    }
    addFoodOnTrolley(basket)
}

// EVENTS

let eventBlock = document.querySelectorAll(".newsItem")
function showEvents() {
    let i=0;
        let myInterval = setInterval(function() {
            eventBlock[i].style.opacity = 1;
            eventBlock[i].style.top = 0;
            i++
            if (i===eventBlock.length) {
                clearInterval(myInterval)
            }
        }, 200);
    }
    


let observer = new IntersectionObserver(function (e) {
    if (e[0].isIntersecting === true) {
        showEvents();
        observer.disconnect();
    }
}, { threshold: [0.3] });

observer.observe(document.querySelector(".newsBlockContainer"));

document.querySelector(".addFood").addEventListener("click", animatedBasket)

function animatedBasket() {
    document.querySelector(".menuImage").classList.remove("removeAnimation");
    let myTimeout = setInterval(function () {
        document.querySelector(".menuImage").classList.add("removeAnimation");
        clearInterval(myTimeout);
    }, 1000)
}