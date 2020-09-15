// Javascript's prototype is a property of a function, that points to an object

function Animal(name, energy) {
//   let animal = Object.create(Animal.prototype);
  this.name = name;
  this.energy = energy;

//   return animal;
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};

// new keyword creates an empty object and this keyword points to that empty object
const leo = new Animal('Leo', 7);
const snoop = new Animal('Snoop', 10);

leo.sleep(5);
console.log(leo.energy);

// HMM, we can improve it even more. by the use of JavaScript new keyword
