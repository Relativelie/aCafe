class Basket {
  constructor() {
    this.items = {
      breakfast: [], // BasketItem inside
      lunch: [],
      dinner: [],
      drinks: [],
    };
  }

  addItem(category, item) {
    this.items[category].push(item);
  }

  removeItem(item) {
    this.items = this.items.filter((i) => i !== item);
  }
}

export { Basket };
