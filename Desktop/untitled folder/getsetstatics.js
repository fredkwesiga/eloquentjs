//Getters, setters, and statics
let varyingSize = {
  get size() {
    //using key word get
    return Math.floor(Math.random() * 100);
  },
};
console.log(varyingSize.size);

//similiar when property is written to setter.
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit);
