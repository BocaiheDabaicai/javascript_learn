// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*const x = 12;

if (x === 12) {
  console.log("It's right.");
}

const calcAge = birthday => 2037 - birthday;

console.log(`I'm here!`);*/

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

console.log(mergeArray(array,array2));