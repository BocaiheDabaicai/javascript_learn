# JavaScript

- javascript学习 于 2023.05.09 开仓

---

## 第0章

**JavaScript**是面向对象的高级多范式编程语言

书写方式:

1. 驼峰表达式`firstName`

2. 下划线表达式`first_name`

> 1. 允许开头的内容:`$``_`
> 
> 2. 数字不能开头
> 
> 3. 见名知意

#### 数据类型:

| 类型名       | 类型说明                                                                        | 类型示例                       |
| --------- | --------------------------------------------------------------------------- | -------------------------- |
| Number    | 数字类型(整数、浮点数)                                                                | `let age = 23;`            |
| String    | 字符串类型(单引号、双引号表示均可)                                                          | `let firstName = "Jonas";` |
| Boolean   | 布尔类型(表示`true`或`false`)                                                      | `let fullAge = true;`      |
| Undefined | 未定义类型,表达变量未定义,类似`空值`                                                        | `let children;`            |
| Null      | 表示`空值`,类型应该也是`undefined`,但`bug`的存在，使得null的类型为`Object`,**与Undefined类型不完全相同** |                            |
| Symbol    | ES2015引入，表示一个唯一的值，且无法变更(基本无用)                                               |                            |
| BigInt    | ES2020引入，表示一个数字巨大的`Number`类型                                                |                            |

*特别地，`JavaScript`能够动态定义数据类型，且在实践中，能够随意改变变量的数据类型*

#### 声明类型:

| 声明名   | 声明说明                | 声明示例              |
| ----- | ------------------- | ----------------- |
| let   | ES6引入,变量值可以随意更改     | `let age = 21;`   |
| const | ES6引入,变量值不可更改       | `const age = 20;` |
| var   | ES5的声明方式,遗弃状态，不推荐使用 | `var age = 19;`   |
| 不声明   | 拒绝如此                | `age = 18;`       |

#### 运算符:

- 算术类型:`+ - * / += -= ** ++ --`

- 比较类型:`> < >= <=`

#### 挑战一.BMI

```js
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
// 数据一
// let MarksWeight = 78;
// let MarksHeight = 1.69;
//
// let JohnWeight = 92;
// let JohnHeight = 1.95;
// 数据二
let MarksWeight = 95;
let MarksHeight = 1.88;

let JohnWeight = 85;
let JohnHeight = 1.76;

let MarksBMI = MarksWeight / (MarksHeight ** 2);
let JohnBMI = JohnWeight / (JohnHeight ** 2);

let markHigherBM = MarksBMI > JohnBMI;

console.log("MarksWeight: "+MarksWeight+"kg, MarksHeight: "+MarksHeight+"m");
console.log("MarksBMI: "+MarksBMI);
console.log("JohnWeight: "+JohnWeight+"kg, JohnHeight: "+JohnHeight+"m");
console.log("JohnBMI: "+JohnBMI);
console.log("markHigherBMI: "+markHigherBM);
```

#### 模板符号

内容:来自于ES6,更方便的字符串生成方式

符号:`反引号`

优点:

1. 更方便地接入变量

2. 更友好地接入换行

示例:

```js
const wholeInfo = "I'm "+firstName+", a "+(nowYear - birthYear)+" years old "+job;
console.log(wholeInfo);
const newWholeInfo = `I'm ${firstName}, a ${nowYear - birthYear} years old ${job}`;
console.log(newWholeInfo);
```

#### 控制结构(IF,else,else if)

内容:`if(表达式){}`

说明:代码块的内容无法相互访问，同时也不能够提供给外部进行使用

#### 挑战二 BMI plus

```js
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
let MarksWeight = 78;
let MarksHeight = 1.69;

let JohnWeight = 92;
let JohnHeight = 1.95;
// let MarksWeight = 95;
// let MarksHeight = 1.88;
//
// let JohnWeight = 85;
// let JohnHeight = 1.76;

let MarksBMI = MarksWeight / (MarksHeight ** 2);
let JohnBMI = JohnWeight / (JohnHeight ** 2);

let markHigherBM = MarksBMI > JohnBMI;

console.log("MarksWeight: "+MarksWeight+"kg, MarksHeight: "+MarksHeight+"m");
console.log("MarksBMI: "+MarksBMI);
console.log("JohnWeight: "+JohnWeight+"kg, JohnHeight: "+JohnHeight+"m");
console.log("JohnBMI: "+JohnBMI);
console.log("markHigherBMI: "+markHigherBM);

