const Dealership = require('./dealership');
//import car class so can create new cars
const Car = require('./car');

//TEST 1
test('can count number of cars in stock in the dealership', () => {
//add somes cars and a new dealerhsip
    let name = "Amy's dealership";
    let maxNumberCars = 50;
    let carsInStock = [new Car("Toyota", 20000,"Type-A"), new Car("Ford", 24300,"Type-A"), new Car("Nissan", 2300,"Type-B")]
    let dealership = new Dealership(name, maxNumberCars, carsInStock)
//compare
    const expected = 3;
    const actual = dealership.countCarsInStock();
    expect(actual).toBe(expected);
});
//TEST 2

test('can add car to the dealership stock', () => {
    let name = "Amy's dealership";
    let maxNumberCars = 50;
    let carsInStock = [new Car("Toyota", 20000,"Type-A"), new Car("Ford", 24300,"Type-A"), new Car("Nissan", 2300,"Type-B")]
    let dealership = new Dealership(name, maxNumberCars, carsInStock)
    let newCar = new Car("Porsche", 90000,"3.7 L 6-cylinder")
    //add newCar 
    dealership.addCar(newCar);
    //compare number of cars in stock now
    const expected = 4
    const actual = dealership.countCarsInStock();
    expect(actual).toBe(expected);
});
//TEST 3

test.skip('can return an array containing each cars manufacturer', () => {

    //compare
    const expected = 3;
    const actual = dealership.countCarsInStock();
    expect(actual).toBe(expected);
});
//TEST 4

test.skip('can find all the cars from a given manufacturer', () => {

    //compare
    const expected = 3;
    const actual = dealership.countCarsInStock();
    expect(actual).toBe(expected);
});
//TEST 5

test.skip('can find the total value of all the cars in stock', () => {

    //compare
    const expected = 3;
    const actual = dealership.countCarsInStock();
    expect(actual).toBe(expected);
});