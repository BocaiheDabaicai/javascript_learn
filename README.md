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

#### 10.2 实践

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