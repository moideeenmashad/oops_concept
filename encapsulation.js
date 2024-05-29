class car {
  constructor(name, series, color) {
    this.name = name;
    this.series = series;
    this.color = color;
  }
  modal_year(year) {
    this.year = year;
  }
  getDetails() {
    return `The car is ${this.name} ${this.series} ${this.year} and its color is ${this.color}`;
  }
}

let newCar = new car("BMW", "M3", "black");
newCar.modal_year(2015);
console.log(newCar.getDetails());
