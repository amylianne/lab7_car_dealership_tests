const Car = require('./car');

const Dealership = function(name, maxNumberCars, carsInStock){
    this.name = name;
    this.maxNumberCars = maxNumberCars;
    this.carsInStock = carsInStock;
}


//METHODS
// 1. Count the number of cars in stock-PASSES
Dealership.prototype.countCarsInStock = function (){
    return this.carsInStock.length;
}

// 2. Add a car to stock-PASSES
Dealership.prototype.addCar = function (newCar){
    return this.carsInStock.push(newCar);
}
// 3. Return an array containing each car's manufacturer-PASSES
Dealership.prototype.findManufacturers = function (){
    //MAPPING
    const carManu = this.carsInStock.map((carsInStock) => carsInStock.manufacturer);
    //remove duplicate values in the array
    let uniqueManu = [...new Set(carManu)];
    return uniqueManu;
}

//// 4. Find all the cars from a given manufacturer- DOESN'T PASS
// //input a manufacturer and return cars array
// Dealership.prototype.carsFromGivenManu = function(manufacturer){
// //check if car's manufacturer (Car[0]) matches given manufacturer 
// //loop through Car's in carsInStock 
// const carsInStock = this.carsInStock.map((carsInStock) => carsInStock)
// //get only manufacturer then match back with rest of
// const [manu, ... restOfArray] = Dealership.carsInStock;

//     if (this.Car[0]== manufacturer){
//         return carsInStock = manu + restOfArray;
//     }
// }



// 5. Find the total value of all the cars in stock -PASSES
//create new prototype function
Dealership.prototype.sumOfCars = function (){

//get array of car prices from carsInStock, using MAPPING:
const carPrices = this.carsInStock.map((carsInStock) => carsInStock.price)

//add together carPrices using REDUCING:
const sumOfCars = carPrices.reduce((accumulator, carPrices) => {
    return accumulator + carPrices;
},0)
return sumOfCars;
}




module.exports = Dealership;