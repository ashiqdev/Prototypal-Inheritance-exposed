const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  },

  sleep(length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  },

  play(length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
  },
};

function Animal(name, energy) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;
  animal.eat = animalMethods.eat;
  animal.sleep = animalMethods.sleep;
  animal.play = animalMethods.play;

  return animal;
}


const leo = Animal('Leo', 7);
const snoop = Animal('Snoop', 10);

leo.sleep(5);
console.log(leo.energy);

/**
 * Suppose, we add a method to animalMethods then we need to manually reference this in AnimalFunction
 */