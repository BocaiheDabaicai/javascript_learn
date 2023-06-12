'use strict';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    numGuests: 23,

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (startMenuIndex, mainMenuIndex) {
        return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]];
    },

    orderDelivery: function (obj) {
        console.log(obj);
    },

    orderDelivery2: function ({time, address, mainIndex, starterIndex}) {
        console.log(`Order receive! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}. `);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza: function (mainIngradient, ...otherIngradient) {
        console.log(mainIngradient);
        console.log(otherIngradient);
    }
};
// 挑战使用的对象
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

/* 数组解构
const arr = [1, 2, 3];
const a1 = arr[0];
const a2 = arr[1];
const a3 = arr[2];
console.log(`a1, a2, a3: `, a1, a2, a3);

const [x, y, z] = arr;
console.log(`x,y,z: `, x, y, z);
console.log(arr);

let [first, , third] = restaurant.categories;
console.log(first, third);

[first, third] = [third, first];
console.log(first, third);

const [starter, mainCource] = restaurant.order(2, 0);
console.log([starter, mainCource]);

const nested = [1,2,[4,5]];
// const [i,,j] = nested;
// console.log(i,j);
const [i ,, [j,k]] = nested;
console.log(i,j,k);

const [q,w,e,r=1] = [1,2,3];
console.log(q,w,e,r);// 默认值为 undefined*/
/* 对象解构
const {name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);

const {
    name:hotelName,
    openingHours:hotelOpeningHouse,
    categories:hotelCategories
} = restaurant
console.log(hotelName,hotelOpeningHouse,hotelCategories);

const {
    menu = [],
    starterMenu = []
} = restaurant
console.log(menu,starterMenu);

let a = 12;
let b = 13;
const obj = {a:111,b:222};
({a,b}=obj);
console.log(a,b);

const {
    fri:{
        open:o,
        close:cl
    }
} = openingHours;

console.log(o,cl);

restaurant.orderDelivery({
    time:`10:22`,
    address:`China`,
    mainIndex:2,
    starterIndex:1
})

restaurant.orderDelivery2({
    time:`10:22`,
    address:`China`,
    mainIndex:2,
    starterIndex:1
})*/
/* 扩展运算符
const array = [2, 5, 7];
const arr = [1, 3, array[0], array[1], array[2]];

console.log(arr);

const arr2 = [1, 3, ...array];

console.log(arr2);
console.log(...arr2);

const newMenu = [...restaurant.mainMenu,`Gnni c`];

console.log(newMenu);

const newMenuCopy = [...newMenu];
newMenuCopy[0] = `waterMelon`;

console.log(newMenuCopy);

const joinArray = [...restaurant.starterMenu,...restaurant.mainMenu];

console.log(joinArray);

const name = `JoJoby`;
const strArray = [...name,` `,`S.`];

console.log(strArray);

const details = [
    prompt(`Let's make a pizza,Ingredients 1?`),
    prompt(`Ingredients 2?`),
    prompt(`Ingredients 3?`),
]

console.log(details);
console.log(...details);

restaurant.orderPasta(details[0],details[1],details[2]);
restaurant.orderPasta(...details);

const objectRest = {founded:1999,base:`ChongQing`,...restaurant};

console.log(objectRest);

const objectRestCopy = {...objectRest};
objectRestCopy.base = `YaLaSuo`;

console.log(objectRestCopy.base);
console.log(objectRest.base);*/
/* 扩展运算符打包
const arr = [1,2,...[4,5,6]];

const [a,b,...other] = arr;

console.log(a,b,other);

const [pizza,risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];

console.log(pizza,risotto,otherFood);

const {sat,...weekdays} = restaurant.openingHours;

console.log(sat,weekdays);

function printWeather(...weather){
    console.log(weather);
}
printWeather(1,2,3,4,5);

restaurant.orderPizza(`apple`,`banana`,`cripple`,`drinking`,`ease`,`flower`,`group`);
*/
/* and,or运算符
console.log(3 || `Bob`);
console.log('' || 'Bob');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests ||  10;
console.log(guests2);

console.log(`---AND---`);

console.log(0 && 'Bob');
console.log(7 && 'Bob');
console.log('Hello' && 23 && null && 'Bob');

if(restaurant.orderPizza){
    restaurant.orderPizza('mushrooms','spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');*/
