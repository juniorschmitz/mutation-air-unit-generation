class Gato {
  som() {
    return "Miau"
  }

  idadeHumana(idade) {
    if (idade == 0) {
      return 0
    }
    else if (idade == 1) {
      return 15
    }
    else if (idade == 2) {
      return 25
    }
    else if (idade > 2) {
      return 25 + ((idade-2)*4)
    }
    else {
      return "Idade inválida!"
    }
  }
}

module.exports = Gato;