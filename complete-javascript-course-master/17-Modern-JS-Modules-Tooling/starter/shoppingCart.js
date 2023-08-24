// 导出模块

console.log('Exporting module')

// 阻塞模块
// console.log('Start fetching users')
// await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('Finish fetching users')


const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({product, quantity})
    console.log(`${quantity} ${product} added to cart`)
}

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as quantity,cart}


export default function (product, quantity) {
    cart.push({product, quantity})
    console.log(`${quantity} ${product} added to cart`)
}
