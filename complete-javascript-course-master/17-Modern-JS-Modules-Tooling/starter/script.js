// 导入模块

// addToCart('bread', 5)
// console.log(price, quantity)
// import {addToCart, totalPrice as price, quantity} from './shoppingCart.js';

console.log('Importing module')

// import * as ShoppingCart from "./shoppingCart.js";
//
// ShoppingCart.addToCart('banana', 3)
// console.log(ShoppingCart)

// import add,{addToCart, totalPrice as price, quantity} from './shoppingCart.js';


// import add, {cart} from './shoppingCart.js';
//
// add('apples', 2)
// add('pears', 3)
// add('watermelon', 2)
//
// console.log(cart)

/* 全局阻塞
// let result = await fetch(`https://jsonplaceholder.typicode.com/posts`)
// let data = await result.json()
// console.log(data)


const getLastPost = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    return {title:data.at(-1).title,text:data.at(-1).body}
}

const lastPost = getLastPost();
console.log(lastPost)

// 不够干净
lastPost.then(last => console.log(last))

const lastPost2 = await getLastPost();
console.log(lastPost2)
*/

/* 模块模式
const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({product,quantity})
        console.log(`${quantity} ${product} added to cart`);
    }

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`)
    }

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})();

ShoppingCart2.addToCart('apples', 2)
ShoppingCart2.addToCart('pears', 3)
ShoppingCart2.addToCart('watermelon', 2)
console.log(ShoppingCart2)
*/

/* CommonJS
// 导出
export.addToCart = function (product, quantity) {
    cart.push({product,quantity})
    console.log(`${quantity} ${product} added to cart`);
}

// 导入
const {addTocart} = require('./shoppingCart.js');
*/
