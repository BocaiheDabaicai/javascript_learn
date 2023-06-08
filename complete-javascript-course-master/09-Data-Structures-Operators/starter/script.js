'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
