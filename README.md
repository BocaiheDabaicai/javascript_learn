# JavaScript

- javascript学习 于 2023.05.09 开仓

---

## 第6章 函数

#### 1.函数传参

重点：对于默认参数的设置

```js
const bookings = [];

const createBooking = function(flightNumber,passengersNumber = 1,price = 998 * passengersNumber){
    // ES5 的默认参数赋值方法
    // passengersNumber = passengersNumber ?? 1;
    // price = price ?? 998;

    const booking = {
        flightNumber,
        passengersNumber,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('NF883');
createBooking('NF883',2,199);
createBooking('NF883',5,299);
createBooking('NF883',6);
createBooking('NF883',undefined,668);
```

#### 2.原始数据与引用数据的变化

内容：传递进入函数中的**原始数据**、**引用数据**在函数中发生二次赋值，**原始数据**不会发生改变，而**引用数据**的内部属性会发生改变

示例：

```js
const flight = `NF556`;
const Bob = {
    name:'Bob Jerry',
    passport:77882211
};

const checkIn = function(flightNum, passenger){
    flightNum = 'NF999'; // 原始数据发生改变
    passenger.name = 'Mr. '+ passenger.name; // 对象数据发生改变

    if (passenger.passport === 77882211){
        console.log(`alert in`);
    }else{
        console.log(`Wrong passport!`);
    }
}

checkIn(flight,Bob);
console.log(flight); // NF556
console.log(Bob); // {name: 'Mr. Bob Jerry', passport: 77882211}
```

#### 3. 函数的多种应用简介

- 变量、对象存储函数

- 函数作为变量应用于其它函数

- 函数返回一个函数

- 回调函数

#### 4. 函数形参

```js
// 去除字符串之间空格
const oneWord = function(string){
    return string.replaceAll(' ','').toLowerCase();
}
// 将首个单词大写
const upperFirstWord = function(string){
    const [first,...others] = string.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}
// 接收函数形参
const transformer = function(str,fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}
// 调用高阶函数，并传入函数，！！注意并没有在此进行调用
transformer(`JavaScript is the best!`,upperFirstWord);
transformer(`JavaScript is the best!`,oneWord);

// 函数绑定到页面元素上进行使用
const high5 = function (){
    console.log(`😊`);
}

document.body.addEventListener('click',high5);
['Bob','Tom','Jerry','Ding'].forEach(high5);
```

#### 5. 调用内部函数

```js
// 定义内部函数
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name} 😊`);
    }
}

// 传递主函数，获得内部函数
const greeterHey = greet('Hey');
greeterHey('David');
greeterHey('Evi');

// 直接调用内部函数
greet('Hello')('Bob');

// 内部函数为箭头函数
const greet2 = function (greeting) {
    return (name) => {
        console.log(`${greeting} ${name} 😊`);
    }
}

greet2('Haloooo')('Tom');

// 全箭头函数
const greet3 = greeting => name => console.log(`${greeting} ${name} 😊`);

greet3('Hayoo')('Jerry');
```

#### 6. call与apply

```js
const lufthansa = {
    airline:'Lufthansa',
    iataCode:'LH',
    bookings:[],
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight:`${this.iataCode}${flightNum}`,name})
    }
}

lufthansa.book(239,`Bob Tom`);
lufthansa.book(336,`Jim Lorry`);

const eurowings = {
    name:'Eurowings',
    iataCode: 'EW',
    bookings:[]
}

const book = lufthansa.book;
book.call(eurowings,23,'Bob France'); // 使用call调用

const swiss = {
    airline:'Swiss Air Lines',
    iataCode:'LX',
    bookings:[],
}

book.call(swiss,583,'Bob England'); // 使用call调用
console.log(swiss);

const flightData = [583,'Bob England'];
book.apply(swiss,flightData); // 使用apply调用
console.log(swiss);

book.call(swiss,...flightData);  // apply，可以被call方法替代
console.log(swiss);
```