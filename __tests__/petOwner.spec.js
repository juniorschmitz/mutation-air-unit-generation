const PetOwner = require('../src/petOwner')
const Pet = require('../src/pet')

describe('PetOwner', () => {
  let petOwner;
  beforeEach(() => {
    petOwner = new PetOwner(new Pet('Fido', 'dog', 3, 'bark'))
  });

  test('petThePet should return sound of pet', () => {
    expect(petOwner.petThePet()).toBe('bark');
  });

  test('isPuppy should return Yes! if pet age is less than 1', () => {
    petOwner.pet = new Pet('Puppy', 'dog', 0.5, 'bark');
    expect(petOwner.isPuppy()).toBe('Yes!');
  });

  test('isPuppy should return No! if pet age is greater than 1', () => {
    petOwner.pet = new Pet('Puppy', 'dog', 1.5, 'bark');
    expect(petOwner.isPuppy()).toBe('No!');
  });

  test('callPet should return the name of pet', () => {
    expect(petOwner.callPet()).toBe('Hey, Fido!');
  });

  test('changePet should change pet', () => {
    petOwner.changePet('Max', 'cat', 2);
    expect(petOwner.pet).toEqual(new Pet('Max', 'cat', 2));
  });
});