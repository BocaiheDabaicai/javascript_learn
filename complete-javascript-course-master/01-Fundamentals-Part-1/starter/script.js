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
/*

const yearNumber = "1991";
console.log(yearNumber+18);
console.log(Number(yearNumber),18);
console.log(Number("Bob"));
console.log(typeof NaN);

let money;
if(money){
    console.log(`YaY! I have much money.`);
}else{
    console.log(`I haven't money. :|`);
}
*/

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
/*
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
*/

const day = "Thursday";

switch (day) {
    case "Monday":
        console.log("I want to read a book about life.");
        break;
    case "Tuesday":
        console.log("I need to swim with my wife.");
        break;
    case "Wednesday":
        console.log("I should clean my house.");
        console.log("Take care my heart.");
        break;
    case "Thursday":
        console.log("Great day!");
        break;
    case "Friday":
        console.log("Great day!");
        break;
    case "Saturday":
        console.log("Great day!");
        break;
    case "Sunday":
        console.log("Great day!");
        break;
    default:
        console.log("We can do it!");
}

if (day === "Monday") {
    console.log("I want to read a book about life.");
} else if (day === "Tuesday") {
    console.log("I need to swim with my wife.");
} else if (day === "Wednesday") {
    console.log("I should clean my house.");
    console.log("Take care my heart.");
} else if (day === "Thursday") {
    console.log("Great day!");
} else if (day === "Friday") {
    console.log("Great day!");
} else if (day === "Saturday") {
    console.log("Great day!");
} else if (day === "Sunday") {
    console.log("Great day!");
} else {
    console.log("We can do it!");
}