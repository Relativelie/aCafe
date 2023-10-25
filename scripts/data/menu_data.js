import { DishEntity } from '../entities/dish.js';
import { FillingEntity } from '../entities/filling.js';

function getMenuData() {
  return {
    breakfast: [
      new DishEntity({
        id: 1,
        name: 'Croissants',
        description: 'Classic French croissant',
        price: 1,
        fillings: [
          new FillingEntity({ id: 1, name: 'with trout', price: 5 }),
          new FillingEntity({ id: 2, name: 'with bacon', price: 3 }),
          new FillingEntity({ id: 3, name: 'with jam', price: 2 }),
          new FillingEntity({ id: 4, name: 'without filling', price: 1 }),
        ],
        images: ['croissant.jpg', 'salmon.jpg', 'bacon.jpg', 'jamTwo.jpg', ''],
      }),
      new DishEntity({
        id: 2,
        name: 'Benedicts',
        description: 'Grilled vegetables, fried peppers and toast',
        price: 8,
        fillings: [
          new FillingEntity({ id: 5, name: 'Large(400g)', price: 20 }),
          new FillingEntity({ id: 6, name: 'Medium(350g)', price: 15 }),
          new FillingEntity({ id: 7, name: 'Small(250g)', price: 12 }),
          new FillingEntity({ id: 8, name: 'eXtra small(100g)', price: 8 }),
        ],
        images: [
          'benedicts.jpg',
          'benedictOne.jpg',
          'benedictTwo.jpg',
          'benedictThree.jpg',
          'benedicts.jpg',
        ],
      }),

      new DishEntity({
        id: 3,
        name: 'Porridge',
        description: 'A steaming, creamy bowl of Porridge is something magical',
        price: 1,
        fillings: [
          new FillingEntity({ id: 9, name: 'with trout', price: 5 }),
          new FillingEntity({ id: 10, name: 'with bacon', price: 3 }),
          new FillingEntity({ id: 11, name: 'with jam', price: 2 }),
          new FillingEntity({ id: 12, name: 'without filling', price: 1 }),
        ],
        images: ['porridge.jpg', 'salmon.jpg', 'bacon.jpg', 'jamTwo.jpg', ''],
      }),

      new DishEntity({
        id: 4,
        name: 'Pancakes',
        description: 'Classic fluffy American pancakes',
        price: 1,
        fillings: [
          new FillingEntity({ id: 13, name: 'with pineapple', price: 5 }),
          new FillingEntity({ id: 14, name: 'with peach', price: 3 }),
          new FillingEntity({ id: 15, name: 'with berries', price: 2 }),
          new FillingEntity({ id: 16, name: 'without filling', price: 1 }),
        ],
        images: [
          'pancakes.jpg',
          'pineapple.jpg',
          'peach.jpg',
          'berries.jpg',
          '',
        ],
      }),
    ],

    lunch: [
      new DishEntity({
        name: 'Salad',
        description: 'Healthy and low-calorie food',
        price: 4,
        fillings: [
          new FillingEntity({ id: 1, name: 'Caesar', price: 4 }),
          new FillingEntity({ id: 1, name: 'Leafy Green', price: 5 }),
          new FillingEntity({ id: 3, name: 'Greek', price: 4 }),
          new FillingEntity({ id: 4, name: 'Fattoush', price: 5 }),
        ],
        images: [
          'salad.jpg',
          'caesar.jpg',
          'leafyGreen.jpg',
          'greek.jpg',
          'fattoush.jpg',
        ],
      }),
      new DishEntity({
        name: 'Appetizers',
        description: 'Healthy and low-calorie food',
        price: 2,
        fillings: [
          new FillingEntity({
            id: 5,
            name: 'Vegetable and Fruit',
            price: 3,
          }),
          new FillingEntity({ id: 6, name: 'Meal and Cheese', price: 6 }),
          new FillingEntity({ id: 7, name: 'Hot Appetizers', price: 5 }),
          new FillingEntity({ id: 8, name: 'Dips', price: 2 }),
        ],
        images: [
          'appetizers.jpg',
          'fruit.jpg',
          'cheese.jpg',
          'hot.jpg',
          'dips.jpg',
        ],
      }),
      new DishEntity({
        name: 'Soup',
        description: 'Healthy and low-calorie food',
        price: 1,
        fillings: [
          new FillingEntity({ id: 9, name: 'Chicken Noodle', price: 1 }),
          new FillingEntity({ id: 10, name: 'Tortilla', price: 5 }),
          new FillingEntity({ id: 11, name: 'Cream', price: 3 }),
          new FillingEntity({ id: 12, name: 'Chowder', price: 2 }),
        ],
        images: [
          'soup.jpg',
          'soupOne.jpg',
          'soupTwo.jpg',
          'soupThree.jpg',
          'soupFour.jpg',
        ],
      }),
      new DishEntity({
        name: 'Sandwiches',
        description: 'Low-calorie food',
        price: 2,
        fillings: [
          new FillingEntity({ id: 13, name: 'with bacon', price: 5 }),
          new FillingEntity({ id: 14, name: 'with beef', price: 6 }),
          new FillingEntity({ id: 15, name: 'Cheese', price: 3 }),
          new FillingEntity({ id: 16, name: 'with chicken', price: 2 }),
        ],
        images: [
          'sandwiches.jpg',
          'bacon.jpg',
          'beef.jpg',
          'cheese.jpg',
          'chicken.jpg',
        ],
      }),
    ],
    dinner: [
      new DishEntity({
        name: 'Pasta',
        description:
          'Our appetizers should be big on flavor, small on size, and price',
        price: 2,
        fillings: [
          new FillingEntity({ id: 17, name: 'with bacon', price: 5 }),
          new FillingEntity({ id: 18, name: 'with beef', price: 6 }),
          new FillingEntity({ id: 19, name: 'with cheese', price: 3 }),
          new FillingEntity({ id: 20, name: 'with chicken', price: 2 }),
        ],
        images: [
          'pasta.jpg',
          'bacon.jpg',
          'beef.jpg',
          'cheese.jpg',
          'chicken.jpg',
        ],
      }),
      new DishEntity({
        name: 'Seafood',
        description: 'Always a great choice',
        price: 12,
        fillings: [
          new FillingEntity({ id: 21, name: 'shrimp', price: 15 }),
          new FillingEntity({ id: 22, name: 'oysters', price: 12 }),
          new FillingEntity({ id: 23, name: 'crayfish', price: 16 }),
          new FillingEntity({ id: 24, name: 'salmon', price: 25 }),
        ],
        images: [
          'seafood.jpg',
          'shrimp.jpg',
          'oysters.jpg',
          'crayfish.jpg',
          'salmon.jpg',
        ],
      }),
      new DishEntity({
        name: 'Meat',
        description: 'Always a great choice',
        price: 10,
        fillings: [
          new FillingEntity({
            id: 1,
            name: 'Half roasted lemon chicken',
            price: 10,
          }),
          new FillingEntity({
            id: 2,
            name: 'Lightly smoked & grilled pork chop',
            price: 13,
          }),
          new FillingEntity({
            id: 3,
            name: 'Half roasted veal osso bucco',
            price: 14,
          }),
          new FillingEntity({
            id: 13,
            name: 'Grilled Tuscan rubbed filet mignon',
            price: 15,
          }),
        ],
        images: [
          'meat.jpg',
          'lemonChicken.jpg',
          'porkChop.jpg',
          'meatThree.jpg',
          'filetMignon.jpg',
        ],
      }),
      new DishEntity({
        name: 'Wraps',
        description: 'Always a great choice',
        price: 2,
        fillings: [
          new FillingEntity({ id: 13, name: 'Spicy Fish', price: 5 }),
          new FillingEntity({ id: 13, name: 'Malibu Melt', price: 6 }),
          new FillingEntity({ id: 13, name: 'Vegetarian', price: 3 }),
          new FillingEntity({ id: 13, name: 'Roast Beef', price: 2 }),
        ],
        images: [
          'wraps.jpg',
          'salmon.jpg',
          'wrapsTwo.jpg',
          'wrapsThree.jpg',
          'wrapsFour.jpg',
        ],
      }),
    ],
    drinks: [
      new DishEntity({
        name: 'Cocktails',
        description:
          'We offer a great variety of the very best cocktails you’ll find',
        price: 2,
        fillings: [
          new FillingEntity({ id: 3, name: 'Old Fashioned', price: 2 }),
          new FillingEntity({ id: 1, name: 'Negroni', price: 3 }),
          new FillingEntity({ id: 33, name: 'Whiskey Sour', price: 5 }),
          new FillingEntity({ id: 13, name: 'Dry Martini', price: 6 }),
        ],
        images: [
          'cocktails.jpg',
          'oldFashioned.jpg',
          'negroni.jpg',
          'whiskeySour.jpg',
          'dryMartini.jpg',
        ],
      }),
      new DishEntity({
        name: 'Wine',
        description:
          'Each wine listed below also includes alternative varieties that taste similar',
        price: 18,
        fillings: [
          new FillingEntity({ id: 3, name: 'Chardonnay', price: 20 }),
          new FillingEntity({ id: 43, name: 'Pinot Grigio', price: 25 }),
          new FillingEntity({ id: 53, name: 'Cabernet Sauvignon', price: 22 }),
          new FillingEntity({ id: 63, name: 'Merlot', price: 18 }),
        ],
        images: [
          'wine.jpg',
          'chardonnay.jpg',
          'pinotGrigio.jpg',
          'cabernetSauvignon.jpg',
          'merlot.jpg',
        ],
      }),
      new DishEntity({
        name: 'Coffee & Tea',
        description: 'Healthy and low calorie',
        price: 1,
        fillings: [
          new FillingEntity({ id: 63, name: 'Latte', price: 2 }),
          new FillingEntity({ id: 73, name: 'Cappuccino', price: 3 }),
          new FillingEntity({ id: 83, name: 'Green/black tea', price: 1 }),
          new FillingEntity({ id: 93, name: 'Robusta', price: 3 }),
        ],
        images: [
          'coffee.jpg',
          'latte.jpg',
          'cappuccino.jpg',
          'tea.jpg',
          'robusta.jpg',
        ],
      }),
      new DishEntity({
        name: 'Beer',
        description: 'Always a great choice',
        price: 3,
        fillings: [
          new FillingEntity({ id: 103, name: 'Ale', price: 3 }),
          new FillingEntity({ id: 131, name: 'Porter', price: 5 }),
          new FillingEntity({ id: 123, name: 'Blonde/brown ale', price: 3 }),
          new FillingEntity({ id: 113, name: 'Stout', price: 3 }),
        ],
        images: [
          'beer.jpg',
          'ale.jpg',
          'beerOne.jpg',
          'beerTwo.jpg',
          'beerThree.jpg',
        ],
      }),
    ],
  };
}

export { getMenuData };
