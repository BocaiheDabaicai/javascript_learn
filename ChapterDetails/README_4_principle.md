## 第4章 JS背后的原理

#### 特性介绍

1. 高级编程语言

2. 垃圾回收机制

3. 解释型、即时编译

4. 多范式

> 当前流行的三种多范式:
> 
> - 程序化
> 
> - 面向对象
> 
> - 函数式编程

5. 原型对象、属性与方法继承

6. 函数对象

7. 动态性，动态分配数据类型

8. 非阻塞事件循环

#### 具体内容

**1. JavaScript引擎**

运行javaScript的机制，由栈和堆组成

栈是执行代码的位置

堆是非结构化的内存池，存储对象

执行过程：

    前置内容

- 编译型执行过程：源代码编译为可执行文件，再执行该文件

- 解释型执行过程：源代码边翻译边执行

- 即时编译型执行过程：源代码边翻译边执行，保存多次执行的代码编译结果，以及对变量类型进行合理推测，降低代码平均执行时间，底层原理为**概率**

    执行内容

- 解析，生成AST树，将js代码结构化

- 编译，使用AST树，编译为机器语言

- 执行，运行机器语言，调用堆栈进行执行

- 优化`Optimization`，优化机器语言，使js能够更快执行

    执行图:

> ## 总结
> 
> JavaScript 运行速度的提升离不开 JIT compiler 的贡献，通过对**多次执行的代码的编译结果的存储，以及对变量类型的合理推测**，尽管存在运行时间加长的可能，但还是整体降低了 JavaScript 代码的平均执行时间。
> 
> 这对我们写 JavaScript 有什么帮助呢，其实帮助不大，只是说提醒我们保持一个很好的习惯就是不要随意修改一个变量的类型。
> 
> **真正震撼到我的点，不是了解了 JIT 是怎么工作的，而是 JIT 的原理竟然是 “概率”**
> 
> 从架构层面来讲，其实我们做任何性能优化，都要先问下目标是是平均值，还是极值。我相信大多数时候需要优化的指标都是平均值，那平均值比极值多出来一个维度那就是概率分布。对 100% 场景下的 1 秒优化可能远远比对 80% 场景下的 3s 优化还要难的多，但是收益却是后者高。
> 
> 从代码层面来说，我们大多数时候写代码结果都是 100% 确定的，如果有一定概率产生不一样的结果，那叫 bug。但如果你加快了 90% 情况下的执行速度，同时出了 10% 概率的 "bug"，并且 catch 了 这 10% 的错误做了额外的处理，最后的整体表现说不定会更好。
> 
> 这种思维方式的引入说不定会碰出不一样的火花
> 
> *借鉴于乃乎 from zhihu*

    **JS运行时**

主要包括四个部分，JS引擎、WEB APIs、回调队列、事件循环（`event loop`）

- js引擎负责存储对象、执行代码

- WEB APIs负责为js引擎提供DOM对象、Timer对象等等的内置方法，不属于js的内容

- 回调队列负责存储所有准备执行的回调函数，例如监听事件下点击触发的函数

- 事件循环负责把回调队列里的函数放入js引擎的栈中进行执行

    实例图如下:

> Node.js 与 浏览器运行时js的区别
> 
>     Node.js不存在Web APIs，它拥有c++ bindings 与 线程池

    **2. 深入执行过程**

- 创建变量对象（Variable Object）：JavaScript引擎会创建一个变量对象，用于存储当前执行上下文中的变量、函数声明和形参等信息。

- 建立作用域链（Scope Chain）：JavaScript引擎会建立一个作用域链，用于解析变量和函数的作用域。

- 确定this指向：JavaScript引擎会确定当前执行上下文中的this指向。

- 执行代码：JavaScript引擎会执行当前执行上下文中的代码，包括变量赋值、函数调用、条件语句、循环语句等。

- 返回执行结果：JavaScript引擎会返回执行结果，如果是函数调用，则将返回值存储在调用栈中，等待下一次执行。

> javascript 只有一个执行线程
> 
> - 生成唯一的一个全局上下文对象
> 
> - 按顺序逐一实现局部上下文对象

从代码中获取全局对象，并存入栈中，若存在对象的为返回值，则需要进入函数进行执行，最终将值赋给该对象。

