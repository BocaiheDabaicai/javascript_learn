# JavaScript

- javascript学习 于 2023.05.09 开仓

---

## 第7章 数组

#### 1. 数组方法

方法总结:

| 方法名     | 方法作用            | 补充                           |
| ------- | --------------- | ---------------------------- |
| slice   | 截取子字符串          |                              |
| splice  | 截取子字符串，修改源字符串   |                              |
| reverse | 反转字符串，修改源字符串    |                              |
| concat  | 组合两个字符串         | 可以使用`[...arr1,...arr2]`进行替代  |
| join    | 数组转换为字符串，接收间隔字符 |                              |
| at      | 返回索引位置的值        | 使用`-1`可以直接获取末尾的位置            |
| forEach | 使用回调函数，遍历整个数组   | 无法终止遍历过程；`map,set`集合也可以使用该方法 |

代码如下:

```js
let arr = ['a','b','c','d','e','f','g'];

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(2,-2));
console.log(arr.slice());
console.log([...arr]);

// console.log(arr.splice(1,3));
// console.log(arr);

// console.log(arr.splice(-2));
// console.log(arr);

// console.log(arr.splice(3,-2));
// console.log(arr);

// console.log(arr.reverse());
// console.log(arr);

let arr2 = ['z','x','c','v'];

console.log(arr.concat(arr2));
console.log([...arr,...arr2]);
console.log(arr);

let arrCon = [...arr,...arr2];
console.log(arrCon.join('-')); 


let arr2 = ['z','x','c','v'];

console.log(arr.concat(arr2));
console.log([...arr,...arr2]);
console.log(arr);

console.log(arrCon[1]);
console.log(arrCon.at(1));
console.log(arrCon[arrCon.length - 1]);
console.log(arrCon.at(-1));
console.log('abdcc'.at(2));
console.log('abdcc'.at(-2));
```

#### 挑战一 数组

```js
///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
    const copyDogsJulia = dogsJulia.slice(1, -2);
    console.log(copyDogsJulia);

    const DogsArray = [...copyDogsJulia, ...dogsKate];
    DogsArray.forEach(function (item, index) {
        if (item > 1) {
            console.log(`Dog number ${index} is an adult, and is ${item} years old`);
        } else {
            console.log(`Dog number ${index} is still a puppy 🐶`);
        }
    })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
```

#### 2. map,filter,reduce

| 方法名    | 方法描述                                                | 补充                                    |
| ------ | --------------------------------------------------- | ------------------------------------- |
| map    | 使用回调函数，获取`item,index,array`内容，并返回新数组                |                                       |
| filter | 使用回调函数，获取`item,index,array`内容，并返回新数组                | 筛选符合条件的数据                             |
| reduce | 使用回调函数，获取`accumulate,current,index,array`内容，并返回最终结果 | `accumulate`记录累计值<br>`current`记录数组当前值 |

举例:

```js
const deposits = account1.movements.filter(function(item){
    return item>0;
})  
// 结果
// account1.movements [200, 450, -400, 3000, -650, -130, 70, 1300]
// deposits [200, 450, 3000, 70, 1300]


const result = account1.movements.reduce(function(accResult, current, index, array){
    console.log(`index ${index}: ${accResult} , current: ${current}`);
    return accResult+current;
},0)  
// 结果，显示其中一次执行及运行结果
// index 4: 3250 , current: -650
// 3840
```

#### 挑战二 狗狗的年龄

```js
///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ageArray) {

    /* version 1
    let humanAgeArray = ageArray.map((item)=>{
        if(item<=2){
            // console.log(2 * item);
            return 2 * item;
        }else{
            // console.log(16 + item * 4);
            return 16 + item * 4;
        }
    })
    console.log('humanAgeArray',humanAgeArray);

    let filterArray = humanAgeArray.filter(item=>item>=18);
    console.log('filterArray',filterArray);

    let average = filterArray.reduce((acc,current,_,arr)=>{
        return acc+current/arr.length;
    },0);
    console.log('average',average);*/

    let humanAgeArray = ageArray.map((item) => item <= 2 ? item * 2 : 4 * item + 16);
    console.log('humanAgeArray', humanAgeArray);

    let filterArray = humanAgeArray.filter(item => item >= 18);
    console.log('filterArray', filterArray);

    let average = filterArray.reduce((acc, current, _, arr) => {
        return acc + current / arr.length;
    }, 0);
    console.log('average', average);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
```

#### 挑战三 狗狗的年龄 链式实现

```js
///////////////////////////////////////
// Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const calcAverageHumanAge = ageArray => ageArray
        .map(item => item <= 2 ? item * 2 : 4 * item + 16)
        .filter(item => item >= 18)
        .reduce((acc, current, _, arr) =>  acc + current / arr.length, 0);

let aver1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
let aver2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(aver1,aver2);
```

#### 3.find,findIndex,some,every,flap

| 方法名       | 方法描述                                                            | 补充  |
| --------- | --------------------------------------------------------------- | --- |
| find      | 使用回调函数，获取`item,index,array`内容，并返回**符合条件的第一个数据**                 |     |
| findIndex | 使用回调函数，获取`item,index,array`内容，并返回**符合条件的第一个数据的索引下标**            |     |
| some      | 使用回调函数，获取`item,index,array`内容，并返回**布尔值结果**，至少有一个元素满足条件，返回`true` |     |
| every     | 使用回调函数，获取`item,index,array`内容，并返回**布尔值结果**，每一个元素满足条件，返回`true`   |     |
| flap()    | 将数组中的子数组解构，使得数据完全存在于一个数组中，接收**数字**，表示解构子数组得深度，默认为1              |     |

示例:

```js
const arr = [1, 2, 3, [4, 5], 6];
console.log(arr.flat()) 
// result: [1, 2, 3, 4, 5, 6]

const arr2 = [1, [2, 3], [4, 5], 6, [7, [8, 9]]];
console.log(arr2.flat(2))
// result: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```