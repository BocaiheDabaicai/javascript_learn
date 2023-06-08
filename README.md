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