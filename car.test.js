const Car = require('./car');

// let car;
// beforeEach(() => {
//     car = new Car();
// })
test('can get car manufacturer', () => {
    const expected = this.manufacturer
    const actual = Car("Toyota", 20000,"Type-A") 
    expect(actual).toBe(expected);
});
test('can get car price', () => {
    const expected = this.price
    const actual = Car("Toyota", 20000,"Type-A") 
    expect(actual).toBe(expected)
;})
test('can get car engine type', () => {
    const expected = this.engineType
    const actual = Car("Toyota", 20000,"Type-A") 
    expect(actual).toBe(expected)
;})