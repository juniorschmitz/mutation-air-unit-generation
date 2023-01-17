class Carro {
  constructor(potencia) {
    this.potencia = potencia
  }

  ehPotente() {
    return this.potencia > 200
  }
}

module.exports = Carro;