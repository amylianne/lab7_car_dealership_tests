const Car = require('./car');

const Dealership = function(name, maxNumberCars, carsInStock){
    this.name = name;
    this.maxNumberCars = maxNumberCars;
    this.carsInStock = carsInStock;
}
//METHODS
// 1. Count the number of cars in stock
Dealership.prototype.countCarsInStock = function (){
    return this.carsInStock.length;
}

// 2. Add a car to stock
Dealership.prototype.addCar = function (newCar){
    return this.carsInStock.push(newCar);
}
// 3. Return an array containing each car's manufacturer
// 4. Find all the cars from a given manufacturer
// 5. Find the total value of all the cars in stock

module.exports = Dealership;