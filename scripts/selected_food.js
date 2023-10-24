class SelectedFood {
  constructor() {
    this.category = null; // breakfast, lunch, dinner
    this.dish = null; // croissant, soup, steak
    this.filling = null;
  }

  setCategory(selectedValue) {
    this.category = selectedValue;
  }

  setDish(selectedValue) {
    this.dish = selectedValue;
  }

  setFilling(filling) {
    this.filling = filling;
  }

  get filling() {
    return this.filling;
  }

  getSelectedFood() {
    return {
      category: this.category,
      dish: this.dish,
      fillings: this.filling,
    };
  }
}

export { SelectedFood };
