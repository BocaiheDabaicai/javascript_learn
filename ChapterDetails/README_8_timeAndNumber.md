## 第8章 数字与时间

#### 1. 数字对象(Number)

| 方法         | 方法内容                            | 补充  |
| ---------- | ------------------------------- | --- |
| parseInt   | 一般接收两个参数，`内容，进制`，用于将内容转化为对应进制   |     |
| parseFloat | 一般接收一个参数，`内容`，用于将内容转化为对应数字，保留小数 |     |
| isNaN      | 判断一个内容是否**不是数字**                |     |
| isFinite   | 判断一个内容是否**是有限的**                |     |

#### 2. 数学对象(Math)

| 方法      | 方法内容                                  | 补充  |
| ------- | ------------------------------------- | --- |
| sqrt    | 实现数学中的开根号                             |     |
| max     | 从一众数字中选出最大值，示例`Math.max(2,3,4,6) //6` |     |
| min     | 从一众数字中选出最小值                           |     |
| PI      | 代表数字里的`Π`符号（圆周率）                      |     |
| random  | 初始会提供0-1之间的所有数字，通过乘法扩展范围              |     |
| trunc   | 将数字的小数部分去除                            |     |
| round   | 对数字进行四舍五入                             |     |
| ceil    | 对数字进行向上取整                             |     |
| floor   | 对数字进行向下取整                             |     |
| toFixed | 保留数字的小数位，示例`(2.7).toFixed(2) // 2.70` |     |

#### 3. 数字表达

| 符号名 | 符号     | 内容                                                  |
| --- | ------ | --------------------------------------------------- |
| 下划线 | __     | 使用在数字之间，不影响表达结果，例如：`22_33`，使用在数字对象中，表达结果是NaN        |
| 大整型 | bigInt | 使用方法：`3486576934238978n`，`BigInt(3486576934238978)` |

#### 4. 日期对象

创建方式：`new Date()`

对象方法：

1. getFullYear()，获取对象年份

2. getMonth()，获取对象月份

3. getDate()，获取对象日期

4. getDay()，获取对象当日为一周中的第几天

5. getHours()，获取对象小时

6. getMinutes()，获取对象分钟

7. getSeconds()，获取对象分秒

8. toISOString()，返回一个ISO格式的时间

9. getTime()，获取当前时间对象的时间戳表达，从1970年1月1日开始计算

10. Date.now()，获取当前时间的时间戳表达

11. setFullYear()，设置当前日期对象的年份

#### 5. 国际化

国际化日期（Intl.DateTimeFormat）

内容：通过确定地区，将日期对象格式化为当地日期的表达形式

代码如下

```js
const now = new Date();
let dDate = new Intl.DateTimeFormat('en-US').format(now); 
```

国际化数字（Intl.NumberFormat）

示例如下

```js
const num = 2736672.773;
console.log('US:     ',new Intl.NumberFormat('en-US').format(num));
console.log('Germany:',new Intl.NumberFormat('de-DE').format(num));
```

#### 6. 延时函数

| 方法名  | 方法表达式                            | 内容                  |
| ---- | -------------------------------- | ------------------- |
| 延时触发 | setTimeOut(function,time,[...])  | 到指定时间后，触发函数，并结束延时函数 |
| 连续触发 | setInterval(function,time,[...]) | 到指定时间后，触发函数         |
| 清除延时 | clearTimerOut()                  | 参数内添加延时对象           |
| 清除连续 | clearInterval()                  | 参数内添加连续对象           |