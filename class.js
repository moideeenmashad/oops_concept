class car {
  constructor(name, series, color) {
    this.name = name;
    this.series = series;
    this.color = color;
  }

  getDetails() {
    return `The car is ${this.name} ${this.series} and its color is ${this.color}`;
  }
}

let newCar = new car("BMW", "M3", "black");
console.log(newCar.getDetails());
