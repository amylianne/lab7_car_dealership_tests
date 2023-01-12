const Dealership = require('./dealership');
//import car class so can create new cars
const Car = require('./car');

//add some dealership variables
let name = "Amy's dealership";
let maxNumberCars = 50;
let carsInStock = [new Car("Toyota", 20000,"Type-A"), new Car("Ford", 24300,"Type-A"), new Car("Nissan", 2300,"Type-B"),new Car("Nissan", 400,"Type-C")]
// create a new dealerhsip
beforeEach( () => {
    dealership = new Dealership(name, maxNumberCars, carsInStock);
})

//TEST 1
test('can count number of cars in stock in the dealership', () => {
  //compare carsInStock
    const expected = 4;
    const actual = dealership.countCarsInStock();
    expect(actual).toBe(expected);
});
//TEST 2

test('can add car to the dealership stock', () => {
    let newCar = new Car("Porsche", 90000,"3.7 L 6-cylinder")
    //add newCar 
    dealership.addCar(newCar);
    //compare number of cars in stock now
    const expected = 5;
    const actual = dealership.countCarsInStock();
    expect(actual).toBe(expected);
});
//TEST 3

test('can return an array containing each cars manufacturer', () => {
//from  carsInStock get frist argument (manufacterer) of Car. 
    //compare
    const expected = ["Toyota","Ford","Nissan","Porsche"];
    const actual = dealership.findManufacturers();
    expect(actual).toStrictEqual(expected);
});
//not sure why toBe didn't work, only toStrictEqual works???

//TEST 4

test.skip('can find all the cars from a given manufacturer', () => {
    const expected =  [("Nissan", 2300,"Type-B"), ("Nissan", 400,"Type-C")]
    const actual = dealership.carsFromGivenManu('Nissan');
    expect(actual).toBe(expected);
});
//TEST 5

test('can find the total value of all the cars in stock', () => {

    //compare
    const expected = 137000;
    const actual = dealership.sumOfCars();
    expect(actual).toBe(expected);
});