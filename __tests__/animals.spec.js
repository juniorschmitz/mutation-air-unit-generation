const Gato = require('../src/gato')
const Cachorro = require('../src/cachorro')
const { testRunner } = require('../stryker.conf')

describe('Testes dos animais', () => {
  const gato = new Gato();
  const cachorro = new Cachorro();

  test('O cachorro deve latir', () => {
    expect(cachorro.som()).toEqual('Auau')
  })
  
  test('Deve traduzir idade do cachorro para idade humana', () => {
    expect(cachorro.idadeHumana(5)).toEqual(35)
  })
  
  test('O gato deve miar', () => {
    expect(gato.som()).toEqual('Miau')
  })
  
  test('Deve traduzir odade dp gato igual a um para idade humana', () => {
    expect(gato.idadeHumana(1)).toEqual(15)
  })

  test('Deve traduzir idade do gato igual a dois para idade humana', () => {
    expect(gato.idadeHumana(2)).toEqual(25)
  })

  test('Deve traduzir idade do gato maior que dois para idade humana', () => {
    expect(gato.idadeHumana(5)).toEqual(37)
  })

  test('Gato com idade zero deve ter idade humana igual a zero', () => {
    expect(gato.idadeHumana(0)).toEqual(0)
  })

  test('Deve lançar mensagem de idade inválida caso idade seja negativa', () => {
    expect(gato.idadeHumana(-2)).toEqual("Idade inválida!")
  })
})
