# JavaScript

- javascript学习 于 2023.05.09 开仓

---

## 第0章

**JavaScript**是面向对象的高级多范式编程语言

书写方式:

1. 驼峰表达式`firstName`

2. 下划线表达式`first_name`

> 1. 允许开头的内容:`$``_`
> 
> 2. 数字不能开头
> 
> 3. 见名知意

#### 数据类型:

| 类型名       | 类型说明                                                                        | 类型示例                       |
| --------- | --------------------------------------------------------------------------- | -------------------------- |
| Number    | 数字类型(整数、浮点数)                                                                | `let age = 23;`            |
| String    | 字符串类型(单引号、双引号表示均可)                                                          | `let firstName = "Jonas";` |
| Boolean   | 布尔类型(表示`true`或`false`)                                                      | `let fullAge = true;`      |
| Undefined | 未定义类型,表达变量未定义,类似`空值`                                                        | `let children;`            |
| Null      | 表示`空值`,类型应该也是`undefined`,但`bug`的存在，使得null的类型为`Object`,**与Undefined类型不完全相同** |                            |
| Symbol    | ES2015引入，表示一个唯一的值，且无法变更(基本无用)                                               |                            |
| BigInt    | ES2020引入，表示一个数字巨大的`Number`类型                                                |                            |

*特别地，`JavaScript`能够动态定义数据类型，且在实践中，能够随意改变变量的数据类型*

#### 声明类型:

| 声明名   | 声明说明                | 声明示例              |
| ----- | ------------------- | ----------------- |
| let   | ES6引入,变量值可以随意更改     | `let age = 21;`   |
| const | ES6引入,变量值不可更改       | `const age = 20;` |
| var   | ES5的声明方式,遗弃状态，不推荐使用 | `var age = 19;`   |
| 不声明   | 拒绝如此                | `age = 18;`       |

#### 运算符:

- 算术类型:`+ - * / += -= ** ++ --`

- 比较类型:`> < >= <=`

#### 挑战一.BMI

```js
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
// 数据一
// let MarksWeight = 78;
// let MarksHeight = 1.69;
//
// let JohnWeight = 92;
// let JohnHeight = 1.95;
// 数据二
let MarksWeight = 95;
let MarksHeight = 1.88;

let JohnWeight = 85;
let JohnHeight = 1.76;

let MarksBMI = MarksWeight / (MarksHeight ** 2);
let JohnBMI = JohnWeight / (JohnHeight ** 2);

let markHigherBM = MarksBMI > JohnBMI;

console.log("MarksWeight: "+MarksWeight+"kg, MarksHeight: "+MarksHeight+"m");
console.log("MarksBMI: "+MarksBMI);
console.log("JohnWeight: "+JohnWeight+"kg, JohnHeight: "+JohnHeight+"m");
console.log("JohnBMI: "+JohnBMI);
console.log("markHigherBMI: "+markHigherBM);
```

#### 模板符号

内容:来自于ES6,更方便的字符串生成方式

符号:`反引号`

优点:

1. 更方便地接入变量

2. 更友好地接入换行

示例:

```js
const wholeInfo = "I'm "+firstName+", a "+(nowYear - birthYear)+" years old "+job;
console.log(wholeInfo);
const newWholeInfo = `I'm ${firstName}, a ${nowYear - birthYear} years old ${job}`;
console.log(newWholeInfo);
```

#### 控制结构(IF,else,else if)

内容:`if(表达式){}`

说明:代码块的内容无法相互访问，同时也不能够提供给外部进行使用
