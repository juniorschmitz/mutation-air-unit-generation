const Carro = require('../src/carro')

describe('Carro', () => {
  describe('ehPotente', () => {
    it('should return true if the car has a power greater than 200', () => {
      const carro = new Carro(220);
      expect(carro.ehPotente()).toBeTruthy();
    });

    it('should return false if the car has a power of less than 200', () => {
      const carro = new Carro(150);
      expect(carro.ehPotente()).toBeFalsy();
    });

    it('should return false if the car has a power equal 200', () => {
      const carro = new Carro(200);
      expect(carro.ehPotente()).toBeFalsy();
    });
  });
});
