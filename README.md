# JavaScript

- javascript学习 于 2023.05.09 开仓

---

## 第5章 数组、对象和迭代方法，ES6以及String方法

#### 1. 数组解构

内容如下:

```js
// 过去的解构方式
const arr = [1, 2, 3];
const a1 = arr[0];
const a2 = arr[1];
const a3 = arr[2];
console.log(`a1, a2, a3: `, a1, a2, a3);

// ES6的解构方式
const [x, y, z] = arr;
console.log(`x,y,z: `, x, y, z);
console.log(arr);

// 跳过不需要解构的内容
let [first, , third] = restaurant.categories;
console.log(first, third);

// 数据替换
[first, third] = [third, first];
console.log(first, third);

// order方法返回两个值的数组
const [starter, mainCource] = restaurant.order(2, 0);
console.log([starter, mainCource]);

// 深度解构
const nested = [1,2,[4,5]];
// const [i,,j] = nested;
// console.log(i,j);
const [i ,, [j,k]] = nested;
console.log(i,j,k);

// 默认值与改变默认值
const [q,w,e,r=1] = [1,2,3];
console.log(q,w,e,r);// 默认值为 undefined
```

#### 2.对象解构

内容如下:

```js
// 一般的对象解构
const {name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);

// 解构对象，并重命名
const {
    name:hotelName,
    openingHours:hotelOpeningHouse,
    categories:hotelCategories
} = restaurant
console.log(hotelName,hotelOpeningHouse,hotelCategories);

// 解构对象，并赋默认值
const {
    menu = [],
    starterMenu = []
} = restaurant
console.log(menu,starterMenu);

// 解构对象，实现变量赋值
let a = 12;
let b = 13;
const obj = {a:111,b:222};
({a,b}=obj);
console.log(a,b);

// 深度解构对象
const {
    fri:{
        open:o,
        close:cl
    }
} = openingHours;

console.log(o,cl);

// 传入对象
restaurant.orderDelivery({
    time:`10:22`,
    address:`China`,
    mainIndex:2,
    starterIndex:1
})

// 传入对象，并在函数参数中进行解构
restaurant.orderDelivery2({
    time:`10:22`,
    address:`China`,
    mainIndex:2,
    starterIndex:1
})
```

#### 3.扩展运算符

内容如下:

```js
// 一般的数组赋值方式
const array = [2, 5, 7];
const arr = [1, 3, array[0], array[1], array[2]];

console.log(arr);

// 使用扩展运算符
const arr2 = [1, 3, ...array];

console.log(arr2);
console.log(...arr2);

const newMenu = [...restaurant.mainMenu,`Gnni c`];

console.log(newMenu);

// 使用扩展运算符，实现深拷贝
const newMenuCopy = [...newMenu];
newMenuCopy[0] = `waterMelon`;

console.log(newMenuCopy);

// 数组合并
const joinArray = [...restaurant.starterMenu,...restaurant.mainMenu];

console.log(joinArray);

// 字符串使用扩展运算符
const name = `JoJoby`;
const strArray = [...name,` `,`S.`];

console.log(strArray);

// 浏览器输入数据，使用扩展运算符
const details = [
    prompt(`Let's make a pizza,Ingredients 1?`),
    prompt(`Ingredients 2?`),
    prompt(`Ingredients 3?`),
]

console.log(details);
console.log(...details);

restaurant.orderPasta(details[0],details[1],details[2]);
restaurant.orderPasta(...details);

// 对象使用扩展运算符
const objectRest = {founded:1999,base:`ChongQing`,...restaurant};

console.log(objectRest);

// 扩展运算符实现对象的深拷贝
const objectRestCopy = {...objectRest};
objectRestCopy.base = `YaLaSuo`;

console.log(objectRestCopy.base);
console.log(objectRest.base);
```

#### 4.扩展运算符打包

内容如下:

```js
// 使用扩展运算符
const arr = [1,2,...[4,5,6]];

// 扩展运算符打包
const [a,b,...other] = arr;

console.log(a,b,other);

// 打包
const [pizza,risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];

