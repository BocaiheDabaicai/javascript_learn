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
