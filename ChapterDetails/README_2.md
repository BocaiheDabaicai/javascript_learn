## 第2章 调试与环境配置

实现环境:`Visual Studio`

实现功能:

1. 代码自动格式化

使用`prettier`插件实现

2. 设置自定义代码块

在`file`中找到`Preferences`里的`Configure User Snippets`，设置自定义名字后，设置自定义代码块，示例如下:

```js
{
  // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
  // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
  // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
  // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
  // Placeholders with the same ids are connected.
  // Example:
  "Print to console": {
    "scope": "javascript,typescript",//语言范围
    "prefix": "cl",//触发字母
    "body": ["console.log();"],//获取的内容
    "description": "Log output to console"//显示描述
  }
}
```

`node.js`:是开放的、跨平台的、运行时`JavaScript`环境

`npm`:是安装包的下载工具

> 配置编程环境:
> 
> 1. 有`live-server`的实时环境
> 
> 2. 规范的编码格式，可以使用`prettier`
> 
> ---
> 
> - 写代码的过程需要坚持
> 
> ---
> 
> 问题分析和问题排查:
> 
> 1. 使用搜索引擎去寻找问题的答案，或者解决方案
> 
> 2. 实现功能之前做一个预先的分析
> 
> 3. 亲信`MDN`,`Edge`,`Google`,`StackOverFlow`
> 
> 4. 从原型对象上了解方法和属性也是一个不错的方向

调式

使用`shift+ctrl+i`调出开发者模式，在`source`找到执行的`javascript`脚本

1. 点击行设置断点

2. 右侧栏进行调试，调试内容有执行函数、下一步、暂停、停止

> tips:
> 
> - Edge的开发者工具进行调试

代码内容:

```js
// 控制台打印方式
console.log();    // 字段打印
console.warn();    // 警告打印
console.error();    // 错误打印
console.table();    // 表格打印
```

### 代码挑战一 天气打印

```js
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]



// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
 */

const temperatures = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

function printForecast(arr){
  let stringArr = "...";
  for(let i = 0;i<arr.length;i++){
    stringArr +=`${arr[i]}ºC in ${i+1} days...`;
  }
  console.log(stringArr);
}

printForecast(temperatures);
printForecast(temperatures2);
```
