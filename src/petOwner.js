const Pet = require('./pet')

class PetOwner {
  constructor(pet) {
    this.pet = pet
  }

  petThePet() {
    return this.pet.sound
  }

  isPuppy() {
    if(this.pet.age < 1) {
      return "Yes!"
    }
    return "No!"
  }

  callPet() {
    return `Hey, ${this.pet.name}!`
  }

  changePet(name, type, age) {
    let newPet = new Pet(name, type, age)
    this.pet = newPet
  }
}

module.exports = PetOwner;