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

// 账户总额
const calcDisplayBalance = function (acc) {
    const balance = acc.movements.reduce((accumulate, current) => accumulate + current, 0);
    acc.balance = balance;

    labelBalance.textContent = `${balance}€`;
}

// 账户收入
const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(item => item > 0)
        .reduce((acc, cur) => acc + cur, 0)
    labelSumIn.textContent = `${incomes}€`;

    const outcomes = acc.movements
        .filter(item => item < 0)
        .reduce((acc, cur) => acc + cur)
    labelSumOut.textContent = `${outcomes}€`;

    const interest = acc.movements
        .filter(item => item > 0)
        .map(item => (item * acc.interestRate) / 100)
        .reduce((acc, cur) => acc + cur)
    labelSumInterest.textContent = `${interest}€`;
}


// 显示数组
const displayMovements = function (acc) {
    containerMovements.innerHTML = '';

    acc.movements.forEach(function (mov, i) {
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


// 创建用户简称
const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('')
    })
}

createUsernames(accounts);

// 更新当前用户
const updateUI = function (acc) {

    displayMovements(acc);

    calcDisplayBalance(acc);

    calcDisplaySummary(acc);
}
// 登录
let currentAccount;
btnLogin.addEventListener('click', function (e) {
    // 阻止页面提交
    e.preventDefault()

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

    // console.log(currentAccount);

    if (currentAccount.pin === Number(inputLoginPin.value)) {
        console.log(`Login`);

        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`

        containerApp.style.opacity = 100;

        updateUI(currentAccount)

        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
    }

})

// 转账
btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const receiveAcc = accounts.find(item => item.username === inputTransferTo.value);

    // console.log(receiveAcc,amount);
    // console.log(currentAccount);

    if (amount > 0 && currentAccount.balance >= amount && currentAccount.username !== receiveAcc.username) {
        console.log(`transfer vaild.`)
        currentAccount.movements.push(-amount);
        receiveAcc.movements.push(amount);

        updateUI(currentAccount);

    }

    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();
})

// 支出
btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        currentAccount.movements.push(amount);

        updateUI(currentAccount);
    }

    inputLoanAmount.value = '';
    inputLoanAmount.blur();
})


// 账号删除
btnClose.addEventListener('click', function (e) {
    e.preventDefault()

    console.log('close')

    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        console.log(`delete success!`);

        const index = accounts.findIndex(acc => acc.username === currentAccount.username);

        accounts.splice(index, 1);

        containerApp.style.opacity = 0;

    }

    inputCloseUsername.value = inputClosePin.value = '';
    inputClosePin.blur();
})

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
/* 挑战二 狗狗的年龄
///////////////////////////////////////
// Coding Challenge #2

/!*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*!/

const calcAverageHumanAge = function (ageArray) {

    /!* version 1
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
    console.log('average',average);*!/

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
*/
/* 链式数组方法
let channelArray = account1.movements;
let channelInterest = account1.interestRate;

let result = channelArray
    .filter(item => item > 0)
    .map(item => item * channelInterest)
    .reduce((acc, cur) => acc + cur, 0)
console.log(result);
*/
/* 挑战三 狗狗的年龄 链式实现
///////////////////////////////////////
// Coding Challenge #3

/!*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*!/
const calcAverageHumanAge = ageArray => ageArray
        .map(item => item <= 2 ? item * 2 : 4 * item + 16)
        .filter(item => item >= 18)
        .reduce((acc, current, _, arr) =>  acc + current / arr.length, 0);

let aver1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
let aver2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(aver1,aver2);
*/
/* find 方法
const firstWithdrawal = account1.movements.find(item => item < 0);

console.log(account1.movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(object=>object.owner === 'Jessica Davis');
console.log(account);
*/
/* some,every 方法
console.log(account1.movements.includes(-130));

console.log(account1.movements.some(mov => mov === -130));

const anyDeposits = account1.movements.some(mov => mov > 0);
console.log(anyDeposits);

console.log(account1.movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// 分离回调函数
const deposit = mov => mov > 0;
console.log(account1.movements.some(deposit));
console.log(account1.movements.every(deposit));
console.log(account1.movements.filter(deposit));
*/
/* flap 方法
const arr = [1, 2, 3, [4, 5], 6];
console.log(arr.flat())

const arr2 = [1, [2, 3], [4, 5], 6, [7, [8, 9]]];
console.log(arr2.flat(2))

/!* 法一
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
*!/
const overBalance = accounts
    .map(item => item.movements)
    .flat()
    .reduce((acc,cur)=>acc+cur,0)
console.log(overBalance);
*/






























