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

#### 13.6 npm

指令:

- `npm init`，生成`packge.json`文件，初始化包管理工具

- `npm install/i 包名`，生成指定的依赖文件

- `npm install/i`，生成`packge.json`下的所有依赖文件

parcel:

安装`npm i parcel --save-dev`

它是一个模块捆绑器，用于捆绑当前使用的代码，将它们压缩成一个小体积

主要指令:

- `parcel index.html`，热捆绑模块

- `parcel build index.html`，打包模块

手动设置热更新，代码如下：

```js
if(module.hot){
    module.hot.accept()
}
```

开启热捆绑模式会识别该代码，在代码进行保存后，实时进行捆绑。

npm的脚本实现方式：

1. 使用`npx`指令，在命令窗口实现执行脚本，例如`npx parcel index.html`

2. 设置`npm`指令，具体如下

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
```

最后通过，`npm run 指令名称`执行对应的脚本

#### 13.7 编码建议

1. 易读的代码
   
   - 别人能理解
   
   - 1年内重看代码能理解
   
   - 避免小聪明、过度复杂的方法
   
   - 使用描述性名称、方法

2. 通用
   
   - 代码重构
   
   - 不污染全局命名空间
   
   - 不使用`var`
   
   - 使用加强型判断`===`

3. 函数
   
   - 一个函数做一件事
   
   - 通常返回数据
   
   - 提高易读性时，使用箭头函数

4. 面向对象编程
   
   - 使用ES6的`class`
   
   - 接入方法链
   
   - 不使用箭头函数

5. 避免嵌套的代码
   
   - 使用`return`
   
   - 三重运算符或逻辑判断 替代`if`
   
   - 使用多个`if`替代`if /else if`
   
   - 避免`for`循环
   
   - 避免异步API

6. 同步代码
   
   - 使用`async/await`履行承诺
   
   - 使用`Promise.all`履行承诺
   
   - 处理错误

#### 13.8 编码方式

| 名称  | 命令式范式                      | 声明式范式                |
| --- | -------------------------- | -------------------- |
| 说明  | 操作的每一步都需要向计算机进行说明，以达到最终的效果 | 描述最后的效果，着重关注目标，以达到效果 |
| 不同点 | 操作复杂、考虑内容多                 | 操作简单、考虑内容少、易读        |

声明式范式细分

| 名称  | 函数式编程                                                   | 面向对象编程 |
| --- | ------------------------------------------------------- | ------ |
| 说明  | 副作用：修改变量、控制台打印、书写DOM，纯函数：不依赖于外部变量，不变性：状态不能修改，可以复制、变化、返回 |        |
| 结论  | 难以把控，不必要完全执行，尽可能使用集成方法                                  |        |

示例代码：

```js
// 不依赖外部变量
const getLimit = (limits,user) => limits?.[user] ?? 0;

// 返回复制后的结果
const addExpense = function (state, limits, value, description, user = 'jonas') {

    const clearUser = user.toLowerCase();

    return value <= getLimit(limits,clearUser) ? [...state, {value: -value, description: description, user: clearUser}] : state
};

// 返回复制后的结果
const checkExpense =  (state,limits) => 
    state.map(entry => {
            return entry.value < -getLimit(limits,entry.user) ? 
            {...entry,flag:'limit'}:entry;
    })

// 边缘打印结果
const logBigExpenses = function (state,bigLimit) {

    const bigExpenses = state
        .filter(entry => entry.value <= -bigLimit)
        .reduce((string,entry) => `${string} / ${entry.description.slice(-2)}`,'')

    console.log(bigExpenses)
};
```