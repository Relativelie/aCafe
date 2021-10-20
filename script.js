const foodDict = {
    "breakfast": [
        ["Croissants", "Classic French croissant", "from $1", ["trout", "$5"], ["bacon", "3$"], ["jam", "$2"], ["without filling", "$1"], "croissant.jpg", "salmon.jpg", "bacon.jpg", "jamTwo.jpg", ""],
        ["Benedicts", "Grilled vegetables, fried peppers and toast", "from $8", ["Large portion(400g)", "$20"], ["Medium portion(350g)", "$15"], ["Small portion(250g)", "$12"], ["eXtra small portion(100g)", "$8"], "benedicts.jpg", "benedictOne.jpg", "benedictTwo.jpg", "benedictThree.jpg", "benedicts.jpg"],
        ["Porridge", "A steaming, creamy bowl of Porridge is something magical", "from $1", ["trout", "$5"], ["bacon", "3$"], ["jam", "$2"], ["without filling", "$1"], "porridge.jpg", "salmon.jpg", "bacon.jpg", "jamTwo.jpg", ""],
        ["Pancakes", "Classic fluffy American pancakes", "from $1", ["pineapple", "$5"], ["peach", "3$"], ["berries", "$2"], ["without filling", "$1"], "pancakes.jpg", "pineapple.jpg", "peach.jpg", "berries.jpg", ""]
    ],
    "lunch": [
        ["Salad", "Healthy and low calorie food", "from $4", ["Caesar", "$4"], ["Leafy Green", "$5"], ["Greek", "$4"], ["Fattoush", "$5"], "salad.jpg", "caesar.jpg", "leafyGreen.jpg", "greek.jpg", "fattoush.jpg"],
        ["Appetizers", "Healthy and low calorie food", "from $2", ["Vegetable and Fruit", "$3"], ["Meal and Cheese", "$6"], ["Hot Appetizers", "$5"], ["Dips", "$2"], "appetizers.jpg", "fruit.jpg", "cheese.jpg", "hot.jpg", "dips.jpg"],
        ["Soup", "Healthy and low calorie food", "from $1", ["Chicken Noodle", "$1"], ["Tortilla", "$5"], ["Cream", "$3"], ["Chowder", "$2"], "soup.jpg", "soupOne.jpg", "soupTwo.jpg", "soupThree.jpg", "soupFour.jpg"],
        ["Sandwiches", "Low calorie food", "from $2", ["Bacon", "$5"], ["Beef", "$6"], ["Cheese", "$3"], ["Chicken", "$2"], "sandwiches.jpg", "bacon.jpg", "beef.jpg", "cheese.jpg", "chicken.jpg"]
    ],
    "dinner": [
        ["Pasta", "Our appetizers should be big on flavour, small on size and price", "from $2", ["Bacon", "$5"], ["Beef", "$6"], ["Cheese", "$3"], ["Chicken", "$2"], "pasta.jpg", "bacon.jpg", "beef.jpg", "cheese.jpg", "chicken.jpg"],
        ["Seafood", "Always a great choice", "from $12", ["Shrimp", "$15"], ["Oysters", "$12"], ["Crayfish", "$16"], ["Salmon", "$25"], "seafood.jpg", "shrimp.jpg", "oysters.jpg", "crayfish.jpg", "salmon.jpg"],
        ["Meat", "Always a great choice", "from $10", ["Half roasted lemon chicken", "$10"], ["Lightly smoked & grilled pork chop", "$13"], ["Veal osso bucco", "$14"], ["Grilled tuscan rubbed filet mignon", "$15"], "meat.jpg", "lemonChicken.jpg", "porkChop.jpg", "meatThree.jpg", "filetMignon.jpg"],
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
    "fourthFood": 3
}


// FOOD VARIATION
const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", closeFillingsModal);
document.querySelector(".addFood").addEventListener("click", closeFillingsModal);



function closeFillingsModal() {
    document.querySelector(".fillings").style.display = "none";
}

document.querySelector(".fourthFood").addEventListener("click", buildingVariation);
document.querySelector(".firstFood").addEventListener("click", buildingVariation);
document.querySelector(".secondFood").addEventListener("click", buildingVariation);
document.querySelector(".thirdFood").addEventListener("click", buildingVariation);


function buildingVariation(e) {
    document.querySelector(".fillings").style.display = "flex"
    let eating = document.querySelector(".selected").classList[0].split("Btn").join("");



    const variationsImage = document.querySelectorAll(".fillingsItem");
    const variationsHeaders = document.querySelectorAll(".fillingsItem h4");
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
    }
}


