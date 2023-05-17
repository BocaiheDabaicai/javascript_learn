'use strict';
/*
function logger() {
    console.log("this is function.");
}
logger();

function products(apples,oranges){
    console.log(apples,oranges);
    const juice = `The juice have ${apples} apples and ${oranges} oranges.`;
    return juice;
}
let juice = products(5,2);
console.log(juice);

function calcAge(birthYear){
    return 2037 - birthYear;
}

console.log("Function: ",calcAge(1999));

const ageFun = function (birthYear){
    return 2037 - birthYear;
}
console.log("const ageFun: ",ageFun(1999))

const ageFun2 = birthYear => 2037 - birthYear;
console.log("Arrow fun",ageFun2(1999));

const ageFun3 = (birthYear,useName) => {
    const retiredAge = 65 - (2037 - birthYear);
    return `After ${retiredAge} age , ${useName} can enjoy his life.`;
}
console.log(ageFun3(1999,"Liu"));
*/


function cutFruit(fruit){
    return fruit * 4;
}
function products(apples,oranges){
    const applesPiece = cutFruit(apples);
    const orangesPiece = cutFruit(oranges);
    const juice = `The juice have ${applesPiece} piece of apples and ${orangesPiece} piece of oranges.`;
    return juice;
}
let juice = products(3,4);
console.log(juice);