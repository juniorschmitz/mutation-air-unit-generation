const Person = require('../src/person')
const PersonTestable = require('../src/personTestable')

it('should log "chew" 10 times and "swallow" once', () => {
  const logSpy = jest.spyOn(console, 'log');
  Person.eat();
  expect(logSpy).toHaveBeenCalledTimes(11);
  expect(logSpy).toHaveBeenNthCalledWith(1, 'chew');
  expect(logSpy).toHaveBeenNthCalledWith(11, 'swallow');
});

// test('test eat function', () => {
//   const spyChew = jest.spyOn(PersonTestable, 'chew');
//   const spySwallow = jest.spyOn(PersonTestable, 'swallow');
//   PersonTestable.eat();
//   expect(spyChew).toHaveBeenCalledTimes(10);
//   expect(spySwallow).toHaveBeenCalledTimes(1);
// });
