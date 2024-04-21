class User {
    constructor (unit, quantity, img) {
        this.id = `${new Data().getTime}`
        this.unit = unit
        this.quantity = quantity
        this.img = img
    }
}

export class things extends User {
  constructor(id, quantity, unit, img, price, name) {
    super(id, unit, quantity, img);
    this.name = name
    this.price = price
  }
}