if(markHigherBM){
    console.log(`Mark's BMI (${MarksBMI}) is higher than John's (${JohnBMI})!`)
}else{
    console.log(`John's (${JohnBMI}) is higher than Mark's BMI (${MarksBMI})!`)
}
```

#### 类型转换

方式:

1. `Number(数据)`:将数据转换为数字，若转换**字符串**会得到NaN

2. `String(数据)`:将数据转换为字符串

> NaN说明:
> 
> 1. 类型为Number
> 
> 2. 意思表示为不是一个有效数字的数字类型

#### 强制转换

说明:强制转换主要发生在数据之间的计算，为了保证得到一个结果，而发生的情况。

示例:

```js
const a = '1' + 1;        //结果为 11,发生字符串合并
const b = '11' - 1;        //结果为 10,发生数字计算
const c = '11' * 2;        //结果为 22,发生数字计算
const d = '12' / 2;        //结果为 6,发生数字计算
```

🐴总结:

    在**字符串**与**数字**之间发生计算：

- `+`会进行字符串合并

- `- * /`会进行数字计算

#### 真假值

常见的五种假值:

- 0

- ""(空字符串)

- undefined

- null

- NaN

#### 逻辑运算符

| 逻辑符名称 | 逻辑意义 | 代码符号 |
| ----- | ---- | ---- |
| and   | 且    | &&   |
| or    | 或    |      |
| not   | 非    | !    |

#### 挑战三 谁是冠军

```js
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
const DolphinsAverage = (96+108+89)/3;
const KoalasAverage = (88+91+110)/3;

console.log(DolphinsAverage,KoalasAverage);
if(DolphinsAverage>KoalasAverage){
    console.log("The champion is Dolphins!🏆");
}else if(DolphinsAverage===KoalasAverage){
    console.log("Both of them is champions!!🏆");
}else{
    console.log("The champion is Koalas!🏆");
}

const DolphinsAverage1 = (97+112+101)/3;
const KoalasAverage1 = (109+95+123)/3;

console.log(DolphinsAverage1,KoalasAverage1);
if(DolphinsAverage1>KoalasAverage1 && DolphinsAverage1>=100){
    console.log("BONUS 1,The champion is Dolphins!🏆");
}else if(DolphinsAverage1===KoalasAverage1){
    console.log("BONUS 1,Both of them are champions!!🏆");
}else if(DolphinsAverage1<KoalasAverage1 && KoalasAverage1>=100){
    console.log("BONUS 1,The champion is Koalas!🏆");
}else{
    console.log("BONUS 1,No one can get the champion.😭");
}

const DolphinsAverage2 = (97+112+101)/3;
const KoalasAverage2 = (109+95+106)/3;

console.log(DolphinsAverage2,KoalasAverage2);
if(DolphinsAverage2>KoalasAverage2 && DolphinsAverage2>=100){
    console.log("BONUS 2,The champion is Dolphins!🏆");
}else if(DolphinsAverage2===KoalasAverage2 && DolphinsAverage2>=100 && KoalasAverage2>=100){
    console.log("BONUS 2,Both of them are champions!!🏆");
}else if(DolphinsAverage2<KoalasAverage2 && KoalasAverage2>=100){
    console.log("BONUS 2,The champion is Koalas!🏆");
}else{
    console.log("BONUS 2,No one can get the champion.😭");
}
```

#### 控制结构(Switch)

语法:

```js
switch(data){
    case one:
        //内容
        break;
    case two:
        //内容
        break;
    ...
    default:
        //内容
}
```

> tips:现在基本上使用if控制结构，特定场景下，switch依然有用武之地

#### 表达式和语句

表达式:产生结果的表达

语句:内容完整的阐述

```js
//表达式
12+13;

// 语句
if(12<13){    
    console.log("this is true")
}
```

> tips:不必要对这样的内容进行深究，意义真正在于运用

#### 三元运算符

表达式:`表达式1?表达式2:表达式3`

条件:

1. 表达式1确定正负值

2. 表达式2代表当结果为`true`时的执行

3. 表达式3代表当结果为`false`时的执行

#### 挑战四 计算小费

```js
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

GOOD LUCK 😀
*/
/* if结构实现
const bill = 430;
let tip = 0;
if( bill>=50 && bill<=300 ){
    tip = bill*0.15;
}else{
    tip = bill*0.2;
}
console.log(`The bill is ${bill},and the tips is ${tip},so the total is ${bill+tip}`);*/
/* 三元运算符实现
const bill = 430;
const tips = bill>=50&&bill<=300?bill*0.15:bill*0.2;
console.log(`The bill is ${bill},and the tip is ${tips},so the total is ${tips+bill}`);*/
```

---

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
