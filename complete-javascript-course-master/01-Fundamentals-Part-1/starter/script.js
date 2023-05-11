/*
* 基础使用
*

let js = "amazing";
// if (js === "amazing") alert("JavaScript is Fun!");
console.log(40+12+9-5);

console.log("Bob");
console.log(23);

let firstName = "Bob";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let b3a = 7;

// console.log(PI);

let myFirstJob = "programmer";
let myCurrentJob = "manager";

console.log(myFirstJob+" "+myCurrentJob);

*
* * */
/*
* 数据类型
console.log(false);
let judge = true;
console.log(judge);

console.log(typeof 12);
console.log(typeof true);
console.log(typeof "Bob");
console.log(typeof judge);

judge = "Bob's farther.";
console.log(typeof judge);


console.log(typeof undefined);
console.log(typeof null+" bug");
console.log(undefined === null);
* */
/*
* 声明类型
*
let age = 30;
age = 31;
const birthdayear = 2.2;
birthdayear = 3; //不允许的操作
* */
/*
* 运算符
const year = 2023;
const ageJonas = year - 1999;
const ageBob = year - 1992;
console.log(ageJonas, ageBob);
console.log(ageJonas * 2, ageBob / 2, 2 ** 3);

const firstName = "Bob";
const LastName = "John";
console.log(firstName + " " + LastName);

let x = 10 + 5;
let y = 10 - 5;
x += 10;
console.log(x)
x -= 5;
console.log(x)
x *= 5;
console.log(x)
x++;
console.log(x)
x--;
console.log(x)

console.log(ageJonas > ageBob);

let z, w;
z = w = 20 - 13;
console.log(z,w)
* */

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
/*
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
*/

/* 模板符号、判断结构、代码块初次提出
const firstName = "Bob";
const job = "worker";
const birthYear = 1998;
const nowYear = 2025;

const wholeInfo = "I'm "+firstName+", a "+(nowYear - birthYear)+" years old "+job;
console.log(wholeInfo);
const newWholeInfo = `I'm ${firstName}, a ${nowYear - birthYear} years old ${job}`;
console.log(newWholeInfo);

const age = 18;
if(age>=18){
    console.log("Bob can drive in the licence 🤠");
}else{
    console.log(`Bob is too young , he needs to wait anther ${18-age} years :)`);
}
*/
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
/*
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
*/
