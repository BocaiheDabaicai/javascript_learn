## 第10章 面向对象编程

#### 10.1 概念

opp，是面向对象编程，是一种进行大型软件编程时使用的编程思想，通过它创建一个包含一个通用性数据、方法的类

类，拥有四个特性，**抽象、封装、继承、多态**，内容如下：

- 抽象：类中拥有基本数据及方法

- 封装：类中的方法对外开放，同时可以设定`private`方法不对外暴露

- 继承：将类中的方法及数据继承到自身，并命名为新的一个对象

- 多态：不同继承对象上拥有各自独特的数据及方法

比较传统OPP与JSOPP：

1. 传统OPP：通过类创建实例对象，实例对象获得类身上所有的方法，实例化过程。

2. JSOPP：对象连接原型对象，通过原型链获取到原型对象身上的所有方法，实例对象本身不包含通用方法。

**实现面向对象编程的方法**

1. 构造函数

2. ES6 类（语法糖）

3. Object.create()

#### 10.2 构造函数

**创建类实例对象**

过程：

1. 通过`new`方法，先创建一个空对象，同时获得`this`指向本身

2. 函数执行，为新对象创建属性

3. 最终返回拥有指定属性的类实例对象

```js
const Person = function (firstName,birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const Bob = new Person('Bob',2003);
const Jack = new Person('Jack',2001);

console.log(Bob)
console.log(Jack)
```

**原型对象及原型链**

说明：

1. 原型对象：表示类实例对象上的抽象类对象，通过`xx.prototype`可以访问抽象对象身上的原型属性，可以增加新的原型属性，可以是数据、方法，并使所有的类实例对象共享原型对象上的原型属性。

2. 原型链：表示形式`xx.__proto__`，它是一个指针，指向当前对象的原型对象

示例：

```js
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
```

**new xxx()执行原理**

1. new 方法创建一个空对象

2. 通过函数回调，获得属性及原型对象

3. 返回该实例对象

**原型链执行原理**

当前对象执行不在自身上的方法时，原型链会找到当前对象的原型对象，并查找是否存在该方法，若不存在，继续找原型对象的原型对象，继续执行检查，直到找到，或原型链表示为`null`为止。

**原型链结论**

1. 当前对象会继承它的原型链上所有对象的方法和属性

#### 挑战一

挑战如下：

```js
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
```

#### 10.3 Class类(ES6)

声明方式:`class xx{}`

说明：工作原理同构造函数一致，添加的属性需要写在`constructor`中，方法写在类中，可以在class作用域外，以`xx.prototype.yy`的方式添加函数。

实践过程：

```js
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
}

const jessica = new PersonCl('Jessica',1996)
console.log(jessica)
jessica.calcAge()
console.log(jessica.__proto__ === PersonCl.prototype)

jessica.greet()
```

#### 10.4 get和set方法

get：用于从对象身上进行计算属性，需要返回值

set：用于从对象身上进行设置属性，约定设置的数据以**下划线**开头

示例：

```js
// class xx 作用域中
    constructor(firstName,birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

    set birthYear(age){
        this._age = 2037 - age
    }

    get birthYear(){
        return this._age
    } 
// 构造对象
const jessica = new PersonCl('Jessica',1996) 
console.log(jessica.birthYear);
```

总结：

构造器函数接收`birthYear`参数，并传给`birthYear`set函数，获取参数，并设置计算后的属性。

`set`函数、`get`函数内外都可以根据情况进行使用

#### 10.5 类静态方法

名称：`static`

说明：仅能在类对象中使用，无法在实例对象上使用。

类内使用的方法：

1. `xx.get`

2. `this.get`

示例：

```js
class xx{
    ...
    static get(){
        ...
    }
}
// 使用方式
xx.get();
```

#### 10.6 Object.create

`Object.create`：创建一个空对象，参数为原型对象

使用示例如下：

```js
// 创建一个对象
const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear)
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
} 
// 创建空对象，并将原型对象赋予当前对象
const sarah = Object.create(PersonProto);
sarah.init('Sarah',1979);
sarah.calcAge();
```

#### 挑战二 类实现

```js
///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

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
```

#### 10.7 构造函数继承

主要内容：原型对象如何与实例对象关联，原型对象如何与原型对象的原型对象关联。

区分为：向下联系、向上联系

向下联系的方法：在函数体内，`Person.call(this,xx,yy)`执行生成

向上联系的方法：在函数体外，设置`Student.prototyoe = Object.create(Person.prototype)`

完整代码如下：

```js
const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear)
}

const Student = function(firstName,birthYear,course){
    Person.call(this,firstName,birthYear); // 生成Person对象
    this.course = course;
}

Student.prototype = Object.create(Person.prototype); // 连接原型对象

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Milk',2020,'History');
mike.introduce();
mike.calcAge();
```

#### 挑战三 构造函数继承

```js
///////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
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
```

#### 10.8 Class类继承

继承原理与构造函数继承方式相同，代码端相比更加简洁

说明：

1. `extends` 关键字 实现向上继承

2. `super` 关键字 实现数据向上传递

继承示例如下：

```js
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
```

#### 10.9 Object.create()继承

说明：

1. 由`student = Object.create(person)`的形式，实现向上继承

2. 数据继承，`person.init.call(this,a,b)`初始化函数使用`call`传递参数

继承示例如下：

```js
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
```

#### 10.10 私有与公有

私有：私有领域、私有方法，属性会存在于实例对象身上，无法被类外作用域访问

公有：公有领域、公有方法，属于存在于原型对象身上，类外可以被访问

示例如下：

```js
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
    }
    withdraw(val){
        this.#movements.push(-val)
    }

    #verify(val){
        return true
    }

    loan(val){
        if(this.#verify(val)) this.deposit(val)
    }

}

const bob = new Account('Bob','CHN',1221)
console.log(bob)
bob.deposit(200)
bob.withdraw(100)
bob.loan(1000)
console.log(bob)
```

**链式方法**

实例对象完成多次方法操作

要求：使用的方法要返回该对象

示例:

```js
bob.deposit(200).deposit(300).deposit(500)
    .withdraw(150).withdraw(100)
    .loan(800)
```

> 静态属性只能够被类本身使用
> 
> 例如：
> 
> ```js
> class x{
>     //...
>     static a
> }
> const obj = new x();
> obj.a //这不被允许
> ```

#### 挑战四 class实现继承、私有属性、方法链

```js
///////////////////////////////////////
// Coding Challenge #4

/*
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCl {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }

    accelerate() {
        this.speed += 10;
        console.log('accelerate ', this.speed, ' Km/h')
    }

    brake() {
        this.speed -= 5;
        console.log('brake ', this.speed, ' Km/h')
        return this
    }
}

class EVCl extends CarCl {
    #charge

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo
        return this
    }

    accelerate() {
        this.speed += 20
        this.#charge -= 1
        console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`)
        return this
    }
}

const rivian = new EVCl('Rivian', 120, 23)
console.log(rivian)
rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .brake()
    .chargeBattery(28)
    .accelerate()
```