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