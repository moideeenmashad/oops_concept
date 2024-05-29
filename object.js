// object declaration
let car = {
  brand: "BMW",
  modal: "M Competition",
  year: 2015,
  engine: {
    engin_size: "2.0 L",
    cylinders: "Inline 4",
    hp: "180 hp @ 5,000 rpm",
    engine_type: "Gas",
    torque: "200 lb-ft @ 1,250 rpm",
  },
};

let newCar = { ...car };
console.log(car);

newCar.year = 2016;

let modifiedCar = JSON.stringify(newCar);
console.log(newCar);
console.log(modifiedCar);
