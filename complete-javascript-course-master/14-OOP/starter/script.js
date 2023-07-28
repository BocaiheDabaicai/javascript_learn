'use strict';

// 创建类实例对象
const Person = function (firstName,birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const Bob = new Person('Bob',2003);
const Jack = new Person('Jack',2001);

console.log(Bob)
console.log(Jack)

// 设置原型对象属性
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

Bob.calcAge();
Jack.calcAge();

console.log(`-------------`)

console.log(Person.prototype);
console.log(Bob.__proto__);
console.log(Bob.__proto__ === Person.prototype);

console.log(`-------------`)

console.log(Person.prototype.isPrototypeOf(Bob))
console.log(Person.prototype.isPrototypeOf(Jack))

Person.prototype.species = `Sane Soul`;
console.log(Bob.species,Jack.species)

console.log(Bob.hasOwnProperty('firstName'))
console.log(Bob.hasOwnProperty('species'))













