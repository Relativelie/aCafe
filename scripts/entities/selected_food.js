class SelectedFoodEntity {
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

  getSelectedFood() {
    return {
      category: this.category,
      dish: this.dish,
      filling: this.filling,
    };
  }

  clearSelectedFood() {
    this.category = null;
    this.dish = null;
    this.filling = null;
  }
}

export { SelectedFoodEntity };
