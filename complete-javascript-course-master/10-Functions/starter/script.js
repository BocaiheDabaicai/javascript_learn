'use strict';

/* 函数传参
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
createBooking('NF883',undefined,668);*/
/* 原始数据与引用数据的变化
const flight = `NF556`;
const Bob = {
    name:'Bob Jerry',
    passport:77882211
};

const checkIn = function(flightNum, passenger){
    flightNum = 'NF999';
    passenger.name = 'Mr. '+ passenger.name;

    if (passenger.passport === 77882211){
        console.log(`alert in`);
    }else{
        console.log(`Wrong passport!`);
    }
}

checkIn(flight,Bob);
console.log(flight);
console.log(Bob);
*/
/* 函数形参
const oneWord = function(string){
    return string.replaceAll(' ','').toLowerCase();
}

const upperFirstWord = function(string){
    const [first,...others] = string.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}

const transformer = function(str,fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer(`JavaScript is the best!`,upperFirstWord);
transformer(`JavaScript is the best!`,oneWord);

const high5 = function (){
    console.log(`😊`);
}

document.body.addEventListener('click',high5);
['Bob','Tom','Jerry','Ding'].forEach(high5);
*/
/* 调用内部函数
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name} 😊`);
    }
}

const greeterHey = greet('Hey');
greeterHey('David');
greeterHey('Evi');

greet('Hello')('Bob');

const greet2 = function (greeting) {
    return (name) => {
        console.log(`${greeting} ${name} 😊`);
    }
}

greet2('Haloooo')('Tom');

const greet3 = greeting => name => console.log(`${greeting} ${name} 😊`);

greet3('Hayoo')('Jerry');
*/
/* call与apply
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
book.call(eurowings,23,'Bob France');

const swiss = {
    airline:'Swiss Air Lines',
    iataCode:'LX',
    bookings:[],
}

book.call(swiss,583,'Bob England');
console.log(swiss);

const flightData = [583,'Bob England'];
book.apply(swiss,flightData);
console.log(swiss);

book.call(swiss,...flightData);
console.log(swiss);
*/
/* bind方法
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}
const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}
const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

const book = lufthansa.book;

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Bob Tom');

const bookEW23 = book.bind(eurowings, 224);
bookEW23('Bob Tom');
bookEW23('Bob Jerry');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.148);

console.log(addVAT(100));
console.log(addVAT(25));

const addRate = function (rate) {
    return function (value) {
        return rate * value + value
    }
}

const addVAT2 = addRate(0.361);

console.log(addVAT2(100));
console.log(addVAT2(25));
*/
/*
///////////////////////////////////////
// Coding Challenge #1

/!*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*!/

const poll = {
    question: 'What is your favourite programming language?',
    options:['0: JavaScript','1: Python','2: Rust','3: C++'],
    answers:new Array(4).fill(0),
    registerNewAnswer(){
        let questions = `${this.question}\n${this.options.join('\n')}\n(Write option number)`;
        let anwser = Number(prompt(questions));

        typeof anwser && anwser <= this.answers.length && this.answers[anwser]++;

        this.displayResults();
        this.displayResults('array');
    },

    displayResults(type = 'string'){
        if(type === `string`){
            console.log(`Poll results are ${this.answers}`)
        }else if(type === `array`){
            console.log(this.answers);
        }
    }
}

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers:[5, 2, 3]},`string`);
poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]},`array`);
*/
/* IIFE(立即调用函数表达式)
const runOnce = function(){
    console.log(`the function is never run again`);
}
runOnce();

(function(){
    console.log(`the function is never run again`);
})();

(() => console.log(`the function is also never run again`))();

{
    let a = 1;
    var b = 2;
}

// console.log(a);
console.log(b);
*/

const guest = function(){
    let people = 0;
    return function(){
        people++;
        console.log(`Now ${people} are here.`);
    }
}

const addGuest = guest();

addGuest();
addGuest();
addGuest();

console.dir(addGuest);




