class FillingsEntity {
  constructor({ id, name, price }) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class DishEntity {
  constructor({ id, name, description, price, fillings, images }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.fillings = fillings;
    this.images = images;
  }
}

export { FillingsEntity, DishEntity };
