function Animal(name, energy) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;

  animal.eat = function (amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  };

  animal.sleep = function (length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  };

  animal.play = function (length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
  };

  return animal;
}

// imagine we have to create lots of different animal. then this  method is no good as everyTime we call Animal function we have to recreate each and every method.

const leo = Animal('Leo', 7);
const snoop = Animal('Snoop', 10);

