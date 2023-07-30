# JavaScript

- javascript学习 于 2023.05.09 开仓

---

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

`set`函数侧重于对内使用，`get`函数侧重于对外使用，边界由`class`作用域划分