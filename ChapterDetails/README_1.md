## 第1章

#### 严格模式

严格模式的激活，在.js文件的开头位置，写下

`'use strict';`

可以规避的问题:

1. 书写错误

2. 关键字错误

#### 函数

定义语法:

```js
function name(params){
    //函数体
}


//调用函数，调用、运行、激活意思在此处等同
name(); 
```

使用过程:

```js
// 创建函数
function logger() {
    console.log("this is function.");
}
// 调用函数
logger();

function products(apples,oranges){
    console.log(apples,oranges);
    const juice = `The juice have ${apples} apples and ${oranges} oranges.`;
    // 返回值
    return juice;
}
let juice = products(5,2);
console.log(juice);
```

> 意义:
> 
>     使用函数帮助我们完成重复性的事情

函数定义方式

1. 直接声明

```js
function calcAge(birthYear){
    return 2037 - birthYear;
}

console.log("Function: ",calcAge(1999));
```

> tips:
> 
>     存在变量提升情况,即**声明函数前可以调用**

2.变量声明

```js
const ageFun = function (birthYear){
    return 2037 - birthYear;
}

console.log("const ageFun: ",ageFun(1999))
```

> tips:
> 
>     不存在变量提升情况

3.箭头函数

目前自认为是最舒适的声明方式

```js
// 简便方式
const ageFun2 = birthYear => 2037 - birthYear;

console.log("Arrow fun",ageFun2(1999));


// 完整形式
const ageFun3 = (birthYear,useName) => {
    const retiredAge = 65 - (2037 - birthYear);
    return `After ${retiredAge} age , ${useName} can enjoy his life.
`;
}
console.log(ageFun3(1999,"Liu"));
```

4.函数调用函数

```js
// 水果切片
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

// 退休判断
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const retiredYear = function (birthYear,firstName){
    const age = calcAge(birthYear);
    const retirement = 65 -age;

    if (retirement>0){
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} is already retired 🎉`;
    }
}

console.log(retiredYear(1999,"Liu"));
console.log(retiredYear(1955,"Wu"));
```

#### 挑战一 海豚和考拉

```js
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

GOOD LUCK 😀
*/

function calcAverage(score1,score2,score3){
    return (score1+score2+score3)/3;
}

function checkWinner(team1Score,team2Score) {
    // console.log(team1Score,team2Score);
    if(team1Score >= team2Score * 2){
        return `Dolphins win (${team1Score} vs. ${team2Score})😊`;
    } else if (team2Score >= team1Score * 2){
        return `Koalas win (${team1Score} vs. ${team2Score})😊`;
    } else{
        return `no team wins!😑`;
    }
}
/* data-1
const DolphinsAverage = calcAverage(44, 23 , 71);
const KoalasAverage = calcAverage(65, 54 , 49);*/

const DolphinsAverage = calcAverage(85, 54 , 41);
const KoalasAverage = calcAverage(23, 34 , 27);

console.log(checkWinner(DolphinsAverage,KoalasAverage));
```

#### 数组

起因:需要多次建立重复性质的内容时，用于替代基本类型的定义方法而诞生

定义方法:

- 直接声明:`const friends = ["Bob","jim","Peter"];`

- 数组函数:`const years = new Array(1999,1998,1997,1996);`

使用示例:

```js
const friends = ["Bob","jim","Peter"];
const years = new Array(1999,1998,1997,1996);

// 打印数组
console.log(friends);
console.log(years);

// 打印数组的单个属性
console.log(friends[1]);
console.log(years[1]);

// 打印数组长度
console.log(friends.length);

// 修改数组的单个属性
friends[0] = "Tom"; //未改变常量的引用空间，触发有效
console.log(friends[0]);

// 建立多类型数组
const specialArray = ["Tom","Jerry",2037-1999,friends]; //能够存入不同类型的值
console.log(specialArray);

// 函数与数组
const calculateAge = (year) => 2037 - year;

console.log(calculateAge(years[0]));
console.log(calculateAge(years[1]));
console.log(calculateAge(years[years.length - 1]));

// 生成函数计算后的数组
const calculateAge2 = [calculateAge(years[0]),calculateAge(years[1]),calculateAge(years[2])];
console.log(calculateAge2);
```

数组方法:

1. `Array.push()`:尾插入，并返回插入后的数组长度

2. `Array.unshift()`:头插入

3. `Array.pop()`:尾删除，并返回删除的元素

4. `Array.shift()`:头删除

5. `Array.indexOf()`:查找元素，并返回元素下标

6. `Array.includes()`:查找元素，返回boolean值

使用示例:

```js
const nameArray = ["Bob", "Jimmy", "Tom"];
const pushLength = nameArray.push("Jerry"); //返回添加新元素后的数组长度

console.log("原数组: ",nameArray);
console.log("返回添加新元素后的数组长度: ",pushLength);

nameArray.unshift("Josh");

console.log("头插入: ",nameArray); // 头插入

const popped = nameArray.pop(); // 尾删除，并返回首个元素

console.log("尾删除: ",popped);
console.log("删除后的数组",nameArray);

nameArray.shift();  // 头删除

console.log("头删除: ",nameArray);

console.log("返回指定元素的下标: ",nameArray.indexOf("Tom"));
console.log("返回指定元素的下标: ",nameArray.indexOf("Bob"));

console.log("确认指定元素是否存在: ",nameArray.includes("Jimmy"));
console.log("确认指定元素是否存在: ",nameArray.includes("Jerry"));
```

#### 代码挑战 账单合计

```js
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [];

total.push(bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]);

