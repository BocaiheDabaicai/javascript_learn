'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const calcDisplayBalance = function(movement){
    const balance = movement.reduce((accumulate,current) => accumulate+current,0)
    labelBalance.textContent = `${balance}€`;
}

calcDisplayBalance(account1.movements);
// 显示数组
const displayMovements = function (movements) {
    containerMovements.innerHTML = '';

    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'

        let template = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov} €</div>
      </div>
    `;

        containerMovements.insertAdjacentHTML('afterbegin', template);

    })
}

displayMovements(account1.movements);



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


/////////////////////////////////////////////////

/* 数组方法
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

console.log(arrCon[1]);
console.log(arrCon.at(1));
console.log(arrCon[arrCon.length - 1]);
console.log(arrCon.at(-1));
console.log('abdcc'.at(2));
console.log('abdcc'.at(-2));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const item of movements){
//   if(item>0){
//     console.log(`存入 ${item}`);
//   }else{
//     console.log(`取出 ${item}`);
//   }
// }
//
// console.log(`-----forEach实现----`);
//
// movements.forEach(function(item){
//   if(item>0){
//     console.log(`存入 ${item}`);
//   }else{
//     console.log(`取出 ${item}`);
//   }
// })

// for(const [index,item] of movements.entries()){
//   if(item>0){
//     console.log(`存入 ${item} 指数:${index + 1}`);
//   }else{
//     console.log(`取出 ${item} 指数:${index + 1}`);
//   }
// }
//
// console.log(`-----forEach实现-----`);
//
// movements.forEach(function(item,index){
//   if(item>0){
//     console.log(`存入 ${item} 指数:${index + 1}`);
//   }else{
//     console.log(`取出 ${item} 指数:${index + 1}`);
//   }
// })
*/
/* map,set集合使用forEach
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${value} --- ${key}`);
})
*/
/* 挑战一
///////////////////////////////////////
// Coding Challenge #1

/!*
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
*!/

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
*/
/* map
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsa = 1.2 ;

const movementUsa = movements.map(function(item){
    return item*euroToUsa;
})

const movementUsa2 = movements.map((item)=>item*euroToUsa)

console.log(movements);
console.log(movementUsa);
console.log(movementUsa2);

const movementsUSD = [];
for(const item of movements) movementsUSD.push(item*euroToUsa);
console.log(movementsUSD);

const movementsDescriptions = movements.map((item,index)=>{
    if (item>0){
        console.log(`Movement ${index+1}: You deposited ${item}`);
    }else{
        console.log(`Movement ${index+1}: You withdrew ${item}`);
    }
})
*/
/* 计算用户名简称
const creatUserName = function(arrs){
    arrs.forEach(function(user){
        user.username = user.owner
            .toLowerCase()
            .split(" ")
            .map( item => item[0])
            .join('');
    })
}

creatUserName(accounts);
console.log(accounts);
*/
/* filter 方法
const deposits = account1.movements.filter(function(item){
    return item>0;
})

console.log(deposits);

const depositsFor = [];
for(let i = 0;i<account1.movements.length;i++){
    if(account1.movements[i]>0) depositsFor.push(account1.movements[i]);
}

console.log(depositsFor);

const withdrawals = account1.movements.filter(item => item<0)

console.log(withdrawals);
*/
/* reduce 方法
const result = account1.movements.reduce(function(accResult, current, index, array){
    console.log(`index ${index}: ${accResult} , current: ${current}`);
    return accResult+current;
},0)

console.log(result);

let resultFor = 0;
for (let i=0;i<account1.movements.length;i++){
    resultFor += account1.movements[i];
}
console.log(resultFor);

const maxResult = account1.movements.reduce((acc,cur)=>{
    if (acc>cur)
        return acc
    else
        return cur
},account1.movements[0])

console.log(maxResult);
*/