console.log(pizza,risotto,otherFood);

// 对象打包
const {sat,...weekdays} = restaurant.openingHours;

console.log(sat,weekdays);

// 函数参数打包
function printWeather(...weather){
    console.log(weather);
}
printWeather(1,2,3,4,5);

// 对象内置函数参数打包
restaurant.orderPizza(`apple`,`banana`,`cripple`,`drinking`,`ease`,`flower`,`group`);
```

#### 5.and,or运算符

介绍：

1. and运算符`&&`:判断域里找假值，找到就返回该假值，未找到就返回最后一个真值。

2. or运算符`||`:判断域里找真值，找到就返回该真值，未找到就返回最后一个假值。

代码如下:

```js
console.log(3 || `Bob`);  // 3
console.log('' || 'Bob');  // Bob
console.log(true || 0);  // true
console.log(undefined || null);  // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null);  // Hello

// restaurant.numGuests = 25
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);  // 25

const guests2 = restaurant.numGuests ||  10;
console.log(guests2);  // 25

console.log(`---AND---`);

console.log(0 && 'Bob');  // 0
console.log(7 && 'Bob');  // Bob
console.log('Hello' && 23 && null && 'Bob');  // null

if(restaurant.orderPizza){  // function
    restaurant.orderPizza('mushrooms','spinach');
}
// function && function()
restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');
```

#### 6.空值合并运算符

```js
let a = 5;
console.log(a || 10); // 5
console.log(a ?? 10); // 5

console.log(`a=0`);

a = 0;
console.log(a || 10); // 10
console.log(a ?? 10); // 0
```

#### 7.运算符赋值

```js
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
// rest1.numGuests ||= 10;  // 找到第一个真值，并赋值
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;  // 问对象本身有没有值，没有值就赋值
// rest2.numGuests ??= 10;

rest1.owner &&= '<Apple>';  // 找到最后一个真值，并赋值
rest2.owner &&= '<Apple>';

console.log(rest1);
console.log(rest2);
```

#### 挑战一 足球比赛

```js
// Coding Challenge #1

/*
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
*/
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


// 完成解构
const [player1,player2] = game.players;
console.log(player1,player2);

// 数组解构
const [goalKeeper,...fieldPlayers] = player1;
console.log(goalKeeper,fieldPlayers);

// 数组合并
const allPlayers = [...player1,...player2];
console.log(allPlayers);

// 数组合并2
const players1Final = [...player1,...['Thiago', 'Coutinho', 'Perisic']];
console.log(players1Final);

// 数组深度解构并重命名
const {odds:{team1,x:draw,team2}} = game;
console.log(team1,draw,team2);

// 函数参数解构
function printGoals(...players){
    console.log(`${players.length} goals are scored.`);
}

printGoals(...game.scored);

// 逻辑且判断为真，则执行最后一句语言
team1 < team2 && console.log(`team1 will be more likely to win.`);
team1 > team2 && console.log(`team2 will be more likely to win.`);
```

---

#### 8.循环结构(for of)

本意：更加方便的获取到数组的每一个元素

代码如下:

```js
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// 数组迭代
for (const item of menu) {
    console.log(item);
}

// 数组迭代，并生成下标
for (const item of menu.entries()) {
    console.log(item);
}

// 数组迭代，生成下标，并解构获取
for( const [index,item] of menu.entries()){
    console.log(`${index}: ${item}`);
}
```

#### 9.增强模板文字

- 声明与赋值可以用声明变量名进行表达`{name}`

- 对象中的函数可以不用可以表达`funtion`

- 子对象可以使用数组符号进行赋值`[array[0]]:{}`

示例如下:

```js
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
object.getName();
```

#### 10.可选链运算符(?.)

作用: 用于判断符号后的内容是否存在，若存在则返回，若不存在则返回`undefined`

内容如下:

```js
// 对象的链式判断
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

// 搭配循环进行链式判断
const days = ['mon','wen','thu','tur','fri','sat','sun'];
for (const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`at ${day},we open at ${open}`);
}

