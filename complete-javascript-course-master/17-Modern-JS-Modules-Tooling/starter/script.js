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


import add,{cart} from './shoppingCart.js';

add('apples', 2)
add('pears', 3)
add('watermelon', 2)

console.log(cart)