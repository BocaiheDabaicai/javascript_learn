// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*const x = 12;

if (x === 12) {
  console.log("It's right.");
}

const calcAge = birthday => 2037 - birthday;

console.log(`I'm here!`);*/
/*
const array = [2,12,13,5,9];
const array2 = [2,12,13,"error",5,9,17,5,3,6];

function getMaxValue(array){
  let maxValue = array[0];

  for(let i =1;i<array.length;i++){
    if (maxValue<array[i]){
      maxValue = array[i];
    }
  }

  return maxValue;
}

function getMaxAndMinValue(array){
  let maxValue = array[0];
  let minValue = array[0];

  for(let i =1;i<array.length;i++){
    if (maxValue<array[i]){
      maxValue = array[i];
    }
    if (minValue>array[i]){
      minValue = array[i];
    }
  }

  return {
    maxValue,
    minValue
  };
}

function getMaxAndMinValue_judgement(array){
  let maxValue = array[0];
  let minValue = array[0];

  for(let i =1;i<array.length;i++){
    if(typeof array[i] === "string") continue;
    if (maxValue<array[i]){
      maxValue = array[i];
    }
    if (minValue>array[i]){
      minValue = array[i];
    }
  }

  return {
    maxValue,
    minValue
  };
}

function mergeArray (array1,array2){
  return array1.concat(array2);
}
console.log(getMaxValue(array));

console.log(getMaxAndMinValue(array));

console.log(getMaxAndMinValue_judgement(array2));

console.log(array instanceof Array,array+array2);

console.log(mergeArray(array,array2));*/

/*// 循环打印红绿黄,分别的时间为3s,2s,1s
function delay(fn, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn()); // A
    }, time);
  });
}

async function light() {
  await delay(() => console.log("red"), 3000);
  await delay(() => console.log("green"), 2000);
  await delay(() => console.log("yellow"), 1000);
  await light();
}

light();*/

/*  设置断点
const measureKelvin = function(){
  const measurement = {
    type:"temp",
    unit:"celsius",
    value:prompt("Degrees celsius.")
  }

  console.log(measurement);
  console.warn(measurement);
  console.error(measurement);
  console.table(measurement);


  return Number(measurement.value) + 273; // kelvin
}

console.log(measureKelvin())
*/

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]



// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
 */

const temperatures = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

function printForecast(arr){
  let stringArr = "...";
  for(let i = 0;i<arr.length;i++){
    stringArr +=`${arr[i]}ºC in ${i+1} days...`;
  }
  console.log(stringArr);
}

printForecast(temperatures);
printForecast(temperatures2);