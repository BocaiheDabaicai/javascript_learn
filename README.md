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