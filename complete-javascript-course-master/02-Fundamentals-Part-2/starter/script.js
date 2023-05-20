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


/* 水果切片
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
*/

/* 退休判断
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
*/

/* 挑战一
// Coding Challenge #1

/!*
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
*!/

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
/!* data-1
const DolphinsAverage = calcAverage(44, 23 , 71);
const KoalasAverage = calcAverage(65, 54 , 49);*!/

const DolphinsAverage = calcAverage(85, 54 , 41);
const KoalasAverage = calcAverage(23, 34 , 27);

console.log(checkWinner(DolphinsAverage,KoalasAverage));
*/

/* 数组基础
const friends = ["Bob","jim","Peter"];
const years = new Array(1999,1998,1997,1996);

console.log(friends);
console.log(years);

console.log(friends[1]);
console.log(years[1]);

console.log(friends.length);

friends[0] = "Tom"; //未改变常量的引用空间，触发有效
console.log(friends[0]);

const specialArray = ["Tom","Jerry",2037-1999,friends]; //能够存入不同类型的值
console.log(specialArray);

const calculateAge = (year) => 2037 - year;

console.log(calculateAge(years[0]));
console.log(calculateAge(years[1]));
console.log(calculateAge(years[years.length - 1]));

const calculateAge2 = [calculateAge(years[0]),calculateAge(years[1]),calculateAge(years[2])];
console.log(calculateAge2);
*/

/*  数组方法
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
*/

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

/*
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [];

total.push(bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]);

console.log(bills);
console.log(tips);
console.log(total);*/
/*  Object基础
const Person = {
    firstName:"Bob",
    LastName:"Oven",
    age:2037-1999,
    job:"dasher",
    friends:["Tom","Jerry","Steven"]
}

console.log(Person);
console.log(Person.firstName);
console.log(Person["firstName"]);

const name = "Name";
console.log(Person["first"+name]);
console.log(Person["Last"+name]);

// const promptMessage = prompt("You can try to input firstName,lastName,age,job,friends");
// console.log(Person[promptMessage]);

Person.location = "BeiKing";
Person['twitter'] = "@wwuy776";

console.log(Person);
console.log(`${Person.firstName} has ${Person.friends.length} friends, and his best friend is called ${Person.friends[0]}.`);
*/

/* Object使用
const Person = {
    firstName: "Bob",
    LastName: "Oven",
    birthYear: 1999,
    job: "dasher",
    friends: ["Tom", "Jerry", "Steven"],
    hasLicense: true,

    calcAge: function (birthYear) {
        return 2023 - birthYear;
    },

    calcAge2: function () {
        console.log(this);
        return 2023 - this.birthYear;
    },

    calcAge3: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary:function (){
        return `${this.firstName} ${this.LastName} is a ${this.age}-year old ${this.job}, and he ${this.hasLicense?"has":"has not"} a driver's license.`;
    }
}

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
console.log(Person.getSummary());*/

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