// 函数的链式判断，结合空值合并运算符
console.log(restaurant.order?.(0,1) ?? 'Method is not found.');
console.log(restaurant.ordered?.(0,1) ?? 'Method is not found.');

// 数组对象进行链式判断
const person = [{
    name:'Bob',
    email:'email@qq.com'
}]

console.log(person[0]?.name ?? 'have not the name.');

if (person.length !== 0){
    console.log(person[0].name);
}else{
    console.log('not the name.')
}
```

#### 11.获取键名、键值，生成键值对数组，以及应用

```js
// 生成键名
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We can open on ${properties.length} days:`;
for(const day of properties){
    openStr += `${day}, `;
}
console.log(openStr);

// 生成键值
const values = Object.values(restaurant.openingHours);
console.log(values);

// 生成键值对数组
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

// 键值对应用
for (const [key,{open,close}] of entries){
    console.log(`On ${key}, we can open at ${open},and close at ${close}`);
```

#### 挑战二 足球比赛2

```js
///////////////////////////////////////
// Coding Challenge #2

/*
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
*/

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
} //数组计数，并生成计数数组

const valueScored = Object.values(game.scored);
console.log(valueScored);

const scorers = {};
for(const value of valueScored){
    scorers[value] = scorers[value] ? scorers[value]+1 : 1;
} // 实现对象生成与赋值
console.log(scorers);
```

#### 12. Set集合

ES6之后诞生的一种数据结构，用于存放独一无二的数据。

内容:

1. 接收`string`数据、`array`数据

2. 在`set`集合中，会去掉相同的值，使数据以独一无二的形式呈现

3. 支持循环迭代、解构

4. `set`集合集成`has,add,delete,size`等等方法

示例如下:

```js
// 生成set集合
const set = new Set(['Bob','Jimmy','Jack','Jimmy','Jack']);

console.log(set);
console.log(new Set('LeBea'));

console.log(set.size);
// 判断值是否存在
console.log(set.has('Jimmy'));
console.log(set.has('Quiede'));

// 添加与删除
set.add('Quiede');
set.add('James');
set.delete('James');

console.log(set);

// 循环迭代
for(const name of set) console.log(name);

// 解构为新数组
const staff = ['Waiter','Chef','Manager','Waiter','Chef','Waiter','Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);
console.log(new Set('ashyuajhgzykqw').size);
```

#### 13.Map集合

ES6之后诞生的一种数据结构，用于存储键值对。

内容:

1. 接受任何数据类型，包括`document,array`

2. 通过键名获取键值

示例如下:

```js
// 生成map结构
const rest = new Map();
rest.set('name', 'Lex Sium');
rest.set(1, 'China,Xi\'an');
rest.set(2, 'GuiAn,Province');
console.log(rest);

// 添加键值对
rest.set('categories', ['American', 'France', 'Japan', 'Korean']).set('open', 11).set('close', 23).
set(true, 'open at :D').set(false, 'closed at :(');

// 获取键值
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear();

// 特别说明，直接设置数组会导致set,get方法里的请求键名数组不相同，
// 主要原因是 set,get方法申请的数组空间不相同，尽管数据相同
// 所以 切记使用变量名引用对应的数据空间
let arr = [1,2]
rest.set(arr,'Array[]:1,2');
console.log(rest.get(arr));

// 设置document对象键名
rest.set(document.querySelector('h1'),'Title');
console.log(rest.get(document.querySelector('h1')));

console.log(rest);
console.log(rest.size);
```

#### 14. Map集合应用

代码如下:

```js
// 定义Map集合
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

// 对象生成键值对，再转为Map集合
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));

console.log(hoursMap);

// 应用
console.log(question.get('question'));
for(const [key,value] of question){
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;

// 判断答案一
if(answer === question.get('correct')){
    console.log(question.get(true));
}else{
    console.log(question.get(false))
}
// 判断答案二 巧妙
console.log(question.get(answer === question.get('correct')));

// 将Map集合转换为数组
console.log([...question]);
// 获取键名、键值
console.log(question.keys());
console.log(question.values());
```