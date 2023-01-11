const {Car} = require('./car');

let car;
beforeEach(() => {
    car = new Car();
})

test('can get car manufacturer', () => {
    expect(car.manufacturer("Toyota")).toBe("Toyota")
});