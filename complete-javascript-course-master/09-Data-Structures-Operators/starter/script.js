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

    orderDelivery:function(obj) {
        console.log(obj);
    },

    orderDelivery2:function({time, address, mainIndex, starterIndex}) {
        console.log(`Order receive! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}. `);
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
