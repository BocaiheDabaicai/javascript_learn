'use strict';

/*
// 创建类实例对象
const Person = function (firstName,birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const Bob = new Person('Bob',2003);
const Jack = new Person('Jack',2001);

console.log(Bob)
console.log(Jack)
*/

/*
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

Bob.add = function(){
    console.log(`add`)
}
console.log(Bob)
*/

/* 挑战一 构造Car函数
///////////////////////////////////////
// Coding Challenge #1

/!*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*!/

const Car = function(make,speed){
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log('accelerate ',this.speed,' Km/h')
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log('brake ',this.speed,' Km/h')
}

const bmw = new Car('BMW',120);
const mercedes = new Car('Mercedes',95);

bmw.accelerate()
bmw.accelerate()
bmw.brake()
bmw.brake()
bmw.brake()
console.log(`-------------`)
mercedes.accelerate()
mercedes.accelerate()
mercedes.brake()
mercedes.brake()
mercedes.brake()
*/

/* class对象
class PersonCl{
    constructor(firstName,birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

    calcAge(){
        console.log(2037 - this.birthYear)
    }
    greet(){
        console.log(`Hey ${this.firstName}`)
    }

    get age(){
        return 10
    }

    set birthYear(age){
        this._age = 2037 - age
    }

    get birthYear(){
        return this._age
    }
}

const jessica = new PersonCl('Jessica',1996)
console.log(jessica)
jessica.calcAge()
console.log(jessica.__proto__ === PersonCl.prototype)

jessica.greet()

console.log(jessica.age);
console.log(jessica.birthYear);
*/

/* Object.create
const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear)
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto)

const sarah = Object.create(PersonProto);
sarah.init('Sarah',1979);
sarah.calcAge();
*/

/* 挑战二 类实现
///////////////////////////////////////
// Coding Challenge #2

/!*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*!/

class Car {
    constructor(name, speed) {
        this.name = name;
        this.speedUs = speed;
    }

    accelerate() {
        this._speed += 10
        console.log(`accelerate `, this._speed, ' mi/h')
    }
    brake() {
        this._speed -= 5
        console.log(`brake `, this._speed, ' mi/h')
    }

    set speedUs(speed) {
        this._speed = speed * 1.6
    }
    get speedUs() {
        return this._speed / 1.6
    }
}

const ford = new Car('Ford', 160)
console.log(ford.speedUs);
ford.accelerate()
ford.accelerate()
ford.brake()
ford.brake()
ford.brake()
ford.speedUs = 90
console.log(ford.speedUs);
*/

/* 构造函数继承
const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear)
}

const Student = function(firstName,birthYear,course){
    Person.call(this,firstName,birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Milk',2020,'History');
mike.introduce();
mike.calcAge();

console.log(mike)
console.log(mike.__proto__ === Student.prototype)
console.log(mike.__proto__.__proto__ === Person.prototype)
*/

/* 挑战三 构造函数继承
///////////////////////////////////////
// Coding Challenge #3

/!*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*!/
const Car = function(make,speed){
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log('accelerate ',this.speed,' Km/h')
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log('brake ',this.speed,' Km/h')
}

const EV = function(make,speed,charge){
    Car.call(this,make,speed)
    this.charge = charge
}

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo
}

EV.prototype.accelerate = function () {
    this.speed += 20
    this.charge -=1
    console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`)
}

const tesla = new EV('Tesla',120,23);
console.log(tesla)
console.log(tesla.__proto__)
console.log(tesla.__proto__.__proto__)
tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.brake()
tesla.brake()
tesla.chargeBattery(40)
tesla.accelerate()
tesla.brake()
tesla.brake()
tesla.brake()
tesla.accelerate()
*/

/* class对象继承
class PersonCl {
    constructor(firstName, birthYear) {
        this.fullName = firstName
        this.birthYear = birthYear
    }

    calcAge() {
        console.log(2037 - this.birthYear)
    }

    greet() {
        console.log(`Hey ${this.fullName}`)
    }

    get age() {
        return 10
    }

    set fullName(fullName) {
        if (fullName.includes(' ')) this._fullName = fullName;
        else alert(`That's not a fullName`);
    }

    get fullName() {
        return this._fullName
    }

    set birthYear(age) {
        this._age = 2037 - age
    }

    get birthYear() {
        return this._age
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`)
    }

    calcAge() {
        console.log(`I'm ${this._age} years old, but as a student I feel more like ${this._age - 8}`)
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer')
console.log(martha)
martha.introduce()
martha.calcAge()
*/

/* Object.create 继承
const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear)
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course = course
}
StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}
const jay = Object.create(StudentProto)
jay.init('Jay',2010,'Computer Science');
console.log(jay);
jay.introduce();
jay.calcAge()
*/

/* 冗余
const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear)
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear
    }
}

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course = course
}
StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}
const jay = Object.create(StudentProto);
jay.init('Jay',2010,'Computer Science');
console.log(jay)
jay.introduce()
*/

/*
 //私有领域、方法，公有领域、方法、方法链
class Account{
    // public
    locale = navigator.language;

    // private
    #movements = [];
    #pin;

    constructor(owner,currency,pin) {
        this.owner = owner
        this.currency = currency
        this.#pin = pin

        console.log(`Welcome to create a account, ${this.owner}!`)
    }

    getMovements(){
        return this.#movements
    }

    deposit(val){
        this.#movements.push(val)
        return this
    }
    withdraw(val){
        this.#movements.push(-val)
        return this
    }

    #verify(val){
        return true
    }

    loan(val){
        if(this.#verify(val)) this.deposit(val)
        return this
    }

}

const bob = new Account('Bob','CHN',1221)
console.log(bob)
bob.deposit(200)
bob.withdraw(100)
bob.loan(1000)
console.log(bob)

bob.deposit(200).deposit(300).deposit(500)
    .withdraw(150).withdraw(100)
    .loan(800)
console.log(bob)
*/



