其中需要执行的函数就压入栈中并进行执行

执行的函数如果出现嵌套，那么就层层压入栈中

示例图：

#### 2.作用域与作用域链

作用域分为：全局作用域、函数作用域、块作用域(ES6)

块作用域指`for`、`if`等包括的作用域

**作用域访问原则：内部作用域可以访问外部作用域**

`var`变量声明不适用于块作用域，`let,const`适用

注意点：

1. 避免在不同作用域下声明同名变量

2. 避免在块作用域下声明函数

3. 编码逻辑规划有序，避免杂乱不堪

4. 开启严格模式

避免出现下列示例：

#### 3.变量提升

说明：使变量在未声明之前进行引用，并得到正确的效果

| Name       | 变量提升 | 未声明值      | 范围                 |
| ---------- | ---- | --------- | ------------------ |
| 函数声明       | 可实现  | 整个函数      | 块作用域(strice mode)  |
| var        | 可实现  | undefined | 函数作用域              |
| let，const  | 不可实现 | 产生错误      | 块作用域               |
| 函数表达式，箭头函数 | -    | -         | 由var 或 let,const决定 |

补充：

1. 函数形式

```js
// 函数声明
function add1(){

}
// 函数表达式
const add2 = function(){

}
// 箭头函数
const add3 = () => {

}
```

2. var变量

在被定义之后，在浏览器中，会被保存在`window`对象中

#### 4.this关键字

内容：在当前作用域下，对自己的引用。

示例：

```js
// 函数
function calcAge(birthYear){
    console.log(this);    // undefined
}
const calcAge1 = function(birthYear){
    console.log(this);    // undefined
}
const calcAge2 = (birthYear) => {
    console.log(this);    // window对象
}

// 对象
const Bobby = {
    year:1991,
    calcAge:function(){
        console.log(this);    // Bobby对象
    }
}
```

#### 5.常规函数与箭头函数

- 箭头函数的`this`指向`window`对象
- 在对象中，嵌套的常规函数，只有**第一层的函数**能够拿到对象的引用

示例代码:

```js
const object3 = {
    name: "Bob",
    getChar1:function(){
        console.log(`getChar1: `,this);

        function getChar2(){
            console.log(`getChar2: `,this);

            function getChar3(){
                console.log(`getChar3: `,this);
            }
            getChar3();
        }
        getChar2();
    }
}
object3.getChar1();

// getChar1:  {name: 'Bob', getName: ƒ, getChar1: ƒ}
// getChar2:  undefined
// getChar3:  undefined
```

- `arguments`关键字，获取到传入函数的所有参数

常规函数可以使用，而箭头函数无法使用

#### 6.原始类型与引用类型

回顾：

原始类型有`string`,`number`,`boolean`,`undefined`,`null`,`symbol`,`bigint`

引用类型有`function`,`array`,`object`等等

- 原始类型

数据会存放在栈中

变量名指向物理地址

物理地址保存数值

**多个变量名同时指向一个地址时，若当前变量名修改值，会生成一个新的存储地址**

- 引用类型

数据会存放在堆中，数据引用存放在栈中

变量名指向栈中的物理地址

栈中的物理地址保存堆引用

**多个变量名共享同一个堆栈**

说明图如下：

#### 7.实践

代码如下:

```js
// practice
// 实现原始类型拷贝
let lastName = `Williams`;
let oldLastName = lastName;
oldLastName = `Davis`;

console.log(lastName, oldLastName);

// 实现引用类型拷贝引用
const personList = {
    firstName:`Bob`,
    lastName:`Tom`,
    age:23
}

const personList2 = personList;
personList2.firstName = `Jerry`;
console.log(`personList`,personList);// {firstName: 'Jerry', lastName: 'Tom', age: 23}
console.log(`personList2`,personList2);// {firstName: 'Jerry', lastName: 'Tom', age: 23}

// 实现引用类型深拷贝第一层数据
const personList3 = Object.assign({},personList2);  // Object.assign 方法仅适用于第一层深拷贝
personList3.firstName = `mayor`;
console.log(`personList2`,personList2);// {firstName: 'Jerry', lastName: 'Tom', age: 23}
console.log(`personList3`,personList3);// {firstName: 'mayor', lastName: 'Tom', age: 23}
```

---