console.log(bills);
console.log(tips);
console.log(total);
```

#### 对象(Object)

对象的简单声明,以**键值对**的形式记录数据

```js
const Person = {
    firstName:"Bob",
    LastName:"Oven",
    age:2037-1999,
    job:"dasher",
    friends:["Tom","Jerry","Steven"]
}
```

对象的函数声明以及使用

```js
const Person = {
    firstName: "Bob",
    LastName: "Oven",
    birthYear: 1999,
    job: "dasher",
    friends: ["Tom", "Jerry", "Steven"],
    hasLicense: true,

    calcAge: function (birthYear) {  // 函数的基本声明，传参
        return 2023 - birthYear;
    },

    calcAge2: function () {  // 函数调用对象属性
        console.log(this);
        return 2023 - this.birthYear;
    },

    calcAge3: function () {  // 函数调用对象属性，并添加`age`属性
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary:function (){  // 返回字符串
        return `${this.firstName} ${this.LastName} is a ${this.age}-year old ${this.job}, and he ${this.hasLicense?"has":"has not"} a driver's license.`;
    }
}

// 两种对象函数的调用方式
console.log(Person.calcAge(1999));
console.log(Person["calcAge"](1999));

console.log("-----------");
console.log(Person);
console.log(Person.calcAge2());

console.log("-----------");
console.log(Person.calcAge3())
console.log(Person.age);
console.log(Person.age);
console.log(Person.age);

console.log("-----------");
console.log(Person.getSummary());
```

#### 挑战三 BMI计算(对象实现)

```js
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const Marks = {
    fullName:"Mark Miller",
    mass:78,
    height:1.69,
    calcBMI: function (){
        this.BMI = this.mass/(this.height*this.height);
        return this.BMI
    }
}
const John = {
    fullName:"John Smith",
    mass:92,
    height:1.95,
    calcBMI: function (){
        this.BMI = this.mass/(this.height*this.height);
        return this.BMI
    }
}
if (Marks.calcBMI() > John.calcBMI()){
    console.log(`${Marks.fullName}'s BMI (${Marks.BMI}) is higher than ${John.fullName}'s (${John.BMI})!`);
} else if(Marks.BMI === John.BMI){
    console.log(`Both of them are equal in BMI.😑`);
}else{
    console.log(`${John.fullName}'s (${John.BMI}) is higher than ${Marks.fullName}'s BMI (${Marks.BMI})!`)
}
```

#### 数组的遍历方法

遍历方式一`for`

说明:

1. 声明控制变量

2. 声明结束条件

3. 设置控制变量的变化

特别地,

- `break`:直接跳出当前循环

- `continue`:跳出当前代码块，执行下一轮循环

示例如下:

```js
const array = [
    "Bob",
    "Tom",
    2037-1999,
    "dasher",
    ["John","Bruce","Jack"],
    true
];
const array_types = [];


for(let i = 0;i<array.length;i++){
    console.log(array[i],typeof array[i]);

    // array_types[i] = typeof array[i];

    array_types.push(typeof array[i]);
}

console.log(array_types);

const years = [1991,1993,2000,1998];
const age = [];

for(let i = 0 ;i<years.length;i++){
    age.push(2037-years[i]);
}

console.log("age: ",age);

console.log("----------------continue:");
for(let i = 0;i<array.length;i++){
    if (typeof array[i] !== "string") continue;
    console.log(array[i],typeof array[i]);

    // array_types[i] = typeof array[i];

    array_types.push(typeof array[i]);
}
console.log("----------------break:");
for(let i = 0;i<array.length;i++){
    if (typeof array[i] !== "string") break;
    console.log(array[i],typeof array[i]);

    // array_types[i] = typeof array[i];

    array_types.push(typeof array[i]);
}
```

倒序遍历和遍历中的遍历

```js
const array = [
    "Bob",
    "Tom",
    2037 - 1999,
    "dasher",
    ["John", "Bruce", "Jack"],
    true
];
// 倒序遍历
for (let i = array.length - 1; i >= 0; i--) {
    console.log(i, array[i], typeof array[i]);
}
// 遍历中遍历
for (let i = 0; i < 5; i++) {
    console.log(`----Chapter ${i} 😊`);
    for (let j = 0; j < 3; j++) {
        console.log(`Part ${j} 😎`);
    }
}
```

while循环

示例如下:

```js
// 简单的计数实现
let i = 0;

while (i < 10) {
    console.log(`While: part ${i}😙`);
    i++;
}

// 当随机数为6时停止
let number_random = Math.trunc(Math.random() * 6) + 1;

while (number_random !== 6) {
    console.log(`The current number is: ${number_random},not 6.🙄`);
    number_random = Math.trunc(Math.random() * 6) + 1;
    if (number_random === 6) console.log(`The loop is over,The current number is: ${number_random}🙂`);
}
```

> tips:
> 
> 当循环不是特别需要计数器的情况下，推荐使用

#### 挑战三 小费合计（遍历实现）

```js
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (billsArray) {
    for (let i = 0; i < billsArray.length; i++) {
        if (billsArray[i] >= 50 && billsArray <= 300) tips.push(billsArray[i] * 0.15);
        else tips.push(billsArray[i] * 0.2);
        totals.push(billsArray[i] + tips[i]);
    }
}

const calcAverage = function (Array) {
    let sum = 0;
    for (let i = 0; i < Array.length; i++) {
        sum += Array[i];
    }
    return sum / Array.length;
}

console.log(bills);
calcTip(bills);
console.log(tips);
console.log(totals);

console.log(`----Average:`)
console.log(calcAverage(totals));
```

---
