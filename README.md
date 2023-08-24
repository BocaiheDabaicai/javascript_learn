# JavaScript

- javascript学习 于 2023.05.09 开仓

---

## 第13章 现代JS发展

##### 13.1 概述

Npm：表示`node package manager`，用于管理、传输共享的JS资源库，是现代JS资源的管理方法，获取资源后，将资源存放在`modules`中，对旧浏览器不兼容。

解决不兼容问题：

- 采用JS打包工具进行压缩，使JS资源转换成ES5之前的表述方式，最终实现兼容旧浏览器

- 打包过程分为：捆绑、转义，转义通过`babel`实现

- 现代打包工具：`webpack,parcel`

Modules：表示存放npm资源的文件夹，方便开发人员进行资源调用与管理

开发应用程序的模块思维：

1. 暴露资源，使资源能够被其它文件使用

2. 隔离组件，每个工程师专门负责一类的组件开发

3. 抽象代码，在实际开发过程中，只需明确资源的意义，而不需要明确知晓资源的原理

关于模块

- 模块是同步导入的

- 可以实现捆绑和消除无用代码

- 通过`export`可以导出对象

#### 13.2 导入与导出

导出的类型分为：`命名导出`、`默认导出`

示例：

```js
// 命名导出
import {addToCart, totalPrice as price, quantity} from './shoppingCart.js';

// 命名导出综合对象，包括所有的命名导出对象
import * as ShoppingCart from "./shoppingCart.js";

// 默认导出
import add from './shoppingCart.js';

// 混合导出，一般不推荐使用
import add,{cart} from './shoppingCart.js';
```

#### 13.3 ES2022 顶级模块

当在入口文件`index.html`中声明的模块标签带有`type="module"`

```js
<script defer type="module" src="script.js"></script>
```

则生成了顶级模块，那么在其余任何`.js`模块中可以绕过`async`声明，直接使用`await`语法，如果某个文件需要进行异步请求，则整个应用将陷入等待

**不推荐使用，会导致全局代码阻塞**

#### 13.4 模块模式

通过使用IIFE、闭包，获取需要应用的作用域变量、函数

示例如下

```js
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
```

#### 13.5 模块模式

外部模块模式分为：`AMD`模块、`CommonJS`模块

`CommonJs`的导入与导出

```js
// 导出
export.addToCart = function (product, quantity) {
    cart.push({product,quantity})
    console.log(`${quantity} ${product} added to cart`);
}

// 导入
const {addTocart} = require('./shoppingCart.js');

```