/* ?? 空值合并运算符
let a = 5;
console.log(a || 10);
console.log(a ?? 10);

console.log(`a=0`);

a = 0;
console.log(a || 10);
console.log(a ?? 10);*/
/* 逻辑运算符赋值
const rest1 = {
    name:'Bob',
    numGuests:12
}

const rest2 = {
    name:'FireFox',
    owner:'Grooyy'
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

rest1.owner &&= '<Apple>';
rest2.owner &&= '<Apple>';

console.log(rest1);
console.log(rest2);*/
/*
///////////////////////////////////////
// Coding Challenge #1

/!*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*!/

const [player1,player2] = game.players;
console.log(player1,player2);

const [goalKeeper,...fieldPlayers] = player1;
console.log(goalKeeper,fieldPlayers);

const allPlayers = [...player1,...player2];
console.log(allPlayers);

const players1Final = [...player1,...['Thiago', 'Coutinho', 'Perisic']];
console.log(players1Final);

const {odds:{team1,x:draw,team2}} = game;
console.log(team1,draw,team2);

function printGoals(...players){
    console.log(`${players.length} goals are scored.`);
}

printGoals(...game.scored);

team1 < team2 && console.log(`team1 will be more likely to win.`);
team1 > team2 && console.log(`team2 will be more likely to win.`);*/
/*循环结构(for of)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
    console.log(item);
}

for (const item of menu.entries()) {
    console.log(item);
}

for( const [index,item] of menu.entries()){
    console.log(`${index}: ${item}`);
}*/
/* 增强模板文字
const name = {
    man: ['Bob', 'Jack'],
    woman: ['Jassiy', 'Mooly']
}

const time = [10, 12, 18];

const object = {
    name,
    getName() {
        console.log(...this.name.man);
        console.log(...this.name.woman);
    },
    thing: {
        [time[0]]: {
            job: 'writter',
            money: 12
        },
        [time[1]]: {
            job: 'painter',
            money: 5
        },
        [time[2]]: {
            job: 'guard',
            money: 24
        },
        [`job-${time[2]}`]: {
            job: 'sleep',
            money: 500
        },
    }
}

console.log(object);
object.getName();*/
/* 可选链运算符
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

const days = ['mon','wen','thu','tur','fri','sat','sun'];
for (const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`at ${day},we open at ${open}`);
}

console.log(restaurant.order?.(0,1) ?? 'Method is not found.');
console.log(restaurant.ordered?.(0,1) ?? 'Method is not found.');

const person = [{
    name:'Bob',
    email:'email@qq.com'
}]

console.log(person[0]?.name ?? 'have not the name.');

if (person.length !== 0){
    console.log(person[0].name);
}else{
    console.log('not the name.')
}*/
/* 获取键名、键值，生成键值对数组，以及应用
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We can open on ${properties.length} days:`;
for(const day of properties){
    openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(restaurant.openingHours);
console.log(values);

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key,{open,close}] of entries){
    console.log(`On ${key}, we can open at ${open},and close at ${close}`);
}*/
/*
///////////////////////////////////////
// Coding Challenge #2

/!*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*!/

const loopScored = Object.entries(game.scored);
// console.log(loopScored);
for(const [key,value] of loopScored){
    console.log(`Goal ${key}: ${value}`);
}

const valueOdds = Object.values(game.odds);
// console.log(valueOdds);
let sum = 0;
for(const value of valueOdds){
    sum += value;
}
console.log(`average is : `,sum/valueOdds.length);

const loopOdds = Object.entries(game.odds);
console.log(loopOdds);
for(const [name,value] of loopOdds){
    console.log(`Odd of ${name !== 'x'?`Victory ${game[name]}`:`draw`}: ${value}`);
}

const valueScored = Object.values(game.scored);
console.log(valueScored);

const scorers = {};
for(const value of valueScored){
    scorers[value] = scorers[value] ? scorers[value]+1 : 1;
}
console.log(scorers);*/
/* Set集合
const set = new Set(['Bob','Jimmy','Jack','Jimmy','Jack']);

console.log(set);
console.log(new Set('LeBea'));

console.log(set.size);
console.log(set.has('Jimmy'));
console.log(set.has('Quiede'));

set.add('Quiede');
set.add('James');
set.delete('James');

console.log(set);

for(const name of set) console.log(name);

const staff = ['Waiter','Chef','Manager','Waiter','Chef','Waiter','Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);
console.log(new Set('ashyuajhgzykqw').size);*/
/* Map集合
const rest = new Map();
rest.set('name', 'Lex Sium');
rest.set(1, 'China,Xi\'an');
rest.set(2, 'GuiAn,Province');
console.log(rest);

rest.set('categories', ['American', 'France', 'Japan', 'Korean']).set('open', 11).set('close', 23).
set(true, 'open at :D').set(false, 'closed at :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear();

let arr = [1,2]

rest.set(arr,'Array[]:1,2');

console.log(rest.get(arr));

rest.set(document.querySelector('h1'),'Title');

console.log(rest.get(document.querySelector('h1')));

console.log(rest);
console.log(rest.size);*/
/* Map集合应用
const question = new Map([
    ['question','who is the best player in NBA?'],
    [1,'LBJ'],
    [2,'MJ'],
    [3,'JB'],
    [4,'Tom Duncan'],
    ['correct',3],
    [true,'Correct!❤'],
    [false,'Try Again!'],
]);
console.log(question);

console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));

console.log(hoursMap);

console.log(question.get('question'));
for(const [key,value] of question){
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;

if(answer === question.get('correct')){
    console.log(question.get(true));
}else{
    console.log(question.get(false))
}

console.log(question.get(answer === question.get('correct')));

console.log([...question]);
console.log(question.keys());
console.log(question.values());*/
/*
///////////////////////////////////////
// Coding Challenge #3

/!*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*!/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);


const event = [...new Set(gameEvents.values())];
console.log(event);

gameEvents.delete(64);
console.log(gameEvents);

const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

for(const[key,value] of gameEvents){
    console.log(`${key<45?'[FIRST HALF]':'[SECOND HAFL]'} ${key}: ${value}`);
}*/
/* String 类型的方法
const ariLine = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(ariLine.length);
console.log('B737'.length);

console.log(ariLine.indexOf('r'));
console.log(ariLine.lastIndexOf('r'));
console.log(ariLine.indexOf('Portugal'));

console.log(ariLine.slice(4));
console.log(ariLine.slice(4,7));

console.log(ariLine.slice(ariLine.indexOf('T'),ariLine.lastIndexOf('P')));
console.log(plane.slice(plane.indexOf('A'),plane.lastIndexOf('2')));

console.log(ariLine.slice(0,-2));
console.log(ariLine.slice(-5,-1));

const logName = function (name){
    const result = name.slice(name.indexOf('n')+1);
    console.log(`Hello my dear : ${result}`);
}

logName('nJimmy');
logName('asdanBob');
logName('qweenTom');

console.log(new String('oppo'));
console.log(new String('oppo').slice(0));

const name = 'SUIjksduJSJAjsali';
const resultName = name[0].toUpperCase() + name.slice(1).toLowerCase();
console.log(resultName);

const email = '  54572905@QQ.COM  ';
console.log(email.toLowerCase().trim());

const bigName = 'Jimmy Butler And Toms Butler';
console.log(bigName.replace('Butler','Bruce'));
console.log(bigName.replaceAll('Butler','Bruce'));

const airName = 'Bruce Air224';
console.log(airName.includes('22'));
console.log(airName.includes('Jimmy'));
console.log(airName.startsWith('Bruce'));
console.log(airName.endsWith('224'));

const inspectFruit = function(fruit){
    if(fruit.includes('apple') || fruit.includes('pear')){
        console.log(`Your fruits are great!😘`);
    }else{
        console.log(`Try again 🤔, to get more types.`);
    }
}

inspectFruit(`banana apple`);
inspectFruit(`banana`);

const names = 'Bob James Browse';
const resultNames = names.split(' ');
console.log(resultNames);
console.log(resultNames.join('--'));

const getName = function(names){
    const resultNames = names.toLowerCase().split(' ');
    const resultArray = [];

    for(let name of resultNames){
        resultArray.push(name[0].toUpperCase() + name.slice(1));
    }

    console.log(resultArray.join('--'));
}

getName('names jooal fuuwe jHJKA qWWq');

const books = 'HongLou Meng';
const tales = 'ShanHai Jing';

console.log(books.padStart(20,'💕').padEnd(28,'💕'));
console.log(tales.padStart(20,'💕').padEnd(28,'💕'));

const secretNumber = function(number){
    const phone = number + '';

    console.log(phone.slice(-4).padStart(13,'*'));
}

secretNumber(15951733081);
secretNumber('1763478509');

const repeatNumber = function(number){
    console.log(`these are ${number} books, look ${'🎁'.repeat(number)}`);
}
repeatNumber(2);
repeatNumber(4);
repeatNumber(16);*/
/*
///////////////////////////////////////
// Coding Challenge #4

/!*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*!/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const changeButton = document.querySelector('button');

const camelCase = function(stringWords){
    const stringWordArray = stringWords.split("\n");
    const resultArray = [];

    for(const [index,item] of stringWordArray.entries()){
        let [first,second] = item.trim().toLowerCase().split('_');
        let result = first + second[0].toUpperCase() + second.slice(1);
        // resultArray.push(result.padEnd(20,' ')+'✔'.repeat(index+1));
        resultArray.push(`${result.padEnd(20,' ')}${'✔'.repeat(index+1)}`);
    }

    return resultArray.join('\n')
}

changeButton.addEventListener('click',function(){
    const text = document.querySelector('textarea').value;
    document.querySelector('textarea').value = camelCase(text);
})*/
/*
///////////////////////////////////////
// String Methods Practice

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getUpper = str => str.slice(0,3).toUpperCase();

for(const flight of flights.split('+')){
    const [type,from,to,time] = flight.split(';');
    const result = `${type.startsWith('_Delayed')?'🔴':''}${type.replaceAll('_',' ')} from ${getUpper(from)} ${getUpper(to)} (${time.replace(':','h')})`.padStart(42,' ');
    console.log(result);
}*/

